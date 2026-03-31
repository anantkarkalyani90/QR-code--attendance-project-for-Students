// const express = require("express");
// const router = express.Router();
// const express = require;


// // Import controller functions
// const {
//   createLecture,
//   getLectures,
//   updateLecture,
//   deleteLecture,
//   generateQR
// } = require("../controllers/lectureController");

// // ✅ CREATE lecture
// router.post("/create", createLecture);

// // ✅ Generate QR code
// router.get("/qr/:id", generateQR);

// // ✅ READ lectures (course-wise)
// router.get("/:courseId", getLectures);

// // ✅ UPDATE lecture (including courseId)
// router.put("/update/:id", updateLecture);

// // ✅ DELETE lecture
// router.delete("/delete/:id", deleteLecture);



// module.exports = router;

const express = require("express");
const router = express.Router();

const {
  createLecture,
  getLectures,
  updateLecture,
  deleteLecture,
  generateQR
} = require("../controllers/lectureController");

// ROUTES
router.post("/create", createLecture);
router.get("/qr/:id", generateQR);   // QR route FIRST
router.get("/:courseId", getLectures);
router.put("/update/:id", updateLecture);
router.delete("/delete/:id", deleteLecture);

module.exports = router;