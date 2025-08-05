import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  const topics = [
    {
      title: "∇ Gradient",
      desc: "Rate and direction of maximum increase in scalar fields. Computed using partial derivatives.",
      path:"gradient"
    },
    {
      title: "Directional Derivative",
      desc: "Shows how fast a function changes along a given vector direction.",
      path:"directional-derivative"
    },
    {
      title: "Normal Derivative",
      desc: "Calculates change along the normal to a surface. Often used in physics.",
      path:"normal-derivative"
    },
    {
      title: "Unit Normal Vector",
      desc: "Perpendicular vector to a surface at a point. Useful in projections and reflections.",
      path:"unit-normal"
    },
    {
      title: "Angle Between Surfaces",
      desc: "Finds intersection angle between two surfaces using dot product of gradients.",
      path:"angle-between-surfaces"
    },
    {
      title: "Tangent Plane",
      desc: "It’s useful in multivariable calculus, especially for approximations and understanding local behavior of surfaces.",
      path:"tangent-plane"
    },
      {
      title: "Tangent Line",
      desc: "Linear approximation at a point on a surface using gradients or parametric forms.",
      path:"tangent-line"
    },
   {
  title: "Orthogonal Surfaces",
  desc: "Visualizes if two surfaces intersect at right angles using gradient vectors.",
  path: "orthogonal-surfaces",
}
,
    {
      title: "Solenoidal",
      desc: "∇·F = 0 (solenoidal) .A solenoidal vector field is a vector field with zero divergence, indicating no net flow out of or into any point",
      path:"solenoidal"
    },
    {
  title: "Irrotational Vector Field",
  desc: "A vector field with zero curl at every point — indicates no rotation and often implies a conservative field.",
  path: "irrotational"
}
,
    {
  title: "Scalar Potential",
  desc: "Find the scalar potential φ for a given irrotational vector field F = ∇φ.",
  path: "scalar-potential"
}
,
  
  ];

  return (
    <section className="relative z-10 min-h-screen w-full bg-[#0f0f0f] text-white px-6 py-24 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
          Master Vector Differentiation
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          An interactive learning portal for Engineering Mathematics II covering gradients, derivatives, tangent planes, and more — designed with clarity and real-time visuals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/gradient">
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110 cursor-pointer">
              🧮 Try Gradient Tool
            </Button>
          </Link>
          <Link to="/directional-derivative">
            <Button variant="secondary" size="lg" className="cursor-pointer">
              ➡️ Directional Derivative
            </Button>
          </Link>
          <Link to="/tangent-plane">
            <Button variant="secondary" size="lg" className="cursor-pointer">
              📐 Tangent Plane
            </Button>
          </Link>
        </div>
      </div>

      {/* Concept Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(({ title, desc,path }, idx) => ( 
          <Link to={path}>
          <div
            key={idx}
            className="p-6 rounded-xl border border-[#222] bg-gradient-to-br from-[#1a1a1a] via-[#111] to-[#0f0f0f] hover:shadow-lg hover:shadow-pink-500/20 transition-transform hover:scale-[1.02]"
          > 
            <h3 className="text-2xl font-bold text-purple-300 mb-2">{title}</h3>
          
            <p className="text-gray-400">{desc}</p>
          </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4 text-purple-400">Start Visualizing Math in Motion</h2>
        <p className="text-lg text-gray-400 mb-6">
          Launch any concept and get hands-on understanding of vector calculus with modern tools and live previews.
        </p>
        <Link to="/gradient">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:opacity-90 transition-all cursor-pointer"
          >
            🚀 Launch Interactive Tools
          </Button>
        </Link>
      </div>
    </section>
  );
}
