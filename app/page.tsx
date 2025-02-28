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

  
    </div>
  );
}
