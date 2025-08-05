import React, { useState } from "react";
import NormalDerivativeForm from "../components/NormalDerivativeForm";
import NormalDerivativePlot2D from "../components/NormalDerivativePlot2D";
import NormalDerivativePlot3D from "../components/NormalDerivativePlot3D";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NormalDerivative = () => {
  const [result, setResult] = useState(null);

  const renderPlot = () => {
    if (!result) return null;
    const dim = result.evaluatedGradient.length;

    if (dim === 2) {
      return (
        <NormalDerivativePlot2D
          gradientVec={result.evaluatedGradient}
          normalVec={result.normal}
        />
      );
    }

    if (dim === 3) {
      return (
        <NormalDerivativePlot3D
          gradientVec={result.evaluatedGradient}
          normalVec={result.normal}
        />
      );
    }

    return <p className="text-red-400 mt-4">Unsupported number of dimensions: {dim}</p>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center gap-4">
          <Link to="/">
            <Button variant="outline" className="text-black border-white hover:bg-black cursor-pointer hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-purple-400">Normal Derivative</h1>
        </div>

        <p className="text-lg text-gray-300 mb-8">
          Enter a scalar function (e.g., <code className="text-purple-400">f(x, y, z) = x² + y² + z²</code>) and a normal vector to compute the directional derivative.
        </p>

        <NormalDerivativeForm onSubmit={(res) => setResult(res)} />

        {result && (
          <>
            <div className="mt-8 p-6 rounded-lg border border-purple-700 bg-indigo-950/50 shadow">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">
                Function: <span className="text-white">{result.functionInput}</span>
              </h3>
              <p><strong>Evaluated Gradient:</strong> {JSON.stringify(result.evaluatedGradient)}</p>
              <p><strong>Normal Vector:</strong> {JSON.stringify(result.normal)}</p>
              <p><strong>Normal Derivative:</strong> <span className="text-purple-300">{result.normalDerivative}</span></p>
            </div>

            <div className="mt-10 ">{renderPlot()}</div>
          </>
        )}
        <div className="mt-12 px-6 py-4 max-w-4xl mx-auto border border-purple-300 rounded ">
  <h3 className="text-xl font-bold text-purple-400 mb-2">What is a Normal Derivative?</h3>
  <p className="text-slate-300 text-base leading-relaxed">
    The <span className="text-white font-semibold">normal derivative</span> measures the rate of change of a function
    in the direction of a given normal vector. If you're working on a surface, this helps quantify how quickly the function's value is changing perpendicular to that surface.
    <br /><br />
    It is calculated using the dot product of the gradient vector (∇f) and the unit normal vector (<i>n̂</i>), as:
    <span className="block mt-2 text-center text-lg text-purple-300 font-mono">
      ∂f/∂n = ∇f · n̂
    </span>
    <br />
    This value is useful in boundary value problems, flux analysis, and physics simulations — especially when evaluating flow or change across surfaces.
  </p>
</div>

        
      </div>

    </div>
    
  );
};

export default NormalDerivative;
