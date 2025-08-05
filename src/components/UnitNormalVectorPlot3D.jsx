import React, { useEffect, useRef, useState } from "react";
import Plotly from "plotly.js-dist-min";
import { create, all } from "mathjs";

const math = create(all);

const UnitNormalVectorPlot3D = ({ surface, point }) => {
  const plotRef = useRef(null);
  const [unitNormalVec, setUnitNormalVec] = useState(null);

  useEffect(() => {
    try {
      const { x, y, z } = point;
      const x0 = parseFloat(x);
      const y0 = parseFloat(y);
      const z0 = parseFloat(z);

      const f = math.parse(surface);
      const scope = { x: x0, y: y0, z: z0 };

      const dFdx = math.derivative(f, "x").evaluate(scope);
      const dFdy = math.derivative(f, "y").evaluate(scope);
      const dFdz = math.derivative(f, "z").evaluate(scope);

      const magnitude = Math.sqrt(dFdx ** 2 + dFdy ** 2 + dFdz ** 2);

      const unit = [
        parseFloat((dFdx / magnitude).toFixed(4)),
        parseFloat((dFdy / magnitude).toFixed(4)),
        parseFloat((dFdz / magnitude).toFixed(4)),
      ];

      setUnitNormalVec(unit);

      const data = [
        {
          type: "scatter3d",
          mode: "lines+markers+text",
          x: [x0, x0 + unit[0]],
          y: [y0, y0 + unit[1]],
          z: [z0, z0 + unit[2]],
          marker: { size: 5, color: "#f43f5e" }, // Rose
          line: { width: 6, color: "#f43f5e" },
          name: "Unit Normal Vector",
          text: ["", "n̂"],
          textposition: "top right",
        },
        {
          type: "scatter3d",
          mode: "markers+text",
          x: [x0],
          y: [y0],
          z: [z0],
          marker: { size: 6, color: "#facc15" }, // Yellow
          name: "Point on Surface",
          text: ["P(x,y,z)"],
          textposition: "bottom center",
        },
      ];

      const layout = {
        paper_bgcolor: "#0f172a",
        plot_bgcolor: "#0f172a",
        scene: {
          bgcolor: "#0f172a",
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
      };

      Plotly.newPlot(plotRef.current, data, layout, { responsive: true });
    } catch (err) {
      console.error("Error in UnitNormalVectorPlot3D:", err);
      setUnitNormalVec(null);
    }
  }, [surface, point]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 p-4 rounded-md bg-[#0f172a] shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        3D Visualization of Unit Normal Vector
      </h2>

      {/* Plot */}
      <div ref={plotRef} className="w-full h-[500px]" />

      {/* Display Unit Vector */}
      {unitNormalVec && (
        <div className="mt-6 p-4 rounded-md bg-slate-800 text-white text-center shadow-inner">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            Unit Normal Vector (n̂)
          </h3>
          <p className="text-purple-300 text-lg">
            n̂ = ({unitNormalVec[0]}, {unitNormalVec[1]}, {unitNormalVec[2]})
          </p>
        </div>
      )}
    </div>
  );
};

export default UnitNormalVectorPlot3D;
