// pages/SolenoidalPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Solenoidal from "../components/Solenoidal";
import Sidebar from "../components/SideBar";

const SolenoidalPage = () => {
  return (
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      
      <Sidebar/>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-400">
        Solenoidal Vector Field Checker
      </h1>

      {/* Solenoidal Form */}
      <Solenoidal />

      {/* Description and Formula Box */}
      <div className="max-w-4xl mx-auto mt-10 border border-purple-500 rounded-lg p-6 bg-[#0f172a] text-center shadow-lg">
        <p className="text-lg text-slate-300">
          A vector field <span className="text-white font-semibold">𝐅</span> is <span className="text-white font-semibold">solenoidal</span> if its divergence is zero:
        </p>
        <p className="text-2xl mt-3 text-purple-300 font-mono font-semibold">
          ∇ · 𝐅 = 0
        </p>
        <p className="mt-3 text-slate-400">
          This indicates the field has no net source or sink at any point — common in incompressible fluids and magnetic fields.
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

export default SolenoidalPage;
