import React from "react";
import Orthogonal from "../components/Orthogonal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrthogonalPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white py-6 px-4 sm:px-6 lg:px-10">
      <div className="mb-6">
        <Link to="/">
          <Button
            variant="outline"
            className="text-black border-white hover:text-white hover:bg-black cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
        Orthogonal Surfaces Visualizer
      </h1>

      <Orthogonal />

      <div className="max-w-3xl mx-auto mt-8 border border-purple-500 rounded-lg p-4 sm:p-6 bg-[#0f172a] text-center shadow-lg">
        <p className="text-base sm:text-lg text-slate-300">
          Two surfaces are <span className="text-white font-semibold">orthogonal</span> if their normal vectors are perpendicular at the point of intersection.
        </p>
        <p className="text-xl sm:text-2xl mt-3 text-purple-300 font-mono font-semibold">
          ∇f · ∇g = 0
        </p>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          This means the dot product of their gradients at the point is zero.
        </p>
      </div>
    </div>
  );
};

export default OrthogonalPage;
