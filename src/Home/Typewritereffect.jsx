import React from "react";
import { Typewriter } from "react-simple-typewriter";

// Reusable Typewriter Component
const TypewriterComponent = ({ words }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold text-white">HI</h1>
            <h2 className="text-3xl font-semibold mt-2">
                I'm A
                <br />
                <span className="text-green-800 font-bold min-w-[250px] inline-block">
                    <Typewriter
                        words={words}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                    />
                </span>
            </h2>
        </div>
    );
};

export default TypewriterComponent;
