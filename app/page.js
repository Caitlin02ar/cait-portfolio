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
          <a href="https://www.linkedin.com/in/caitlin-liadi/" target="_blank" rel="noopener noreferrer"><img src="/LinkedIn.svg" alt="LinkedIn" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=caitlinliadi@gmail.com" target="_blank" rel="noopener noreferrer"><img src="/Gmail.svg" alt="Gmail" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://www.instagram.com/designedby.cait/" target="_blank" rel="noopener noreferrer"><img src="/Instagram.svg" alt="Instagram" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://x.com/designedby_cait" target="_blank" rel="noopener noreferrer"><img src="/Twitter.svg" alt="Twitter" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://www.behance.net/caitlinliadi" target="_blank" rel="noopener noreferrer"><img src="/Behance.svg" alt="Behance" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://dribbble.com/caitlinliadi" target="_blank" rel="noopener noreferrer"><img src="/Dribbble.svg" alt="Dribbble" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
          <a href="https://www.figma.com/@cheesielle" target="_blank" rel="noopener noreferrer"><img src="/Figma.svg" alt="Figma" className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:rotate-6" /></a>
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
            <BadgeIcon 
            icon={<img src="/Excel.svg" alt="CSS" className="w-4 h-4"/>}
            label="Excel"
            />
            <BadgeIcon 
            icon={<img src="/Word.svg" alt="CSS" className="w-4 h-4"/>}
            label="Word"
            />
            <BadgeIcon 
            icon={<img src="/PowerPoint.svg" alt="CSS" className="w-4 h-4"/>}
            label="PowerPoint"
            />
            
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
          tags={["Python", "React", "Flask", "MySQL"]}
          image="/PosApp.png"
          link="https://www.behance.net/gallery/235721637/Point-of-Sales-Inventory-Application"
          description="A web-based Point of Sales and Inventory Control system with ABC-VED analysis and 
        reorder point calculation for store operations."
        />

        <ProjectCard
        title="LACTOCONNECT Mobile App"
        company="School Project"
        tags={["Figma", "UI/UX", "Design System", "Case Study"]}
        image="/LactoConnect.png"
        link="https://www.behance.net/gallery/230066717/LactoConnect-Study-Case-Project-Prototype"
        description={
          <>
            Collaborated in a team to design a mobile app for breastfeeding support, donor search, and consultations.
            <br /><br />
            <strong>My Contributions:</strong>
            <ul className="list-disc ml-5">
              <li>Defined core features & structure</li>
              <li>Created user flows & wireframes</li>
              <li>Designed high-fidelity mockups</li>
              <li>Built design system</li>
            </ul>
            <br />
            <strong>What I Learned:</strong>  
            <ul className="list-disc ml-5">
              <li>Designing digital solutions that address real user needs</li>
              <li>Building structured design systems for consistency</li>
              <li>Translating research into practical UI/UX decisions</li>
            </ul>
          </>
        }
      />
        <ProjectCard 
        title="E-Commerce Dashboard"
        company="Petra Christian University"
        tags={["Power BI", "Case Study"]}
        image="/DashboardProject.png"
        link="#"
        disableView={true}
        description={
          <>
            Collaborated in a group project to practice data cleaning and visualization.  
            I focused on designing a Power BI dashboard for shipment KPIs.  
            <br /><br />
            <strong>My Contributions:</strong>
            <ul className="list-disc ml-5">
              <li>Cleaned and transformed shipment data</li>
              <li>Created KPI visuals with DAX</li>
              <li>Built interactive filters for analysis</li>
            </ul>
            <br />
            <strong>What I Learned: </strong>
            Learned to design digital solutions that address real user needs and can positively impact people’s lives.          </>
        }
        />

        <ProjectCard
          title="Retreat Web Application"
          company="Petra Christian University"
          tags={["Figma", "Svelte", "JavaScript", "UI/UX Designer"]}
          image="/RetreatApplication.png"
          link="#"
          disableView={true}
          description={
            <>
              Collaborative project to design and build a retreat management system for SEP community, enabling online registration, payment, and event management.  
              <br /><br />
              <strong>My Contributions:</strong>
              <ul className="list-disc ml-5">
                <li>Designed overall system solution with the team</li>
                <li>Led UI/UX design (flows, wireframes, mockups, design system)</li>
                <li>Implemented several frontend pages with Svelte</li>
              </ul>
              <br/>
              Disclaimer: The project has since been further developed by the company, beyond my internship involvement.
            </>
          }
        />
        <ProjectCard
          title="Community Web Application"
          company="PT. Cross Network Indonesia"
          tags={["Figma", "Svelte", "Intern", "UI Design"]}
          image="/CommunityApp.png"
          link="#"
          disableView={true}
          description={
            <>
              Developed a web-friendly community app for PT. Cross Network Indonesia, used for registering and managing community events.
              <br /><br />
              <strong>My Contributions:</strong>
              <ul className="list-disc ml-5">
                <li>Designed booking flow and event UI</li>
                <li>Developed selected responsive frontend pages using Svelte</li>
                <li>Collaborated with backend team</li>
              </ul>
              <br/>
              Disclaimer: The project has since been further developed by the company, beyond my internship involvement.
            </>
          }
        />
        <ProjectCard
          title="Cooperative User Interface"
          company="PT. Cross Network Indonesia"
          tags={["Figma", "Cooperative", "Intern", "UI/UX Designer"]}
          image="/CooperativeApp.png"
          link="https://www.behance.net/gallery/235730149/User-Interface-Cooperative-App-Mobile"
          description={
            <>
              Collaborated with UI/UX team to design a cooperative platform (mobile & web) focusing on accessibility and usability.  
              <br /><br />
              <strong>My Contributions:</strong>
              <ul className="list-disc ml-5">
                <li>Focused on designing the mobile interface</li>
                <li>Ensured responsive UI with clear navigation</li>
                <li>Built reusable components for developer handoff</li>
              </ul>
              <br/>
              Disclaimer: The project has since been further developed by the company, beyond my internship involvement.
            </>
          }
        />
        <ProjectCard
          title="Multi-application Factory System"
          company="PT. Cross Network Indonesia"
          tags={["Figma", "Intern", "UI Design", "Case Study"]}
          image="/MultiApp.png"
          link="#"
          disableView={true}
          description={
            <>
              Collaborated with a UI/UX team to design an integrated factory system.  
              I focused on the warehouse and producer modules for the web interface.  
              <br /><br />
              <strong>My Contributions:</strong>
              <ul className="list-disc ml-5">
                <li>Designed warehouse management UI</li>
                <li>Created producer-side web interface</li>
                <li>Ensured consistency with team’s design system</li>
              </ul>
              <br/>
              Disclaimer: The project has since been further developed by the company, beyond my internship involvement.
            </>
          }
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
