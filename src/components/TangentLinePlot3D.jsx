// components/TangentLinePlot3D.jsx
import React from "react";
import Plot from "react-plotly.js";

const TangentLinePlot3D = ({ data }) => {
  const { curve, tangent } = data;

  return (
    <div className="mt-10 max-w-6xl mx-auto">
      <Plot
        data={[
          {
            x: curve.map((p) => p.x),
            y: curve.map((p) => p.y),
            z: curve.map((p) => p.z),
            mode: "lines",
            type: "scatter3d",
            name: "Parametric Curve",
            line: { width: 4 },
          },
          {
            x: tangent.map((p) => p.x),
            y: tangent.map((p) => p.y),
            z: tangent.map((p) => p.z),
            mode: "lines+markers",
            type: "scatter3d",
            name: "Tangent Line",
            marker: { size: 4 },
            line: { dash: "dashdot", width: 4 },
          },
        ]}
        layout={{
          autosize: true,
          title: "3D Tangent Line Visualization",
          scene: {
            xaxis: { title: "X(t)" },
            yaxis: { title: "Y(t)" },
            zaxis: { title: "t" },
          },
          paper_bgcolor: "#1e293b",
          plot_bgcolor: "#1e293b",
          font: { color: "#ffffff" },
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
};

export default TangentLinePlot3D;
