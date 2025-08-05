import React from "react";
import { evaluate, derivative } from "mathjs";

const UnitNormalVector = ({ equation, point }) => {
  const [x0, y0] = point;

  const fx = derivative(equation, "x").evaluate({ x: x0, y: y0 });
  const fy = derivative(equation, "y").evaluate({ x: x0, y: y0 });

  const N = [-fx, -fy, 1];
  const magnitude = Math.sqrt(N[0] ** 2 + N[1] ** 2 + N[2] ** 2);
  const unitNormal = N.map((c) => +(c / magnitude).toFixed(4));

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
      <h2 className="text-2xl font-bold mb-4 text-purple-400">Unit Normal Vector</h2>
      <p className="text-white/80 text-lg mb-2">
        For the surface <code className="text-purple-300">z = {equation}</code> at point
        <strong> ({x0}, {y0})</strong>:
      </p>
      <p className="text-white text-lg font-semibold">
        ∇f = ({-fx.toFixed(4)}, {-fy.toFixed(4)}, 1)
      </p>
      <p className="text-white mt-4 text-lg">
        <span className="font-semibold">Unit Normal Vector:</span>{" "}
        <code className="text-purple-300">({unitNormal.join(", ")})</code>
      </p>
    </div>
  );
};

export default UnitNormalVector;
