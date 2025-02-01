const Match = require("../models/Match");
const Ticket = require("../models/Ticket");

exports.purchaseTicket = async (req, res) => {
  try {
    const { match_id, kategori_tiket, jumlah } = req.body;

    // Validasi input
    if (!match_id || !kategori_tiket || !jumlah) {
      return res.status(400).json({ message: "Semua data harus diisi." });
    }

    if (!["reguler", "VIP"].includes(kategori_tiket)) {
      return res.status(400).json({ message: "Kategori tiket tidak valid." });
    }

    if (jumlah <= 0) {
      return res
        .status(400)
        .json({ message: "Jumlah tiket harus lebih dari 0." });
    }

    // Cari pertandingan berdasarkan ID
    const match = await Match.findById(match_id);
    if (!match) {
      return res.status(404).json({ message: "Pertandingan tidak ditemukan." });
    }

    // Validasi kapasitas
    if (match.kapasitas[kategori_tiket] < jumlah) {
      return res.status(400).json({
        message: `Kapasitas ${kategori_tiket} tidak mencukupi. Tersisa ${match.kapasitas[kategori_tiket]} tiket.`,
      });
    }

    // Hitung harga total per tiket
    const hargaPerTiket = match.harga_tiket[kategori_tiket];

    // Membuat array untuk menyimpan tiket yang dipesan
    const tickets = [];
    for (let i = 0; i < jumlah; i++) {
      const total_harga = hargaPerTiket; // Harga per tiket
      const ticket = new Ticket({
        user_id: req.user._id, // ID pengguna yang terautentikasi
        match_id,
        kategori_tiket,
        total_harga,
        status: "Tidak Aktif/Mohon Lakukan Pembayaran", // Status tiket bisa diubah sesuai kebutuhan
      });
      tickets.push(ticket);
    }

    // Simpan tiket ke database
    await Ticket.insertMany(tickets);

    // Kurangi kapasitas tiket
    match.kapasitas[kategori_tiket] -= jumlah;
    await match.save();

    res.status(201).json({
      message: "Tiket berhasil dipesan.",
      tickets: tickets, // Mengembalikan array tiket yang dipesan
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan saat memproses pembelian tiket.",
      error: error.message,
    });
  }
};
exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user_id: req.user.id })
      .populate(
        "match_id",
        "nama_pertandingan teamHome teamAway tanggal lokasi"
      ) //
      .exec();
    res.json({ tickets });
  } catch (error) {
    res.status(500).json({ message: "Gagal memuat tiket." });
  }
};
