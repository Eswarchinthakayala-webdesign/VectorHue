import React, { useState } from 'react';
import TangentPlanePlot3D from '../components/TangentPlanePlot3D';
import TangentPlaneForm from '../components/TangentPlaneForm';

const TangentPlane = () => {
  const [planeData, setPlaneData] = useState(null);

  const handleFormSubmit = (data) => {
    if (!data || typeof data.x0 !== 'number' || typeof data.y0 !== 'number') {
      console.error('Invalid point format. Must be { x0, y0, ... }');
      return;
    }
    setPlaneData(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-4 py-8 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto w-full space-y-12">
        {/* Tangent Plane Form */}
        <TangentPlaneForm onSubmit={handleFormSubmit} />

        {/* 3D Plot */}
        {planeData && (
          <div className="w-auto  h-auto">
            <TangentPlanePlot3D {...planeData} />
          </div>
        )}

        {/* Explanation Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg border border-purple-300 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400">
            What is a Tangent Plane?
          </h2>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed">
            A <strong>tangent plane</strong> to a surface <code>z = f(x, y)</code> at a point <code>(x₀, y₀)</code> is the plane that just "touches" the surface at that point and matches its slope in both the x and y directions.
            <br /><br />
            The equation of the tangent plane is:
            <br />
            <code className="text-purple-400">
              z = f(x₀, y₀) + (∂f/∂x)(x - x₀) + (∂f/∂y)(y - y₀)
            </code>
            <br /><br />
            It’s useful in multivariable calculus, especially for approximations and understanding local behavior of surfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TangentPlane;
