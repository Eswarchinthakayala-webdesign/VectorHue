// src/pages/AboutPage.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Globe } from "lucide-react";
import Sidebar from "../components/SideBar";

const About = () => {
  const teamMembers = [
    {
      name: "Eswar Chinthakayla",
      regno: "192210671",
      department: "Computer Science and Engineering",
      work: "Developed the VectorHue",
      img: "/user1.png",
      socials: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        website: "https://johndoe.dev",
      },
    },
    {
      name: "Chanda Krishna Chaitanya",
      regno: "192210700",
      department: "Computer Science and Engineering",
      work: "Worked on the Report for VectorHue",
      img: "/user2.png",
      socials: {
        github: "https://github.com/janesmith",
        linkedin: "https://linkedin.com/in/janesmith",
        website: "https://janesmith.dev",
      },
    },
    {
      name: "Narasapuram Alex",
      regno: "192210615",
      department: "Computer Science and Engineering",
      work: "Worked on the Report for VectorHue",
      img: "/user3.png",
      socials: {
        github: "https://github.com/michaellee",
        linkedin: "https://linkedin.com/in/michaellee",
        website: "https://michaellee.dev",
      },
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] rounded-2xl text-white">
      <Sidebar/>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Three.js Canvas for animated math symbols */}
        <div id="threejs-about-bg" className="w-full h-full" />
      </div>

      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text">
          About Us
        </h1>

        {/* About Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className={cn("bg-[#0f172a] border border-purple-500/30")}>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-4 text-indigo-400">
                Our Mission
              </CardTitle>
              <p className="text-gray-300 leading-relaxed">
                We aim to revolutionize the way users interact with mathematical
                and scientific concepts using cutting-edge technology like
                Three.js and React.
              </p>
            </CardContent>
          </Card>

          <Card className={cn("bg-[#0f172a] border border-indigo-500/30")}>
            <CardContent className="p-6">
              <CardTitle className="text-2xl mb-4 text-purple-400">
                Technology
              </CardTitle>
              <p className="text-gray-300 leading-relaxed">
                Leveraging Three.js, React, TailwindCSS, and ShadCN UI, our
                platform provides stunning visualizations and interactive
                educational experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 ">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-[#0f172a] border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
            >
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 border-2 border-purple-400 shadow-lg shadow-purple-500/30">
                  <AvatarImage src={member.img} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4 text-xl text-white">
                  {member.name}
                </CardTitle>
                <p className="text-sm text-gray-400">{member.regno}</p>
                <p className="text-sm text-indigo-300">{member.department}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 text-sm mb-4 italic">
                  {member.work}
                </p>
                <div className="flex justify-center space-x-4">
                  <Button
                    size="icon"
                  
                    asChild
                    className="hover:bg-purple-400 bg-purple-500"
                  >
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    
                    asChild
                     className="hover:bg-purple-400 bg-purple-500"
                  >
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    
                    asChild
                     className="hover:bg-purple-400 bg-purple-500"
                  >
                    <a
                      href={member.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={20} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
