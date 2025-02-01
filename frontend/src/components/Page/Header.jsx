import { useState, useEffect } from "react";
import { FiHome, FiInfo, FiUser, FiCalendar } from "react-icons/fi";
import Logo from "../../assets/logo-garuda.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect scroll position and toggle background effect on the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 shadow-lg transition-all text-white ${
        isScrolled ? "bg-red-900/80 backdrop-blur-sm" : "bg-red-900"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Garuda Logo" className="h-16" />
          <span className="text-3xl font-bold">#Timnas ID</span>
        </div>

        {/* Navigation Section */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/#"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
          >
            <FiHome />
            <span>Home</span>
          </a>
          <a
            href="#jadwaltimnas"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
          >
            <FiCalendar />
            <span>Jadwal Timnas</span>
          </a>
          <a
            href="#about"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
          >
            <FiInfo />
            <span>About</span>
          </a>
          <a
            href="#profile"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
          >
            <FiUser />
            <span>Profile</span>
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="px-4 py-2 border border-white text-white rounded-lg hover:text-gray-200 transition"
          >
            Masuk
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-white text-red-900 rounded-lg hover:bg-red-200 transition"
          >
            Daftar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 z-50 w-64 h-full bg-red-900 text-white transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <img src={Logo} alt="Garuda Logo" className="h-12" />
          <span className="text-xl font-bold">Timnas ID</span>
          <button onClick={toggleSidebar} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col space-y-6 p-4">
          <a
            href="/"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
            onClick={toggleSidebar}
          >
            <FiHome />
            <span>Home</span>
          </a>
          <a
            href="/about"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
            onClick={toggleSidebar}
          >
            <FiInfo />
            <span>About</span>
          </a>
          <a
            href="/profile"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
            onClick={toggleSidebar}
          >
            <FiUser />
            <span>Profile</span>
          </a>
          <a
            href="/schedule"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
            onClick={toggleSidebar}
          >
            <FiCalendar />
            <span>Jadwal Timnas</span>
          </a>
          <a
            href="/tickets"
            className="flex items-center space-x-2 hover:text-gray-200 transition"
            onClick={toggleSidebar}
          >
            <FiCalendar />
            <span>Tiket</span>
          </a>
          <a
            href="/login"
            className="px-4 py-2 bg-white text-red-900 rounded-lg hover:bg-gray-100 transition"
            onClick={toggleSidebar}
          >
            Masuk
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={toggleSidebar}
          >
            Daftar
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
