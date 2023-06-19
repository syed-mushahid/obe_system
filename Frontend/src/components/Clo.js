import React, { useEffect, useState } from "react";
import { calculateClo } from "../apiCalls";
import { useParams } from "react-router-dom";
import { Card } from "@mui/material";
import { toast } from "react-toastify";
import Menue from "./Menue";

export default function Clo() {
  const { id } = useParams();
  const [cloData, setCloData] = useState([]);
  const [cloIds, setCloIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Calculate CLO achievement using the apiCalls function
        const calculatedCloData = await calculateClo({ id: id });

        // Set the calculated CLO data in the state
        setCloData(calculatedCloData.data);

        // Extract the CLO IDs from the data and set them in the state
        if (calculatedCloData.data.length > 0) {
          const extractedCloIds = Object.keys(
            calculatedCloData.data[0].cloAchievements
          ).filter((cloId) => cloId !== "0");
          setCloIds(extractedCloIds);
        }

        console.log(calculatedCloData);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch CLO data.");
      }
    };

    fetchData();
  }, [id]);

  return (
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
        <div
          className="table-responsive py-0 px-0"
          style={{ height: "600px", overflow: "auto", textAlign: "center" }}
        >
          <table className="table table-bordered score4 text-center">
            <thead>
              <tr className="score">
                <th rowSpan="3" colSpan="3">
                  Participants
                </th>
                {cloIds?.map((cloId) => (
                  <th style={{ top: "0px" }} key={cloId}>
                    Clo {cloId}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="score2">
                <th style={{ top: "0px", width: "50px" }} className="mt-0">
                  Sr no.
                </th>
                <th style={{ top: "0px", width: "150px" }} className="mt-0">
                  Roll no.
                </th>
                <th style={{ top: "0px", width: "320px" }} className="mt-0">
                  Name
                </th>
                {cloIds?.map((cloId) => (
                  <th style={{ top: "0px" }} key={cloId}>
                    {Number(cloData?.[0]?.cloAchievements[cloId]?.totalMarks).toFixed(2)}
                  </th>
                ))}
              </tr>
              {cloData?.map((student, index) => (
                <tr className="score2" key={student.roll_no}>
                  <td>{index + 1}</td>
                  <td>{student.roll_no}</td>
                  <td>{student.name}</td>
                  {cloIds.map((cloId) => (
                    <td
                      key={cloId}
                      className={"text-success"}
                    >
                      {student.cloAchievements[cloId] ? (
                        <>
                          {Number(student.cloAchievements[cloId].obtainedMarks).toFixed(2)}
                        </>
                      ) : (
                        "-"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
