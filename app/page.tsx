import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Twitter, Linkedin, ArrowRight, Code, Palette, Lightbulb } from "lucide-react"

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

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <header className="p-6 bg-black text-white flex justify-between items-center border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
        <div className="text-2xl font-bold">ANISH.SAHA</div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="hover:text-yellow-300 transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-yellow-300 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-yellow-300 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-yellow-300 transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none">
          Resume
        </Button>
      </header>

<main>
  {/* Hero Section */}
  <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <Badge className="bg-pink-500 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none px-4 py-1 text-lg">
              Hello there!
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-black">
              I'm Anish, <br />
              <span className="text-blue-600">Full Stack Developer</span>
            </h1>
            <p className="text-xl">
              I build bold, accessible, and performant web experiences with a focus on brutalist design principles.
            </p>
            <div className="flex gap-4">
              <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-100 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Anish Saha"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-pink-400 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
              <p className="font-bold text-black">Fresher</p>
            </div>
          </div>
        </section>

        {/* Project section using data driven approach */}

        <section id="projects" className="py-20 px-6 md:px-20 bg-blue-200 border-y-4 border-black">
          <h2 className="text-4xl font-bold mb-12 flex items-center">
            <span className="bg-black text-white px-4 py-2 mr-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
              PROJECTS
            </span>
            <span className="text-black">What I've Built</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.slice(0, 2).map((project) => ( // Show first 2 projects
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

          <div className="mt-12 text-center">
            <Button className="bg-pink-500 text-white hover:bg-pink-400 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none px-8 py-6 text-xl">
              <a href="/all-projects">View All Projects <ArrowRight className="ml-2 h-5 w-5" /></a>
            </Button>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 md:px-20">
          <h2 className="text-4xl font-bold mb-12 flex items-center">
            <span className="bg-black text-white px-4 py-2 mr-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
              SKILLS
            </span>
            <span className="text-black">What I Do</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-green-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none p-6">
              <div className="bg-white w-16 h-16 flex items-center justify-center border-4 border-black mb-4">
                <Code className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Frontend Development</h3>
              <p>Building responsive, accessible, and performant web applications with modern frameworks.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">01</span> React & Next.js
                </li>
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">02</span> TypeScript
                </li>
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">03</span> Tailwind CSS
                </li>
              </ul>
            </Card>

            <Card className="bg-yellow-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none p-6">
              <div className="bg-white w-16 h-16 flex items-center justify-center border-4 border-black mb-4">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Backend Development</h3>
              <p>Building scalable, secure, and high-performance server-side applications using modern backend frameworks and technologies, ensuring robust APIs, data handling, and optimal server performance."</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">01</span> NodeJs
                </li>
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">02</span> Express
                </li>
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">03</span> Postgres
                </li>
              </ul>
            </Card>

            <Card className="bg-blue-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none p-6">
              <div className="bg-white w-16 h-16 flex items-center justify-center border-4 border-black mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Problem Solving</h3>
              <p>Finding creative solutions to complex technical challenges and user experience problems.</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">01</span> Performance Optimization
                </li>
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">02</span> Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="bg-black text-white px-2 mr-2">03</span> Cross-browser Compatibility
                </li>
              </ul>
            </Card>
          </div>
        </section>



{/* Contact Section */}
<section id="contact" className="py-20 px-6 md:px-20 bg-pink-200 border-t-4 border-black">
  <h2 className="text-4xl font-bold mb-12 flex items-center">
    <span className="bg-black text-white px-4 py-2 mr-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]">
      CONTACT
    </span>
    <span className="text-black">Get In Touch</span>
  </h2>

  <div className="grid md:grid-cols-2 gap-10">
    <Card className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none p-8">
      <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-bold mb-2">Name</label>
          <input
            type="text"
            className="w-full p-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-300"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-lg font-bold mb-2">Message</label>
          <textarea
            className="w-full p-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-300 min-h-[150px]"
            placeholder="What's on your mind?"
          ></textarea>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none w-full py-6 text-xl">
          Send Message
        </Button>
      </form>
    </Card>

    <div className="space-y-8">
      <Card className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none p-6">
        <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
        <p className="mb-6">
          Feel free to reach out through any of these channels. I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-yellow-400 p-2 border-2 border-black mr-4">
              <Mail className="h-6 w-6" />
            </div>
            <span>anishsaha615@gmail.com</span>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.linkedin.com/in/anish-saha-458967226/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <div className="bg-blue-400 p-2 border-2 border-black">
                <Linkedin className="h-6 w-6" />
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex items-center">
            <a
              href="https://x.com/anishsaha615"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
            >
              <div className="bg-pink-400 p-2 border-2 border-black">
                <Twitter className="h-6 w-6" />
              </div>
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </Card>

      <Card className="bg-green-300 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] rounded-none p-6">
        <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
        <p>
          Currently available for freelance work and collaborations. If you have a project that needs some
          creative direction, let's talk!
        </p>
        <a href="https://calendly.com/your-username" target="_blank" rel="noopener noreferrer">
          <Button className="mt-6 bg-black text-white hover:bg-gray-800 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)] rounded-none">
            Schedule a Call
          </Button>
        </a>
      </Card>
    </div>
  </div>
</section>

</main>


{/* Footer */}
<footer className="bg-black text-white p-6 md:p-10 border-t-4 border-black">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center mb-10">
      <div className="text-3xl font-bold mb-6 md:mb-0">ANISH SAHA</div>
      <div className="flex gap-4">
        {/* GitHub Link */}
        <Link
          href="https://github.com/anishsaha46"
          className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors"
        >
          <Github className="h-6 w-6" />
        </Link>

        {/* Twitter Link */}
        <Link
          href="https://x.com/anishsaha615"
          className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors"
        >
          <Twitter className="h-6 w-6" />
        </Link>

        {/* LinkedIn Link */}
        <Link
          href="https://www.linkedin.com/in/anish-saha-458967226/"
          className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors"
        >
          <Linkedin className="h-6 w-6" />
        </Link>

        {/* Email Link */}
        <Link
          href="mailto:anishsaha615@gmail.com"
          className="bg-white text-black p-2 border-2 border-white hover:bg-gray-200 transition-colors"
        >
          <Mail className="h-6 w-6" />
        </Link>
      </div>
    </div>

    <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
      <div>© 2024 Anish Saha. All rights reserved.</div>
      <div className="flex gap-6 mt-4 md:mt-0">
        {/* Footer Links */}
        <Link href="#" className="hover:text-yellow-300 transition-colors">
          Privacy Policy
        </Link>
        <Link href="#" className="hover:text-yellow-300 transition-colors">
          Terms of Service
        </Link>
      </div>
    </div>
  </div>
</footer>

  
    </div>
  );
}
