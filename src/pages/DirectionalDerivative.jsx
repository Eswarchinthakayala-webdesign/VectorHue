// src/pages/DirectionalDerivative.jsx
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import * as math from "mathjs";
import Sidebar from "../components/SideBar";

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
    <div className="min-h-screen p-6 text-white bg-[#1e293b] rounded-2xl">
      <Sidebar />
      <div className="max-w-4xl mx-auto ">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-purple-400">
            Directional Derivative Calculator
          </h1>
        </div>

        <p className="text-gray-400 mb-6">
          Enter a scalar function, a point, and a direction vector to compute
          the directional derivative.
        </p>

        <Card className="bg-[#0f172a] border border-purple-400 p-6">
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <Label className="text-white pb-3">Scalar Function f(x, y, z)</Label>
                <Input
                  placeholder="e.g., x^2 + y^2 + z^2"
                  value={functionInput}
                  onChange={(e) => setFunctionInput(e.target.value)}
                  className="bg-[#1e293b] text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <Label className="text-white pb-3">Point of Evaluation</Label>
                <Input
                  placeholder="e.g., 1,2,3"
                  value={pointInput}
                  onChange={(e) => setPointInput(e.target.value)}
                  className="bg-[#1e293b] text-white placeholder:text-white/50"
                />
              </div>

              <div>
                <Label className="text-white pb-3">Direction Vector</Label>
                <Input
                  placeholder="e.g., 1,0,0"
                  value={directionInput}
                  onChange={(e) => setDirectionInput(e.target.value)}
                  className="bg-[#1e293b] text-white placeholder:text-white/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 cursor-pointer"
              >
                Calculate Directional Derivative
              </Button>
            </form>
          </CardContent>
        </Card>

        {result && (
          <div className="mt-8 bg-[#0f172a] p-4 rounded-lg border border-gray-700">
            <h2 className="text-lg font-semibold text-purple-400">Result</h2>
            <p className="text-green-400 mt-2">{result}</p>
          </div>
        )}

        <div className="mt-8 bg-[#0f172a] p-4 rounded-lg border border-purple-300">
          <h3 className="text-lg font-semibold text-purple-400">
            Directional Derivative Vector to a Surface
          </h3>
          <div className="space-y-4">
            <p>
              The <strong>directional derivative</strong> of a scalar function{" "}
              <em> f(x, y, z) </em> at a point <em>P</em> in the direction of a
              unit vector <strong> u </strong> represents the rate at which the
              function changes at that point in that direction. It is defined as:
            </p>

            <p className="text-center font-bold text-purple-500">
              D<sub>u</sub>f(P) = ∇f(P) · <strong>u</strong>
            </p>

            <p>
              Here, <strong>∇f(P)</strong> is the gradient vector{" "}
              <strong> (∂f/∂x, ∂f/∂y, ∂f/∂z) </strong> evaluated at <em>P</em>,
              and the dot product with <strong>u</strong> projects the gradient
              in the desired direction.
            </p>

            <p className="text-gray-400">
              Geometrically, the gradient vector <strong>∇f(P)</strong> points
              in the direction of the greatest rate of increase of <em>f</em>.
              The directional derivative scales this by the cosine of the angle
              between the gradient and the direction vector:
            </p>

            <p className="text-center text-purple-500 font-bold">
              D<sub>u</sub>f(P) = ||∇f(P)|| · ||<strong>u</strong>|| · cosθ
            </p>

            <p className="text-gray-400">
              On a 3D surface, this can be visualized as the slope you feel when
              walking in a given direction — steepest uphill when aligned with
              the gradient, and flat when moving perpendicular to it.
            </p>
          </div>
        </div>

        {/* Back button moved to bottom */}
        <div className="mt-10 flex items-center justify-end">
          <Link to="/">
            <Button
              variant="outline"
              className="text-black border-white hover:bg-black hover:text-white cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4 text-center mb-[-3px]"  /> Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
