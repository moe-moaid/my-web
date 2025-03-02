import Hero from "../components/hero";
import About from "../components/about";
import Experience from "../components/experience";
import Skills from "../components/skills";
import Projects from "../components/projects";
import ContactMe from "../components/contactMe";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="h-screen z-0 relative">
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <a href="#hero">
        <div className="fixed right-10 bottom-10 rounded-full border-[2px] border-[#00C6CF] p-2 hover:scale-125 transition-all ease-in-out duration-300">
          <ChevronDoubleUpIcon className="text-[#00C6CF] h-7 animate-pulse" />
        </div>
      </a>
    </main>
  );
}
