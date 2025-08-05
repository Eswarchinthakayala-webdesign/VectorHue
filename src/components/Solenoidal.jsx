import React, { useState } from "react";
import { create, all } from "mathjs";
import SolenoidalVectorPlot3D from "./SolenoidalVectorPlot3D";
import SolenoidalForm from "./SolenoidalForm";


const math = create(all);

const Solenoidal = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = ({ field, point }) => {
    const scope = {
      x: parseFloat(point.x),
      y: parseFloat(point.y),
      z: parseFloat(point.z),
    };

    try {
      const fx = math.parse(field.Fx);
      const fy = math.parse(field.Fy);
      const fz = math.parse(field.Fz);

      const dFxdx = math.derivative(fx, "x").evaluate(scope);
      const dFydy = math.derivative(fy, "y").evaluate(scope);
      const dFzdz = math.derivative(fz, "z").evaluate(scope);

      const divergence = dFxdx + dFydy + dFzdz;

      const vector = [
        fx.evaluate(scope),
        fy.evaluate(scope),
        fz.evaluate(scope),
      ];

      setResult({ point: scope, fieldVec: vector, divergence });
    } catch (err) {
      console.error("Error:", err);
      setResult(null);
    }
  };

  return (
    <div className="px-4 py-6 space-y-8">
      <SolenoidalForm onSubmit={handleSubmit} />
      {result && (
        <SolenoidalVectorPlot3D
          point={result.point}
          fieldVec={result.fieldVec}
          divergence={result.divergence}
        />
      )}
    </div>
  );
};

export default Solenoidal;
