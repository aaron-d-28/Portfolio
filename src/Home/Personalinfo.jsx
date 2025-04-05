import React from "react";

const SomeThingsAboutMe = () => {
    return (
        <div className="max-w-4xl mx-auto mt-20 px-6 py-10 rounded-3xl bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(0,255,170,0.1)] border border-white/20 text-white">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 text-center drop-shadow mb-8">
                Some Things About Me
            </h2>

            <ul className="space-y-6 text-lg md:text-xl text-left">
                <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">➤</span>
                    <span>
                        🚀 Passionate about <span className="font-semibold text-green-300">Web Development</span> & <span className="font-semibold text-green-300">UI/UX Design</span>
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">➤</span>
                    <span>
                        🖥️ Love working with <span className="font-semibold text-green-300">React, Tailwind CSS, and Node.js</span>
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">➤</span>
                    <span>
                        📚 Always learning new <span className="font-semibold text-green-300">technologies & frameworks</span>
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">➤</span>
                    <span>
                        🎨 Enjoy creating <span className="font-semibold text-green-300">minimalist & modern designs</span>
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">➤</span>
                    <span>
                        🏆 Driven by <span className="font-semibold text-green-300">problem-solving & innovation</span>
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SomeThingsAboutMe;
