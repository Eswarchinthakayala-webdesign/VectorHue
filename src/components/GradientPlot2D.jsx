import React from "react";
import Plot from "react-plotly.js";

const GradientPlot2D = ({ gradient }) => {
  const origin = [0, 0];
  return (
    <div className="w-full max-w-4xl mx-auto p-4 rounded-md bg-[#0f172a] shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        2D Gradient Vector Visualization
      </h2>
      <Plot
        data={[
          {
            x: [origin[0], origin[0] + gradient[0]],
            y: [origin[1], origin[1] + gradient[1]],
            type: "scatter",
            mode: "lines+markers+text",
            marker: { color: "#22d3ee", size: 8 },
            line: { width: 4, color: "#22d3ee" },
            name: "Gradient ∇f",
            text: ["", "∇f"],
            textposition: "top right",
          },
        ]}
        layout={{
          paper_bgcolor: "#0f172a",
          plot_bgcolor: "#0f172a",
          xaxis: { title: "X", color: "#f1f5f9", gridcolor: "#334155" },
          yaxis: { title: "Y", color: "#f1f5f9", gridcolor: "#334155" },
          margin: { l: 40, r: 40, t: 20, b: 40 },
          autosize: true,
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default GradientPlot2D;
