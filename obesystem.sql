-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 09:45 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `obesystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `assessment`
--

CREATE TABLE `assessment` (
  `id` int(12) NOT NULL,
  `name` varchar(200) NOT NULL,
  `courseId` int(12) NOT NULL,
  `marks` float DEFAULT NULL,
  `weightage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(12) NOT NULL,
  `studentId` int(12) NOT NULL,
  `courseId` int(12) NOT NULL,
  `status` varchar(200) NOT NULL,
  `date` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `clo`
--

CREATE TABLE `clo` (
  `id` int(200) NOT NULL,
  `clo` varchar(2000) DEFAULT NULL,
  `courseId` int(200) DEFAULT NULL,
  `ploId` int(11) DEFAULT NULL,
  `cloKpi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clo`
--

INSERT INTO `clo` (`id`, `clo`, `courseId`, `ploId`, `cloKpi`) VALUES
(1, 'Identify appropriate software process models for real-world problems.', 2, 1, 50),
(2, 'Elaborate user stories using usecase and activity diagrams.', 2, 2, 60),
(3, 'Design the elaborated user stories using simple design techniques', 1, 1, 60),
(4, 'Create test cases for the elaborated user stories.', 1, 1, 50),
(5, 'Learn Integration ', 5, 1, 50),
(6, 'Elaborate user stories using usecase and activity diagrams.', 3, 2, 60),
(7, 'Create test cases for the elaborated user stories.', 4, 1, 50);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `id` int(12) NOT NULL,
  `name` varchar(200) NOT NULL,
  `creditHour` int(12) NOT NULL,
  `teacherId` int(12) DEFAULT NULL,
  `mainCourse` int(12) DEFAULT NULL,
  `courseType` varchar(200) NOT NULL,
  `courseCode` varchar(200) DEFAULT NULL,
  `department` varchar(200) DEFAULT NULL,
  `weightage` float DEFAULT NULL,
  `haveLab` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `creditHour`, `teacherId`, `mainCourse`, `courseType`, `courseCode`, `department`, `weightage`, `haveLab`) VALUES
(1, 'OOP', 3, 1, 0, 'Theory', 'CS200', 'Software Engineering', 100, 1),
(2, 'OOP', 1, 1, 1, 'Lab', 'CS200 ', 'Computer Science', 50, 0),
(3, 'Intro to computing', 2, NULL, 0, 'Theory', 'C100', 'Computer Science', 0, 1),
(4, 'Intro to computing', 1, NULL, 3, 'Lab', 'C100', 'Computer Science', 50, 0),
(5, 'Linear Algebra', 3, NULL, 0, 'Theory', 'MT2021', 'Mathematics ', 100, 0);

-- --------------------------------------------------------

--
-- Table structure for table `coursefeedback`
--

CREATE TABLE `coursefeedback` (
  `id` int(200) NOT NULL,
  `courseId` int(200) DEFAULT NULL,
  `questionId` int(200) DEFAULT NULL,
  `answer` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coursefeedback`
--

INSERT INTO `coursefeedback` (`id`, `courseId`, `questionId`, `answer`) VALUES
(85, 2, 1, 'Strongly Agree'),
(86, 2, 2, 'Strongly Agree'),
(87, 2, 3, 'Agree'),
(88, 2, 4, 'Agree'),
(89, 2, 5, 'Agree'),
(90, 2, 6, 'good'),
(91, 2, 7, 'Strongly Agree'),
(134, 1, 1, 'Strongly Agree'),
(135, 1, 2, 'Agree'),
(136, 1, 3, 'Agree'),
(137, 1, 4, 'Agree'),
(138, 1, 5, 'Disagree'),
(139, 1, 6, 'Disagree'),
(140, 1, 7, 'Disagree');

-- --------------------------------------------------------

--
-- Table structure for table `courseplan`
--

CREATE TABLE `courseplan` (
  `id` int(12) NOT NULL,
  `courseId` int(12) NOT NULL,
  `weekNo` varchar(200) NOT NULL,
  `fromDate` varchar(200) NOT NULL,
  `toDate` varchar(200) NOT NULL,
  `topicCovered` varchar(200) NOT NULL,
  `activities` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `id` int(12) NOT NULL,
  `examName` varchar(200) DEFAULT NULL,
  `courseId` int(12) NOT NULL,
  `assessmentId` int(12) NOT NULL,
  `totalMarks` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `examquestion`
--

CREATE TABLE `examquestion` (
  `id` int(11) NOT NULL,
  `questionNumber` int(12) DEFAULT NULL,
  `examId` int(11) NOT NULL,
  `cloId` int(11) DEFAULT NULL,
  `marks` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `extraattendance`
--

CREATE TABLE `extraattendance` (
  `id` int(200) NOT NULL,
  `courseId` int(200) DEFAULT NULL,
  `percentage` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedback_id` int(25) NOT NULL,
  `question` varchar(300) NOT NULL,
  `feedback` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedback_id`, `question`, `feedback`) VALUES
(1, 'Course objectives were clear', 'Strongly Disagree'),
(2, 'The course workload was manageable', 'Strongly Disagree'),
(3, 'The Course was well organized (e.g. timely access to materials, notification of changes, etc.)', 'Strongly Disagree'),
(4, 'I Participated actively in the Course', 'Strongly Disagree'),
(5, 'I think I have made progress in this Course', 'Strongly Disagree'),
(6, 'I think the Course was well structured to achieve the learning outcomes (there was a good balance of lectures, tutorials, practical etc.)', 'Strongly Disagree'),
(7, 'The learning and teaching methods encouraged participation', 'Strongly Disagree');

-- --------------------------------------------------------

--
-- Table structure for table `gradding`
--

CREATE TABLE `gradding` (
  `id` int(12) NOT NULL,
  `roll_no` int(12) DEFAULT NULL,
  `courseId` int(11) DEFAULT NULL,
  `examId` int(11) DEFAULT NULL,
  `questionId` int(12) DEFAULT NULL,
  `partId` int(12) DEFAULT NULL,
  `cloId` int(12) DEFAULT NULL,
  `obtainedMarks` float DEFAULT NULL,
  `totalMarks` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `plo`
--

CREATE TABLE `plo` (
  `id` int(11) NOT NULL,
  `plo` varchar(200) DEFAULT NULL,
  `ploKpi` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plo`
--

INSERT INTO `plo` (`id`, `plo`, `ploKpi`) VALUES
(1, 'title of plo', 50),
(2, 'title of plo', 60);

-- --------------------------------------------------------

--
-- Table structure for table `questionpart`
--

CREATE TABLE `questionpart` (
  `id` int(12) NOT NULL,
  `examQuestionId` int(12) DEFAULT NULL,
  `partNumber` int(11) DEFAULT NULL,
  `cloId` int(12) DEFAULT NULL,
  `marks` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` int(12) NOT NULL,
  `roll_no` varchar(200) DEFAULT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `course_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(12) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `type` int(11) NOT NULL,
  `department` varchar(200) DEFAULT NULL,
  `campus` varchar(200) DEFAULT NULL,
  `image` longtext DEFAULT NULL,
  `position` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`, `department`, `campus`, `image`, `position`) VALUES
(1, 'Luqman ', 'luqman@gmail.com', '1234', 0, 'Software Engineering', 'Islamabad', 'data:image/png;base64,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', 'Professor'),
(2, 'Talha', 'talha@gmail.com', '1234', 1, NULL, NULL, NULL, NULL),
(3, 'Usama', 'usama@gmail.com', '1234', 2, NULL, NULL, NULL, NULL),
(4, 'Shahbaz', 'shahbaz@gmail.com', '1234', 2, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assessment`
--
ALTER TABLE `assessment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clo`
--
ALTER TABLE `clo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coursefeedback`
--
ALTER TABLE `coursefeedback`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courseplan`
--
ALTER TABLE `courseplan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `examquestion`
--
ALTER TABLE `examquestion`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `extraattendance`
--
ALTER TABLE `extraattendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gradding`
--
ALTER TABLE `gradding`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plo`
--
ALTER TABLE `plo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questionpart`
--
ALTER TABLE `questionpart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assessment`
--
ALTER TABLE `assessment`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `coursefeedback`
--
ALTER TABLE `coursefeedback`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `courseplan`
--
ALTER TABLE `courseplan`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT for table `examquestion`
--
ALTER TABLE `examquestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

--
-- AUTO_INCREMENT for table `extraattendance`
--
ALTER TABLE `extraattendance`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `gradding`
--
ALTER TABLE `gradding`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1825;

--
-- AUTO_INCREMENT for table `plo`
--
ALTER TABLE `plo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `questionpart`
--
ALTER TABLE `questionpart`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=275;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
