import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionCrud = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage

    if (!token) {
      console.error("Token tidak ditemukan. Silakan login terlebih dahulu.");
      return;
    }

    // Ambil semua transaksi dengan menambahkan header Authorization
    axios
      .get("http://localhost:5000/api/payment/transactions", {
        headers: {
          Authorization: `Bearer ${token}`, // Menambahkan token di header
        },
      })
      .then((response) => {
        setTransactions(response.data.payments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (paymentId) => {
    const token = localStorage.getItem("token"); // Ambil token dari localStorage

    if (!token) {
      console.error("Token tidak ditemukan. Silakan login terlebih dahulu.");
      return;
    }

    // Hapus transaksi berdasarkan payment_id dengan menambahkan header Authorization
    axios
      .delete(`http://localhost:5000/api/payment/transaction/${paymentId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Menambahkan token di header
        },
      })
      .then((response) => {
        alert(response.data.message);

        // Setelah berhasil menghapus, update state transactions
        setTransactions((prevTransactions) =>
          prevTransactions.filter(
            (transaction) => transaction._id !== paymentId
          )
        );
      })
      .catch((error) => {
        console.error("Error deleting transaction", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Daftar Transaksi Pembayaran</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID Pembayaran</th>
            <th className="border p-2">Pengguna</th>
            <th className="border p-2">Tiket</th>
            <th className="border p-2">Jumlah Bayar</th>
            <th className="border p-2">Metode Pembayaran</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction._id}>
                <td className="border p-2">{transaction._id}</td>
                <td className="border p-2">{transaction.user_id?.name}</td>
                <td className="border p-2">
                  {transaction.ticket_id?.match_id?.teamHome} VS{" "}
                  {transaction.ticket_id?.match_id?.teamAway}
                </td>
                <td className="border p-2">
                  Rp {transaction.jumlah_bayar.toLocaleString()}
                </td>
                <td className="border p-2">{transaction.metode_pembayaran}</td>
                <td className="border p-2">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(transaction._id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionCrud;
