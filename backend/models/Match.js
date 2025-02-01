const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    nama_pertandingan: { type: String, required: true, trim: true }, // Nama pertandingan
    teamHome: { type: String, required: true, trim: true }, // Tim A
    teamAway: { type: String, required: true, trim: true }, // Tim B
    tanggal: { type: Date, required: true }, // Tanggal pertandingan
    lokasi: { type: String, required: true, trim: true }, // Lokasi pertandingan
    harga_tiket: {
      // Harga tiket berdasarkan kategori
      reguler: { type: Number, required: true },
      VIP: { type: Number, required: true },
    },
    kapasitas: {
      // Kapasitas tempat duduk berdasarkan kategori
      reguler: { type: Number, required: true },
      VIP: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Match", matchSchema);
