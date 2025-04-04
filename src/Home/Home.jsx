import React from "react";
import P5Background from "../ani.jsx";
import TypewriterComponent from "./Typewritereffect.jsx";
import SomeThingsAboutMe from "./Personalinfo.jsx";

const Home = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Background Animation */}
            <P5Background />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center min-h-screen text-white p-10 rounded-lg  mr-50">

                {/* Typewriter & SVG */}
                <div className="flex items-center space-x-160 ml-50 ">
                    {/* Typewriter Effect */}
                    <TypewriterComponent words={["Developer!", "Designer!", "Creator!"]} />
                    {/* SVG Icon */}
                    <img src="/assets/computer.svg" className="w-70 h-70   " alt="Monitor Icon" />
                </div>

            </div>

            {/* Personal Info Section */}
            <SomeThingsAboutMe />
        </div>
    );
};

export default Home;
