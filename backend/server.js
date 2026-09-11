const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AXIS School Backend is Running 🚀"
  });
});
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "AXIS School API Working"
  });
});
app.use("/api/auth", authRoutes);
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`AXIS School Server running on port ${PORT}`);
});