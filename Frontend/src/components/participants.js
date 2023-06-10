import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentsByCourse } from "../apiCalls";
import Menue from "./Menue";
export default function Participants() {
  const [students, setStudents] = useState();

  const { id } = useParams();
  useEffect(() => {
    fetchStudetns();
  }, [id]);

  const fetchStudetns = async () => {
    try {
      var res = await getStudentsByCourse({ id: id });
      if (res) {
        console.log("Res", res);
        setStudents(res.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="m-3">
      <Card
        style={{
          padding: "30px",
          marginTop: "30px",
          marginBottom: "30px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <Menue/>
        <div className="m-4">
          <h3
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "#346448",
            }}
          >
            Enrolled Students
          </h3>
        </div>

        <div className="table-repsonsive mt-4 ">
          <table
            className="table table-bordered"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>
                  <b>Student Name</b>
                </th>
                <th>
                  <b>Registeration No</b>
                </th>
              </tr>
            </thead>
            <tbody>
              {students?.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.rollNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
