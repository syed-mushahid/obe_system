const { db } = require("../database");

exports.AddAssessment = async (req, res) => {
  const courseId = req.body.courseId;
  const name = req.body.name;
  const marks = req.body.marks;
  const weightage = req.body.weightage;

  console.log(courseId);
  console.log(weightage);
  console.log(name);
  const checkWeightage = "SELECT * FROM course WHERE id = ?";
  db.query(checkWeightage, [courseId], (error, result) => {
    if (error) {
      console.error("Error executing query", error);
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.sqlMessage });
    }
    //course Total weightage + assessment added weightage
    if (result.length === 0) {
      return res.status(401).json({ error: "Course Not Found" });
    } else {
      const totalWeightage =
        parseFloat(result[0].weightage) + parseFloat(weightage);
      if (result[0].mainCourse != "0") {
        if (parseFloat(totalWeightage) <= 50) {
          //Update course Total Weightage
          const weightageSql = "UPDATE course SET weightage = ? WHERE id = ?";
          db.query(
            weightageSql,
            [totalWeightage, courseId],
            (error, results) => {
              if (error) {
                console.error("Error executing query", error);
                return res.status(500).json({
                  error: "Internal server error",
                  message: error.sqlMessage,
                });
              }
              if (results.affectedRows > 0) {
                const sql =
                  "INSERT INTO assessment (courseId, name, marks, weightage) VALUES (?, ?, ?, ?)";
                db.query(
                  sql,
                  [courseId, name, marks, weightage],
                  (error, results) => {
                    if (error) {
                      console.error("Error executing query", error);
                      return res.status(500).json({
                        error: "Internal server error",
                        message: error.sqlMessage,
                      });
                    }

                    if (results.affectedRows > 0) {
                      // No matching user found
                      return res
                        .status(200)
                        .json({ message: "Assessment Added Successfully" });
                    } else {
                      // User found, return success message or user data
                      return res
                        .status(401)
                        .json({ error: "Failed To Add Data" });
                    }
                  }
                );
              } else {
                return res.status(401).json({ error: "Failed To Add Data" });
              }
            }
          );
        } else {
          return res
            .status(401)
            .json({ error: "Weightage of Lab Cannot Be Greater Than 50" });
        }
      } else {
        console.log("TOtal", totalWeightage);
        if (parseFloat(totalWeightage) <= 100) {
          //Update course Total Weightage
          const weightageSql = "UPDATE course SET weightage = ? WHERE id = ?";
          db.query(
            weightageSql,
            [totalWeightage, courseId],
            (error, results) => {
              if (error) {
                console.error("Error executing query", error);
                return res.status(500).json({
                  error: "Internal server error",
                  message: error.sqlMessage,
                });
              }
              if (results.affectedRows > 0) {
                const sql =
                  "INSERT INTO assessment (courseId, name, marks, weightage) VALUES (?, ?, ?, ?)";
                db.query(
                  sql,
                  [courseId, name, marks, weightage],
                  (error, results) => {
                    if (error) {
                      console.error("Error executing query", error);
                      return res.status(500).json({
                        error: "Internal server error",
                        message: error.sqlMessage,
                      });
                    }

                    if (results.affectedRows > 0) {
                      // No matching user found
                      return res
                        .status(200)
                        .json({ message: "Assessment Added Successfully" });
                    } else {
                      // User found, return success message or user data
                      return res
                        .status(401)
                        .json({ error: "Failed To Add Data" });
                    }
                  }
                );
              } else {
                return res.status(401).json({ error: "Failed To Add Data" });
              }
            }
          );
        } else {
          return res
            .status(401)
            .json({ error: "Weightage of Theory Cannot Be Greater Than 100" });
        }
      }
    }
  });
};

exports.ShowAssessment = async (req, res) => {
  const courseId = req.body.id;
  console.log(req.body.id);
  const sql = "SELECT * FROM assessment WHERE courseId = ?";

  db.query(sql, [courseId], (error, results) => {
    if (error) {
      console.error("Error Executing Query", error);
      return res
        .status(500)
        .json({ error: "Internal Server Error", message: error.sqlMessage });
    }

    if (results.length > 0) {
      return res.status(200).json({ results });
    } else {
      return res.status(400).json({ error: "Assessment Not Found" });
    }
  });
};

exports.UpdateAssessment = async (req, res) => {
  const assessmentId = req.body.id;
  const name = req.body.name;
  const marks = req.body.marks;
  const weightage = req.body.weightage;

  // Fetch the current weightage from the assessment table
  const getPreviousWeightageSql = "SELECT * FROM assessment WHERE id = ?";
  db.query(getPreviousWeightageSql, [assessmentId], (error, results) => {
    if (error) {
      console.error("Error executing query", error);
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.sqlMessage });
    }

    if (results.length > 0) {
      const previousWeightage = results[0].weightage;
      const courseId = results[0].courseId;

      // Calculate the difference in weightage

      // Fetch the current weightage from the course table
      const getCourseWeightageSql = "SELECT * FROM course WHERE id = ?";
      db.query(getCourseWeightageSql, [courseId], (error, result) => {
        if (error) {
          console.error("Error executing query", error);
          return res.status(500).json({
            error: "Internal server error",
            message: error.sqlMessage,
          });
        }

        if (result.length > 0) {
          const currentCourseWeightage = result[0].weightage;
          const weightageDifference =
            currentCourseWeightage - previousWeightage;

          // Calculate the updated weightage in the course table
          const updatedCourseWeightage =
            parseFloat(weightage) + parseFloat(weightageDifference);

          if (results[0].mainCourse != "0") {
            if (updatedCourseWeightage <= 50) {
              // Update the weightage in the course table
              const updateCourseWeightageSql =
                "UPDATE course SET weightage = ? WHERE id = ?";
              db.query(
                updateCourseWeightageSql,
                [updatedCourseWeightage, courseId],
                (error, results) => {
                  if (error) {
                    console.error("Error executing query", error);
                    return res.status(500).json({
                      error: "Internal server error",
                      message: error.sqlMessage,
                    });
                  }
                  if (results.affectedRows > 0) {
                    // Update the name and marks in the assessment table
                    const updateAssessmentSql =
                      "UPDATE assessment SET name = ?, marks = ?, weightage = ? WHERE id = ?";
                    db.query(
                      updateAssessmentSql,
                      [name, marks, weightage, assessmentId],
                      (error, results) => {
                        if (error) {
                          console.error("Error executing query", error);
                          return res.status(500).json({
                            error: "Internal server error",
                            message: error.sqlMessage,
                          });
                        }

                        if (results.affectedRows > 0) {
                          // If the record is successfully updated
                          return res.json({
                            message: "Assessment successfully updated",
                          });
                        } else {
                          // If no records were updated (assessmentId not found)
                          return res.json({
                            message: "Failed to update assessment",
                          });
                        }
                      }
                    );
                  } else {
                    return res.json({ error: "Failed To Update" });
                  }
                }
              );
            } else {
              return res
                .status(400)
                .json({ error: "Weightage of Lab cannot be greater than 50" });
            }
          } else {
            if (updatedCourseWeightage <= 100) {
              // Update the weightage in the course table
              const updateCourseWeightageSql =
                "UPDATE course SET weightage = ? WHERE id = ?";
              db.query(
                updateCourseWeightageSql,
                [updatedCourseWeightage, courseId],
                (error, results) => {
                  if (error) {
                    console.error("Error executing query", error);
                    return res.status(500).json({
                      error: "Internal server error",
                      message: error.sqlMessage,
                    });
                  }
                  if (results.affectedRows > 0) {
                    // Update the name and marks in the assessment table
                    const updateAssessmentSql =
                      "UPDATE assessment SET name = ?, marks = ?, weightage = ? WHERE id = ?";
                    db.query(
                      updateAssessmentSql,
                      [name, marks, weightage, assessmentId],
                      (error, results) => {
                        if (error) {
                          console.error("Error executing query", error);
                          return res.status(500).json({
                            error: "Internal server error",
                            message: error.sqlMessage,
                          });
                        }

                        if (results.affectedRows > 0) {
                          // If the record is successfully updated
                          return res.status(200).json({
                            message: "Assessment successfully updated",
                          });
                        } else {
                          // If no records were updated (assessmentId not found)
                          return res
                            .status(400)
                            .json({ error: "Failed to update assessment" });
                        }
                      }
                    );
                  } else {
                    return res.status(400).json({ error: "Failed To Update" });
                  }
                }
              );
            } else {
              return res.status(400).json({
                error: "Weightage of Theory cannot be greater than 100",
              });
            }
          }
        } else {
          return res.status(400).json({ error: "Course Not Found" });
        }
      });
    } else {
      return res.status(400).json({ error: "Assessment Not Found" });
    }
  });
};

exports.DeleteAssessment = async (req, res) => {
  const assessmentId = req.body.id; // Assuming the assessment ID is passed as a route parameter

  // Fetch the weightage of the assessment to be deleted
  const getWeightageSql = "SELECT * FROM assessment WHERE id = ?";
  db.query(getWeightageSql, [assessmentId], (error, results) => {
    if (error) {
      console.error("Error Executing Query", error);
      return res
        .status(500)
        .json({ error: "Internal Server Error", message: error.sqlMessage });
    }

    if (results.length > 0) {
      const weightage = results[0].weightage;
      const courseId = results[0].courseId;

      // Fetch the current weightage from the course table
      const getCourseWeightageSql = "SELECT weightage FROM course WHERE id = ?";
      db.query(getCourseWeightageSql, [courseId], (error, result) => {
        if (error) {
          console.error("Error Executing Query", error);
          return res.status(500).json({
            error: "Internal Server Error",
            message: error.sqlMessage,
          });
        }

        if (result.length > 0) {
          const currentCourseWeightage = result[0].weightage;

          // Calculate the updated weightage in the course table
          const updatedCourseWeightage = currentCourseWeightage - weightage;

          // Update the weightage in the course table
          const updateCourseWeightageSql =
            "UPDATE course SET weightage = ? WHERE id = ?";
          db.query(
            updateCourseWeightageSql,
            [updatedCourseWeightage, courseId],
            (error, results) => {
              if (error) {
                console.error("Error Executing Query", error);
                return res.status(500).json({
                  error: "Internal Server Error",
                  message: error.sqlMessage,
                });
              }

              if (results.affectedRows > 0) {
                // Delete the assessment from the assessment table
                const deleteAssessmentSql =
                  "DELETE FROM assessment WHERE id = ?";
                db.query(
                  deleteAssessmentSql,
                  [assessmentId],
                  (error, results) => {
                    if (error) {
                      console.error("Error Executing Query", error);
                      return res.status(500).json({
                        error: "Internal Server Error",
                        message: error.sqlMessage,
                      });
                    }

                    if (results.affectedRows > 0) {
                      // If the assessment is successfully deleted
                      return res.json({
                        message: "Assessment Deleted Successfully",
                      });
                    } else {
                      // If no records were deleted (assessmentId not found)
                      return res.json({
                        message: "Failed to Delete Assessment",
                      });
                    }
                  }
                );
              } else {
                return res
                  .status(400)
                  .json({ error: "Failed to Update Course Weightage" });
              }
            }
          );
        } else {
          return res.status(400).json({ error: "Course Not Found" });
        }
      });
    } else {
      return res.status(400).json({ error: "Assessment Not Found" });
    }
  });
};

exports.showExam = async (req, res) => {
  const assessmentId = req.body.id;

  const sql = "SELECT * FROM exam WHERE assessmentId = ?";

  db.query(sql, [assessmentId], (error, examResults) => {
    if (error) {
      console.error("Error executing query", error);
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.sqlMessage });
    }
    if (examResults.length > 0) {
      return res.status(200).json({ examResults });
    } else {
      return res.status(400).json({ error: "No Exam Found" });
    }
  });
};

exports.showQuestion = async (req, res) => {
  const examId = req.body.id;

  const sql = "SELECT * FROM examquestion WHERE examId = ?";

  db.query(sql, [examId], (error, examResults) => {
    if (error) {
      console.error("Error executing query", error);
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.sqlMessage });
    }
    if (examResults.length > 0) {
      return res.status(200).json({ examResults });
    } else {
      return res.status(400).json({ error: "No Exam Found" });
    }
  });
};

exports.showPart = async (req, res) => {
  const questionId = req.body.id;

  const sql = "SELECT * FROM questionpart WHERE examQuestionId = ?";

  db.query(sql, [questionId], (error, partResults) => {
    if (error) {
      console.error("Error executing query", error);
      return res
        .status(500)
        .json({ error: "Internal server error", message: error.sqlMessage });
    }
    if (partResults.length > 0) {
      return res.status(200).json({ partResults });
    } else {
      return res.status(400).json({ error: "No Exam Found" });
    }
  });
};

// exports.addTemplate = async (req, res) => {
//   const questionId = req.body.questionId;
//   const partId = req.body.partId;
//   const studentId = req.body.studentId;

//   const sql =
//     "INSERT INTO gradding (studentId, questionId, partId) VALUES (?, ?, ?)";
//   db.query(sql, [studentId, questionId, partId], (error, tempResults) => {
//     if (error) {
//       console.error("Error executing query", error);
//       return res
//         .status(500)
//         .json({ error: "Internal server error", message: error.sqlMessage });
//     }
//     if (tempResults.length > 0) {
//       return res.status(200).json({ message: "Data Inserted" });
//     } else {
//       return res.status(400).json({ error: "No Exam Found" });
//     }
//   });
// };

//update Marks
exports.updateMarks = async (req, res) => {
  const questionId = req.body.questionId;
  const partId = req.body.partId;
  const studentId = req.body.studentId;
  const obtainedMarks = req.body.marks;

  //const sql = "INSERT INTO gradding (studentId, questionId, partId) VALUES (?, ?, ?)";
  const sql =
    "UPDATE gradding SET obtainedMarks = ? WHERE studentId = ? AND questionId = ? AND partId = ?";
  db.query(
    sql,
    [obtainedMarks, studentId, questionId, partId],
    (error, marksResults) => {
      if (error) {
        console.error("Error executing query", error);
        return res
          .status(500)
          .json({ error: "Internal server error", message: error.sqlMessage });
      }
      if (marksResults.length > 0) {
        return res.status(200).json({ message: "Data Inserted" });
      } else {
        return res.status(400).json({ error: "No Exam Found" });
      }
    }
  );
};

// exports.getScoreBasedonCourse = async (req, res) => {
//   const courseId = 2;

//   const assessmentArray = [];

//   const assessmentSql = "SELECT * FROM assessment WHERE courseId = ?";
//   db.query(assessmentSql, [courseId], (error, assessmentResults) => {
//     if (error) {
//       console.error("Error executing query", error);
//       return res
//         .status(500)
//         .json({ error: "Internal server error", message: error.sqlMessage });
//     }
//     assessmentResults.forEach((assessment) => {
//       const assessmentObject = {
//         id: assessment.id,
//         // Add other assessment properties here
//         exams: [],
//       };
//       assessmentArray.push(assessmentObject);
//     });

//     assessmentArray.forEach((assessment) => {
//       const examSql = "SELECT * FROM exam WHERE assessmentId = ?";
//       db.query(examSql, [assessment.id], (error, examResults) => {
//         if (error) {
//           console.error("Error executing query", error);
//           return res.status(500).json({
//             error: "Internal server error",
//             message: error.sqlMessage,
//           });
//         }
//         assessment.exams = examResults;

//         assessment.exams.forEach((exam) => {
//           const questionSql = "SELECT * FROM examquestion WHERE examId = ?";
//           db.query(questionSql, [exam.id], (error, questionResults) => {
//             if (error) {
//               console.error("Error executing query", error);
//               return res.status(500).json({
//                 error: "Internal server error",
//                 message: error.sqlMessage,
//               });
//             }
//             exam.examquestions = questionResults;

//             exam.examquestions.forEach((question) => {
//               const partSql =
//                 "SELECT * FROM questionpart WHERE examQuestionId = ?";
//               db.query(partSql, [question.id], (error, partResults) => {
//                 if (error) {
//                   console.error("Error executing query", error);
//                   return res.status(500).json({
//                     error: "Internal server error",
//                     message: error.sqlMessage,
//                   });
//                 }
//                 question.parts = partResults;

//                 // Return the final JSON object here or perform further operations as needed
//                 return res.status(200).json(assessmentArray);
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// };
