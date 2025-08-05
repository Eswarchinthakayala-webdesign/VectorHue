// components/ScalarPotential.jsx
import React, { useState } from "react";
import ScalarPotentialForm from "./ScalarPotentialForm";
import nerdamer from "nerdamer";
import "nerdamer/Calculus";

const ScalarPotential = () => {
  const [potential, setPotential] = useState("");

  const handleSubmit = ({ Fx, Fy, Fz }) => {
    try {
      const φx = nerdamer.integrate(Fx, "x").toString();
      const φy = nerdamer.integrate(Fy, "y").toString();
      const φz = nerdamer.integrate(Fz, "z").toString();

      // Combine and simplify (add constants only once)
      const φ = nerdamer(`(${φx}) + (${φy}) + (${φz})`).toString();
      setPotential(φ);
    } catch (err) {
      setPotential("Error: Invalid expressions");
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <ScalarPotentialForm onSubmit={handleSubmit} />
      {potential && (
        <div className="mt-8 bg-slate-900 p-4 rounded text-white max-w-xl mx-auto">
          <h3 className="text-lg font-semibold text-purple-500 mb-2">Scalar Potential φ(x, y, z):</h3>
          <p className="text-green-400 text-lg break-words">{potential}</p>
        </div>
      )}
    </div>
  );
};

export default ScalarPotential;
