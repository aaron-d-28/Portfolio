import React from "react";
import P5Background from "../ani.jsx";
import TypewriterComponent from "./Typewritereffect.jsx";
import SomeThingsAboutMe from "./Personalinfo.jsx";

const Home = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Animation */}
            <P5Background />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6 py-12">

                {/* Typewriter + SVG Row */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Typewriter Effect */}
                    <TypewriterComponent words={["Developer!", "Designer!", "Creator!"]} />

                    {/* SVG Icon */}
                    <img
                        src="/assets/computer.svg"
                        alt="Monitor Icon"
                        className="w-52 h-52 md:w-72 md:h-72"
                    />
                </div>
            </div>

            {/* Personal Info Section */}
            <div className="relative z-10 mt-[-40px]">
                <SomeThingsAboutMe />
            </div>
        </div>
    );
};

export default Home;
