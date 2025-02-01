const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Pengguna yang melakukan pembayaran
    ticket_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
      required: true,
    }, // Tiket yang dibayar
    metode_pembayaran: {
      type: String,
      enum: ["transfer", "kartu kredit", "e-wallet"],
      required: true,
    }, // Metode pembayaran
    status_pembayaran: {
      type: String,
      enum: ["pending", "berhasil", "gagal"],
      default: "pending",
    }, // Status pembayaran
    jumlah_bayar: { type: Number, required: true }, // Jumlah yang dibayar
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
