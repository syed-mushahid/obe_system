const { db } = require("../database");

exports.calculateClo1 = async (req, res) => {
  const courseId = req.body.id;
  const cloObject = []; // Initialize the cloObject as an array

  const Query1 =
    "SELECT e.assessmentId, a.weightage AS weightage, SUM(e.totalMarks) AS totalMarks FROM exam e JOIN assessment a ON e.assessmentId = a.id WHERE e.courseId = ? GROUP BY e.assessmentId";
  db.query(Query1, [courseId], (error, Result1) => {
    console.log(Result1);
    if (error) {
      res.status(500).json({
        error: "An error occurred while fetching data from the database.",
      });
    }
    const Query2 =
      "SELECT g.*, a.id AS assessmentId, a.weightage AS weightage, COUNT(g.totalMarks) AS frequency, SUM(g.totalMarks) AS Total_Marks FROM gradding g JOIN exam e ON g.examId = e.id JOIN assessment a ON e.assessmentId = a.id WHERE g.courseId = 1 AND g.roll_no = 2284 GROUP BY a.id, g.cloId";
    db.query(Query2, [courseId], (error, Result2) => {
      if (error) {
        res.status(500).json({
          error: "An error occurred while fetching data from the database.",
        });
      }

      // Loop through each object in Result2
      Result2.forEach((obj2) => {
        // Find the corresponding object in cloObject based on roll_no and cloId
        const existingObj = cloObject.find(
          (item) => item.roll_no === obj2.roll_no && item.cloId === obj2.cloId
        );

        // If an existing object is found
        if (existingObj) {
          // Update cloTotal by adding obj2.Total_Marks to existing value
          existingObj.cloTotal += obj2.Total_Marks;
        } else {
          // Find the corresponding object in Result1 based on assessmentId
          const obj1 = Result1.find(
            (item) => item.assessmentId === obj2.assessmentId
          );

          // If a matching object is found in Result1
          if (obj1) {
            // Extract totalMarks and weightage from obj1
            const { totalMarks, weightage } = obj1;
            if (obj2.cloId > 0) {
              // Create a new object with required data and push it to cloObject
              const newObj = {
                assessmentId: obj2.assessmentId,
                totalMarks,
                weightage,
                cloTotal: obj2.Total_Marks,
                cloId: obj2.cloId,
                roll_no: obj2.roll_no,
              };
              cloObject.push(newObj);
            }
          }
        }
      });

      res.status(200).json({ Result1, Result2, cloObject });
    });
  });
};

const mysql = require("mysql2/promise");

exports.calculateClo = async (req, res) => {
  try {
    const cId = req.body.id;
    const query = `SELECT g.roll_no,a.id as assessmentId, COUNT(*) AS frequency, SUM(g.obtainedMarks) AS total_obtained_marks, SUM(g.totalMarks) AS total_marks, s.name, g.cloId
    FROM gradding AS g
    JOIN student AS s ON g.roll_no = s.roll_no AND g.courseId = s.course_id
    JOIN exam AS e ON e.id = g.examId
    JOIN assessment AS a ON a.id = e.assessmentId
    WHERE g.courseId = ?
    GROUP BY g.roll_no, g.cloId`;

    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "obesystem",
    });

    const [results] = await connection.execute(query, [cId]);

    // Process the query results and calculate CLO achievements for each student
    const formattedResults = results.reduce((acc, row) => {
      const {
        roll_no,
        name,
        cloId,
        total_obtained_marks,
        total_marks,
        assessmentId,
        frequency,
      } = row;

      // Calculate the CLO achievement
      const cloAchievement = Math.round(
        (total_obtained_marks / total_marks) * 100
      );

      // Check if the student already exists
      const existingStudent = acc.find((item) => item.roll_no === roll_no);

      if (existingStudent) {
        // Update the existing student's CLO achievements
        existingStudent.cloAchievements[`${cloId}`] = {
          achievement: cloAchievement,
          totalMarks: total_marks,
          obtainedMarks: total_obtained_marks,
          assessmentId: assessmentId,
          cloId: cloId,
          roll_no: roll_no,
        };
      } else {
        // Create a new student object with CLO achievements
        const newStudent = {
          roll_no,
          name,
          cloAchievements: {
            [`${cloId}`]: {
              achievement: cloAchievement,
              totalMarks: total_marks,
              obtainedMarks: total_obtained_marks,
              assessmentId: assessmentId,
              cloId: cloId,
              roll_no: roll_no,
            },
          },
        };

        acc.push(newStudent);
      }

      return acc;
    }, []);

    // Calculate the CLO attainment marks for each student
    const formattedResultsWithAttainment = await Promise.all(
      formattedResults.map(async (student) => {
        const { cloAchievements } = student;
        const attainmentMarks = {};

        const Query1 =
          "SELECT e.assessmentId, a.weightage AS weightage, SUM(e.totalMarks) AS totalMarks FROM exam e JOIN assessment a ON e.assessmentId = a.id WHERE e.courseId = ? GROUP BY e.assessmentId";
        const [Result1] = await connection.execute(Query1, [cId]);

        const Query2 =
          "SELECT g.*, a.id AS assessmentId, a.weightage AS weightage, COUNT(g.totalMarks) AS frequency, SUM(g.totalMarks) AS Total_Marks,SUM (g.obtainedMarks) AS obtainedMarks FROM gradding g JOIN exam e ON g.examId = e.id JOIN assessment a ON e.assessmentId = a.id WHERE g.courseId = ? AND g.roll_no = ? GROUP BY a.id, g.cloId";
        const [Result2] = await connection.execute(Query2, [
          cId,
          student.roll_no,
        ]);

        // Loop through each object in Result2
        Result2.forEach((obj2) => {
          // Find the corresponding cloAchievementObj in cloAchievements based on roll_no, assessmentId, and cloId
          const cloAchievementObj = Object.values(cloAchievements).find(
            (achievement) =>
              achievement.roll_no === student.roll_no &&
              achievement.assessmentId === obj2.assessmentId &&
              achievement.cloId === obj2.cloId
          );

          if (cloAchievementObj) {
            // Find the corresponding object in Result1 based on the assessmentId
            const obj1 = Result1.find(
              (item) => item.assessmentId === obj2.assessmentId
            );

            if (obj1) {
              // Calculate cloTotal based on the values from obj1 and obj2
              const cloTotal =
                (obj1.weightage / obj1.totalMarks) * obj2.Total_Marks;
              const cloObtained =
                (obj1.weightage / obj1.totalMarks) * obj2.obtainedMarks;

              // Update cloAchievementObj with the new values
              cloAchievementObj.totalMarks += cloTotal;
              cloAchievementObj.obtainedMarks = cloObtained;
            }
          }
        });

        return { ...student, attainmentMarks };
      })
    );

    // Close the database connection
    connection.end();

    // Send the formatted results with attainment marks to the frontend
    res.status(200).json(formattedResultsWithAttainment);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "An error occurred while fetching data from the database.",
    });
  }
};

exports.getCloByCourse = async (req, res) => {
  const courseId = req.body.id;
  console.log(courseId);
  const query = `
    SELECT *
    FROM clo
    WHERE courseId= ?
  `;

  db.query(query, [courseId], (error, results) => {
    if (error) {
      console.error("Error executing SQL query:", error);
      return res.status(500).json({ error: "Failed to fetch clos" });
    }

    const students = results.map((row) => {
      return {
        id: row.id,
        clo: row.clo,
      };
    });

    return res.json(students);
  });
};

// exports.calculateClo = async (req, res) => {
//   const courseId = req.body.id;
//   const data = []; // Array to store the data

//   const cloQuery = "SELECT * FROM clo WHERE courseId = ?";
//   const cloResults = await executeQuery(cloQuery, [courseId]);

//   if (cloResults.length > 0) {
//     for (let i = 0; i < cloResults.length; i++) {
//       const allStudentQuery = "SELECT * FROM student WHERE course_id = ?";
//       const allStudentResults = await executeQuery(allStudentQuery, [courseId]);

//       if (allStudentResults.length > 0) {
//         for (let j = 0; j < allStudentResults.length; j++) {
//           const graddingQuery =
//             "SELECT * FROM gradding WHERE courseId = ? AND cloId = ? AND roll_no = ?";
//           const graddingResults = await executeQuery(graddingQuery, [
//             courseId,
//             cloResults[i].id,
//             allStudentResults[j].roll_no,
//           ]);
//           if (graddingResults.length > 0) {
//             let obtainedMarks = 0.0;
//             let totalMarks = 0.0;
//             for (let k = 0; k < graddingResults.length; k++) {
//               obtainedMarks += parseFloat(graddingResults[k].obtainedMarks);
//               totalMarks += parseFloat(graddingResults[k].totalMarks);
//             }
//             const cloWeightage =
//               (obtainedMarks / totalMarks) * graddingResults.length;

//             // Store the data in an object and push it to the array
//             const result = {
//               rollNo: allStudentResults[j].roll_no,
//               cloId: cloResults[i].id,
//               weightage: cloWeightage,
//             };
//             data.push(result);
//           }
//         }
//       }
//     }
//   }

//   return res.status(200).json({ data: data }); // Return the data in the response
// };

// function executeQuery(query, params) {
//   return new Promise((resolve, reject) => {
//     db.query(query, params, (error, results) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// }
