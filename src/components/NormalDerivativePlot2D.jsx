// components/NormalDerivativePlot2D.jsx
import React from "react";
import Plot from "react-plotly.js";

const NormalDerivativePlot2D = ({ gradientVec, normalVec }) => {
  const origin = [1, 1]; // You can update this as needed

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 p-4 rounded-md bg-[#0f172a] border border-purple-600 shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        2D Vector Visualization of ∇f and Normal Vector
      </h2>

      <Plot
        data={[
          {
            x: [origin[0], origin[0] + gradientVec[0]],
            y: [origin[1], origin[1] + gradientVec[1]],
            type: "scatter",
            mode: "lines+markers+text",
            marker: { color: "#22d3ee", size: 6 },
            line: { width: 4, color: "#22d3ee" },
            name: "Gradient ∇f",
            text: ["", "∇f"],
            textposition: "top right",
          },
          {
            x: [origin[0], origin[0] + normalVec[0]],
            y: [origin[1], origin[1] + normalVec[1]],
            type: "scatter",
            mode: "lines+markers+text",
            marker: { color: "#f43f5e", size: 6 },
            line: { width: 4, color: "#f43f5e" },
            name: "Normal Vector n",
            text: ["", "n"],
            textposition: "top left",
          },
        ]}
        layout={{
          paper_bgcolor: "#0f172a",
          plot_bgcolor: "#0f172a",
          xaxis: {
            title: "X",
            color: "#f1f5f9",
            gridcolor: "#334155",
            zerolinecolor: "#475569",
            showspikes: false,
          },
          yaxis: {
            title: "Y",
            color: "#f1f5f9",
            gridcolor: "#334155",
            zerolinecolor: "#475569",
            showspikes: false,
          },
          legend: {
            font: { color: "#f1f5f9" },
            orientation: "h",
            y: -0.2,
          },
          margin: { l: 40, r: 40, t: 20, b: 40 },
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "450px" }}
      />
    </div>
  );
};

export default NormalDerivativePlot2D;
