// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const userRoutes = require("./routes/userRoutes");
// const lectureRoutes = require("./routes/lectureRoutes");
// const attendanceRoutes = require("./routes/attendanceRoutes");

// const app = express(); // ✅ create app FIRST

// // ✅ Middleware (FIRST)
// app.use(cors());
// app.use(express.json());

// // ✅ Routes (AFTER middleware)
// app.use("/api/users", userRoutes);
// app.use("/api/lectures", lectureRoutes);

// //for attendance take
// app.use("/api/attendance", attendanceRoutes);


// // ✅ Connect Database
// connectDB();

// // Test route
// app.get("/", (req, res) => {
//   res.send("Backend Running");
// });

// // Start server
// app.listen(process.env.PORT, () => {
//   console.log("Server running on port " + process.env.PORT);
// });

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const lectureRoutes = require("./routes/lectureRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");


const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Connect DB FIRST (better practice)
connectDB();

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/lectures", lectureRoutes);
app.use("/api/attendance", attendanceRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// ✅ Start server (with default port safety)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});


