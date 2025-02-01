import React from "react";

const MatchForm = ({ form, setForm, onSubmit, isEditing }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("harga_tiket") || name.includes("kapasitas")) {
      const [field, key] = name.split(".");
      setForm((prev) => ({
        ...prev,
        [field]: { ...prev[field], [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form className="mb-6" onSubmit={onSubmit}>
      {/* Nama Pertandingan */}
      <label className="block mb-1 font-semibold">
        Nama Pertandingan<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="nama_pertandingan"
        placeholder="Nama Pertandingan"
        value={form.nama_pertandingan}
        onChange={handleInputChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <p className="text-sm text-gray-500 mb-4">
        Contoh: "Final Piala Dunia 2025"
      </p>

      {/* Team Home */}
      <label className="block mb-1 font-semibold">
        Team Home<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="teamHome"
        placeholder="Team Home"
        value={form.teamHome}
        onChange={handleInputChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <p className="text-sm text-gray-500 mb-4">
        Nama tim tuan rumah, misalnya "Timnas Indonesia".
      </p>

      {/* Team Away */}
      <label className="block mb-1 font-semibold">
        Team Away<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="teamAway"
        placeholder="Team Away"
        value={form.teamAway}
        onChange={handleInputChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <p className="text-sm text-gray-500 mb-4">
        Nama tim lawan, misalnya "Timnas Malaysia".
      </p>

      {/* Tanggal Pertandingan */}
      <label className="block mb-1 font-semibold">
        Tanggal Pertandingan<span className="text-red-500">*</span>
      </label>
      <input
        type="date"
        name="tanggal"
        value={form.tanggal}
        onChange={handleInputChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <p className="text-sm text-gray-500 mb-4">Pilih tanggal pertandingan.</p>

      {/* Lokasi */}
      <label className="block mb-1 font-semibold">
        Lokasi<span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="lokasi"
        placeholder="Lokasi"
        value={form.lokasi}
        onChange={handleInputChange}
        className="border p-2 rounded mb-2 w-full"
        required
      />
      <p className="text-sm text-gray-500 mb-4">
        Contoh: "Stadion Utama Gelora Bung Karno".
      </p>

      {/* Harga Tiket */}
      <label className="block mb-1 font-semibold">
        Harga Tiket (dalam IDR)<span className="text-red-500">*</span>
      </label>
      <div className="flex gap-4">
        <input
          type="number"
          name="harga_tiket.reguler"
          placeholder="Harga Reguler"
          value={form.harga_tiket.reguler}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
          required
        />
        <input
          type="number"
          name="harga_tiket.VIP"
          placeholder="Harga VIP"
          value={form.harga_tiket.VIP}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
          required
        />
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Masukkan harga tiket untuk kategori Reguler dan VIP.
      </p>

      {/* Kapasitas */}
      <label className="block mb-1 font-semibold">
        Kapasitas Tempat Duduk<span className="text-red-500">*</span>
      </label>
      <div className="flex gap-4">
        <input
          type="number"
          name="kapasitas.reguler"
          placeholder="Kapasitas Reguler"
          value={form.kapasitas.reguler}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
          required
        />
        <input
          type="number"
          name="kapasitas.VIP"
          placeholder="Kapasitas VIP"
          value={form.kapasitas.VIP}
          onChange={handleInputChange}
          className="border p-2 rounded mb-2 w-full"
          required
        />
      </div>
      <p className="text-sm text-gray-500 mb-4">
        Masukkan kapasitas tempat duduk untuk kategori Reguler dan VIP.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        {isEditing ? "Update Match" : "Create Match"}
      </button>
    </form>
  );
};

export default MatchForm;
