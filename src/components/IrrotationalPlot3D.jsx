import React from "react";
import Plot from "react-plotly.js";
import * as math from "mathjs";

const IrrotationalPlot3D = ({ field, point }) => {
  const x = parseFloat(point.x);
  const y = parseFloat(point.y);
  const z = parseFloat(point.z);

  // Safely evaluate vector components at the point using mathjs
  const scope = { x, y, z };
  const u = math.evaluate(field.Fx, scope);
  const v = math.evaluate(field.Fy, scope);
  const w = math.evaluate(field.Fz, scope);

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg sm:text-xl font-semibold text-white text-center mb-4">
        3D Vector Field at Given Point
      </h2>
      <div className="w-full h-[400px] sm:h-[500px]">
        <Plot
          data={[
            {
              type: "cone",
              x: [x],
              y: [y],
              z: [z],
              u: [u],
              v: [v],
              w: [w],
              showscale: false,
              colorscale: "Viridis",
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
            margin: { l: 0, r: 0, b: 0, t: 0 },
          }}
          config={{ responsive: true }}
          style={{ width: "100%", height: "100%" }}
          useResizeHandler={true}
        />
      </div>
    </div>
  );
};

export default IrrotationalPlot3D;
