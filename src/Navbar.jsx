import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-[inset_0_0_1px_rgba(255,255,255,0.2),0_0_25px_rgba(0,255,170,0.2)] border-b border-white/20 rounded-b-2xl transition-all">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg tracking-wide">
                    MyApp
                </h1>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Nav Links */}
                <ul
                    className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white/10 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none shadow-lg md:shadow-none border-t border-white/10 md:border-0 transition-all duration-300 ease-in-out ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } md:opacity-100 md:visible`}
                >
                    {["Home", "About", "Contact", "Projects"].map((name) => (
                        <li
                            key={name}
                            className="px-4 py-3 md:py-0 text-center hover:bg-white/5 rounded-md transition"
                        >
                            <Link
                                to={`/${name.toLowerCase()}`}
                                className="text-sm text-white hover:text-[#00ffaa] transition-all duration-200 font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
