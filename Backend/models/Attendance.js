

// const mongoose = require("mongoose");

// const attendanceSchema = new mongoose.Schema({
//   studentId: {
//     type: String,
//     required: true
//   },
//   studentName: {          // ✅ NEW FIELD
//     type: String,
//     required: true
//   },
//   lectureId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Lecture",       // ✅ IMPORTANT (for populate)
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   mode: {
//   type: String,
//   enum: ["QR", "Manual"],
//   default: "QR"
// }
// });

// module.exports = mongoose.model("Attendance", attendanceSchema);




const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  studentId: String,
  studentName: String,
  lectureId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture"
  },
  mode: String, // ✅ ADD THIS
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Attendance", attendanceSchema);