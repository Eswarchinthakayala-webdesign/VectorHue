// components/NormalDerivativePlot3D.jsx
import React from "react";
import Plot from "react-plotly.js";

const NormalDerivativePlot3D = ({ gradientVec, normalVec }) => {
  const origin = [1, 1, 1];

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 p-4 rounded-md bg-[#0f172a] shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        3D Visualization of Gradient ∇f and Normal Vector
      </h2>

      <Plot
        data={[
          {
            type: "scatter3d",
            mode: "lines+markers+text",
            x: [origin[0], origin[0] + gradientVec[0]],
            y: [origin[1], origin[1] + gradientVec[1]],
            z: [origin[2], origin[2] + gradientVec[2]],
            marker: { color: "#22d3ee", size: 5 }, // Cyan-400
            line: { width: 6, color: "#22d3ee" },
            name: "Gradient ∇f",
            text: ["", "∇f"],
            textposition: "top right",
          },
          {
            type: "scatter3d",
            mode: "lines+markers+text",
            x: [origin[0], origin[0] + normalVec[0]],
            y: [origin[1], origin[1] + normalVec[1]],
            z: [origin[2], origin[2] + normalVec[2]],
            marker: { color: "#f43f5e", size: 5 }, // Rose-500
            line: { width: 6, color: "#f43f5e" },
            name: "Normal Vector n",
            text: ["", "n"],
            textposition: "top left",
          },
        ]}
        layout={{
          paper_bgcolor: "#0f172a", // Page background
          plot_bgcolor: "#0f172a",  // Scene background
          scene: {
            bgcolor: "#0f172a",     // Plane background
            xaxis: {
              title: "X",
              titlefont: { color: "#f1f5f9" },
              tickfont: { color: "#cbd5e1" },
              gridcolor: "#334155",
              zerolinecolor: "#475569",
            },
            yaxis: {
              title: "Y",
              titlefont: { color: "#f1f5f9" },
              tickfont: { color: "#cbd5e1" },
              gridcolor: "#334155",
              zerolinecolor: "#475569",
            },
            zaxis: {
              title: "Z",
              titlefont: { color: "#f1f5f9" },
              tickfont: { color: "#cbd5e1" },
              gridcolor: "#334155",
              zerolinecolor: "#475569",
            },
          },
          legend: {
            font: { color: "#f1f5f9" },
            orientation: "h",
            y: -0.1,
          },
          margin: { l: 0, r: 0, b: 0, t: 0 },
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default NormalDerivativePlot3D;
