const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2025 Timnas ID. All Rights Reserved.</p>
        <nav className="flex space-x-6 mt-4 md:mt-0">
          <a href="/privacy" className="hover:text-gray-300 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-gray-300 transition">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-gray-300 transition">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
