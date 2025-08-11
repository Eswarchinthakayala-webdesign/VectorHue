import React, { useState } from "react";

const UnitNormalForm = ({ onSubmit }) => {
  const [surface, setSurface] = useState("x^2 + y^2 + z^2 - 1");
  const [point, setPoint] = useState({ x: "1", y: "0", z: "0" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ surface, point });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 space-y-6 bg-[#0f172a] border border-purple-400 rounded-lg shadow-md backdrop-blur-lg"
    >
      <div>
        <label className="block text-white font-semibold mb-2">
          Surface Equation <span className="text-sm text-purple-300">(F(x, y, z) = 0)</span>
        </label>
        <input
          type="text"
          value={surface}
          onChange={(e) => setSurface(e.target.value)}
          className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {["x", "y", "z"].map((axis) => (
          <div key={axis}>
            <label className="block text-white font-semibold mb-1">
              {axis.toUpperCase()} Coordinate
            </label>
            <input
              type="number"
              value={point[axis]}
              onChange={(e) => setPoint({ ...point, [axis]: e.target.value })}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-3 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white font-semibold rounded"
        >
          Visualize Unit Normal Vector
        </button>
      </div>
    </form>
  );
};

export default UnitNormalForm;
