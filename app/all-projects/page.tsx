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
    title: "Brutalist E-commerce",
    description: "An e-commerce platform with bold design choices and unconventional navigation patterns.",
    image: "/placeholder.svg?height=300&width=600",
    featured: true,
    technologies: ["React", "Next.js", "Tailwind"],
    liveDemo: "#",
    code: "#",
  },
  {
    id: 2,
    title: "Neo Dashboard",
    description: "A data visualization dashboard with unconventional layout and interactive elements.",
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
    technologies: ["TypeScript", "D3.js", "Firebase"],
    liveDemo: "#",
    code: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project number three.",
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
    technologies: ["Vue.js", "Node.js", "PostgreSQL"],
    liveDemo: "#",
    code: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description of project number four.",
    image: "/placeholder.svg?height=300&width=600",
    featured: false,
    technologies: ["Angular", "Express.js", "MongoDB"],
    liveDemo: "#",
    code: "#",
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