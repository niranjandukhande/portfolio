"use client"
import React from "react"

// Sample projects data structure
const PROJECTS = [
    {
        title: "Portfolio Website",
        description:
            "A responsive portfolio website built with React and Tailwind CSS showcasing my projects and skills.",
        liveLink: "https://example.com",
        githubLink: "https://github.com/username/portfolio",
        demoLink: "https://demo.example.com",
        techStack: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
    },
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce application with product catalog, cart functionality, and secure checkout process.",
        liveLink: "https://store.example.com",
        githubLink: "https://github.com/username/ecommerce",
        demoLink: "https://demo.store.example.com",
        techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    },

    // Add more projects as needed
]

const ProjectCard = ({
    project,
}: {
    project: {
        title: string
        description: string
        liveLink: string
        githubLink: string
        demoLink: string
        techStack: string[]
    }
}) => {
    const { title, description, liveLink, githubLink, demoLink, techStack } =
        project

    return (
        <div className="bg-black p-6 pl-8 rounded-lg w-full border border-gray-800 hover:shadow-[0_0_5px_5px_rgba(250,250,230,0.2)] hover:border-[#1A1A2E] transition-all duration-150 mb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="sm:text-xl font-bold text-white border-l-4 border-amber-50 pl-3 font-mono text-sm">
                    {title}
                </h3>
                <div className="flex gap-1">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer"
                        >
                            Live Link
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer"
                        >
                            Github Link
                        </a>
                    )}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer"
                        >
                            Demo Link
                        </a>
                    )}
                </div>
            </div>
            {/* Description */}
            <div className="text-gray-400 mb-4  sm:text-l">{description}</div>
            {/* Tech stack */}
            <div className="sm:flex flex-wrap gap-2 pt-5 border-t border-white hidden">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 px-3 py-1 text-m font-medium text-m rounded-full hover:bg-amber-50 hover:text-black duration-150 cursor-pointer"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className="w-full">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default Projects
