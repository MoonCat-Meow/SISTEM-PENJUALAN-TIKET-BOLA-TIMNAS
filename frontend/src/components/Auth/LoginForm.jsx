import React, { useState } from "react";
import { loginUser } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";
import Logo from "../../assets/logo-garuda.png";
import { Helmet } from "react-helmet";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });

      // Simpan token ke localStorage
      localStorage.setItem("token", data.token);

      // Arahkan ke halaman berdasarkan role
      if (data.role === "admin") {
        navigate("/admin-dashboard");
      } else if (data.role === "pembeli") {
        navigate("/users-dashboard");
      }

      setError("");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.bolaskor.com/media/55/33/d2/5533d220e13817a41af540e2e8a40787.jpg')",
      }}
    >
      <Helmet>
        <title>Timnas ID - Login</title>
      </Helmet>
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-2">
          <img src={Logo} alt="Garuda Logo" className="h-32 drop-shadow-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login Timnas ID
        </h1>
        {error && (
          <p className="text-red-900 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:ring-2 focus-within:ring-red-400">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                className="w-full px-2 py-2 focus:outline-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:ring-2 focus-within:ring-red-400">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                className="w-full px-2 py-2  focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Login
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-red-900 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
