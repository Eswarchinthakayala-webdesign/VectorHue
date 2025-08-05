import React, { useState } from "react";
import * as math from "mathjs";
import OrthogonalForm from "./OrthogonalForm";
import OrthogonalPlot3D from "./OrthogonalPlot3D";

const Orthogonal = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = ({ f1, f2, point }) => {
    const gradF1 = [
      math.simplify(math.derivative(f1, "x")).toString(),
      math.simplify(math.derivative(f1, "y")).toString(),
      math.simplify(math.derivative(f1, "z")).toString(),
    ];

    const gradF2 = [
      math.simplify(math.derivative(f2, "x")).toString(),
      math.simplify(math.derivative(f2, "y")).toString(),
      math.simplify(math.derivative(f2, "z")).toString(),
    ];

    const dotProduct = math.simplify(
      `${gradF1[0]} * ${gradF2[0]} + ${gradF1[1]} * ${gradF2[1]} + ${gradF1[2]} * ${gradF2[2]}`
    ).toString();

    const isOrthogonal = dotProduct === "0";

    setResult({ gradF1, gradF2, dotProduct, isOrthogonal, point });
  };

  return (
    <div className="w-full">
      <OrthogonalForm onSubmit={handleSubmit} />
      
      {result && (
        <div className="max-w-3xl mx-auto mt-6 p-4 sm:p-6 border border-purple-500 bg-[#0f172a] rounded-xl text-center text-white shadow-md">
          <h3 className="text-lg sm:text-xl font-bold mb-3">Orthogonality Check Result</h3>

          <p className="mb-2 text-slate-300 text-sm sm:text-base">Gradient Vectors:</p>

          <p className="text-purple-300 font-mono text-sm sm:text-lg break-all">
            ∇f₁ = ⟨{result.gradF1.join(", ")}⟩
          </p>
          
          <p className="text-purple-300 font-mono text-sm sm:text-lg mt-1 break-all">
            ∇f₂ = ⟨{result.gradF2.join(", ")}⟩
          </p>

          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            Dot Product:{" "}
            <span className="text-purple-300 font-mono">{result.dotProduct}</span>
          </p>

          <p className="mt-4 font-semibold text-sm sm:text-lg">
            {result.isOrthogonal
              ? "✅ The surfaces are Orthogonal at the point"
              : "❌ The surfaces are NOT Orthogonal at the point"}
          </p>

          <div className="mt-6 overflow-x-auto">
            <OrthogonalPlot3D
              gradF1={result.gradF1}
              gradF2={result.gradF2}
              point={result.point}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Orthogonal;
