import React from "react";
import ProjectCard from "./projectcard.jsx";

const Projects = () => {
    const projectData = [
        {
            title: "Happenin",
            description:
                "An event discovery and booking platform with role-based control and Razorpay integration.",
            image: "https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            link: "https://github.com/aaron-d-28/Happenin_Backend",
            tech: ["React", "Node.js", "NestJS", "PostgreSQL"],
        },
        {
            title: "Portfolio Website",
            description:
                "A sleek, glassmorphism-based personal portfolio built with React and Tailwind CSS.",
            image: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D  ",
            link: "https://github.com/aaron-d-28/portfolio",
            tech: ["React", "Tailwind", "Framer Motion"],
        },
        {
            title: "TaskFlow",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel velit ut nisl sagittis lacinia.",
            image: "https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://github.com/example/taskflow",
            tech: ["Vue", "Firebase", "SCSS"],
        },
        {
            title: "CodeSnip",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin luctus, augue non rutrum posuere.",
            image: "https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            link: "https://github.com/example/codesnip",
            tech: ["Next.js", "MongoDB", "TailwindCSS"],
        },
    ];

    return (
        <div className="min-h-screen p-10 bg-gray-950 text-white">
            <h2 className="text-4xl font-bold text-center text-[#00ffaa] mb-10">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
