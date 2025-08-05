import React, { useState } from "react";

const IrrotationalForm = ({ onSubmit }) => {
  const [field, setField] = useState({
    Fx: "y*z",
    Fy: "x*z",
    Fz: "x*y",
  });

  const [point, setPoint] = useState({ x: "1", y: "1", z: "1" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ field, point });
  };

  return (
    <div className="max-w-2xl mx-auto bg-[#0f172a] border border-gray-400 rounded-xl shadow-lg p-6 md:p-10 mt-6 w-full">
      <h2 className="text-2xl font-bold text-purple-400 text-center mb-6">
        Irrotational Vector Field
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["Fx", "Fy", "Fz"].map((comp) => (
            <div key={comp}>
              <label className="block mb-1 text-white font-medium">{comp}(x, y, z)</label>
              <input
                type="text"
                value={field[comp]}
                onChange={(e) => setField({ ...field, [comp]: e.target.value })}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white"
                placeholder={`e.g., ${comp}`}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {["x", "y", "z"].map((axis) => (
            <div key={axis}>
              <label className="block mb-1 text-white font-medium">{axis}-coordinate</label>
              <input
                type="number"
                value={point[axis]}
                onChange={(e) => setPoint({ ...point, [axis]: e.target.value })}
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded cursor-pointer text-white font-semibold"
          >
            Visualize Irrotational Check
          </button>
        </div>
      </form>
    </div>
  );
};

export default IrrotationalForm;
