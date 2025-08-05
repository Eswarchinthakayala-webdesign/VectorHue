// lib/calculateGradient.js
import * as math from "mathjs";

export function calculateGradient(expression, variables) {
  try {
    const parsed = math.parse(expression);
    const gradient = variables.map((v) =>
      math.derivative(parsed, v).toString()
    );
    return gradient;
  } catch (err) {
    console.error("Gradient calculation error:", err);
    return [];
  }
}
