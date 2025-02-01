import React from "react";

const MatchCard = ({ match, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold">{match.nama_pertandingan}</h2>
        <p>
          {match.teamHome} vs {match.teamAway}
        </p>
        <p>{new Date(match.tanggal).toLocaleDateString()}</p>
        <p>{match.lokasi}</p>
        <p>Harga Reguler: {match.harga_tiket.reguler}</p>
        <p>Harga VIP: {match.harga_tiket.VIP}</p>
        <p>Kapasitas Reguler: {match.kapasitas.reguler}</p>
        <p>Kapasitas VIP: {match.kapasitas.VIP}</p>
      </div>
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(match._id)}
          className="bg-yellow-500 text-white py-1 px-2 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(match._id)}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
