import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </>
  )
}
