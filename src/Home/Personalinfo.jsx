import React from "react";

const SomeThingsAboutMe = () => {
    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 text-center bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-green-400">Some Things About Me</h2>

            <ul className="mt-4 text-lg space-y-3 text-left mx-auto w-fit list-none">
                <li className="flex items-center">
                    <span className="text-green-400 mr-2">➤</span> 🚀 Passionate about <span className="font-semibold">Web Development</span> & <span className="font-semibold">UI/UX Design</span>
                </li>
                <li className="flex items-center">
                    <span className="text-green-400 mr-2">➤</span> 🖥️ Love working with <span className="font-semibold">React, Tailwind CSS, and Node.js</span>
                </li>
                <li className="flex items-center">
                    <span className="text-green-400 mr-2">➤</span> 📚 Always learning new <span className="font-semibold">technologies & frameworks</span>
                </li>
                <li className="flex items-center">
                    <span className="text-green-400 mr-2">➤</span> 🎨 Enjoy creating <span className="font-semibold">minimalist & modern designs</span>
                </li>
                <li className="flex items-center">
                    <span className="text-green-400 mr-2">➤</span> 🏆 Driven by <span className="font-semibold">problem-solving & innovation</span>
                </li>
            </ul>
        </div>
    );
};

export default SomeThingsAboutMe;
