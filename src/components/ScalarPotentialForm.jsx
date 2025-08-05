// components/ScalarPotentialForm.jsx
import React, { useState } from "react";

const ScalarPotentialForm = ({ onSubmit }) => {
  const [Fx, setFx] = useState("2*x");
  const [Fy, setFy] = useState("2*y");
  const [Fz, setFz] = useState("2*z");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ Fx, Fy, Fz });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto mt-6"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 text-center">
        Enter Components of the Vector Field
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Fx (e.g., y + z)"
          value={Fx}
          onChange={(e) => setFx(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          placeholder="Fy (e.g., x - z)"
          value={Fy}
          onChange={(e) => setFy(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="text"
          placeholder="Fz (e.g., x + y)"
          value={Fz}
          onChange={(e) => setFz(e.target.value)}
          className="p-3 rounded bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-8 w-full bg-purple-400 hover:bg-purple-500 cursor-pointer text-white font-semibold py-3 rounded transition duration-200"
      >
        Find Scalar Potential φ
      </button>
    </form>
  );
};

export default ScalarPotentialForm;
