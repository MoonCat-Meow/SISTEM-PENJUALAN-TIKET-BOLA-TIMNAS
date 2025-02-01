import React, { useState } from "react";
import { FiLogOut, FiCalendar, FiDollarSign } from "react-icons/fi";
import { Helmet } from "react-helmet";
import Logo from "../../assets/logo-garuda.png";
import MatchCrud from "../../components/PageAdmin/Match/MatchCrud";
import TransactionCrud from "../../components/PageAdmin/Transaksi/TransactionCrud"; // Import komponen TransactionCrud

const Page = () => {
  const [activeComponent, setActiveComponent] = useState("jadwal");

  const handleLogout = () => {
    console.log("Logged out");
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "jadwal":
        return <MatchCrud />;
      case "transaksi":
        return <TransactionCrud />; // Komponen transaksi yang baru ditambahkan
      default:
        return <div>Komponen tidak ditemukan</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Helmet>
        <title>Timnas ID - Admin Dashboard</title>
      </Helmet>
      {/* Sidebar */}
      <aside className="w-72 bg-red-900 text-white p-6">
        <h2 className="text-xl text-center font-bold mb-6">
          #Timnas ID - Dashboard
        </h2>
        {/* Logo di bawah judul */}
        <img
          src={Logo}
          alt="Timnas ID Logo"
          className="mt-4 mb-6 w-32 h-auto mx-auto"
        />
        <nav>
          <ul className="space-y-4">
            {/* Link ke Jadwal Pertandingan */}
            <li
              onClick={() => setActiveComponent("jadwal")}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
                activeComponent === "jadwal" ? "bg-red-700" : "hover:bg-red-700"
              }`}
            >
              <FiCalendar className="text-xl" />
              <span>Jadwal Pertandingan</span>
            </li>

            {/* Link ke Transaksi */}
            <li
              onClick={() => setActiveComponent("transaksi")}
              className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
                activeComponent === "transaksi"
                  ? "bg-red-700"
                  : "hover:bg-red-700"
              }`}
            >
              <FiDollarSign className="text-xl" />
              <span>Transaksi</span>
            </li>

            {/* Tombol Logout */}
            <li
              onClick={handleLogout}
              className="flex items-center gap-4 hover:bg-red-700 p-3 rounded-lg cursor-pointer text-gray-300"
            >
              <FiLogOut className="text-xl" />
              <span>Logout</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-red-900">
            Selamat Datang, Admin
          </h1>
        </div>

        {/* Render Active Component */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          {renderActiveComponent()}
        </section>
      </main>
    </div>
  );
};

export default Page;
