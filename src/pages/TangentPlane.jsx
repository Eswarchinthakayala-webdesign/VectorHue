import React, { useState } from 'react';
import TangentPlanePlot3D from '../components/TangentPlanePlot3D';
import TangentPlaneForm from '../components/TangentPlaneForm';
import Sidebar from '../components/SideBar';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft } from 'lucide-react';

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
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white px-4 py-8 sm:px-6 lg:px-12 flex flex-col">
      <Sidebar />

      <div className="max-w-4xl mx-auto w-full space-y-12 flex-grow">
        {/* Tangent Plane Form */}
        <TangentPlaneForm onSubmit={handleFormSubmit} />

        {/* 3D Plot */}
        {planeData && (
          <div className="w-auto h-auto">
            <TangentPlanePlot3D {...planeData} />
          </div>
        )}

        {/* Explanation Section */}
        <div className="bg-[#0f172a] backdrop-blur-md rounded-lg border border-purple-300 p-6 sm:p-8">
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

        {/* Back Button - Bottom Right */}
       <div className="mt-6 flex justify-end w-full max-w-4xl mx-auto">
               <Link to="/">
                 <Button
                   variant="outline"
                   className="text-black border-white hover:text-white hover:bg-black cursor-pointer flex items-center gap-2"
                 >
                   <ChevronLeft className="h-4 w-4 mb-[-3px]" />
                   Back
                 </Button>
               </Link>
             </div>
      </div>
    </div>
  );
};

export default TangentPlane;
