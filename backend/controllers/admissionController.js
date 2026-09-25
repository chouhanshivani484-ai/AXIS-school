const Admission = require("../models/Admission");

// CREATE ADMISSION
const createAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.create(req.body);

    res.status(201).json({
      success: true,
      message: "Admission application submitted successfully",
      admission,
    });
  } catch (error) {
    next(error);
  }
};


// GET ALL ADMISSIONS
const getAdmissions = async (req, res, next) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: admissions.length,
      admissions,
    });
  } catch (error) {
    next(error);
  }
};


// GET SINGLE ADMISSION
const getAdmissionById = async (req, res, next) => {
  try {
    const admission = await Admission.findById(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      admission,
    });
  } catch (error) {
    next(error);
  }
};


// UPDATE ADMISSION
const updateAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission updated successfully",
      admission,
    });
  } catch (error) {
    next(error);
  }
};


// DELETE ADMISSION
const deleteAdmission = async (req, res, next) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};


// UPDATE ADMISSION STATUS
const updateAdmissionStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (!["Pending", "Approved", "Rejected"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid admission status",
      });
    }

    const admission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Admission status updated successfully",
      admission,
    });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  createAdmission,
  getAdmissions,
  getAdmissionById,
  updateAdmission,
  deleteAdmission,
  updateAdmissionStatus,
};