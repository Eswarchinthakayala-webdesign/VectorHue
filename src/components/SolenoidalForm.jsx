import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust this import if needed

const SolenoidalForm = ({ onSubmit }) => {
  const [field, setField] = useState({
    Fx: "x^2",
    Fy: "y^2",
    Fz: "-2*z",
  });

  const [point, setPoint] = useState({ x: "1", y: "1", z: "1" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ field, point });
  };

  return (
    <div className="w-full">
      {/* Back Button Outside and Aligned to Left */}
      <div className="max-w-2xl mx-auto px-4 mb-4">
        
      </div>

      {/* Main Form Card */}
      <div className="max-w-2xl mx-auto bg-[#0f172a] border border-gray-500 rounded-xl shadow-lg p-6 md:p-10 mt-2 w-full">
        <h2 className="text-2xl font-bold text-purple-300 text-center mb-6">
          Solenoidal Vector Field
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Vector Field Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Fx", "Fy", "Fz"].map((comp) => (
              <div key={comp}>
                <label className="block mb-1 text-white font-medium">
                  {comp}(x, y, z)
                </label>
                <input
                  type="text"
                  value={field[comp]}
                  onChange={(e) =>
                    setField({ ...field, [comp]: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder={`e.g., ${comp === "Fz" ? "-2*z" : "x^2"}`}
                />
              </div>
            ))}
          </div>

          {/* Point Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["x", "y", "z"].map((axis) => (
              <div key={axis}>
                <label className="block mb-1 text-white font-medium">
                  {axis}-coordinate
                </label>
                <input
                  type="number"
                  value={point[axis]}
                  onChange={(e) =>
                    setPoint({ ...point, [axis]: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition cursor-pointer"
            >
              Visualize Solenoidal Check
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SolenoidalForm;
