// src/pages/DirectionalDerivative.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import * as math from "mathjs";

export default function DirectionalDerivative() {
  const [functionInput, setFunctionInput] = useState("");
  const [pointInput, setPointInput] = useState("");
  const [directionInput, setDirectionInput] = useState("");
  const [result, setResult] = useState(null);

  const parseVector = (input) => input.split(",").map(Number);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const scope = {};
      const point = parseVector(pointInput);
      const direction = parseVector(directionInput);

      if (point.length !== direction.length) {
        setResult("Error: Point and direction vector must be of same dimension.");
        return;
      }

      const variables = ["x", "y", "z"].slice(0, point.length);
      const expr = math.parse(functionInput);

      // Compute gradient ∇f
      const gradient = variables.map((v) =>
        math.derivative(expr, v).evaluate(
          Object.fromEntries(variables.map((v, i) => [v, point[i]]))
        )
      );

      // Normalize direction vector
      const mag = Math.sqrt(direction.reduce((sum, val) => sum + val * val, 0));
      if (mag === 0) {
        setResult("Error: Direction vector cannot be zero.");
        return;
      }
      const unitVector = direction.map((val) => val / mag);

      // Dot product ∇f • u
      const directionalDerivative = gradient.reduce(
        (sum, val, i) => sum + val * unitVector[i],
        0
      );

      setResult(`∇f • u = ${directionalDerivative.toFixed(4)}`);
    } catch (err) {
      setResult("Error: Invalid input or function.");
    }
  };

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-tr from-gray-950 via-black to-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6 flex items-center justify-center gap-4">
          <Link to="/">
            <Button variant="outline" className="text-black border-white hover:bg-black hover:text-white cursor-pointer">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-purple-400">Directional Derivative Calculator</h1>
        </div>

        <p className="text-gray-400 mb-6">
          Enter a scalar function, a point, and a direction vector to compute the directional derivative.
        </p>

        <Card className="bg-white/5 border border-white/10 p-6">
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label className="text-white pb-3">Scalar Function f(x, y, z)</Label>
                <Input
                  placeholder="e.g., x^2 + y^2 + z^2"
                  value={functionInput}
                  onChange={(e) => setFunctionInput(e.target.value)}
                  className="bg-black/30 text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <Label className="text-white pb-3">Point of Evaluation</Label>
                <Input
                  placeholder="e.g., 1,2,3"
                  value={pointInput}
                  onChange={(e) => setPointInput(e.target.value)}
                  className="bg-black/30 text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <Label className="text-white pb-3">Direction Vector</Label>
                <Input
                  placeholder="e.g., 1,0,0"
                  value={directionInput}
                  onChange={(e) => setDirectionInput(e.target.value)}
                  className="bg-black/30 text-white placeholder:text-white/50"
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 cursor-pointer ">
                Calculate Directional Derivative
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <div className="mt-8 bg-black/30 p-4 rounded-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-purple-400">Result</h2>
            <p className="text-white mt-2">{result}</p>
          </div>
        )}

        <div className="mt-8 bg-black/30 p-4 rounded-lg border border-purple-300">
  <h3 className="text-lg font-semibold text-purple-400">Directional Derivative Vector to a Surface</h3>
  <p>
    The <strong>directional derivative</strong> represents the rate at which a function changes at a point in a specified direction.
    On a 3D surface, the directional derivative vector shows how steeply the surface rises or falls from a given point in that direction.
    It is computed by taking the dot product of the gradient vector and the direction unit vector.
  </p>
  <p className="text-gray-400">
    Geometrically, this vector lies tangent to the surface and points in the direction of the greatest rate of change, 
    scaled by the magnitude of the directional derivative. This is like walking on a hill and observing how steep it feels
    depending on the direction you choose.
  </p>
</div>

      </div>
    </div>
  );
}