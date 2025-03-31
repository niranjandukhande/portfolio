"use client"
import React from "react"

// Sample projects data structure
const PROJECTS = [
    {
        title: "EnhancedDimaag",
        description:
            "A content organization web app built with React.js, Express, and PostgreSQL. This project was created to save and manage YouTube links, generate auto-summaries using Google Gen AI, and provide both private and public content sharing features via Clerk authentication.",
        liveLink: "https://enhanced-dimaag.vercel.app/",
        githubLink: "https://github.com/niranjandukhande/enhancedDimaag",
        demoLink: "",
        techStack: [
            "React",
            "TypeScript",
            "NodeJs",
            "PostgreSQL",
            "Clerk",
            "React Query",
            "Zustand",
        ],
    },
    {
        title: "GupShup",
        description:
            // "Built a real-time chat app using WebSockets, featuring room-based chats, smooth communication, and a user-friendly interface. The project was designed to explore WebSocket technology and get a deeper understanding of real-time data exchange."
            "A real-time, room-based chat application built with WebSockets. This project was created to explore WebSocket technology and gain a deeper understanding of real-time data communication.",
        liveLink: "https://progsolos-chat-app.netlify.app",
        githubLink: "https://github.com/niranjandukhande/ws-chat-app",
        demoLink: "",
        techStack: ["React", "Node.js", "WebSocket", "TypeScript", "Netlify"],
    },
    {
        title: "Fraud Prevention in Real Estate using Blockchain",
        description:
            "A blockchain-based real estate system that automates property ownership verification and secures transactions by turning assets into NFT's. This project was designed to explore blockchain technology.",
        githubLink: "",
        demoLink:
            "https://drive.google.com/file/d/1jODfUU6oYJC7Tv2CpyXz712Adrxn1b52/view?usp=sharing",
        techStack: ["NextJs", "Solidity", "Ganache", "MetaMask", "Web3.js"],
    },

    // Add more projects as needed
]

const ProjectCard = ({
    project,
}: {
    project: {
        title: string
        description: string
        liveLink?: string
        githubLink: string
        demoLink?: string
        techStack: string[]
    }
}) => {
    const { title, description, liveLink, githubLink, demoLink, techStack } =
        project

    return (
        <div className="bg-black p-3 sm:p-6 sm:pl-8 rounded-lg w-75 sm:w-full border border-gray-800 hover:shadow-[0_0_5px_5px_rgba(250,250,230,0.2)] hover:border-[#1A1A2E] transition-all duration-150 mb-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="sm:text-xl font-bold text-white border-l-4 border-amber-50 pl-3 font-mono text-sm">
                    {title}
                </h3>
                <div className="sm:w-full flex gap-1 pl-6">
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer sm:block hidden"
                        >
                            Live Link
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer "
                        >
                            Github Link
                        </a>
                    )}
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-gray-900 text-white rounded text-sm transition-colors duration-300 hover:bg-amber-50 hover:text-black cursor-pointer sm:block hidden"
                        >
                            Demo Link
                        </a>
                    )}
                </div>
            </div>
            {/* Description */}
            <div className="text-gray-400 mb-4  sm:text-lg">{description}</div>
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
        <div className="sm:w-full flex flex-col justify-center items-center">
            {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default Projects
