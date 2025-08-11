import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import * as math from 'mathjs';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button'; // ✅ Update path if needed

const TangentPlaneForm = ({ onSubmit }) => {
  const [equation, setEquation] = useState('x^2 + y^2');
  const [x0, setX0] = useState(1);
  const [y0, setY0] = useState(1);
  const [latexOutput, setLatexOutput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    try {
      const xVal = parseFloat(x0);
      const yVal = parseFloat(y0);
      const scope = { x: xVal, y: yVal };

      const parsed = math.parse(equation);
      const compiled = parsed.compile();
      const fxy = compiled.evaluate(scope);

      const dfdx = math.derivative(parsed, 'x').compile();
      const dfdy = math.derivative(parsed, 'y').compile();
      const dfdxVal = dfdx.evaluate(scope);
      const dfdyVal = dfdy.evaluate(scope);

      const zExpr = `${fxy} + (${dfdxVal})(x - ${xVal}) + (${dfdyVal})(y - ${yVal})`;
      const latexExpr = `z = ${math.parse(zExpr).toTex({ parenthesis: 'keep' })}`;

      setLatexOutput(latexExpr);

      onSubmit?.({
        equation,
        x0: xVal,
        y0: yVal,
        fxy,
        dfdxVal,
        dfdyVal
      });
    } catch (err) {
      console.error('Evaluation error:', err);
      setError('Invalid function or inputs. Please check your equation.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0f172a] border border-purple-500 backdrop-blur-md rounded-lg shadow-xl p-6 mb-8">
     

      <h2 className="text-2xl font-bold text-purple-400 mb-4 text-center">
        Tangent Plane Calculator
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-white mb-1">Function f(x, y):</label>
          <input
            type="text"
            value={equation}
            onChange={(e) => setEquation(e.target.value)}
            className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 "
            placeholder="e.g., x^2 + y^2"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white mb-1">x₀:</label>
            <input
              type="number"
              value={x0}
              onChange={(e) => setX0(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 "
              required
            />
          </div>

          <div>
            <label className="block text-white mb-1">y₀:</label>
            <input
              type="number"
              value={y0}
              onChange={(e) => setY0(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/20 text-white focus:outline-none focus:ring-2 "
              required
            />
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded transition duration-300 cursor-pointer"
          >
            Plot Tangent Plane
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-4 text-red-400 text-sm text-center">
          {error}
        </div>
      )}

      {latexOutput && (
        <div className="mt-6 bg-black/20 p-4 rounded-lg border border-white/20">
          <h3 className="mb-2 font-semibold text-purple-400">Tangent Plane Equation:</h3>
          <div className="text-white text-lg overflow-x-auto">
            <BlockMath math={latexOutput} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TangentPlaneForm;
