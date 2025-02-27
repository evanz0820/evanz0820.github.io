import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
} 