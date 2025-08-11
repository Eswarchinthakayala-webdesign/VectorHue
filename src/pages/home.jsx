import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, BookOpen, Sigma, SlidersHorizontal } from "lucide-react";
import Sidebar from "../components/SideBar";
import { motion } from "framer-motion";
import BackgroundAnimation from "../components/BackgroundAnimation";
export default function Home() {
  const topics = [
    {
      title: "∇ Gradient",
      desc: "Rate and direction of maximum increase in scalar fields. Computed using partial derivatives. In physics and engineering, it indicates the steepest ascent in a scalar field and plays a key role in optimization, heat transfer, and fluid dynamics.",
      path: "gradient"
    },
    {
      title: "Directional Derivative",
      desc: "Shows how fast a function changes along a given vector direction. Essential for understanding motion in specific paths, predicting rate changes in multi-dimensional functions, and gradient-based optimization.",
      path: "directional-derivative"
    },
    {
      title: "Normal Derivative",
      desc: "Calculates change along the normal to a surface. This is widely used in physics for analyzing boundary conditions, surface heat flow, and flux across a surface.",
      path: "normal-derivative"
    },
    {
      title: "Unit Normal Vector",
      desc: "Perpendicular vector to a surface at a point. Commonly applied in reflection, refraction, computer graphics, and finite element analysis.",
      path: "unit-normal"
    },
    {
      title: "Angle Between Surfaces",
      desc: "Finds the intersection angle between two surfaces using dot product of gradients. Helps in computer vision, robotics, and 3D modeling.",
      path: "angle-between-surfaces"
    },
    {
      title: "Tangent Plane",
      desc: "Useful in multivariable calculus for approximations and understanding local behavior of surfaces. Applied in 3D simulations, CAD modeling, and robotics path planning.",
      path: "tangent-plane"
    },
    {
      title: "Tangent Line",
      desc: "Linear approximation at a point on a surface using gradients or parametric forms. Helpful in analyzing curves, structural mechanics, and design automation.",
      path: "tangent-line"
    },
    {
      title: "Orthogonal Surfaces",
      desc: "Visualizes if two surfaces intersect at right angles using gradient vectors. Useful in electromagnetic theory and fluid mechanics.",
      path: "orthogonal-surfaces"
    },
    {
      title: "Solenoidal",
      desc: "∇·F = 0 (solenoidal). A solenoidal vector field is one with zero divergence, indicating no net flow into or out of any point. Common in incompressible fluid flow and electromagnetism.",
      path: "solenoidal"
    },
    {
      title: "Irrotational Vector Field",
      desc: "A vector field with zero curl at every point — indicates no rotation and often implies a conservative field. Vital in potential flow theory.",
      path: "irrotational"
    },
    {
      title: "Scalar Potential",
      desc: "Find the scalar potential φ for a given irrotational vector field F = ∇φ. Plays a key role in electrostatics, fluid mechanics, and gravitational fields.",
      path: "scalar-potential"
    },
  ];

  return (
    <section className= "relative backdrop-blur-md bg-gray-900 rounded-2xl  text-white min-h-screen px-6 py-16">
    
       {/* Blob Animations */}
     <BackgroundAnimation/>
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
       <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg">
          Master Vector Differentiation
        </h1>
         <p className="text-xl text-gray-400 mb-10">
          An interactive learning portal for Engineering Mathematics II covering gradients, derivatives, tangent planes, and more — designed with clarity and real-time visuals.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
         <Link to="/gradient">
            <Button size="lg" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:brightness-110 cursor-pointer">
             <Sigma size={20} /> Try Gradient Tool
            </Button>
          </Link>
          <Link to="/directional-derivative">
            <Button variant="secondary" size="lg" className="cursor-pointer">
             <Activity size={20}/>  Directional Derivative
            </Button>
          </Link>
          <Link to="/tangent-plane">
            <Button variant="secondary" size="lg" className="cursor-pointer">
              <BookOpen size={20}/>  Tangent Plane
            </Button>
          </Link>

        </div>
      </div>

      {/* Topics Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(({ title, desc, path }, idx) => (
          <Link to={path} key={idx} className="block">
            <div className="p-6 rounded-lg border border-gray-400 bg-gray-800 hover:border-purple-400 hover:shadow-lg hover:shadow-pink-500/20  transition flex flex-col h-48">
              <h3 className="text-lg font-semibold text-purple-400 mb-2">{title}</h3>
              <p className="text-gray-00 text-sm line-clamp-4">{desc}</p>
              
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
         <h2 className="text-3xl font-bold mb-4 text-purple-400">Start Visualizing Math in Motion</h2>

        <p className="text-gray-400 mb-6">
          Dive into interactive vector calculus tools and learn with hands-on visuals.
        </p>
        <Link to="/gradient">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white hover:opacity-90 transition-all cursor-pointer"
          >
            <SlidersHorizontal size={20}/> Launch Interactive Tools
          </Button>

        </Link>
      </div>
    </section>
  );
}
