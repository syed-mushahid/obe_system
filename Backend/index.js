const express = require("express");
const { db } = require("./database");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const registrationRoutes = require("./routes/registrationRoutes");
app.use("/auth/", registrationRoutes);

const courseRoutes = require("./routes/courseRoutes");
app.use("/course/", courseRoutes);

const teacherRoutes = require("./routes/teacherRoutes");
app.use("/teacher/", teacherRoutes);

const assessmentRoutes = require("./routes/assessmentRoutes");
app.use("/", assessmentRoutes);

const examRoutes = require("./routes/examRoutes");
app.use("/", examRoutes);

const studentsRoutes = require("./routes/studentsRoutes");
app.use("/", studentsRoutes);
const attendanceRoutes = require("./routes/attendanceRoutes");
app.use("/", attendanceRoutes);
const cloRoutes = require("./routes/cloRoutes");
app.use("/", cloRoutes);

app.get("/questions", (req, res) => {
  try {
    const query = "SELECT * FROM feedback";
    db.query(query, (error, result) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch the questions" });
      } else {
        // const questions = result.map((row) => row.question);
        res.json(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch the questions" });
  }
});
app.post("/feedback", (req, res) => {
  const answers = req.body;
  console.log(answers);

  const query = "UPDATE feedback SET feedback = ? WHERE feedback_id = ?";

  if (Array.isArray(answers)) {
    answers.forEach((answer) => {
      try {
        db.query(query, [answer.answer, answer.feedback_id]);
      } catch (error) {
        console.error("Error updating feedback:", error);
      }
    });
  } else {
    console.error("Invalid format: answers must be an array");
  }

  return res
    .status(200)
    .json({ success: true, message: "feedback inserted successfully" });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
