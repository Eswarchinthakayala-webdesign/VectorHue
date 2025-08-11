import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import ScalarPotential from "../components/ScalarPotential";
import Sidebar from "../components/SideBar";

const ScalarPotentialPage = () => {
  return (
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white py-10 px-6 flex flex-col">
      {/* Sidebar */}
      <Sidebar />

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-purple-400 text-center mb-8">
        Scalar Potential Finder
      </h1>

      {/* Tool Component */}
      <ScalarPotential />

      {/* Description Box */}
      <div className="w-full max-w-4xl mx-auto mt-8 border border-purple-500 rounded-lg p-6 bg-[#0f172a] text-center shadow-lg">
        <p className="text-lg text-slate-300">
          A vector field is{" "}
          <span className="text-white font-semibold">conservative</span> if it
          can be written as the gradient of a scalar function.
        </p>
        <p className="text-2xl mt-3 text-purple-300 font-mono font-semibold">
          ∇ϕ = F
        </p>
        <p className="mt-3 text-slate-400">
          This tool finds ϕ such that the given vector field F = ⟨F
          <sub>x</sub>, F<sub>y</sub>, F<sub>z</sub>⟩ is the gradient of ϕ.
        </p>
      </div>

      {/* Back Button - aligned bottom right */}
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

export default ScalarPotentialPage;
