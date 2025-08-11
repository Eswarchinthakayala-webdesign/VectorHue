import React from "react";
import Plot from "react-plotly.js";

const SolenoidalVectorPlot3D = ({ point, fieldVec, divergence }) => {
  const { x, y, z } = point;
  const [fx, fy, fz] = fieldVec;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 p-4 rounded-md bg-[#0f172a] shadow-md">
      <h2 className="text-xl font-semibold text-white text-center mb-4">
        3D Vector Field & Solenoidal Check
      </h2>

      <Plot
        data={[
          {
            type: "scatter3d",
            mode: "lines+markers+text",
            x: [x, x + fx],
            y: [y, y + fy],
            z: [z, z + fz],
            marker: { color: "#34d399", size: 5 },
            line: { width: 6, color: "#34d399" },
            text: ["", "F"],
            textposition: "top right",
            name: "Vector F",
          }
        ]}
        layout={{
          paper_bgcolor: "#0f172a",
          plot_bgcolor: "#0f172a",
          scene: {
            bgcolor: "#0f172a",
            xaxis: { title: "X", color: "white" },
            yaxis: { title: "Y", color: "white" },
            zaxis: { title: "Z", color: "white" }
          },
          margin: { l: 0, r: 0, b: 0, t: 0 },
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "500px" }}
      />

      <div className="text-center text-white mt-4">
        <p className="text-lg">
          <span className="font-semibold">Divergence:</span> {divergence.toFixed(4)}
        </p>
        <p className="text-md mt-2">
          {Math.abs(divergence) < 1e-6
            ? "✅ The vector field is solenoidal (∇·F = 0)"
            : "❌ The vector field is not solenoidal (∇·F ≠ 0)"}
        </p>
      </div>
    </div>
  );
};

export default SolenoidalVectorPlot3D;
