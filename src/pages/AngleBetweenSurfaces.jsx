import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button"; // Adjust import path if needed

import AngleBetweenSurfacesForm from "../components/AngleBetweenSurfacesForm";
import AngleBetweenSurfacesPlot3D from "../components/AngleBetweenSurfacesPlot3D";
import Sidebar from "../components/SideBar";

const AngleBetweenSurfaces = () => {
  const [inputData, setInputData] = useState(null);

  const handleFormSubmit = (data) => {
    setInputData(data);
  };

  return (
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white px-4 py-8">
      <Sidebar/>
    

      <h1 className="text-3xl font-bold text-center text-purple-300 mb-8">
        Angle Between Two Surfaces
      </h1>

      <AngleBetweenSurfacesForm onSubmit={handleFormSubmit} />

      {inputData && (
        <div className="mt-10">
          <AngleBetweenSurfacesPlot3D {...inputData} />
        </div>
      )}

      <div className="max-w-4xl mx-auto mt-10 p-6 bg-[#0f172a] backdrop-blur-md rounded-lg border border-purple-300">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          Understanding the Angle Between Surfaces
        </h2>
        <p className="text-white/80 text-lg">
          The <strong>angle between two surfaces</strong> at a point of intersection is defined as the
          angle between their respective <strong>tangent planes</strong> at that point.
          <br /><br />
          Since each tangent plane has a <strong>normal vector</strong>, we compute the angle θ using the dot product of those normals:
          <br />
          <code className="text-purple-300">
            cos(θ) = (N₁ · N₂) / (‖N₁‖ · ‖N₂‖)
          </code>
          <br /><br />
          Where:
          <ul className="list-disc list-inside text-white/70 text-base mt-2">
            <li><strong>N₁</strong> and <strong>N₂</strong> are the normal vectors to the two surfaces</li>
            <li><strong>·</strong> denotes the dot product</li>
            <li><strong>‖N‖</strong> is the magnitude (length) of a vector</li>
          </ul>
          <br />
          This angle gives insight into how the surfaces interact:
          <ul className="list-disc list-inside text-white/70 text-base mt-2">
            <li>Perpendicular surfaces: θ = 90°</li>
            <li>Parallel surfaces: θ = 0°</li>
            <li>Other values indicate intermediate orientations</li>
          </ul>
          <br />
          This concept is especially useful in <strong>calculus, physics, and computer graphics</strong> where surface interactions and orientations are significant.
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

export default AngleBetweenSurfaces;
