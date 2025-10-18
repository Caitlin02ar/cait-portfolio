import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/data/ProjectData";
import ProjectSection from "@/app/components/ProjectSection";

export default async function ProjectDetail({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) return notFound();

    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
        <Link
            href="/#projects"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-6 transition-colors gap-2"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8"
            >
                <path d="M15 18l-6-6 6-6" />
            </svg>
            Back to Projects
        </Link>


        <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-xl mb-8 shadow-md"
        />
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <p className="text-gray-500 mb-4">{project.company}</p>

        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
            <span
                key={idx}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700"
            >
                {tag}
            </span>
            ))}
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {project.detail}
        </p>
        {project.sections?.map((section, idx) => (
            <ProjectSection key={idx} section={section} />
        ))}
        </main>
    );
    }
