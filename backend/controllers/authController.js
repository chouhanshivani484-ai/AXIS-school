const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const registerUser = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      role
    } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required"
      });
    }
    const existingUser = await User.findOne({
      email: email.toLowerCase()
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email"
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      phone: phone || "",
      role: role || "student"
    });
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }
    const user = await User.findOne({
      email: email.toLowerCase()
    });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
    if (!user.isActive) {
      return res.status(403).json({
        success: false,
        message: "Your account is inactive"
      });
    }
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message
    });
  }
};
module.exports = {
  registerUser,
  loginUser
};