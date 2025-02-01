import React, { useState } from "react";

const PurchaseTicketForm = ({ match, closeModal }) => {
  const [kategori, setKategori] = useState("reguler");
  const [jumlah, setJumlah] = useState(1);

  const handlePurchase = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:5000/api/tickets/purchase",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            match_id: match._id,
            kategori_tiket: kategori,
            jumlah, // Tetap mengirim jumlah, karena backend akan membuat tiket terpisah
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        alert("Tiket berhasil dipesan!");
        closeModal(); // Tutup modal setelah pemesanan berhasil
      } else {
        alert(data.message || "Terjadi kesalahan.");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat memproses pembelian tiket.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        {/* Judul Modal */}
        <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
          Pembelian Tiket: {match.nama_pertandingan}
        </h3>

        {/* Tim Pertandingan */}
        <h1 className="text-center text-xl font-semibold text-gray-800 mb-6">
          {match.teamHome} VS {match.teamAway}
        </h1>

        {/* Kategori Tiket */}
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Kategori Tiket:
        </label>
        <select
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
          className="border-2 border-red-600 p-3 w-full rounded-md mb-4 text-gray-800"
        >
          <option value="reguler">Reguler</option>
          <option value="VIP">VIP</option>
        </select>

        {/* Jumlah Tiket */}
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Jumlah Tiket:
        </label>
        <input
          type="number"
          min="1"
          value={jumlah}
          onChange={(e) => setJumlah(Number(e.target.value))}
          className="border-2 border-red-600 p-3 w-full rounded-md mb-6 text-gray-800"
        />

        {/* Tombol Aksi */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePurchase}
            className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold shadow-lg hover:bg-red-700 transition duration-300"
          >
            Pesan Tiket
          </button>
          <button
            onClick={closeModal}
            className="text-red-600 px-4 py-2 font-medium hover:text-red-800 transition duration-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseTicketForm;
