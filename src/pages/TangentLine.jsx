// pages/TangentLine.jsx
import React, { useState } from "react";
import TangentLineForm from "../components/TangentLineForm";
import TangentLinePlot3D from "../components/TangentLinePlot3D";
import { evaluate, derivative, parse } from "mathjs";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { useNavigate, Link } from "react-router-dom"; // Fix import
import Sidebar from "../components/SideBar";
import { Button } from "@/components/ui/button";
const TangentLine = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = ({ xExpr, yExpr, t0 }) => {
    try {
      const xFunc = parse(xExpr);
      const yFunc = parse(yExpr);

      const xVal = evaluate(xExpr, { t: t0 });
      const yVal = evaluate(yExpr, { t: t0 });

      const dxdt = derivative(xFunc, "t").evaluate({ t: t0 });
      const dydt = derivative(yFunc, "t").evaluate({ t: t0 });

      const curvePoints = Array.from({ length: 100 }, (_, i) => {
        const t = i / 10;
        return {
          x: evaluate(xExpr, { t }),
          y: evaluate(yExpr, { t }),
          z: t,
        };
      });

      const tangentPoints = [
        { x: xVal - dxdt, y: yVal - dydt, z: t0 - 1 },
        { x: xVal, y: yVal, z: t0 },
        { x: xVal + dxdt, y: yVal + dydt, z: t0 + 1 },
      ];

      setData({ curve: curvePoints, tangent: tangentPoints });
      setError("");
    } catch (err) {
      console.error("Tangent line error:", err);
      setError("❌ Invalid expression or value. Check inputs.");
      setData(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#1e293b] rounded-2xl text-white px-4 py-6">
      {/* Back Button */}
      
      <Sidebar/>
     

      {/* Title */}
      <h1 className="text-3xl md:text-4xl text-purple-400 text-pur font-bold text-center mb-8">
        Tangent Line Finder
      </h1>

      {/* Input Form */}
      <div className="max-w-3xl mx-auto">
        <TangentLineForm onSubmit={handleSubmit} />
      </div>

      {/* Error Display */}
      {error && (
        <p className="text-red-500 text-center mt-6 font-medium">{error}</p>
      )}

      {/* Plot and Description */}
      {data && (
        <div className="mt-10 space-y-8">
          <TangentLinePlot3D data={data} />
        
        </div>
      )} 
      <div>
        <div className="bg-[#0f172a] p-6 rounded-lg mt-6 shadow max-w-3xl mx-auto border border-purple-500 text-justify leading-relaxed">
            <h2 className="text-xl font-semibold mb-3 text-purple-400">
              Tangent Line Description
            </h2>
            <p>
              A <strong>tangent line</strong> touches a curve at a single point
              and follows the same direction as the curve at that point. Using
              the parametric equations <code>x(t)</code> and{" "}
              <code>y(t)</code>, we compute the derivatives{" "}
              <code>dx/dt</code> and <code>dy/dt</code> at a given{" "}
              <code>t₀</code> to construct the tangent. The 3D plot includes the
              curve and the tangent line in space, with <code>z = t</code>.
            </p>
          </div>
           <div className="mt-6 flex justify-end w-full max-w-3xl mx-auto">
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

export default TangentLine;
