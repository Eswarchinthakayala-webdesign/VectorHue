import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const ScalarPotential = () => {
  return (
    <div className="mt-10 border-t pt-6">
      <h2 className="text-2xl font-semibold mb-4">Scalar Potential Function</h2>

      <p className="text-lg mb-4">
        If a vector field <BlockMath math="\vec{F}" /> is irrotational, then it can be expressed as the gradient of a scalar potential function <BlockMath math="\phi" />, i.e.:
      </p>

      <BlockMath math="\vec{F} = \nabla \phi" />

      <p className="text-lg mt-4">
        This scalar function <BlockMath math="\phi" /> can be found by integrating the components of the vector field.
      </p>

      <h3 className="text-xl font-medium mt-6 mb-2">Example</h3>
      <p className="text-lg mb-2">
        Let <BlockMath math="\vec{F} = 2x\hat{i} + 2y\hat{j} + 2z\hat{k}" />
      </p>

      <p className="text-lg">
        Integrate each component:
      </p>

      <ul className="list-disc list-inside text-lg space-y-1">
        <li><BlockMath math="\phi = \int 2x \, dx = x^2 + C_1" /></li>
        <li><BlockMath math="\phi = \int 2y \, dy = y^2 + C_2" /></li>
        <li><BlockMath math="\phi = \int 2z \, dz = z^2 + C_3" /></li>
      </ul>

      <p className="text-lg mt-4">
        Thus, the scalar potential is:
      </p>

      <BlockMath math="\phi = x^2 + y^2 + z^2 + C" />

      <p className="text-sm text-gray-500 mt-4 italic">
        Where C is a constant of integration.
      </p>
    </div>
  );
};

export default ScalarPotential;
