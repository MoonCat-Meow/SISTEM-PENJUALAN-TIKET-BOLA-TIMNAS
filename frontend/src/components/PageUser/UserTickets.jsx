import React, { useEffect, useState } from "react";
import { FiX } from "react-icons/fi"; // Icon for closing modal
import PaymentModal from "./PaymentModal"; // Import the PaymentModal

const UserTicketsModal = ({ closeModal }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false); // Menyimpan state untuk menampilkan modal pembayaran

  // Fetch tickets from API
  const fetchTickets = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token tidak ditemukan, silakan login.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/tickets/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setTickets(data.tickets);
      } else {
        setError(data.message || "Gagal memuat tiket.");
      }
    } catch (err) {
      setError("Terjadi kesalahan saat memuat data.");
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = () => {
    // Refresh the tickets after payment is successful
    fetchTickets();
    setShowPaymentModal(false); // Close the payment modal after successful payment
  };

  useEffect(() => {
    fetchTickets(); // Fetch tickets when the component mounts
  }, []);

  // Saring tiket yang statusnya selain "Aktif"
  const ticketsForPayment = tickets.filter(
    (ticket) => ticket.status !== "Aktif"
  );

  return (
    <div className="fixed inset-0  bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800"
        >
          <FiX size={24} />
        </button>

        <h1 className="text-2xl font-bold text-center text-red-600 mb-4">
          Pesanan Tiket
        </h1>

        {loading ? (
          <div className="text-center text-lg">Memuat...</div>
        ) : error ? (
          <div className="text-red-600 text-center">{error}</div>
        ) : tickets.length === 0 ? (
          <div className="text-center text-lg text-gray-600">
            Anda belum memesan tiket.
          </div>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="border p-3 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h2 className="text-lg font-semibold text-red-600">
                  {ticket.match_id?.teamHome ?? "Tim Tidak Diketahui"} VS{" "}
                  {ticket.match_id?.teamAway ?? "Tim Tidak Diketahui"}
                </h2>

                <p className="text-gray-600 text-sm">
                  Kategori: {ticket.kategori_tiket} | Jumlah: {ticket.jumlah}{" "}
                  tiket
                </p>
                <p className="text-gray-800 text-sm">
                  Total Harga: Rp {ticket.total_harga.toLocaleString()}
                </p>
                <p className="text-gray-500 text-xs">
                  Tanggal Pemesanan:{" "}
                  {new Date(ticket.createdAt).toLocaleString()}
                </p>
                <p className="text-sm">Status: {ticket.status}</p>
              </div>
            ))}
          </div>
        )}

        {ticketsForPayment.length > 0 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowPaymentModal(true)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Bayar Sekarang
            </button>
          </div>
        )}
      </div>
      {/* Menampilkan modal pembayaran dengan tiket yang statusnya selain "Aktif" */}
      {showPaymentModal && (
        <PaymentModal
          tickets={ticketsForPayment} // Mengirimkan tiket yang statusnya bukan "Aktif" ke PaymentModal
          closeModal={() => setShowPaymentModal(false)} // Menutup modal pembayaran
          handlePaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};

export default UserTicketsModal;
