const express = require("express");

const {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();


// Create contact message
router.post("/", createContact);

// Get all contact messages
router.get("/", getContacts);

// Get single contact message
router.get("/:id", getContactById);

// Update contact
router.put("/:id", updateContact);

// Delete contact
router.delete("/:id", deleteContact);


module.exports = router;