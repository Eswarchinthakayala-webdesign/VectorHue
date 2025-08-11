import React, { useState } from "react";
import * as math from "mathjs";
import IrrotationalForm from "./IrrotationalForm";
import IrrotationalPlot3D from "./IrrotationalPlot3D";

const Irrotational = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = ({ field, point }) => {
    const { Fx, Fy, Fz } = field;

    const curl = {
      i: `${math.derivative(Fz, "y")} - ${math.derivative(Fy, "z")}`,
      j: `${math.derivative(Fx, "z")} - ${math.derivative(Fz, "x")}`,
      k: `${math.derivative(Fy, "x")} - ${math.derivative(Fx, "y")}`,
    };

    const simplifiedCurl = {
      i: math.simplify(curl.i).toString(),
      j: math.simplify(curl.j).toString(),
      k: math.simplify(curl.k).toString(),
    };

    const isIrrotational =
      simplifiedCurl.i === "0" &&
      simplifiedCurl.j === "0" &&
      simplifiedCurl.k === "0";

    setResult({ field, point, simplifiedCurl, isIrrotational });
  };

  return (
    <div className="w-full">
      {/* Form */}
      <IrrotationalForm onSubmit={handleSubmit} />

      {/* Result Box */}
      {result && (
        <div className="max-w-4xl mx-auto mt-6 p-6 sm:p-8 border border-purple-500 bg-[#0f172a] rounded-xl text-center text-white shadow-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-4">Irrotational Check Result</h3>

          <p className="text-sm sm:text-base text-slate-300 mb-2">Curl of the vector field:</p>
          <p className="text-purple-300 font-mono text-lg sm:text-xl">
            ⟨{result.simplifiedCurl.i}, {result.simplifiedCurl.j}, {result.simplifiedCurl.k}⟩
          </p>

          <p className="mt-4 text-base sm:text-lg font-semibold">
            {result.isIrrotational ? (
              <span className="text-green-400">✅ The vector field is Irrotational</span>
            ) : (
              <span className="text-red-400">❌ The vector field is NOT Irrotational</span>
            )}
          </p>

          {/* 3D Plot */}
          <div className="mt-6">
            <IrrotationalPlot3D field={result.field} point={result.point} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Irrotational;
