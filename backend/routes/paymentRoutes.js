const express = require("express");
const router = express.Router();
const {
  processPayment,
  getAllTransactions,
  deleteTransaction,
} = require("../controllers/paymentController");
const { protect } = require("../middleware/auth");

// Route untuk memproses pembayaran
router.post("/payment", protect, processPayment);

// Get all transactions
router.get("/transactions", protect, getAllTransactions);

// Delete a transaction by payment ID
router.delete("/transaction/:payment_id", protect, deleteTransaction);

module.exports = router;
