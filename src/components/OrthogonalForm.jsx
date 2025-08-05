// components/OrthogonalForm.jsx
import React, { useState } from "react";

const OrthogonalForm = ({ onSubmit }) => {
  const [f1, setF1] = useState("x^2 + y^2 + z^2");
  const [f2, setF2] = useState("x + y + z");
  const [point, setPoint] = useState({ x: "1", y: "1", z: "1" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ f1, f2, point });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-[#0f172a] p-6 md:p-8 rounded-lg shadow-md border border-slate-700 text-white"
    >
      <div className="mb-6">
        <label className="block mb-2 font-semibold text-sm md:text-base">
          First Surface f(x, y, z):
        </label>
        <input
          type="text"
          value={f1}
          onChange={(e) => setF1(e.target.value)}
          className="w-full px-4 py-2 text-sm md:text-base rounded bg-[#1e293b] border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="e.g., x^2 + y^2 + z^2"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-semibold text-sm md:text-base">
          Second Surface g(x, y, z):
        </label>
        <input
          type="text"
          value={f2}
          onChange={(e) => setF2(e.target.value)}
          className="w-full px-4 py-2 text-sm md:text-base rounded bg-[#1e293b] border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="e.g., x + y + z"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {["x", "y", "z"].map((axis) => (
          <div key={axis}>
            <label className="block mb-2 font-semibold text-sm md:text-base">
              {axis}:
            </label>
            <input
              type="number"
              value={point[axis]}
              onChange={(e) => setPoint({ ...point, [axis]: e.target.value })}
              className="w-full px-4 py-2 text-sm md:text-base rounded bg-[#1e293b] border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
      >
        Check Orthogonality
      </button>
    </form>
  );
};

export default OrthogonalForm;
