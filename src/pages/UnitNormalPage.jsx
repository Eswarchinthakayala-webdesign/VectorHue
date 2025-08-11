import React, { useState } from "react";
import UnitNormalForm from "../components/UnitNormalForm";
import UnitNormalVectorPlot3D from "../components/UnitNormalVectorPlot3D";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/SideBar";

const UnitNormalPage = () => {
  const [inputData, setInputData] = useState(null);
  const [unitVector, setUnitVector] = useState(null);

  const handleFormSubmit = (data) => {
    setInputData(data);
  };

  const handleUnitVectorResult = (vector) => {
    setUnitVector(vector);
  };

  return (
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white px-4 py-8">
      {/* Back Button */}
      <Sidebar/>
      

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center text-purple-300 mb-8">
        Unit Normal Vector to a Surface
      </h1>

      {/* Input Form */}
      <div className="max-w-4xl mx-auto">
        <UnitNormalForm onSubmit={handleFormSubmit} />
      </div>

      {/* Plot and Output */}
      {inputData && (
        <div className="mt-10 flex flex-col items-center gap-6">
          <UnitNormalVectorPlot3D {...inputData} onResult={handleUnitVectorResult} />
          
          {unitVector && (
            <div className="text-white/90 text-center text-lg px-4 py-4 rounded-lg bg-white/10 border border-white/20 max-w-xl w-full">
              <h3 className="text-xl font-semibold text-purple-300 mb-2">Unit Normal Vector:</h3>
              <code className="text-white text-lg">
                ({unitVector[0].toFixed(3)}, {unitVector[1].toFixed(3)}, {unitVector[2].toFixed(3)})
              </code>
            </div>
          )}
        </div>
      )}

      {/* Explanation Section */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#0f172a] backdrop-blur-md rounded-lg border border-purple-300">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          Understanding Unit Normal Vectors
        </h2>
        <p className="text-white/80 text-lg">
          The <strong>unit normal vector</strong> at a point on a surface is the normalized vector
          perpendicular to the tangent plane at that point.
          <br /><br />
          If the surface is defined implicitly as <code className="text-purple-300">F(x, y, z) = 0</code>,
          then the gradient vector ∇F(x, y, z) = (∂F/∂x, ∂F/∂y, ∂F/∂z) gives the direction of the normal.
          <br /><br />
          The <strong>unit normal</strong> is:
          <br />
          <code className="text-purple-300">
            N̂ = ∇F / ‖∇F‖
          </code>
          <br /><br />
          This is widely used in surface analysis, computer graphics, and physics.
        </p>
      </div>
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
  );
};

export default UnitNormalPage;
