import React from "react";

const ProjectCard = ({ title, description, image, link, tech }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 max-w-sm">
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover border-b border-white/10"
            />
            <div className="p-4 text-white">
                <h3 className="text-xl font-bold text-[#00ffaa] mb-2">{title}</h3>
                <p className="text-sm text-white/80 mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-xs bg-[#00ffaa]/20 px-2 py-1 rounded-full text-[#00ffaa]"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-[#00ffaa] hover:underline"
                >
                    View Project →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
