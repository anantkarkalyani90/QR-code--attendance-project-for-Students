// // const Attendance = require("../models/Attendance");

// // // Mark attendance
// // exports.markAttendance = async (req, res) => {
// //   try {
// //     const { studentId, lectureId } = req.body;

// //     // Prevent duplicate
// //     const exists = await Attendance.findOne({ studentId, lectureId });

// //     if (exists) {
// //       return res.json({ message: "Already marked" });
// //     }

// //     const attendance = await Attendance.create({
// //       studentId,
// //       lectureId
// //     });

// //     res.json({ message: "Attendance marked", attendance });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }

// //    exports.getByLecture = async (req, res) => {
// //   try {
// //     const data = await Attendance.find({
// //       lectureId: req.params.lectureId
// //     });

// //     res.json(data);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // };

// // const markAttendance = async (req, res) => {
// //   try {
// //     const { studentId, studentName, lectureId } = req.body;

// //     const exists = await Attendance.findOne({ studentId, lectureId });

// //     if (exists) {
// //       return res.json({ message: "Already marked" });
// //     }

// // };


// //     const attendance = await Attendance.create({
// //       studentId,
// //       studentName,   // ✅ added
// //       lectureId
// //     });

// //     res.json({ message: "Attendance marked", attendance });
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }

// //   exports.getByLecture = async (req, res) => {
// //   try {
// //     const data = await Attendance.find({
// //       lectureId: req.params.lectureId
// //     });

// //     res.json(data);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }

 

// // };

// // };

// const Attendance = require("../models/Attendance");

// // ✅ MARK ATTENDANCE
// const markAttendance = async (req, res) => {
//   try {
//     const { studentId, studentName, lectureId,mode } = req.body;

//     const exists = await Attendance.findOne({ studentId, lectureId });

//     if (exists) {
//       return res.json({ message: "Already marked" });
//     }

//     const attendance = await Attendance.create({
//       studentId,
//       studentName,
//       lectureId,
//       mode   // ✅ NEW
//     });

//     res.json({ message: "Attendance marked", attendance });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✅ GET BY LECTURE (WITH POPULATE)
// const getByLecture = async (req, res) => {
//   try {
//     const data = await Attendance.find({
//       lectureId: req.params.lectureId
//     }).populate("lectureId"); // 🔥 important

//     res.json(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // ✅ EXPORT (ONLY ONCE, AT END)
// module.exports = {
//   markAttendance,
//   getByLecture
// };


// const Attendance = require("../models/Attendance");

// const markAttendance = async (req, res) => {
//   try {
//     const { studentId, studentName, lectureId, mode } = req.body;

//     // ✅ Check required fields
//     if (!studentId || !studentName || !lectureId) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     // ✅ Check duplicate
//     const exists = await Attendance.findOne({ studentId, lectureId });
//     if (exists) {
//       return res.json({ message: "Already marked" });
//     }

//     // ✅ Create attendance
//     const attendance = await Attendance.create({
//       studentId,
//       studentName,
//       lectureId,
//       mode: mode || "Manual"   // default
//     });

//     res.json({ message: "Attendance marked", attendance });

//   } catch (err) {
//     console.log("ERROR 👉", err);   // 🔥 VERY IMPORTANT
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = { markAttendance };




const Attendance = require("../models/Attendance");

// ✅ MARK ATTENDANCE
const markAttendance = async (req, res) => {
  try {
    const { studentId, studentName, lectureId, mode } = req.body;

    if (!studentId || !studentName || !lectureId) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await Attendance.findOne({ studentId, lectureId });

    if (exists) {
      return res.json({ message: "Already marked" });
    }

    const attendance = await Attendance.create({
      studentId,
      studentName,
      lectureId,
      mode: mode || "Manual"
    });

    res.json({ message: "Attendance marked", attendance });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET BY LECTURE
const getByLecture = async (req, res) => {
  try {
    const data = await Attendance.find({
      lectureId: req.params.lectureId
    }).populate("lectureId");

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ EXPORT (VERY IMPORTANT)
module.exports = {
  markAttendance,
  getByLecture
};