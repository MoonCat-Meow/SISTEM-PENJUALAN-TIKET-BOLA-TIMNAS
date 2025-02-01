const Ticket = require("../models/Ticket");
const Payment = require("../models/Payment");

exports.processPayment = async (req, res) => {
  const { user_id, ticket_ids, metode_pembayaran, jumlah_bayar } = req.body;

  try {
    // Validasi input
    if (!Array.isArray(ticket_ids) || ticket_ids.length === 0) {
      return res.status(400).json({ message: "Tidak ada tiket yang dipilih." });
    }

    // Cari tiket berdasarkan ticket_ids
    const tickets = await Ticket.find({ _id: { $in: ticket_ids } });
    if (tickets.length !== ticket_ids.length) {
      return res
        .status(404)
        .json({ message: "Salah satu tiket tidak ditemukan." });
    }

    // Validasi jumlah pembayaran untuk setiap tiket
    let totalHarga = 0;
    tickets.forEach((ticket) => {
      totalHarga += ticket.total_harga;
    });

    if (jumlah_bayar !== totalHarga) {
      return res.status(400).json({
        message: `Jumlah pembayaran tidak sesuai dengan total harga tiket. Total yang harus dibayar: Rp ${totalHarga.toLocaleString()}`,
      });
    }

    // Proses pembayaran untuk setiap tiket
    const payments = [];
    for (let ticket of tickets) {
      const payment = new Payment({
        user_id,
        ticket_id: ticket._id,
        metode_pembayaran,
        jumlah_bayar: ticket.total_harga, // Pembayaran per tiket
      });

      // Simpan pembayaran
      await payment.save();

      // Tandai tiket sebagai aktif setelah pembayaran berhasil
      ticket.status = "Aktif"; // Status tiket langsung jadi aktif
      await ticket.save();

      payments.push(payment);
    }

    return res.status(201).json({
      message: "Pembayaran berhasil untuk semua tiket, tiket sudah aktif.",
      payments,
      tickets,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};

// Endpoint to get all transactions (payments)
exports.getAllTransactions = async (req, res) => {
  try {
    // Fetch all payments and populate user, ticket, and match details
    const payments = await Payment.find()
      .populate({
        path: "ticket_id",
        populate: {
          path: "match_id", // Populasi untuk match_id dalam tiket
          select: "teamHome teamAway date", // Pilih field yang ingin ditampilkan (misalnya, teamHome, teamAway, date)
        },
      })
      .populate("user_id"); // Populate user details

    return res.status(200).json({ payments });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};
// Endpoint to delete a transaction (payment) by payment ID
exports.deleteTransaction = async (req, res) => {
  const { payment_id } = req.params;

  try {
    // Find payment by ID and delete it directly
    const payment = await Payment.findByIdAndDelete(payment_id);

    if (!payment) {
      return res.status(404).json({ message: "Transaksi tidak ditemukan." });
    }

    return res.status(200).json({ message: "Transaksi berhasil dihapus." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server." });
  }
};
