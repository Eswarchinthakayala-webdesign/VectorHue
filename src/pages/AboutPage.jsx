// src/pages/AboutPage.jsx
import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Three.js Canvas for animated math symbols */}
        <div id="threejs-about-bg" className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className={cn('bg-[#1f1d2b] border border-purple-500/30')}>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-4 text-indigo-400">
                Our Mission
              </CardTitle>
              <p className="text-gray-300 leading-relaxed">
                We aim to revolutionize the way users interact with mathematical and scientific concepts using cutting-edge technology like Three.js and React.
              </p>
            </CardContent>
          </Card>

          <Card className={cn('bg-[#1f1d2b] border border-indigo-500/30')}>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-4 text-purple-400">
                Technology
              </CardTitle>
              <p className="text-gray-300 leading-relaxed">
                Leveraging Three.js, React, TailwindCSS, and ShadCN UI, our platform provides stunning visualizations and interactive educational experiences.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
