import Badge from "./components/Badge";
import BadgeIcon from "./components/BadgeIcon";
import Contact from "./components/Contact";
import ExperienceBox from "./components/ExperienceBox";
import ProjectCard from "./components/ProjectCard";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white text-black px-4 sm:px-6 md:px-12 lg:px-20 mt-8">

      {/* About Me */}
      <section id="about-me" className="text-center max-w-2xl mb-16">
        <Badge text="About Me" />
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 mt-12">Hi! I’m Caitlin</h1>
        <p className="text-gray-600 mb-8">
          I’m passionate about UI/UX design and enjoy turning ideas into digital solutions.
          My work has centered on designing user experiences, from wireframes to
          interactive prototypes. I’m also developing skills in frontend development and
          data tools like Power BI, while staying eager to keep learning and growing in
          product design.
        </p>

        {/* Social Icons */}
        <div className="inline-flex gap-4 px-6 py-3 border rounded-full shadow-sm justify-center">
          <a href="https://www.linkedin.com/in/caitlin-liadi/"><img src="/LinkedIn.svg" alt="LinkedIn" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="#"><img src="/Gmail.svg" alt="Gmail" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://www.instagram.com/designedby.cait/"><img src="/Instagram.svg" alt="Instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://x.com/designedby_cait"><img src="/Twitter.svg" alt="Twitter" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://www.behance.net/caitlinliadi"><img src="/Behance.svg" alt="Behance" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://dribbble.com/caitlinliadi"><img src="/Dribbble.svg" alt="Dribbble" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://www.figma.com/@cheesielle"><img src="/Figma.svg" alt="Figma" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="w-full max-w-4xl mb-16">
        <Badge text="Skills" />

        <div className="mt-6">
          <h2 className="font-semibold mb-3">Tools and Tech Skills</h2>
          <div className="flex flex-wrap gap-3">
            <BadgeIcon 
            icon={<img src="/FigmaIcon.svg" alt="Figma" className="w-4 h-4"/>}
            label="Figma"/>
            <BadgeIcon 
            icon={<img src="/AdobeIllustrator.svg" alt="AdobeIllustrator" className="w-4 h-4"/>}
            label="Adobe Illustrator"/>
            <BadgeIcon 
            icon={<img src="/HTML.svg" alt="HTML" className="w-4 h-4"/>}
            label="HTML"/>
            <BadgeIcon 
            icon={<img src="/JavaScripts.svg" alt="JavaScript" className="w-4 h-4"/>}
            label="JavaScript"/>
            <BadgeIcon 
            icon={<img src="/Python.svg" alt="Python" className="w-4 h-4"/>}
            label="Python"/>
            <BadgeIcon 
            icon={<img src="/PowerBI.svg" alt="Power BI" className="w-4 h-4"/>}
            label="Power BI"/>
            <BadgeIcon 
            icon={<img src="/MySQL.svg" alt="MySQL" className="w-4 h-4"/>}
            label="MySQL"/>
            <BadgeIcon 
            icon={<img src="/React.svg" alt="React" className="w-4 h-4"/>}
            label="React"/>
            <BadgeIcon 
            icon={<img src="/CSS.svg" alt="CSS" className="w-4 h-4"/>}
            label="CSS"/>
            
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-3">Soft Skills</h2>
          <div className="flex flex-wrap gap-3">
            <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">UI Design</span>
            <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">UX Design</span>
            <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">Design Systems</span>
            <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">Prototyping</span>
            <span className="border rounded-md px-3 py-1 hover:bg-gray-100 hover:scale-105 transition-transform duration-300">Design Thinking</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="w-full max-w-4xl mb-16">
        <Badge text="Experience" />
        <ExperienceBox 
        role="UI/UX Designer"
        company="PT. Cross Network Indonesia"
        period="Jul 2024 - Dec 2024"/>
      </section>

      {/* Projects */}
      <section id="projects" className="w-full max-w-4xl mb-16">
        <Badge text="Projects" />
        <ProjectCard
          title="Point of Sales & Inventory Application"
          company="PT. Cross Network Indonesia"
          tags={["Python", "React"]}
          image="/pos-app-preview.png"
          link="#"
          description="A web-based Point of Sales and inventory control system with ABC-VED analysis and 
        reorder point calculation for store operations."
        />

        <ProjectCard
        title="LactoConnect Prototype Application"
        company="Petra Christian University"
        tags={["Figma", "Case Study"]}
        image="/LactoConnect.png"
        link="#"
        description="Created prototype for case study"
        />

        <ProjectCard 
        title="E-Commercce Dashboard"
        company="Petra Christian University"
        tags={["Power BI", "Case Study"]}
        image="/DashboardProject.png"
        link="#"
        description="Created "
        />

        <ProjectCard
        title="Community Web Application"
        company="PT. Cross Network Indonesia"
        tags={["Figma", "Svelte", "Intern", "UI Design"]}
        image=""
        link="#"
        description="Developed a web-friendly community app for PT. Cross Network Indonesia, used for registering and managing community events."
        />

        <ProjectCard
        title="Cooperative User Interface"
        company="PT. Cross Network Indonesia"
        tags={["Figma", "Cooperative", "Intern", "UI Design"]}
        image=""
        link="#"
        description="Designed a digital platform for a local cooperative including both mobile and web versions, focused on accessibility and usability."
        />

        <ProjectCard
        title="Multi-application Factory System"
        company="PT. Cross Network Indonesia"
        tags={["Figma", "Intern", "UI Design"]}
        image=""
        link="#"
        description="Built a Point of Sales and Inventory Control system from scratch for my final project. Designed to support both retail and wholesale business models."
        />
      </section>

      {/* Contact */}
      <section id="contact" className="w-full max-w-4xl mb-16 text-center">
        <Badge text="Contact" />
        <Contact/>
      </section>
    </main>
  );
}
