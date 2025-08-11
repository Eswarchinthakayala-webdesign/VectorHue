import React from "react";
import Irrotational from "../components/Irrotational";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/SideBar";

const IrrotationalPage = () => {
  return (
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white py-10 px-4 sm:px-6 lg:px-8 flex flex-col">
      {/* Sidebar */}
      <Sidebar />

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-400 mb-10">
        Irrotational Vector Field Checker
      </h1>

      {/* Irrotational Component (Form + Visualization) */}
      <Irrotational />

      {/* Description Box */}
      <div className="max-w-4xl mx-auto mt-10 border border-purple-500 rounded-lg p-6 bg-[#0f172a] text-center shadow-lg">
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

      {/* Back Button - Bottom Right */}
      <div className="mt-6 flex justify-end w-full max-w-4xl mx-auto w-ful">
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

export default IrrotationalPage;
