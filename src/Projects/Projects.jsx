import React from "react";

const projects = [
    {
        title: "Event Management System",
        description: "A web platform to manage and discover local events with booking and QR-based entry.",
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        link: "https://github.com/example/event-management",
    },
    {
        title: "E-Commerce Store",
        description: "An online shopping platform with product listings, cart functionality, and secure payments.",
        technologies: ["Next.js", "Express.js", "PostgreSQL", "Stripe"],
        link: "https://github.com/example/ecommerce-store",
    },
    {
        title: "Chat Application",
        description: "A real-time chat application with user authentication and message encryption.",
        technologies: ["React", "Firebase", "Redux", "Material UI"],
        link: "https://github.com/example/chat-app",
    },
    {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        link: "https://github.com/example/portfolio",
    },
];

const Projects = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-16">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700">{project.title}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            <strong>Technologies:</strong> {project.technologies.join(", ")}
                        </p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-blue-600 hover:underline"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
