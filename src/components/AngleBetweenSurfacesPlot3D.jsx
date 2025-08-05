import React, { useEffect, useRef, useState } from "react";
import Plotly from "plotly.js-dist-min";
import * as math from "mathjs";

const AngleBetweenSurfacesPlot3D = ({ equation1, equation2, x0, y0 }) => {
  const plotRef = useRef(null);
  const [theta, setTheta] = useState(null);

  useEffect(() => {
    if (!plotRef.current) return;

    const f1 = math.parse(equation1).compile();
    const f2 = math.parse(equation2).compile();
    const dfdx1 = math.derivative(equation1, "x").compile();
    const dfdy1 = math.derivative(equation1, "y").compile();
    const dfdx2 = math.derivative(equation2, "x").compile();
    const dfdy2 = math.derivative(equation2, "y").compile();

    const fxy1 = f1.evaluate({ x: x0, y: y0 });
    const fxy2 = f2.evaluate({ x: x0, y: y0 });

    const dfdxVal1 = dfdx1.evaluate({ x: x0, y: y0 });
    const dfdyVal1 = dfdy1.evaluate({ x: x0, y: y0 });

    const dfdxVal2 = dfdx2.evaluate({ x: x0, y: y0 });
    const dfdyVal2 = dfdy2.evaluate({ x: x0, y: y0 });

    const normal1 = [-dfdxVal1, -dfdyVal1, 1];
    const normal2 = [-dfdxVal2, -dfdyVal2, 1];

    const dot = normal1[0]*normal2[0] + normal1[1]*normal2[1] + normal1[2]*normal2[2];
    const mag1 = Math.sqrt(normal1.reduce((s, v) => s + v * v, 0));
    const mag2 = Math.sqrt(normal2.reduce((s, v) => s + v * v, 0));

    const thetaRad = Math.acos(dot / (mag1 * mag2));
    const thetaDeg = (thetaRad * 180) / Math.PI;
    setTheta(thetaDeg.toFixed(2));

    const xRange = math.range(x0 - 2, x0 + 2, 0.2).toArray();
    const yRange = math.range(y0 - 2, y0 + 2, 0.2).toArray();

    const zSurface1 = xRange.map((x) =>
      yRange.map((y) => {
        try {
          return f1.evaluate({ x, y });
        } catch {
          return null;
        }
      })
    );

    const zSurface2 = xRange.map((x) =>
      yRange.map((y) => {
        try {
          return f2.evaluate({ x, y });
        } catch {
          return null;
        }
      })
    );

    const surface1 = {
      z: zSurface1,
      x: xRange,
      y: yRange,
      type: "surface",
      name: "Surface 1",
      colorscale: "Blues",
      opacity: 0.7,
    };

    const surface2 = {
      z: zSurface2,
      x: xRange,
      y: yRange,
      type: "surface",
      name: "Surface 2",
      colorscale: "Reds",
      opacity: 0.7,
    };

    const layout = {
      title: "Angle Between Surfaces",
      margin: { l: 0, r: 0, b: 0, t: 50 },
      scene: {
        xaxis: { title: "x" },
        yaxis: { title: "y" },
        zaxis: { title: "z" },
      },
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      autosize: true,
    };

    Plotly.newPlot(plotRef.current, [surface1, surface2], layout, {
      responsive: true,
    });

    return () => {
      if (plotRef.current && plotRef.current.data) {
       Plotly.purge(plotRef.current);
}

    };
  }, [equation1, equation2, x0, y0]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div ref={plotRef} className="w-full h-[500px]" />
      {theta && (
        <p className="text-center text-xl text-purple-400 mt-4">
          θ between surfaces at ({x0}, {y0}) = <span className="text-green-400 font-bold">{theta}°</span>
        </p>
      )}
    </div>
  );
};

export default AngleBetweenSurfacesPlot3D;
