import React, { useState } from "react";
import { Link } from "react-router-dom";
import GradientForm from "@/components/GradientForm";
import GradientPlot2D from "@/components/GradientPlot2D";
import GradientPlot3D from "@/components/GradientPlot3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Sidebar from "../components/SideBar";

export default function GradientPage() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = ({ functionInput, variables, gradient }) => {
    setResult({ functionInput, variables, gradient });
  };

  return (
    <main className="min-h-screen rounded-2xl bg-[#1e293b] text-white py-10 px-4 flex flex-col items-center">
      {/* Sidebar */}
      <Sidebar />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-purple-400 text-center">
        Gradient Calculator
      </h1>

      {/* Form */}
      <GradientForm onSubmit={handleFormSubmit} />

      {/* Result Display */}
      {result && (
        <div className="mt-10 w-full max-w-5xl flex flex-col items-center gap-6">
          <div className="text-lg text-center">
            <p>
              <strong className="text-purple-400">Function:</strong>{" "}
              {result.functionInput}
            </p>
            <p>
              <strong className="text-purple-400">Variables:</strong>{" "}
              {result.variables.join(", ")}
            </p>
            <p>
              <strong className="text-purple-400">Gradient:</strong>{" "}
              {JSON.stringify(result.gradient)}
            </p>
          </div>

          {/* Plots */}
          {result.gradient.length === 2 && (
            <GradientPlot2D gradient={result.gradient} />
          )}
          {result.gradient.length === 3 && (
            <GradientPlot3D gradient={result.gradient} />
          )}
        </div>
      )}

      {/* Description */}
     {/* Description */}
<div className="mt-10 text-white/80 bg-[#0f172a] text-sm max-w-4xl border border-purple-300 rounded text-center leading-relaxed px-6 py-4">
  <h2 className="text-lg font-semibold text-purple-400 mb-2 mt-2">
    What is a Gradient?
  </h2>
  <p>
    In multivariable calculus, the <strong>gradient</strong> of a scalar
    function points in the direction of the greatest rate of increase of
    the function. It is a vector composed of the partial derivatives with
    respect to each variable.
  </p>
  <p className="mt-2">
    For a function <em>f(x, y, z)</em>, the gradient is:
    <br />
    <code className="bg-black/30 px-2 py-1 text-purple-400 rounded mt-1 inline-block">
      ∇f = [ ∂f/∂x, ∂f/∂y, ∂f/∂z ]
    </code>
  </p>
  <p className="mt-2 mb-1">
    This vector not only indicates the direction in which the function
    increases most rapidly but its magnitude tells how steep the ascent
    is in that direction.
  </p>
</div>

{/* Back Button outside, aligned right */}
<div className="mt-6 flex justify-end w-full max-w-4xl">
  <Link to="/">
    <Button
      variant="outline"
      className="text-black border-white hover:bg-black hover:text-white cursor-pointer"
    >
      <ChevronLeft className="h-4 w-4 mb-[-3px]" /> Back
    </Button>
  </Link>
</div>





    </main>
  );
}
