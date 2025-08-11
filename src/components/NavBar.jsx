import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Calculator,
  Layers,
  Mail,
  BookOpen,
} from "lucide-react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#1e293b] shadow-md border-b-2 shadow-purple-300 border-purple-400"
          : "bg-[#0f172a]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg"
          >
            <span>V</span>ector
            <span className="text-purple-400">Hue</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium relative">
          <NavLink to="/" icon={<Home size={18} />}>
            Home
          </NavLink>
          <NavLink to="/about" icon={<Info size={18} />}>
            About
          </NavLink>

          {/* Dropdown */}
          <div className="relative group">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 hover:text-purple-400 transition relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              <Calculator size={18} />
              Formulas
            </button>
            {dropdownOpen && (
              <div className="absolute top-8 left-0 bg-white/10 backdrop-blur-xl shadow-lg rounded-md py-2 w-40 animate-fade-in">
                <DropdownLink to="/formulas" icon={<BookOpen size={16} />}>
                  All Formulas
                </DropdownLink>
                <DropdownLink to="/gradient" icon={<Layers size={16} />}>
                  Gradient
                </DropdownLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" icon={<Mail size={18} />}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <X size={28} className="text-purple-400" />
            ) : (
              <Menu size={28} className="text-purple-400" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 py-4 text-white font-medium gap-2 bg-white/10 backdrop-blur-xl rounded-b-xl shadow-2xl animate-slide-down">
          <MobileLink to="/" icon={<Home size={18} />}>
            Home
          </MobileLink>
          <MobileLink to="/about" icon={<Info size={18} />}>
            About
          </MobileLink>
          <MobileLink to="/formulas" icon={<Calculator size={18} />}>
            Formulas
          </MobileLink>
          <MobileLink to="/gradient" icon={<Layers size={18} />}>
            Gradient
          </MobileLink>
          <MobileLink to="/contact" icon={<Mail size={18} />}>
            Contact
          </MobileLink>
        </div>
      )}
    </nav>
  );
};

/* Link Components */
const NavLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center gap-1 relative after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full hover:text-purple-400 transition-colors duration-300"
  >
    {icon} {children}
  </Link>
);

const MobileLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center gap-2 border-b border-white/10 pb-2 hover:text-purple-400 transition"
  >
    {icon} {children}
  </Link>
);

const DropdownLink = ({ to, icon, children }) => (
  <Link
    to={to}
    className="flex items-center gap-2 px-4 py-2 hover:bg-white/20 transition"
  >
    {icon} {children}
  </Link>
);

export default NavBar;
