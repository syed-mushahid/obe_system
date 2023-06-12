const { db } = require("../database");

exports.calculateClo = async (req, res) => {
  const cId = req.body.id;
  const query = `SELECT g.roll_no, COUNT(*) AS frequency, SUM(g.obtainedMarks) AS total_obtained_marks, SUM(g.totalMarks) AS total_marks, s.name, g.cloId
  FROM gradding AS g
  JOIN student AS s ON g.roll_no = s.roll_no AND g.courseId = s.course_id
  WHERE g.courseId = ?
  GROUP BY g.roll_no, g.cloId
  `;

  db.query(query, [cId], (error, results) => {
    if (error) {
      // Handle the error appropriately
      console.error(error);
      res.status(500).json({
        error: "An error occurred while fetching data from the database.",
      });
    } else {
      // Process the query results and calculate CLO achievements for each student
      const formattedResults = results.reduce((acc, row) => {
        const {
          roll_no,
          name,
          cloId,
          total_obtained_marks,
          total_marks,
          frequency,
        } = row;

        // Check if the student already exists
        const existingStudent = acc.find((item) => item.roll_no === roll_no);

        // Calculate the CLO achievement
        var cloAchievement = Math.round(
          (total_obtained_marks / total_marks) * 100
        );
        // cloAchievement = (cloAchievement / frequency) * 100;

        // Create a new CLO achievement object
        const cloAchievementObj = {
          achievement: cloAchievement,
          totalMarks: total_marks,
          obtainedMarks: total_obtained_marks,
        };

        if (existingStudent) {
          // Update the existing student's CLO achievements
          existingStudent.cloAchievements[`${cloId}`] = cloAchievementObj;
        } else {
          // Create a new student object with CLO achievements
          const newStudent = {
            roll_no,
            name,
            cloAchievements: {
              [`${cloId}`]: cloAchievementObj,
            },
          };

          acc.push(newStudent);
        }

        return acc;
      }, []);

      // Send the formatted results to the frontend
      res.status(200).json(formattedResults);
    }
  });
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
