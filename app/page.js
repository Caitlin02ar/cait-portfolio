import Badge from "./components/Badge";
import Contact from "./components/Contact";
import MyPlayground from "./components/MyPlayground";
import UpcomingProjects from "./components/UpComingProject";
import AboutMe from "./components/AboutMe";
import SkillSection from "./components/SkillsSection";
import Experience from "./components/Experience";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data/ProjectData";
import { playgrounds } from "./data/PlaygroundData";
import PlaygroundCard from "./components/PlaygroundCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-black px-4 sm:px-6 md:px-12 lg:px-20">

      {/* About Me */}
      <section id="about-me" className="mb-16 w-screen -mx-[calc((100vw-100%)/2)]">
        <AboutMe />
      </section>

      {/* Skills */}
      <section id="skills" className="section-spacing">
        <div className="section-container">
          <Badge text="Skills" />
          <SkillSection />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-spacing">
        <div className="section-container">
          <Badge text="Experience" />
          <Experience />
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="section-full section-spacing bg-gradient-to-br from-amber-50 via-white to-orange-100 relative overflow-hidden"
      >
        <div className="section-container">
          <Badge text="Projects" />
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
          <UpcomingProjects />
        </div>
      </section>

      {/* My Playground */}
      <section id="my-playground" className="section-spacing">
        <div className="section-container">
          <Badge text="My Playground" />
          <p className="text-slate-600 text-sm sm:text-base mt-3 mb-10 max-w-2xl">
            A collection of small experiments, daily UI challenges, and creative web projects — 
            my digital sandbox for learning, testing, and having fun.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {playgrounds.map((p, i) => (
              <PlaygroundCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */} 
      <section id="contact" className="w-full max-w-4xl text-center"> 
        <Badge text="Contact" /> 
        <Contact/> 
        </section>
    </main>
  );
}
