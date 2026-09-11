const express = require("express");
const {
  registerUser,
  loginUser
} = require("../controllers/authController");
const {
  protect,
  authorize
} = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Profile fetched successfully",
    user: req.user
  });
});
router.get(
  "/admin",
  protect,
  authorize("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin 👑",
      user: req.user
    });
  }
);

router.get(
  "/teacher",
  protect,
  authorize("teacher"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Teacher 👨‍🏫",
      user: req.user
    });
  }
);

router.get(
  "/student",
  protect,
  authorize("student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Student 🎓",
      user: req.user
    });
  }
);
router.get(
  "/parent",
  protect,
  authorize("parent"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Parent 👨‍👩‍👦",
      user: req.user
    });
  }
);
module.exports = router;