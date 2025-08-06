import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const sections = [
  {
    title: 'Gradient',
    formula: '\\nabla f = \\left( \\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}, \\frac{\\partial f}{\\partial z} \\right)',
    description: `The gradient is a vector that points in the direction of the greatest rate of increase of a scalar function.
It is calculated by taking the partial derivatives with respect to each variable.
The magnitude represents the rate of change.
Used in optimization and vector field analysis.
It is perpendicular to level surfaces.`
  },
  {
    title: 'Directional Derivative',
    formula: 'D_{\\vec{u}}f = \\nabla f \\cdot \\vec{u}',
    description: `The directional derivative measures the rate of change of a scalar function in a specified direction.
It is the dot product of the gradient and a unit direction vector.
It generalizes the partial derivative.
Maximum value occurs in the direction of the gradient.
Used in multivariable calculus and optimization.`
  },
  {
    title: 'Normal Derivative',
    formula: '\\nabla f \\cdot \\vec{n}',
    description: `Normal derivative represents the rate of change in the direction normal to a surface.
It's used in boundary conditions for differential equations.
\\vec{n} is the unit normal vector to the surface.
It measures how much the function increases across the boundary.
Common in physics and fluid dynamics.`
  },
  {
    title: 'Unit Normal Vector',
    formula: '\\vec{n} = \\frac{\\nabla f}{\\|\\nabla f\\|}',
    description: `The unit normal vector is a normalized gradient vector.
It is perpendicular to level surfaces of a function.
Used in defining surface orientation and boundaries.
Magnitude is always one (unit length).
Important in surface integrals and flux computations.`
  },
  {
    title: 'Angle Between Surfaces',
    formula: '\\cos \\theta = \\frac{\\nabla f_1 \\cdot \\nabla f_2}{\\|\\nabla f_1\\| \\|\\nabla f_2\\|}',
    description: `The angle between surfaces is calculated using the gradients of each surface.
Their dot product gives the cosine of the angle.
Useful in geometry and surface analysis.
Orthogonal surfaces have a 90° angle.
Common in differential geometry.`
  },
  {
    title: 'Tangent Plane',
    formula: '\\nabla f(x_0, y_0, z_0) \\cdot (x - x_0, y - y_0, z - z_0) = 0',
    description: `The tangent plane touches a surface at a point without intersecting it.
Its normal vector is given by the gradient of the function at that point.
Used to linearize a surface near a point.
Helps visualize surface orientation.
Appears in differential calculus and geometry.`
  },
  {
    title: 'Tangent Line',
    formula: 'r(t) = r_0 + t\\vec{v}',
    description: `A tangent line approximates a curve near a point.
It has the same direction as the curve’s derivative at that point.
Used in motion analysis and curve approximation.
Straight line that just touches a curve.
Direction vector \\vec{v} is often the gradient.`
  },
  {
    title: 'Orthogonal Surfaces',
    formula: '\\nabla f \\cdot \\nabla g = 0',
    description: `Two surfaces are orthogonal if their gradient vectors are perpendicular.
Dot product of gradients equals zero.
Common in electromagnetic field analysis.
Important in constructing coordinate systems.
Used in Laplace equation solutions.`
  },
  {
    title: 'Solenoidal Field',
    formula: '\\nabla \\cdot \\vec{F} = 0',
    description: `A solenoidal field has zero divergence.
Indicates no net flux or sources/sinks in the field.
Common in incompressible fluid flow.
Magnetic fields are solenoidal by nature.
Also used in Gauss’s law for magnetism.`
  },
  {
    title: 'Irrotational Field',
    formula: '\\nabla \\times \\vec{F} = 0',
    description: `An irrotational field has zero curl.
It means the field has no rotation or swirling motion.
Gradient fields are always irrotational.
Appears in conservative force fields.
Important in electrostatics and potential theory.`
  },
  {
    title: 'Scalar Potential',
    formula: '\\vec{F} = -\\nabla \\phi',
    description: `A scalar potential \\phi is a function whose gradient gives a vector field.
Used in conservative force fields like gravity and electrostatics.
\\vec{F} is derived from \\phi by taking negative gradient.
Enables energy-based analysis.
Simplifies vector field representations.`
  }
];

function renderFormula(formula) {
  try {
    return { __html: katex.renderToString(formula, { throwOnError: false }) };
  } catch (e) {
    return { __html: '<span style="color:red">Invalid formula</span>' };
  }
}

export default function FormulasPage() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 md:px-16">
      <h1 className="text-4xl font-bold text-center text-purple-400 mb-10">Vector Differentiation Formulas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className={cn('bg-zinc-900 border-purple-400')}> 
              <CardContent className="p-6">
                <h2 className="text-2xl text-purple-400 font-semibold mb-2">{section.title}</h2>
                <div className="text-lg mb-2 text-white">
                  <div dangerouslySetInnerHTML={renderFormula(section.formula)} />
                </div>
                <p className="text-zinc-300 text-sm whitespace-pre-line">{section.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}