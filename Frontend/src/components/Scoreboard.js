import React, { useEffect } from "react";
import { getMarkSheet, updateGrades, getCourseById } from "../apiCalls";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import GradingIcon from "@mui/icons-material/Grading";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PieChartIcon from "@mui/icons-material/PieChart";
import PreviewIcon from "@mui/icons-material/Preview";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";

import { toast } from "react-toastify";
import Menue from "./Menue";
export default function Scoreboard() {
  const [updatedMarks, setUpdatedMarks] = React.useState([]);
  const [course, setCourse] = React.useState([]);
  // const [totalGrandtotal, settotalGrandtotal] = React.useState([]);
  var totalGrandtotal = 0.0;
  const [changedMarks, setChangedMarks] = React.useState([]);
  const [obtainedMarks, setObtainedMarks] = React.useState({
    "Student Name": {
      studentRollno: "1122",
      "Loading Marks if Exist": {
        1: {
          1: {
            obtainedMarks: 0,
            gradingId: 0,
          },
          2: {
            obtainedMarks: 0,
            gradingId: 0,
          },
        },
      },
    },
  });
  const { id } = useParams();
  useEffect(() => {
    fetchMarks();
    fetchCourseData();
  }, [id]);

  const fetchCourseData = async () => {
    try {
      const res = await getCourseById({ id: id });
      if (res && res.data.length > 0) {
        setCourse(res.data[0]);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const fetchMarks = async () => {
    try {
      var res = await getMarkSheet({ id: id });
      console.log("success", res);
      if (res.data && Object.keys(res.data).length > 0) {
        setObtainedMarks(res.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleMarkChange = (event, studentName, assignment, question, part) => {
    console.log("Changes Part", part);
    console.log("Changes Part Toal", part.questionTotalMarks);
    console.log("Changes Part Obtained", event.target.value);

    const updatedMark = {
      studentName,
      assignment,
      question,
      part,
      mark: event.target.value,
    };
    if (event.target.value == "") {
      updatedMark.mark = 0;
      event.target.value = 0;
    }

    var totalMarks =
      obtainedMarks[studentName][assignment][question][part].questionTotalMarks;

    console.log("Changed Totaaal", totalMarks);
    if (parseFloat(totalMarks) < parseFloat(event.target.value)) {
      toast.error("Obtained marks cannot exceed total marks");
      return;
    }
    setObtainedMarks((prevMarks) => {
      const updatedMarks = { ...prevMarks };
      updatedMarks[studentName][assignment][question][part].obtainedMarks =
        event.target.value;
      return updatedMarks;
    });

    setUpdatedMarks((prevMarks) => [...prevMarks, updatedMark]);
    setChangedMarks((prevMarks) => {
      const updatedMarks = prevMarks.map((mark) => {
        if (
          mark.id ===
          obtainedMarks[studentName][assignment][question][part].gradingId
        ) {
          return {
            id: obtainedMarks[studentName][assignment][question][part]
              .gradingId,
            mark: event.target.value,
          };
        }
        return mark;
      });

      const existingMarkIndex = updatedMarks.findIndex(
        (mark) =>
          mark.id ===
          obtainedMarks[studentName][assignment][question][part].gradingId
      );
      if (existingMarkIndex === -1) {
        updatedMarks.push({
          id: obtainedMarks[studentName][assignment][question][part].gradingId,
          mark: event.target.value,
        });
      }

      return updatedMarks;
    });

    // // console.log(updatedMark);
    // console.log(
    //   "to change",
    //   changedMarks,
    //   obtainedMarks[studentName][assignment][question][part]
    // );
  };

  if (obtainedMarks.length === 0) {
    return <div>Loading...</div>;
  }

  const studentNames = Object.keys(obtainedMarks);

  const studentData = Object.keys(obtainedMarks).map((studentName) => {
    return {
      name: studentName,
      rollNo: obtainedMarks[studentName].studentRollno, // Assuming the student roll number is stored in the 'rollNo' property
    };
  });
  console.log("Names", studentNames);
  console.log("Data", studentData);
  const assignments = Object.keys(obtainedMarks[studentNames[0]]).filter(
    (key) => key !== "studentRollno"
  );
  const questions = Object.keys(obtainedMarks[studentNames[0]][assignments[0]]);

  const assessmentCounts = {};

  const firstStudentName = studentNames[0];

  assignments.forEach((assignment) => {
    const questions = Object.keys(obtainedMarks[firstStudentName][assignment]);
    const assessmentIds = {};

    questions.forEach((question) => {
      const parts = Object.keys(
        obtainedMarks[firstStudentName][assignment][question]
      );

      parts.forEach((part) => {
        const assessmentId =
          obtainedMarks[firstStudentName][assignment][question][part]
            .assessmentId;

        if (assessmentId) {
          if (!assessmentIds[assessmentId]) {
            assessmentIds[assessmentId] = true;
            if (!assessmentCounts[assessmentId]) {
              assessmentCounts[assessmentId] = 1;
            } else {
              assessmentCounts[assessmentId]++;
            }
          }
        }
      });
    });
  });

  const handleUpdateChanges = async () => {
    try {
      var res = await updateGrades({ marks: changedMarks });
      if (res) {
        toast.success("Marks Updated Successfully");
        console.log("Marks Updated", res);
      }
    } catch (error) {
      toast.error("Failed to update new marks.");
      console.log("Error", error);
    }
  };
  return (
    <div>
      <div className="m-5">
        <Card
          style={{
            padding: "30px 20px 20px 20px",
            marginTop: "30px",
            marginBottom: "30px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          <div
            className="d-flex justify-content-center"
            style={{ color: "#346448" }}
          >
            <Menue />
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
              <p className="scoreboardheading">Scoreboard</p>
              <button
                className="btn btn-success btn-sm "
                onClick={() => handleUpdateChanges()}
              >
                Save Changes
              </button>
            </div>
          </div>

          <div
            className="table-responsive py-0 px-0"
            // style={{ paddingTop: 20, textAlign: "center" }}
            style={{ height: "600px", overflow: "auto", textAlign: "center" }}
          >
            <table className="table table-bordered score4 text-center">
              <thead>
                <tr className="score">
                  <th rowSpan="3" colSpan="3">
                    Participants
                  </th>
                  {assignments.flatMap((assignment) => {
                    const assignmentData =
                      obtainedMarks[studentNames[0]][assignment];
                    const questionKeys = Object.keys(assignmentData);
                    let colSpan = 0;
                    questionKeys.forEach((question) => {
                      const questionData = assignmentData[question];
                      const partKeys = Object.keys(questionData);
                      colSpan += partKeys.length > 0 ? partKeys.length : 1;
                    });
                    return [<th colSpan={colSpan + 1}>{assignment}</th>];
                  })}
                  <th></th>
                </tr>
                <tr className="score1 ">
                  {assignments.flatMap((assignment) => {
                    const assignmentData =
                      obtainedMarks[studentNames[0]][assignment];
                    const questionKeys = Object.keys(assignmentData);

                    const columns = questionKeys.flatMap((question) => {
                      const questionData = assignmentData[question];

                      const partKeys = Object.keys(questionData);
                      const colSpan = partKeys.length > 0 ? partKeys.length : 1;
                      return <th colSpan={colSpan}>{"Q" + question}</th>;
                    });

                    return [
                      ...columns,
                      <>
                        <th></th>
                      </>,
                    ];
                  })}
                  <th></th>
                </tr>
                <tr className="score1">
                  {assignments.flatMap((assignment) => {
                    const assignmentData =
                      obtainedMarks[studentNames[0]][assignment];
                    const questionKeys = Object.keys(assignmentData);

                    var clo = 0;

                    const columns = questionKeys.flatMap((question) => {
                      const questionData = assignmentData[question];
                      const partKeys = Object.keys(questionData);
                      const partColumns = partKeys.map((part) => {
                        const partData = questionData[part];
                        clo = partData.clo;

                        return <th>{clo == 0 ? "No Clo" : "Clo " + clo}</th>;
                      });
                      return partColumns;
                    });
                    return [
                      ...columns,
                      <>
                        <th></th>
                      </>,
                    ];
                  })}
                  <th></th>
                </tr>
                <tr className="score2">
                  <th>Sr no.</th>
                  <th>Roll no.</th>
                  <th>Name</th>

                  {assignments.flatMap((assignment) => {
                    const assignmentData =
                      obtainedMarks[studentNames[0]][assignment];
                    const questionKeys = Object.keys(assignmentData);

                    var assignmentTotal = 0;
                    var assignmentWeightage = 0;
                    var assesmentId = 0;

                    const columns = questionKeys.flatMap((question) => {
                      const questionData = assignmentData[question];
                      const partKeys = Object.keys(questionData);
                      const partColumns = partKeys.map((part) => {
                        const partData = questionData[part];
                        const totalMarks = partData.questionTotalMarks;
                        console.log("Part Data", partData);
                        assignmentTotal = partData.totalMarks;
                        assignmentWeightage = partData.weightage;
                        assesmentId = partData.assessmentId;
                        return (
                          <th>
                            {part === "null"
                              ? " (" + totalMarks + ")"
                              : "P" + part + " (" + totalMarks + ")"}
                          </th>
                        );
                      });
                      return partColumns;
                    });
                    totalGrandtotal =
                      parseFloat(totalGrandtotal) +
                      parseFloat(assignmentWeightage) /
                        parseFloat(assessmentCounts["" + assesmentId]);
                    return [
                      ...columns,
                      <th>
                        Total (
                        {assignmentWeightage /
                          assessmentCounts["" + assesmentId]}
                        )
                      </th>,
                    ];
                  })}
                  <th>Grand Total ({totalGrandtotal})</th>
                </tr>
              </thead>
              <tbody>
                {studentNames.map((studentName, index) => {
                  var grandTotal = 0;
                  return (
                    <tr key={index} className="score2">
                      <td>{index + 1}</td>
                      <td>{studentData[index].rollNo}</td>
                      <td>{studentName}</td>
                      {assignments.flatMap((assignment) => {
                        var frequency = 0;
                        var sameassisment = 0;
                        var currentAssisment = 0;
                        const assignmentData =
                          obtainedMarks[studentName][assignment];
                        const questionKeys = Object.keys(assignmentData);
                        let columns = questionKeys.flatMap((question) => {
                          const questionData = assignmentData[question];
                          const partKeys = Object.keys(questionData);
                          return partKeys.map((part) => (
                            <td style={{ minWidth: "50px" }}>
                              {typeof obtainedMarks[studentName][assignment][
                                question
                              ][part.obtainedMarks] === "object" ? (
                                "-"
                              ) : (
                                <input
                                  type="number"
                                  value={
                                    obtainedMarks[studentName][assignment][
                                      question
                                    ][part].obtainedMarks
                                  }
                                  onChange={(event) => {
                                    const inputValue = event.target.value;
                                    const validInput = /^\d*$/.test(inputValue)
                                      ? inputValue
                                      : "0";
                                    handleMarkChange(
                                      {
                                        ...event,
                                        target: {
                                          ...event.target,
                                          value: validInput,
                                        },
                                      },
                                      studentName,
                                      assignment,
                                      question,
                                      part
                                    );
                                  }}
                                  min={0}
                                  onKeyDown={(event) => {
                                    const key = event.key;
                                    if (
                                      key === "-" || // Prevent entering negative numbers
                                      key === "." || // Prevent entering decimal numbers
                                      (key === "e" &&
                                        event.target.value.includes("e")) // Prevent entering exponential notation
                                    ) {
                                      event.preventDefault();
                                    }
                                  }}
                                />
                              )}
                            </td>
                          ));
                        });
                        var weightage = 0;
                        var examTotalMarks = 0;
                        var assesmentId = 0;
                        const totalMarks = questionKeys.reduce(
                          (total, question) => {
                            const questionData = assignmentData[question];
                            const partKeys = Object.keys(questionData);

                            partKeys.forEach((part, index) => {
                              if (index == 0) {
                                weightage =
                                  obtainedMarks[studentName][assignment][
                                    question
                                  ][part].weightage;
                                assesmentId =
                                  obtainedMarks[studentName][assignment][
                                    question
                                  ][part].assessmentId;
                                examTotalMarks =
                                  obtainedMarks[studentName][assignment][
                                    question
                                  ][part].totalMarks;
                              }

                              total =
                                parseFloat(total) +
                                parseFloat(
                                  obtainedMarks[studentName][assignment][
                                    question
                                  ][part].obtainedMarks
                                );
                            });
                            return total;

                            // return Object.keys(obtainedMarks[studentName][assignment]).length;
                          },
                          0
                        );
                        grandTotal =
                          grandTotal +
                          (totalMarks / examTotalMarks) *
                            (weightage / assessmentCounts["" + assesmentId]);
                        columns.push(
                          <td
                            className="text-white"
                            style={{
                              minWidth: "50px",
                              backgroundColor: "#346448",
                            }}
                          >
                            {(totalMarks / examTotalMarks) *
                              (
                                weightage / assessmentCounts["" + assesmentId]
                              ).toFixed(1)}
                          </td>
                        );
                        return columns;
                      })}
                      <td>{grandTotal.toFixed(1)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
