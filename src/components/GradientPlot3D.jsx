import React from "react";
import Plot from "react-plotly.js";

const GradientPlot3D = ({ gradient }) => {
  const origin = [0, 0, 0];
  return (
    <div className="w-full max-w-4xl mx-auto p-4 rounded-md bg-[#0f172a] shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        3D Gradient Vector Visualization
      </h2>
      <Plot
        data={[
          {
            type: "scatter3d",
            mode: "lines+markers+text",
            x: [origin[0], origin[0] + gradient[0]],
            y: [origin[1], origin[1] + gradient[1]],
            z: [origin[2], origin[2] + gradient[2]],
            marker: { size: 4, color: "#22d3ee" },
            line: { width: 6, color: "#22d3ee" },
            text: ["", "∇f"],
            textposition: "top right",
            name: "Gradient ∇f",
          },
        ]}
        layout={{
          scene: {
            xaxis: { title: "X", color: "#f1f5f9" },
            yaxis: { title: "Y", color: "#f1f5f9" },
            zaxis: { title: "Z", color: "#f1f5f9" },
            bgcolor: "#0f172a",
          },
          paper_bgcolor: "#0f172a",
          margin: { l: 0, r: 0, b: 0, t: 20 },
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "450px" }}
      />
    </div>
  );
};

export default GradientPlot3D;
