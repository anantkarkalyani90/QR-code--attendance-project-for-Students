const Lecture = require("../models/Lecture");

// CREATE
exports.createLecture = async (req, res) => {
  try {
    const lecture = await Lecture.create(req.body);
    res.json(lecture);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ (course-wise)
exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find({ courseId: req.params.courseId });
    res.json(lectures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateLecture = async (req, res) => {
  try {
    const updated = await Lecture.findByIdAndUpdate(
      req.params.id,   // Lecture ID from URL
      req.body,        // New data sent in request body
      { new: true }    // Return updated document
    );

    if (!updated) {
      return res.status(404).json({ error: "Lecture not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.deleteLecture = async (req, res) => {
  try {
    const deleted = await Lecture.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Lecture not found" });
    }
    res.json({ message: "Lecture deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// ✅ QR CODE GENERATE (ADD AT BOTTOM)
const QRCode = require("qrcode");

exports.generateQR = async (req, res) => {
  try {
    const lectureId = req.params.id;

    const qr = await QRCode.toDataURL(lectureId);

    res.json({ qr });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};