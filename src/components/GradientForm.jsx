import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { calculateGradient } from "@/lib/calculateGradient";

export default function GradientForm({ onSubmit }) {
  const [functionInput, setFunctionInput] = useState("");
  const [variablesInput, setVariablesInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!functionInput.trim() || !variablesInput.trim()) return;

    const variables = variablesInput.split(",").map((v) => v.trim());
    const gradient = calculateGradient(functionInput, variables);

    if (onSubmit) {
      onSubmit({ functionInput, variables, gradient });
    }
  };

  return (
    <Card className="bg-white/5 border border-white/10 shadow-xl p-4 sm:p-6 w-full max-w-xl mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="functionInput" className="text-white pb-3 block">Scalar Function</Label>
            <Input
              id="functionInput"
              placeholder="e.g., x^2 + y^2 + z^2"
              value={functionInput}
              onChange={(e) => setFunctionInput(e.target.value)}
              className="bg-black/30 text-white placeholder:text-white/50"
            />
          </div>
          <div>
            <Label htmlFor="variablesInput" className="text-white pb-3 block">Variables (comma-separated)</Label>
            <Input
              id="variablesInput"
              placeholder="e.g., x, y, z"
              value={variablesInput}
              onChange={(e) => setVariablesInput(e.target.value)}
              className="bg-black/30 text-white placeholder:text-white/50"
            />
          </div>
          <Button type="submit" className="w-full bg-purple-400 hover:bg-purple-700 text-white cursor-pointer">
            Calculate Gradient
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
