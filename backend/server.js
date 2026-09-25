const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Database
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const admissionRoutes = require("./routes/admissionRoutes");

// Load environment variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();


// =====================================================
// MIDDLEWARE
// =====================================================

// Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Parse JSON request body
app.use(express.json());

// Parse URL encoded data
app.use(express.urlencoded({ extended: true }));


// =====================================================
// HOME ROUTE
// =====================================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AXIS School Backend API is running",
  });
});


// =====================================================
// TEST ROUTE
// =====================================================

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "AXIS School Backend is working",
  });
});


// =====================================================
// AUTH ROUTES
// =====================================================

app.use("/api/auth", authRoutes);


// =====================================================
// ADMISSION ROUTES
// =====================================================

app.use("/api/admissions", admissionRoutes);


// =====================================================
// 404 ROUTE
// =====================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});


// =====================================================
// ERROR HANDLER
// =====================================================

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map(
      (error) => error.message
    );

    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  // Mongoose CastError
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid ID format",
    });
  }

  // Duplicate MongoDB field
  if (err.code === 11000) {
    return res.status(400).json({
      success: false,
      message: "Duplicate value already exists",
    });
  }

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


// =====================================================
// SERVER
// =====================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`AXIS School Server running on port ${PORT}`);
});