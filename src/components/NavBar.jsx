import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-white/10 shadow-md"
          : "bg-gradient-to-br from-[#0f0c29] via-[#02010a] to-[#000015]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-3xl  font-bold  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
           <span>V</span>ector<span className="text-purple-400">
           Hue</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-white font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/formulas">Formulas</NavLink>
          <NavLink to="/gradient">Gradient</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} className="text-purple-400 cursor-pointer" /> : <Menu size={28} className="text-purple-400 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden flex flex-col px-6 py-4 text-white font-medium gap-2
          bg-white/10 backdrop-blur-xl rounded-b-xl shadow-2xl animate-slide-down"
        >
          <MobileLink to="/">Home</MobileLink>
          <MobileLink to="/about">About</MobileLink>
          <MobileLink to="/formulas">Formulas</MobileLink>
          <MobileLink to="/gradient">Gradient</MobileLink>
          <MobileLink to="/contact">Contact</MobileLink>
        </div>
      )}
    </nav>
  );
};

// Navigation link component (desktop)
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="hover:text-purple-400 hover:border-b-2 border-purple-400 transition duration-200 ease-in-out"
  >
    {children}
  </Link>
);

// Navigation link component (mobile)
const MobileLink = ({ to, children }) => (
  <Link
    to={to}
    className="border-b border-white/10 pb-2 hover:text-purple-400 transition"
  >
    {children}
  </Link>
);

export default NavBar;
