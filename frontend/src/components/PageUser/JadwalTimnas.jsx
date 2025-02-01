import React, { useEffect, useState } from "react";
import { fetchMatches } from "../../api/matchApi";
import { FiMapPin, FiCalendar, FiDollarSign } from "react-icons/fi";
import TicketComponent from "./TicketComponent";

const JadwalTimnas = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    setLoading(true);
    try {
      const data = await fetchMatches();
      setMatches(Array.isArray(data) ? data : [data]);
    } catch (error) {
      setError(error.message || "Gagal memuat data pertandingan.");
    } finally {
      setLoading(false);
    }
  };

  const handleOrderClick = (match) => {
    setSelectedMatch(match);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMatch(null);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center text-red-700 mb-8">
        Jadwal Timnas Indonesia
      </h1>

      {/* Loading dan Error */}
      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Jika tidak ada data */}
      {!loading && !error && matches.length === 0 && (
        <p className="text-center text-gray-600 text-lg">
          Belum ada jadwal pertandingan.
        </p>
      )}

      {/* Daftar Pertandingan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div
            key={match._id}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-red-700 text-center mb-2">
                {match.nama_pertandingan}
              </h2>
              <h1 className="text-center text-2xl text-gray-700">
                {match.teamHome} vs {match.teamAway}
              </h1>
            </div>

            <div className="bg-gray-50 p-4 border-t border-gray-200 space-y-3">
              <div className="flex items-center text-gray-600">
                <FiCalendar className="mr-2 text-red-600" />
                <span>{new Date(match.tanggal).toLocaleString()}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiMapPin className="mr-2 text-red-600" />
                <span>{match.lokasi}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiDollarSign className="mr-2 text-red-600" />
                <span>
                  Reguler: {match.harga_tiket?.reguler || "N/A"} | VIP:{" "}
                  {match.harga_tiket?.VIP || "N/A"}
                </span>
              </div>
              <div className="text-center mt-4">
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition duration-300"
                  onClick={() => handleOrderClick(match)}
                >
                  Pesan Tiket Sekarang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Pembelian Tiket */}
      {isModalOpen && (
        <TicketComponent match={selectedMatch} closeModal={closeModal} />
      )}
    </div>
  );
};

export default JadwalTimnas;
