import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowLeft } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  featured: boolean;
  technologies: string[];
  liveDemo: string;
  code: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "DoodleFlow",
    description: " A simple and interactive drawing app inspired by Excalidraw. It allows users to create, edit, and export drawings with various tools, and supports multi-user collaboration.",
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
    technologies: ["TypeScript", "Next.js", "CanvasAPI"],
    liveDemo: "doodle-flow.vercel.app",
    code: "https://github.com/anishsaha46/doodleFlow",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Add, edit, and delete expenses with ease. Categorize expenses to track spending across different areas.",
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
    technologies: ["JavaScript", "React", "MongoDB"],
    liveDemo: "#",
    code: "#",
  },
  {
    id: 3,
    title: "LogiqDB",
    description: "This project implements a basic database system with features such as table creation,crud operation and query processing .",
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
    technologies: ["C++"],
    liveDemo: "#",
    code: "https://github.com/anishsaha46/LogiqDB",
  },
  {
    id: 4,
    title: "MultiThreaded Web Server",
    description: "A simple Java-based web server with support for routing, middleware, sessions, and templates.",
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
    technologies: ["Java"],
    liveDemo: "#",
    code: "https://github.com/anishsaha46/MultiThreaded_Web_Server",
  },
];

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 bg-black text-white flex justify-between items-center border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
        <Link href="/" className="flex items-center gap-2">
          <ArrowLeft className="h-6 w-6" />
          <span className="text-2xl font-bold">Back to Home</span>
        </Link>
      </header>

      <main className="py-20 px-6 md:px-20">
        <h1 className="text-4xl font-bold mb-12 flex items-center">
          <span className="bg-black text-white px-4 py-2 mr-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
            ALL PROJECTS
          </span>
          <span className="text-black">My Complete Portfolio</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <Card key={project.id} className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none overflow-hidden">
              <div className="h-48 bg-gray-200 border-b-4 border-black relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0)] rounded-none">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} className="bg-gray-200 text-black border-2 border-black rounded-none">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="bg-white text-black hover:bg-gray-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none">
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
} 