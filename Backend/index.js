const express = require("express");
const { db } = require("./database");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

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

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
