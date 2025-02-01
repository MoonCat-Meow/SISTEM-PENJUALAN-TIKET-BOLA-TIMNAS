const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Pengguna yang membeli tiket
    match_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Match",
      required: true,
    }, // Pertandingan yang dipesan
    kategori_tiket: {
      type: String,
      enum: ["reguler", "VIP"],
      required: true,
    }, // Kategori tiket
    total_harga: { type: Number, required: true }, // Harga per tiket
    status: {
      type: String,
      enum: ["Tidak Aktif/Mohon Lakukan Pembayaran", "Aktif"],
      default: "Tidak Aktif/Mohon Lakukan Pembayaran",
    }, // Status tiket
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
