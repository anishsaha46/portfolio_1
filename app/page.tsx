import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Twitter, Linkedin, ArrowRight, Code, Palette, Lightbulb } from "lucide-react"

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
</main>
  
    </div>
  );
}
