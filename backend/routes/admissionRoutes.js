const express = require("express");

const {
  createAdmission,
  getAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
  updateAdmissionStatus,
} = require("../controllers/admissionController");

const router = express.Router();

router.post("/", createAdmission);

router.get("/", getAdmissions);

router.get("/:id", getAdmissionById);

router.put("/:id", updateAdmission);

router.delete("/:id", deleteAdmission);

router.patch("/:id/status", updateAdmissionStatus);

module.exports = router;