import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";
import * as math from "mathjs";

const TangentPlanePlot3D = ({ equation, x0, y0, fxy, dfdxVal, dfdyVal }) => {
  const plotRef = useRef(null);

  useEffect(() => {
    if (!plotRef.current || !equation) return;

    const xRange = math.range(x0 - 2, x0 + 2, 0.2).toArray();
    const yRange = math.range(y0 - 2, y0 + 2, 0.2).toArray();
    const parsed = math.parse(equation).compile();

    // Evaluate original surface
    const zSurface = xRange.map((x) =>
      yRange.map((y) => {
        try {
          return parsed.evaluate({ x, y });
        } catch {
          return null;
        }
      })
    );

    // Evaluate tangent plane
    const zPlane = xRange.map((x) =>
      yRange.map((y) => fxy + dfdxVal * (x - x0) + dfdyVal * (y - y0))
    );

    const surface = {
      z: zSurface,
      x: xRange,
      y: yRange,
      type: "surface",
      name: "Surface",
      colorscale: "Viridis",
      opacity: 0.8,
    };

    const plane = {
      z: zPlane,
      x: xRange,
      y: yRange,
      type: "surface",
      name: "Tangent Plane",
      colorscale: "YlOrRd",
      showscale: false,
      opacity: 0.6,
    };

    const point = {
      type: "scatter3d",
      mode: "markers",
      x: [x0],
      y: [y0],
      z: [fxy],
      marker: {
        size: 6,
        color: "red",
      },
      name: "Point of Tangency",
    };

    const layout = {
      title: "Tangent Plane Visualization",
      margin: { l: 0, r: 0, b: 0, t: 40 },
      scene: {
        xaxis: { title: "x", color: "#f1f5f9" },
        yaxis: { title: "y", color: "#f1f5f9" },
        zaxis: { title: "z", color: "#f1f5f9" },
        bgcolor: "#0f172a",
      },
      paper_bgcolor: "#0f172a",
      plot_bgcolor: "#0f172a",
      autosize: true,
      responsive: true,
    };

    Plotly.newPlot(plotRef.current, [surface, plane, point], layout, {
      responsive: true,
    });

    // Handle resize
    const handleResize = () => {
      if (plotRef.current) {
        Plotly.Plots.resize(plotRef.current);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (plotRef.current && plotRef.current.data) {
        Plotly.purge(plotRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [equation, x0, y0, fxy, dfdxVal, dfdyVal]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 rounded-md bg-[#0f172a] shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        3D Surface and Tangent Plane
      </h2>
      <div
        ref={plotRef}
        className="w-full"
        style={{ height: "500px", minHeight: "400px" }}
      />
    </div>
  );
};

export default TangentPlanePlot3D;
