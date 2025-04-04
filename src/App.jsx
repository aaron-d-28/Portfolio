import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About us/Aboutus.jsx";
import Contactus from "./Contact_us/Contactus.jsx";
import Projects from "./Projects/Projects.jsx";
import Home from "./Home/Home.jsx";

function App() {
    return (
        <Router>
            {/* Navbar stays fixed across all pages */}
            <Navbar />

            {/* Prevent content from overlapping Navbar */}
            <div className="mt-16">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contactus />} />
                    <Route path="/Projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
