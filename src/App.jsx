import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home/Home.jsx";
import AboutUs from "./About us/Aboutus.jsx";
import ContactUs from "./Contact_us/Contactus.jsx";
import Projects from "./Projects/Projects.jsx";

function App() {
    return (
        <Router>
            {/* Global background layer behind everything */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#0f172a] via-[#1e1e1e] to-[#1a1a1a]" />

            <Navbar />

            {/* App routes */}
            <div className="pt-20"> {/* Add padding so content doesn't hide under navbar */}
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
