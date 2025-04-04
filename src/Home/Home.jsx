import React from "react";
import { Link } from "react-router-dom";
import P5Background from "../ani.jsx";
const Home = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Background Animation */}
            <P5Background />

            {/* Content */}
            <div className="max-w-4xl mx-auto p-6 mt-16 text-center relative z-10">
                <h1 className="text-5xl font-bold text-gray-800">Welcome to My Website</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Hello! I'm a passionate developer dedicated to building high-quality applications.
                    Explore my projects, learn more about me, and feel free to get in touch!
                </p>

                <div className="mt-8">
                    <img
                        src="https://source.unsplash.com/800x400/?technology,coding"
                        alt="Coding"
                        className="rounded-lg shadow-md mx-auto"
                    />
                </div>

                <p className="text-lg text-gray-600 mt-6">
                    Whether you're interested in web development, software solutions, or tech innovations,
                    you've come to the right place! Check out my work and connect with me.
                </p>

                <div className="mt-8 flex justify-center space-x-6">
                    <Link to="/projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                        View Projects
                    </Link>
                    <Link to="/about-us" className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900">
                        About Me
                    </Link>
                    <Link to="/contact-us" className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;