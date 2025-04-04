import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="text-white p-4 fixed w-full top-0 left-0 shadow-md z-50" style={{ backgroundColor: "#2667FF" }}>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">MyApp</h1>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Links */}
                <ul
                    className={`md:flex space-x-6 md:static absolute md:w-auto w-full bg-gray-900 md:bg-transparent md:p-0 p-4 top-14 transition-all ${
                        isOpen ? "left-0" : "left-[-100%]"
                    }`}
                >
                    <li>
                        <Link className="hover:text-gray-400" to="/" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-400" to="/about" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="hover:text-gray-400" to="/contact" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </li> <li>
                        <Link className="hover:text-gray-400" to="/Projects" onClick={() => setIsOpen(false)}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
