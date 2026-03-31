

// const express = require("express");
// const router = express.Router();

// const {
//   markAttendance,
//   getByLecture
// } = require("../controllers/attendanceController");

// router.post("/mark", markAttendance);
// router.get("/lecture/:lectureId", getByLecture);

// module.exports = router;





const express = require("express");
const router = express.Router();

const {
  markAttendance,
  getByLecture
} = require("../controllers/attendanceController");

router.post("/mark", markAttendance);
router.get("/lecture/:lectureId", getByLecture);

module.exports = router;


