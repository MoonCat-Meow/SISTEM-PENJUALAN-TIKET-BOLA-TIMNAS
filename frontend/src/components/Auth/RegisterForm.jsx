import React, { useState } from "react";
import { registerUser } from "../../api/authApi";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Logo from "../../assets/logo-garuda.png";
import { Helmet } from "react-helmet";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "pembeli",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all the fields.");
      return;
    }

    setIsLoading(true);
    try {
      await registerUser(formData);
      setSuccess(true);
      setError("");
      setFormData({ name: "", email: "", password: "", role: "pembeli" });
    } catch (err) {
      setError("Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
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
        <title>Timnas ID - Register</title>
      </Helmet>

      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-2">
          <img src={Logo} alt="Garuda Logo" className="h-32 drop-shadow-2xl" />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register Timnas ID
        </h1>
        {success && (
          <p className="text-green-500 text-sm mb-4 text-center">
            Registration successful!
          </p>
        )}
        {error && (
          <p className="text-red-900 text-sm mb-4 text-center">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:ring-2 focus-within:ring-red-400">
              <FiUser className="text-gray-400" />
              <input
                type="text"
                name="name"
                className="w-full px-2 py-2 border-none focus:outline-none"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:ring-2 focus-within:ring-red-400">
              <FiMail className="text-gray-400" />
              <input
                type="email"
                name="email"
                className="w-full px-2 py-2 border-none focus:outline-none"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-2 focus-within:ring-2 focus-within:ring-red-400">
              <FiLock className="text-gray-400" />
              <input
                type="password"
                name="password"
                className="w-full px-2 py-2 border-none focus:outline-none"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
        </form>
        <p className="text-gray-600 text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-red-900 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
