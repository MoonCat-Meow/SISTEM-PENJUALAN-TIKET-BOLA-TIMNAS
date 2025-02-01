import React, { useState, useEffect } from "react";
import {
  fetchMatches,
  createMatch,
  updateMatch,
  deleteMatch,
  fetchMatchById,
} from "../../../api/matchApi";
import MatchForm from "./MatchForm";
import MatchList from "./MatchList";

const MatchCrud = () => {
  const [matches, setMatches] = useState([]);
  const [form, setForm] = useState({
    nama_pertandingan: "",
    teamHome: "",
    teamAway: "",
    tanggal: "",
    lokasi: "",
    harga_tiket: { reguler: 0, VIP: 0 },
    kapasitas: { reguler: 0, VIP: 0 },
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    try {
      const data = await fetchMatches();
      setMatches(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEdit = async (id) => {
    try {
      const data = await fetchMatchById(id);
      setForm(data);
      setEditingId(id);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteMatch(id);
      loadMatches();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateMatch(editingId, form);
      } else {
        await createMatch(form);
      }
      setForm({
        nama_pertandingan: "",
        teamHome: "",
        teamAway: "",
        tanggal: "",
        lokasi: "",
        harga_tiket: { reguler: 0, VIP: 0 },
        kapasitas: { reguler: 0, VIP: 0 },
      });
      setEditingId(null);
      loadMatches();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Match Management</h1>
      <MatchForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        isEditing={!!editingId}
      />
      <MatchList
        matches={matches}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MatchCrud;
