import React from "react";
import Irrotational from "../components/Irrotational";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const IrrotationalPage = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
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

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-400 mb-10">
        Irrotational Vector Field Checker
      </h1>

      {/* Irrotational Component (Form + Visualization) */}
      <Irrotational />

      {/* Description Box */}
      <div className="max-w-3xl mx-auto mt-10 border border-purple-500 rounded-lg p-6 bg-[#0f172a] text-center shadow-lg">
        <p className="text-lg sm:text-xl text-slate-300">
          A vector field <span className="text-white font-semibold">𝐅</span> is{" "}
          <span className="text-white font-semibold">irrotational</span> if its
          curl is zero:
        </p>
        <p className="text-2xl mt-3 text-purple-300 font-mono font-semibold">
          ∇ × 𝐅 = 0
        </p>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          This implies the field has no circulation or rotational component —
          common in conservative fields like gravitational or electrostatic
          fields.
        </p>
      </div>
    </div>
  );
};

export default IrrotationalPage;
