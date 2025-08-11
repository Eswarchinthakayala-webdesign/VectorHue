import React from "react";

export default function BackgroundAnimation() {
  return (
    <div className="background-animation rounded-2xl">
      {/* Aurora Gradient Layers */}
      <div className="gradient-layer layer1"></div>
      <div className="gradient-layer layer2"></div>
      <div className="gradient-layer layer3"></div>
      <div className="gradient-layer layer4"></div>

      {/* Floating Particles (300 for dense background) */}
      {[...Array(350)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            "--rand-x": Math.random(),
            "--rand-y": Math.random(),
            "--rand-delay": Math.random() * 15,
            "--rand-scale": 0.2 + Math.random() * 1.8
          }}
        />
      ))}
    </div>
  );
}
