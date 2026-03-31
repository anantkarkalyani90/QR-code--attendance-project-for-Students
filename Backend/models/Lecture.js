const mongoose = require("mongoose");

const lectureSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  teacherId: {
    type: String,
    required: true
  },
  courseId: {   // ✅ FIXED HERE
    type: String,
    required: true
  },
  className: {
    type: String,
    required: true
  },
  date: {       // ✅ FIXED HERE
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Lecture", lectureSchema);