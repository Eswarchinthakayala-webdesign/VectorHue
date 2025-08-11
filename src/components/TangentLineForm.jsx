// components/TangentLineForm.jsx
import React, { useState } from "react";

const TangentLineForm = ({ onSubmit }) => {
  const [xExpr, setXExpr] = useState("");
  const [yExpr, setYExpr] = useState("");
  const [t0, setT0] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ xExpr, yExpr, t0: parseFloat(t0) });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0f172a] border border-purple-400 p-6 rounded-lg shadow-md w-full max-w-3xl mx-auto"
    >
      <h2 className="text-lg font-semibold text-purple-400 mb-4 text-center">
        Enter Parametric Curve Inputs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="x(t)"
          value={xExpr}
          onChange={(e) => setXExpr(e.target.value)}
          className="p-2 rounded bg-slate-800 text-white border border-slate-600 focus:outline-none"
          required
        />
        <input
          type="text"
          placeholder="y(t)"
          value={yExpr}
          onChange={(e) => setYExpr(e.target.value)}
          className="p-2 rounded bg-slate-800 text-white border border-slate-600 focus:outline-none"
          required
        />
        <input
          type="number"
          placeholder="t₀"
          value={t0}
          onChange={(e) => setT0(e.target.value)}
          className="p-2 rounded bg-slate-800 text-white border border-slate-600 focus:outline-none"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold py-2 px-4 rounded"
      >
        Visualize Tangent Line
      </button>
    </form>
  );
};

export default TangentLineForm;
