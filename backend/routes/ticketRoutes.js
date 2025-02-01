const express = require("express");
const router = express.Router();
const ticketController = require("../controllers/ticketController");
const { protect } = require("../middleware/auth");

// Route untuk membuat tiket
router.post("/purchase", protect, ticketController.purchaseTicket);
router.get("/user", protect, ticketController.getUserTickets);

module.exports = router;
