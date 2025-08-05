// components/NormalDerivativeForm.jsx
import React, { useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

const NormalDerivativeForm = ({ onSubmit }) => {
  const [functionInput, setFunctionInput] = useState("x^2 + y^2 + z^2");
  const [normalInput, setNormalInput] = useState("1, 0, 0");
  const [pointInput, setPointInput] = useState("1, 1, 1");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    try {
      // Parse function and determine variables
      const expr = math.parse(functionInput);
      const variables = Object.keys(expr.filter(node => node.isSymbolNode).reduce((acc, node) => {
        acc[node.name] = true;
        return acc;
      }, {}));

      if (variables.length < 2 || variables.length > 3) {
        throw new Error("Only 2D or 3D vector functions are supported.");
      }

      const compiled = expr.compile();

      const normal = normalInput.split(",").map(Number);
      const point = pointInput.split(",").map(Number);

      if (normal.length !== variables.length || point.length !== variables.length) {
        throw new Error("Dimension mismatch between vector and function.");
      }

      // Gradient calculation
      const gradient = variables.map((v) => {
        const derivative = math.derivative(functionInput, v);
        return derivative;
      });

      const evaluatedGradient = gradient.map((d) =>
        d.evaluate(Object.fromEntries(variables.map((v, i) => [v, point[i]])))
      );

      const dotProduct = math.dot(evaluatedGradient, normal);
      onSubmit({
        functionInput,
        normal,
        point,
        evaluatedGradient,
        normalDerivative: dotProduct.toFixed(4),
      });
    } catch (err) {
      setError(err.message || "An error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-md shadow-md border border-gray-700">
      {error && <p className="text-red-400 font-medium">{error}</p>}

      <div>
        <label className="block mb-1 font-semibold">Scalar Function (f):</label>
        <input
          type="text"
          value={functionInput}
          onChange={(e) => setFunctionInput(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="e.g., x^2 + y^2 + z^2"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Point (x, y, z):</label>
        <input
          type="text"
          value={pointInput}
          onChange={(e) => setPointInput(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="e.g., 1, 1, 1"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold">Normal Vector:</label>
        <input
          type="text"
          value={normalInput}
          onChange={(e) => setNormalInput(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
          placeholder="e.g., 1, 0, 0"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded cursor-pointer"
      >
        Compute Normal Derivative
      </button>
    </form>
  );
};

export default NormalDerivativeForm;
