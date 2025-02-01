import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Logo from "../../assets/logo-garuda.png";

const PaymentModal = ({ tickets, closeModal, handlePaymentSuccess }) => {
  const [metodePembayaran, setMetodePembayaran] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State untuk modal sukses

  const generateTicketPDF = (ticket) => {
    const doc = new jsPDF({
      orientation: "portrait", // Vertical orientation
      unit: "mm",
      format: [300, 100], // Wristband-style ticket (narrow and long)
    });

    const margin = 10;
    const lineWidth = 0.5;
    const headerFontSize = 14;
    const textFontSize = 12;

    doc.setFont("helvetica", "normal");

    doc.setFontSize(headerFontSize);
    doc.setFont("helvetica", "bold");
    doc.text("Tiket Pertandingan", margin + 20, margin + 5);

    doc.addImage(Logo, "PNG", margin + 25, margin + 10, 50, 50);

    doc.setLineWidth(lineWidth);
    doc.line(margin, margin + 65, 90, margin + 65);

    doc.setFontSize(textFontSize);
    doc.setFont("helvetica", "bold");
    doc.text(
      `Pertandingan: ${ticket.match_id?.teamHome} VS ${ticket.match_id?.teamAway}`,
      margin,
      margin + 75
    );

    const matchDate = ticket.match_id?.tanggal
      ? new Date(ticket.match_id?.tanggal)
      : new Date();
    doc.text(`Tanggal: ${matchDate.toLocaleDateString()}`, margin, margin + 85);

    doc.text(
      `Lokasi: ${ticket.match_id?.lokasi || "Tidak Diketahui"}`,
      margin,
      margin + 95
    );

    doc.text(`Kategori: ${ticket.kategori_tiket}`, margin, margin + 105);

    doc.text(`ID Tiket: ${ticket._id}`, margin, margin + 115);

    doc.text(
      `Dipesan: ${new Date(ticket.createdAt).toLocaleDateString()}`,
      margin,
      margin + 125
    );

    doc.save(`Wristband_Ticket_${ticket._id}.pdf`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!metodePembayaran) {
      setError("Metode pembayaran tidak boleh kosong.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    const token = localStorage.getItem("token");

    try {
      const ticketIds = tickets.map((ticket) => ticket._id);
      const totalHarga = tickets.reduce(
        (acc, ticket) => acc + ticket.total_harga,
        0
      );

      const response = await fetch(
        "http://localhost:5000/api/payment/payment",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: tickets[0].user_id,
            ticket_ids: ticketIds,
            metode_pembayaran: metodePembayaran,
            jumlah_bayar: totalHarga,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccess(true); // Set success state

        // Generate PDF tickets
        tickets.forEach((ticket) => generateTicketPDF(ticket));

        // Set success modal visibility to true
        setShowSuccessModal(true);

        // Close the payment modal after showing the success modal
        setTimeout(() => {
          setShowSuccessModal(false);
          closeModal(); // Close the payment modal as well
        }, 5000); // Close after 5 seconds
      } else {
        setError(data.message || "Pembayaran gagal.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat melakukan pembayaran.");
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    closeModal(); // Tutup modal pembayaran juga
  };

  if (!tickets || tickets.length === 0) {
    return (
      <div className="text-red-600 text-center">
        Tidak ada tiket yang dipilih.
      </div>
    );
  }

  const totalHarga = tickets.reduce(
    (acc, ticket) => acc + ticket.total_harga,
    0
  );

  return (
    <div>
      {/* Modal Pembayaran */}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-red-600 hover:text-red-800"
          >
            &times;
          </button>

          <h2 className="text-2xl font-semibold text-center text-red-600 mb-4">
            Pembayaran Tiket
          </h2>

          {success ? (
            <div className="text-green-600 text-center">
              Pembayaran berhasil! Tiket sudah aktif.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="metode_pembayaran"
                    className="block text-sm font-semibold"
                  >
                    Metode Pembayaran
                  </label>
                  <input
                    type="text"
                    id="metode_pembayaran"
                    value={metodePembayaran}
                    onChange={(e) => setMetodePembayaran(e.target.value)}
                    className="mt-2 p-2 border border-gray-300 rounded w-full"
                    placeholder="Masukkan metode pembayaran"
                  />
                </div>

                <div>
                  <label
                    htmlFor="jumlah_bayar"
                    className="block text-sm font-semibold"
                  >
                    Jumlah yang Harus Dibayar
                  </label>
                  <input
                    type="text"
                    id="jumlah_bayar"
                    value={`Rp ${totalHarga.toLocaleString()}`}
                    disabled
                    className="mt-2 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                {error && (
                  <div className="text-red-600 text-sm text-center">
                    {error}
                  </div>
                )}

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:bg-gray-400"
                  >
                    {loading ? "Memproses..." : "Bayar Sekarang"}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full relative">
            <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">
              Pembayaran Berhasil!
            </h2>
            <div className="text-center text-gray-600 mb-4">
              Pembayaran Anda telah berhasil. Tiket Anda sudah aktif dan siap
              digunakan.
            </div>
            <div className="text-center">
              <button
                onClick={closeSuccessModal}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentModal;
