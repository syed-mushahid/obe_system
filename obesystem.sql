-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2023 at 10:38 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

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

--
-- Dumping data for table `assessment`
--

INSERT INTO `assessment` (`id`, `name`, `courseId`, `marks`, `weightage`) VALUES
(17, 'Assignments', 1, NULL, 30),
(19, 'Midterm', 1, NULL, 20),
(20, 'Final Term', 1, NULL, 20),
(21, 'Quizzes', 1, NULL, 30),
(24, 'Quiz', 2, NULL, 30);

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

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `studentId`, `courseId`, `status`, `date`) VALUES
(94, 66, 1, 'A', '2023-05-30'),
(95, 67, 1, 'P', '2023-05-30'),
(96, 68, 1, 'P', '2023-05-30'),
(97, 66, 1, 'A', '2023-05-31'),
(98, 67, 1, 'A', '2023-05-31'),
(99, 68, 1, 'P', '2023-05-31'),
(100, 66, 1, 'P', '2023-06-01'),
(101, 67, 1, 'A', '2023-06-01'),
(102, 68, 1, 'P', '2023-06-01'),
(103, 66, 1, 'P', '2023-05-28'),
(104, 67, 1, 'P', '2023-05-28'),
(105, 68, 1, 'A', '2023-05-28'),
(106, 66, 1, 'P', '2023-05-19'),
(107, 67, 1, 'P', '2023-05-19'),
(108, 68, 1, 'P', '2023-05-19'),
(109, 66, 1, 'P', '2023-05-20'),
(110, 67, 1, 'P', '2023-05-20'),
(111, 68, 1, 'P', '2023-05-20'),
(112, 66, 1, 'P', '2023-05-10'),
(113, 67, 1, 'P', '2023-05-10'),
(114, 68, 1, 'P', '2023-05-10'),
(115, 13629, 1, 'P', '2023-06-14'),
(116, 13627, 1, 'P', '2023-06-14'),
(117, 12284, 1, 'P', '2023-06-14'),
(118, 13629, 1, 'A', '2023-06-16'),
(119, 13627, 1, 'P', '2023-06-16'),
(120, 12284, 1, 'A', '2023-06-16'),
(121, 2284, 1, 'P', '2023-06-16'),
(122, 13629, 1, 'P', '2023-05-30'),
(123, 13629, 1, 'P', '2023-05-31'),
(124, 13629, 1, 'P', '2023-06-01'),
(125, 13629, 1, 'P', '2023-05-28'),
(126, 13629, 1, 'P', '2023-05-19'),
(127, 13629, 1, 'A', '2023-05-20'),
(128, 13629, 1, 'A', '2023-05-10'),
(129, 12284, 1, 'Z', '2023-05-30'),
(130, 12284, 1, 'P', '2023-05-31'),
(131, 12284, 1, 'A', '2023-06-01'),
(132, 12284, 1, 'A', '2023-05-28'),
(133, 12284, 1, 'A', '2023-05-19'),
(134, 12284, 1, 'A', '2023-05-20'),
(135, 12284, 1, 'A', '2023-05-10'),
(136, 2324, 1, 'A', '2023-05-30'),
(137, 2324, 1, 'A', '2023-05-31'),
(138, 2324, 1, 'A', '2023-06-01'),
(139, 2324, 1, 'A', '2023-05-28'),
(140, 2324, 1, 'A', '2023-05-19'),
(141, 2324, 1, 'P', '2023-05-20'),
(142, 2324, 1, 'A', '2023-05-10'),
(143, 2324, 1, 'A', '2023-06-14'),
(144, 2324, 1, 'A', '2023-06-16'),
(145, 13627, 1, 'P', '2023-05-30'),
(146, 13627, 1, 'P', '2023-05-31'),
(147, 13627, 1, 'P', '2023-06-01'),
(148, 13627, 1, 'A', '2023-05-28'),
(149, 13627, 1, 'A', '2023-05-19'),
(150, 13627, 1, 'P', '2023-05-20'),
(151, 13627, 1, 'P', '2023-05-10');

-- --------------------------------------------------------

--
-- Table structure for table `clo`
--

CREATE TABLE `clo` (
  `id` int(200) NOT NULL,
  `clo` varchar(2000) DEFAULT NULL,
  `courseId` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clo`
--

INSERT INTO `clo` (`id`, `clo`, `courseId`) VALUES
(1, 'Identify appropriate software process models for real-world problems.', 2),
(2, 'Elaborate user stories using usecase and activity diagrams.', 2),
(3, 'Design the elaborated user stories using simple design techniques', 1),
(4, 'Create test cases for the elaborated user stories.', 1);

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
  `weightage` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`id`, `name`, `creditHour`, `teacherId`, `mainCourse`, `courseType`, `courseCode`, `department`, `weightage`) VALUES
(1, 'OOP', 3, 1, 0, 'Theory', 'SE2323', 'Software Engineering', 100),
(2, 'DSA', 3, 1, 1, 'Lab', 'CS323', 'Computer Science', 30);

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

--
-- Dumping data for table `courseplan`
--

INSERT INTO `courseplan` (`id`, `courseId`, `weekNo`, `fromDate`, `toDate`, `topicCovered`, `activities`) VALUES
(11, 1, '12', '2023-06-08', '2023-06-18', '1', '4');

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

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`id`, `examName`, `courseId`, `assessmentId`, `totalMarks`) VALUES
(104, 'Assignments ', 1, 17, 10),
(105, 'Assignments 2', 1, 17, 20),
(106, 'Midterm ', 1, 19, 10);

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

--
-- Dumping data for table `examquestion`
--

INSERT INTO `examquestion` (`id`, `questionNumber`, `examId`, `cloId`, `marks`) VALUES
(199, 1, 104, 1, 5),
(200, 2, 104, 3, 5),
(201, 1, 105, 3, 10),
(202, 2, 105, 3, 10),
(203, 1, 106, 4, 10);

-- --------------------------------------------------------

--
-- Table structure for table `extraattendance`
--

CREATE TABLE `extraattendance` (
  `id` int(200) NOT NULL,
  `courseId` int(200) DEFAULT NULL,
  `percentage` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `extraattendance`
--

INSERT INTO `extraattendance` (`id`, `courseId`, `percentage`) VALUES
(38, 1, 10);

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

--
-- Dumping data for table `gradding`
--

INSERT INTO `gradding` (`id`, `roll_no`, `courseId`, `examId`, `questionId`, `partId`, `cloId`, `obtainedMarks`, `totalMarks`) VALUES
(1534, 1234, 1, 105, 202, NULL, 3, 4, '10'),
(1535, 3343, 1, 105, 202, NULL, 3, 3, '10'),
(1536, 1234, 1, 105, 201, 251, 3, 4, '5'),
(1537, 1234, 1, 105, 201, 252, 3, 5, '5'),
(1538, 3343, 1, 105, 201, 251, 3, 3, '5'),
(1539, 3343, 1, 105, 201, 252, 3, 3, '5'),
(1540, 1234, 1, 106, 203, 253, 4, 5, '5'),
(1541, 1234, 1, 106, 203, 254, 4, 2, '5'),
(1542, 3343, 1, 106, 203, 253, 4, 3, '5'),
(1543, 3343, 1, 106, 203, 254, 4, 4, '5');

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

--
-- Dumping data for table `questionpart`
--

INSERT INTO `questionpart` (`id`, `examQuestionId`, `partNumber`, `cloId`, `marks`) VALUES
(198, 161, 1, 0, 10),
(199, 163, 1, 1, 5),
(200, 163, 2, 2, 5),
(201, 164, 1, 0, 12),
(202, 165, 1, 0, 40),
(203, 167, 1, 3, 5),
(204, 167, 2, 4, 5),
(205, 168, 1, 2, 5),
(206, 168, 2, 0, 5),
(207, 170, 1, 0, 5),
(208, 171, 1, 0, 2),
(209, 174, 1, 0, 5),
(210, 174, 2, 0, 5),
(211, 175, 1, 3, 20),
(212, 175, 2, 4, 20),
(213, 176, 1, 1, 5),
(214, 176, 2, 1, 5),
(215, 177, 1, 0, 30),
(216, 179, 1, 1, 4),
(217, 180, 1, 3, 4),
(218, 180, 2, 4, 5),
(219, 181, 1, 3, 3),
(220, 181, 2, 3, 2),
(221, 181, 3, 3, 3),
(222, 183, 1, 0, 5),
(223, 184, 1, 1, 0),
(224, 184, 2, 1, 2),
(225, 184, 3, 1, 3),
(226, 185, 1, 0, 4),
(227, 185, 2, 0, 1),
(228, 186, 1, 1, 0),
(229, 186, 2, 1, 3),
(230, 186, 3, 1, 2),
(231, 186, 4, 1, 5),
(232, 187, 1, 1, 10),
(233, 187, 2, 1, 10),
(234, 187, 3, 1, 5),
(235, 187, 4, 1, 5),
(236, 188, 1, 3, 20),
(237, 188, 2, 4, 20),
(238, 190, 1, 2, 5),
(239, 192, 1, 1, 3),
(240, 192, 2, 1, 2),
(241, 193, 1, 3, 2),
(242, 193, 2, 2, 3),
(243, 196, 1, 1, 5),
(244, 197, 1, 3, 2),
(245, 197, 2, 3, 3),
(246, 197, 3, 4, 5),
(247, 198, 1, 3, 5),
(248, 198, 2, 4, 3),
(249, 198, 3, 2, 7),
(250, 199, 1, 1, 5),
(251, 201, 1, 3, 5),
(252, 201, 2, 3, 5),
(253, 203, 1, 4, 5),
(254, 203, 2, 4, 5);

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

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `roll_no`, `name`, `email`, `course_id`) VALUES
(178, '1234', 'Syed Mushahid', '', 1),
(179, '3343', 'Talha', '', 1);

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
(1, 'Luqman ', 'luqman@gmail.com', '1234', 0, 'Software Engineering', 'Islamabad', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAFmtJREFUeF7tnW2MXNV5x//PndkXm9Xec2dXdkKdyM4XMEREUWIDTSH0LY0gxTSNMFKIaFEEyQfzmqSkxjQF3NAQQ8AfElBEiyASRCnFtNA0fUtCU4yNFQUF7HGw10lcUlu7e89dGSlhd+5TnTsz613v7M6dmfs69xnFYrNz7jnP8zvnv+fc8/IcgnxiIXDWmrPWluZKGwj0bgKtg4+zQVjL4HFiqhCRzeBzwhROoCoze0w8TaBJME7AwpsMPs7gX9TKtYm3Tr51IkxekqYzAtRZckl9JoGRkZE11qD1fmK6gIjOh4+NIGxOhRRjHywcZObXmPhV/23/x6dOnTqZii19UqgIpMOKHB0b3WTVrA8R0UUMvhDA+g6zSDr5MQK9zMwv+SX/f2amZvYnbUCeyxOBtKm9sbGxjbVa7Q9A+H0AW/Jc2QtsfxaM/yyVSv82NTV1qE98isUNEUgLrEqpywB8jIkvJ9DGWMhnJFMGHySmFwD8k9b6BxkxKzNmiEAaVeE4ziVM/AkwPg5gXWZqKFlDjoPwDDF9x3XdF5MtOpulFVogtm1vIKJPwsI2MNZks4pSsopwEj52M/O3PM+bSMmK1IstpECUUleCcH2e3ykYQIKVtweMx7TWz6XeYhM2IEHGCXu2tLghpdRniOizYdcfUrc4YwY01mO+obX+OoDfZMy8WMzpe4GYBbvybHkbgbbHQrCgmTJ459zA3O5+X6DsW4GMj4+/c25u7nYQbi9oG07Gbcaucrn8wOTk5JvJFJhsKX0nEMdxbB/+HQS6I1mUxS6NwfcR099qrXU/kegrgdiO/XkC/SUA1U+VlCNfPDP08lzv/hzZvKKpfSEQu2JfDcaX+n1RLy+Nziw+gvDX3rT3dF5sXs7OXAukUqmc77O/M8/TtXlvQG3s32ORtX16evq1vPqZW4EopXaAcHdewRfKbsZdWut78uhz7gTS2BLyABgfzCPwwtpMeIWYbsvbFpZcCURV1N1g7ChsI+sHxwn36Gl9V15cyYVAHMe5gJm/CcKmvIDt1s6Et5B0a2ZvzzH2E9GnXdd9tbeM4n868wKxHfsGAj0SPwopIWkCDL7Rc71Hky63k/IyLRDHcR5h8A2dOCRp80WAQI+6rntjVq3OpEDMKb45f+4xAl2UVXBiV3QEGLy3bJX/PIunGzMnEKXUFhAeB2BHVwWSUw4IeGBcp7XekyVbMyUQpdQtIDyYJUBiS8IEGLdqrb+WcKnLFpcZgSilvio7b7PSLFK2g7FLa/25lK0Iis+EQJSjngBwbRaAiA2ZIfCkdvWn0rYmXYGsx7Dt2f9AoMvTBiHlZ48Ag1/wXM8E0Ujt9GJqAhkdHa1YJet7AD6QvaoRizJE4IBf8z8yMzMznYZNqQjEHIMdmB14XsSRRpXnsswDswOzV6RxvDdxgYg4TjdQBoOy8RqYB9WkIpJEBSLDqjy0w0zbmPhwK0mBDClH/UiGVZlugIkZ18OmzAPa1r+DY/h1EsYmJhDbsZ+X2aokqrT/y2jMbl2RhKeJCKTf1jmIgcGhIRARmLn+z/fnf/Z9v1F3BPOe0fKTCPkkmlBqZSSyThJ7NfXDCnnJKqFcKsMiC6tXrUbZKnfdKpYVTGPZdl5wTeEZgZn/Lfj/S9IsTBvasrpwz5Svybv5RdPW5u/m/xs82Hx+mT8Aoe3oIWECK+6xCiTPe6uMGFYNrUKpVAoEUS6X+2zGaalAToujIY1Amw2Bmp/mRVEXyFKxtxbdShLwud7zLvoj0Mi7+YegboIPv1lm0EEz2LTemPduxSaQxq7cZ3v4+5D8owwMDQ5hdGQUFqzky5cSuyPg46rqsWosu4BjEcjY2Ni5Nb+2N+tb1k0v0ewZVg+vwmB5MCvb07prKMV9yvNr/sU/+/nPDkaNIBaB2I79UlYPO5mFOdNLDA4MokSlQCBGKPLJNwEm3nv4yOGLo/YicoFk9ZjsQGkAo2eNBu8UsnoddTPKRn7M/OjhicORHt+NVCBZCbBgpl+NICzLCnqK4cFhEUU22nDsVhDRjYeOHIosEERkAglC84B/EjuBZQowvcJAeQDDQ8PBkMn8LEOntGoj5XIZ76tOVCMJKRSZQJRS+9KIW2VEYIZOpqdYaejUw9aGlGtbiu+CwP7q0ermLp5b8kgkAkkq4qERgHmpNgt3A6UyhodWSS8RRSvoxzwY91Qnqj1HcOxZIEGsXPAP42RsFurMCnYwLVuqC0Q+QqAdAWa+9PDE4Z6us+5ZIKqi9scRSJqYMLJ6BKuGV8kLdruWEMP3fTIkfaV6tNpTuNqeBBLlFQSmZyiXSrCohNXDq6WXiKHRFzJLwl3VI9Wur17oWiCNy2t+2gt0s1C3atWqYK9Tc0NgL/nJs0KgFYGSVXrv62+83tUlPl0LRDnK7LPa0mmVmBdtswlw5KyRYIOaLNp1SjC76TM7LGPsqU5Ur+qGXFcCsSv2VmJ6KkyBZrHOrEkEvUVjd2waomi5K5U5WEw0C4tp2BSGn6SJiICFrdU3qt/uNLfuBOLYr7e7MNO8XA+Vh+ozT2dsFV/xTMQCD5rbnYMt0X59u7X52RxIav5sfm8+bE4xtfkEG7SbW7Yb/zXiWLigaICY96DgnchMKZutKXQakwipHeWMfk84WD1SPa9T6zoWSOOq5a+0Ksg0KDMdaxqRabhBQ/YZNb8W/At+19z/H4yv6hv62zftTt2KJ73xy2yDN34ODg5iYGAAJcsy6pwvUHqjeNhHkivhC9Uj1Y6uqO5IIEopBcKxrG9jjwRmh5kEPQsDpXKpfsjKnEC06hsjm50bWRQM6UyPFQztJORPh5R7Tq5nMbv+6NGjXticOhKI7dhfJtAdYTOXdIsJNIdzlkUgWiyQ5iJosBBaNtPdp7fgi5Cia0kEuu/Q0UNfDJtjaIGMj4+fPVeb+9+wGfdzuqRna8ywzuxOHhgcwKCZ8CiZnQT1qpsXD8mMYNg2Z9Wssw/+/OCvwqQPLZB+CL4QBkhe0jTlYYZ1VsmaH9aZxdbg03gvqg/nzNCuJMO6RuUy8a7DRw6Hul4hlEAa4UL/Ly+NR+w8TSCYWGgM6cx7z8Jep77507wvDcyfrCzKcO5tfvsdExMTJ9q1lVACsR37XgJtb5eZfN8/BMzEwkC5PlNnzuqbmbuFn6aQFk6B14MIhWpS6YMi7Kweqd7ZzpAw3piQoYmEeWxnrHyfDQJGPKY3KgX758rBEC+Y3g7m64OXoWDrUJCmMZOXDcsXW1GzasNvvPHGinePtBVInmNbZbFSimBTMLVt3nvMTN0ZuxQsorqwynVxpSygW6pHqw+tVCdtBeI4ziEGn1OEihUf0yVgeqByeSAY1pntSebfwnei+Xm7BTsberS4Wj1aPbdrgSilrgQhloBcPTomjxeMgBGPWTtqbgFavIeOg++aC7DNxdhQ70SMLdWJ6nPL4VyxB+l2x27B6k7czQCBYFhnhnMLhnYL9zA1hRUM7awFYWTb7PRdViC2bW8gi45mwHcxQQjER6AeGPw9nudNtCpkWYEope4EoeuTWPF5JDkLgYgJMHZore/tTCAVdQKMNRGbItkJgewRIJzU03ptaIEkEakke5TEoiITINClrusuiYDScoilKuohMG4qMjDxvWAECA/raX3zmV63FoijfglgXcEQibvFJnBcu/pdbQWilPowCN8vNivxvpAEGL+rtV7U9pf0ILKtvZBNQ5w2BFrcebhEIHaIgAxCM00CWd0xm1W7wtcVgw96rrcosMMigTSuTov8GqvwJkpKIZAugZJVOm9qampeA4sEopTaBsLD6ZoopQuBFAkwbtJa725asFggjvpHAF1FoEvRJSlaCERJYI929bwGzhRIXkJURQlE8hICiwhoV8/rYv6H0bHRTZZv7RNWQqDoBHzL3zwzNbPfcJgXiFLqZhC+VnQ44r8QAONWrXWghXmBOI7zFIO3Ch4hUHQCBHradd1rFvcgjjL74dcXHY74LwQAHNOu3jAvkJGRkTXlgXLbGEGCTggUhcDc7NzaU6dOnQyGWKOV0T+y2PpuUZwXP7NPwFxTsTjmVrI2++R/dGZ65l8DgbS60sBcSlCUKHvJopfS8kCAwV/wXO/+QCCqov4ejOvyYLjYKAQSIUB4XE/rP6sLRKmXQdicSMFSiBDIAwHGPq31hXWBOEpW0PNQaWJjogTMijpJ5PZEmUthOSIwOzD7DhqtjF5ksfVSjuwWU4VAIgR88i8mu2JfTUxPJ1KiFCIEckSAibeSqqjbzFHDHNktpgqBZAgQbic5g54MayklhwQYu0g56gkA1+bQfDFZCMRN4EmyHftfCPTRuEuS/JMikP/gCUmRalcOg79rhliySNiOlHxfTAKMfSQ3SBWz7sXr9gQIVDXvILKK3p5VrlPIoKv76hOBdM9OniwAARFIASpZXOyegAike3Y9PSnDnp7wJfawCCQx1FJQHgmIQPJYa2JzYgSWCCTts8CJeS4FCYG2BBjSg7SFJAmKTEAEUuTaF9/bEhCBtEUkCVoTKMY8nGw1kfYvBJYhUN9qIpsVpYEIgeU6yX2y3V0ahxBYhkB9u7scmJIGIgSWI/CkHLmVxiEEliMQHLmVoA3SQIRAawImaIOE/ZHWIQSWeUc3YX8kcJw0DyHQmkAQOE5Cj7ZpHsVYDxONtCAQhB41v5djt9I+ikYgzN+9IHh1IBBZLCxa+xB/2xFYdP2BXKDTDpd8XzQCCy/QaXUFW9F4iL9CYCGBRVewySWe0jgyRyDMS0KMRi+6xFOugY6RtGSdSwKLroFuzGRNAFifS2/EaCEQLYFj2tUbTJbBLJb5OI7zFIO3RluO5CYE8keAQE+7rnvNIoEopW4B4cH8uSMWC4GICTBu0Vo/tEggo2Ojmyzf2hdxUZKdEMgdAd/yN89MzexfJJDGe4gEss5ddYrBURMwK+jNPOd/aAjkWQBboi5Q8hMCOSLwrHb1n7QWiFLbQHg4R84kbGrKk/MJe1vI4hg3aa13txTI2NjYxppfe72QYMRpIQCgZJU2Tk1NHWopEPNL27FfJ9BGoSUEikaAwQc91ztvod+L3kGC9xClvgrC7UWDI/4KATB2aa0/104gl4HwX4JLCBSOAOMyrfUPVhRIYzbrlwDWFQ6QOFxkAse1q991JoAlQ6xAIBX1EBg3FZmW+F4wAoSH9bS+OZRAHMe5hME/LBgicbfABAh0qeu6L4YSSKMXOQHGmgIzi9h1WUOJGGh02RFO6mm9tlWGLYdYjdmsO0G4JzorJCchkFECjB1a63s7Eoht2xvIoqMZdUnMEgKREWCf3+N5njkPteSzbA8S9CKOkr1ZkVWDZJRRAnu0q69azraVBaLUlSDsicMxGZHHQVXy7JgAY4vW+rmuBGIechznEIPP6bhgeUAIZJyAuUHKdd1zVzJzxR6k8bJ+Mwhfy7ivYp4Q6JwA41at9Yptu61AAAwpR/2689LlCSGQbQLa1cMAftNTD2Ieth37XgJtz7a7Yp0QCE+AwTs917uz3RNhehBkPQI8M4PqYYblIwRCETCR2986+daJdolDtyrZBt8OpXyfGwIttrUvZ3togYyPj79zrjb3Zm4giKFCYBkC5VL5tyYnJ0O15dACabyLfJlAdwh5IZBXAgy+z3O9L4a1vyOBOI5jM/iYWWQPW4CkEwIZIuCBsV5rrcPa1JFAGr3I5wn0lbAFSDohkBUCzSsNOrGnY4E0RCKBHTqhLGlTJ9AqIEMYo7oTSMW+mpieDlOApBECWSDAxNd4017HbbYrgRiHZadvFqpdbAhJYMUduyvl0bVAKpXK+T77Pw1pYC6SxbHD2ACWgMfpVr9F1nunp6df68aKrgUS9CJK7QDh7m4KlmeEQCIEGHdprbs+GduTQAKRVNR+MD6YiLNSiBDohADhFT2tN3XyyJlpexaIREDpBb88GyeB5SKVdFJmzwJp9CJ3g7Gjk4IlrRCIlQDhHj2t7+q1jEgE0ngf2QdCT91Zr87I80IgIMDYr7XeHAWNyATiOM4FDP5JFEZJHkKgFwIEep/ruq/2kkfz2cgEYjK0HfsGAj0ShWGShxDohgCDb/Rc79Funm31TKQCMQU4jvMIg2+IykDJRwiEJUCgR13XvTFs+jDpIhdIoyd5iUAXhTFA0giBKAgweK/nehdHkdfCPGIRSOMqt5fMqCtqgyU/IdCCgFeyShctvDotKkqxCMQYp5TaAoKJzCgfIRAvAcZVWutYAhzGJpCGSG4B4cF46UjuhSYQIrZVL3xiFUhDJHLnYS81JM8uT6CD4AvdYoxdIIFIHPUEgGu7NVKeEwItCDypXf2puMkkIhDjhO3YzxPo8rgdkvz7nwCDX/Bc74okPE1MIFiPYeWp/wbwgSQckzL6lsAB7eoPtQsZGpX3yQkEwOjoaMUqWd8TkURVfYXL54Bf8z8yMzMznZTniQrEONUIY/p8P4uEwSAkjjapNpNWOQdmB2avCBMuNEoDU6nFIogkykqSvJCKOAz3VARiCpbhljT7kAQSH1YttCs1gTSMGLId+xmZ3QrZVAqWLJitsr0/xTGkdj9N2gIJqlzWSQrW8sO5m8g6RztTMiGQQCRKyYp7u9oqyvcJrJCHRZkZgTREInu3wtZcv6aLeW9Vp9gyJZCGSMwu4Mdlq3ynVZn79Cby+nVx7crtlk7mBGIcGRsbO3fOn/s7OXTVbbWe+VwcMSOjss3EWOC9Zat8/dTU1MHoco0mp0wKpOmaHN+NppKznEscx2Sj9DfTAjGOSiCIKKs7W3lFHWAhDu8yLxDjdBBSiPmbEncrjiaQQp6M/UT06ahC88TpQS4E0gSgKkoiOMbZGpLIO6KIh0mYasrIlUAavcklTPyABMw+3URysTmS8Aox3ea67otJNe4oysmdQOZ7E7l6IYr6TyaPHq8gSMbI1qXkViDGncYlPjsBbEkTopS9LIE9Flnbu728Jgtccy2QJkC7Ym8F468ItDELUItug7kwE4QvedPet/POoi8EMi8UxzZXVG+XVfjUmqVm8N94rnd/ahZEXHBfCcSwUUopJv4LAt0RMSvJbgUCDL7PgnWf67peP4HqO4E0K2d8fPzsubm520C4vZ8qLHO+MHaVy+Vdk5OTv8qcbREY1LcCabIxx3vLs+VtjaFXBMgkC0OAwTvnBuZ2J31GPGn6fS+QBUCHlFKfJaLPMPicsKBzscYQ1pke0xGoysxf11p/I6mwOz2a3PPjRRLIPCyl1JUgXC/Tw6Hbzx4wHtNaPxf6iT5JWEiBzM962fYGIvokLGwDY02f1Gk0bhBOwsduZv6W53kT0WSav1wKLZCF1RVcZ038CTA+DmBd/qoyEouPg/AMMX0nb1tCIvG+RSYikBZQlFIfBvDHTHx5vy8+mkU9YnoBwD9rrb8fV0PLa74ikDY1Z0431mq1PwTh9wBcldeKPsNu807xH6VS6d+zeIovS4xFIB3WxujY6CarZv02EV3M4AsBrG+XRcoHXo8R6GVm3uuX/B/NTM3sb2evfH+agAikx9YwMjKyxhq03k9MFxDR+fCxEYRILrHv2DTGPlg4yMyvMfGr/tv+j0+dOnWy43zkgXkCIpCYGoNZoCzNlTYQ6N0EWgcfZ4OwlsHjxFQhIjvsekxj/cFj4mkCTYJxAhbeZPBxBv+iVq5N9PuCXUzV1Dbb/wc5Eq+c69APpgAAAABJRU5ErkJggg==', 'Professor'),
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
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `courseplan`
--
ALTER TABLE `courseplan`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `examquestion`
--
ALTER TABLE `examquestion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=204;

--
-- AUTO_INCREMENT for table `extraattendance`
--
ALTER TABLE `extraattendance`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `gradding`
--
ALTER TABLE `gradding`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1544;

--
-- AUTO_INCREMENT for table `questionpart`
--
ALTER TABLE `questionpart`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=255;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=180;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
