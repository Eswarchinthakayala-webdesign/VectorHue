// src/components/Sidebar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Home, Info, Phone, Activity, Sigma, Calculator, Shapes, Layers, Ruler, BookOpen, LineChart, Circle, LayoutList,  } from "lucide-react";
import { Link } from "react-router-dom";
const mainPages = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "About", path: "/about", icon: <Info size={20} /> },
  { name: "Contact", path: "/contact", icon: <Phone size={20} /> },
];

const mathTopics = [
  { name: "Directional Derivative", path: "/directional-derivative", icon: <Activity size={20} /> },
  { name: "Gradient", path: "/gradient", icon: <Sigma size={20} /> },
  { name: "Scalar Potential", path: "/scalar-potential", icon: <Calculator size={20} /> },
  { name: "Irrotational", path: "/irrotational", icon: <Shapes size={20} /> },
  { name: "Orthogonal Surfaces", path: "/orthogonal-surfaces", icon: <Layers size={20} /> },
  { name: "Normal Derivative", path: "/normal-derivative", icon: <Ruler size={20} /> },
  { name: "Tangent Plane", path: "/tangent-plane", icon: <BookOpen size={20} /> },
  { name: "Tangent Line", path: "/tangent-line", icon: <LineChart size={20} /> },
  { name: "Unit Normal", path: "/unit-normal", icon: <Circle size={20} /> },
  { name: "Solenoidal", path: "/solenoidal", icon: <Activity size={20} /> },
  { name: "Angle Between Surfaces", path: "/angle-between-surfaces", icon: <Layers size={20} /> },
  { name: "Formulas", path: "/formulas", icon: <BookOpen size={20} /> },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-1/2 -translate-y-1/2 left-2 z-50 p-2 rounded-r-full  bg-gradient-to-r from-gray-600 to-gray-700 cursor-pointer text-white shadow-2xl hover:scale-105 transition"
      >
        <LayoutList size={26} className="text-purple-400" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900/90 to-gray-900/90 backdrop-blur-lg border-r border-purple-500/50 shadow-2xl z-40 overflow-y-auto custom-scroll"
          >
            <div className="p-6">
              <h2 className="text-2xl font-extrabold text-purple-400 mb-8 tracking-wide drop-shadow-lg pt-14">
                Menu
              </h2>
              <nav className="flex flex-col gap-4">
                {mainPages.map((page) => (
                  <Link to={page.path}  className="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-500/20 text-white transition">
                    {page.icon} {page.name}
                  </Link>
                ))}
                <h3 className="text-lg text-purple-300 mt-6 mb-2">Math Topics</h3>
                {mathTopics.map((topic) => (
                  <Link to={topic.path}  className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-500/20 text-white transition">
                    {topic.icon} {topic.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
