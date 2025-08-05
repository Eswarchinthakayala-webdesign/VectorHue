// components/OrthogonalPlot3D.jsx
import React from "react";
import Plot from "react-plotly.js";
import * as math from "mathjs";

const OrthogonalPlot3D = ({ gradF1, gradF2, point }) => {
  const x = parseFloat(point.x);
  const y = parseFloat(point.y);
  const z = parseFloat(point.z);

  const evaluate = (expr) => math.evaluate(expr, { x, y, z });

  const u1 = evaluate(gradF1[0]);
  const v1 = evaluate(gradF1[1]);
  const w1 = evaluate(gradF1[2]);

  const u2 = evaluate(gradF2[0]);
  const v2 = evaluate(gradF2[1]);
  const w2 = evaluate(gradF2[2]);

  return (
    <div className="mt-10 w-full px-2 sm:px-4 md:px-6 lg:px-8">
      <h2 className="text-xl font-semibold text-white text-center mb-4">
        Gradient Vectors at Point
      </h2>
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <Plot
          data={[
            {
              type: "cone",
              x: [x],
              y: [y],
              z: [z],
              u: [u1],
              v: [v1],
              w: [w1],
              name: "∇f1",
              colorscale: "Blues",
              showscale: false,
            },
            {
              type: "cone",
              x: [x],
              y: [y],
              z: [z],
              u: [u2],
              v: [v2],
              w: [w2],
              name: "∇f2",
              colorscale: "Reds",
              showscale: false,
            },
          ]}
          layout={{
            autosize: true,
            scene: {
              xaxis: { title: "x" },
              yaxis: { title: "y" },
              zaxis: { title: "z" },
            },
            paper_bgcolor: "#020617",
            font: { color: "white" },
            margin: { t: 0, b: 0, l: 0, r: 0 },
          }}
          useResizeHandler
          style={{ width: "100%", height: "100%" }}
          config={{ responsive: true }}
        />
      </div>
    </div>
  );
};

export default OrthogonalPlot3D;
