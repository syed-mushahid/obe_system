import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function HodDashboard() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if user type is not 0
    if (user && user.type !== 0) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  if (!user) {
    return "Loading"; // or display a loading spinner or placeholder
  }
  return (
    <div>
      <h1 className="mb-4 d-flex justify-content-center">
        Select your preference
      </h1>
      <div className="d-flex justify-content-center">
        <div style={{ width: "50%" }}>
          <div>
            <Button
              fullWidth
              size="large"
              className="rounded mb-4"
              variant="contained"
              sx={{ bgcolor: " #346448" }}
              onClick={() => {
                navigate("/assignhodcources");
              }}
            >
              Assign Courses
            </Button>
          </div>

          <Link to="/allcourses">
            <div>
              <Button
                fullWidth
                size="large"
                className="rounded mb-4"
                variant="contained"
                sx={{ bgcolor: " #346448" }}
              >
                View/Edit Attendance
              </Button>
            </div>
          </Link>
          <Link to="/allcoursesscores">
            <div>
              <Button
                fullWidth
                size="large"
                className="rounded mb-4"
                variant="contained"
                sx={{ bgcolor: " #346448" }}
              >
                View/Edit Scoreboard
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
