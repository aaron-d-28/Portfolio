import React from "react";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-6 py-16 text-white">
            <div className="max-w-5xl mx-auto text-center">

                {/* Header */}
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg mb-8">
                    About Us
                </h1>

                {/* Intro */}
                <p className="text-xl text-gray-200 leading-relaxed mb-12">
                    Hey! 👋 I’m a 19-year-old dev who loves building things that make life more fun and connected.
                    <br />
                    <span className="inline-block mt-2">
                        <strong>MyApp</strong> helps you discover awesome local events — from concerts to fests to food walks.
                    </span>
                </p>

                {/* Creator Section */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-10 text-left shadow-[0_0_25px_rgba(0,255,170,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition duration-300">
                    <h2 className="text-2xl font-bold text-green-400 mb-3">👨‍💻 Meet the Creator</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I'm a self-taught developer and currently a college student. I spend late nights coding
                        with coffee ☕️, vibing to lo-fi beats 🎧, and working on things I care about. In my free time,
                        you’ll find me gaming 🎮, making videos, or deep diving into tech blogs and YouTube rabbit holes.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-10 text-left shadow-[0_0_25px_rgba(0,255,170,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition duration-300">
                    <h2 className="text-2xl font-bold text-blue-400 mb-3">🚀 The Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        I created MyApp because I kept missing out on cool events around me — and I figured I’m not the only one.
                        This platform makes it easy to find and book experiences, so you never have to ask “what’s happening nearby?”
                        again. Simple, social, and smart.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-left shadow-[0_0_25px_rgba(0,255,170,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition duration-300">
                    <h2 className="text-2xl font-bold text-white mb-3">📬 Let’s Connect</h2>
                    <div className="text-gray-300 leading-relaxed">
                        <p>
                            <span className="font-medium">Email:</span>{" "}
                            <a
                                href="mailto:support@myapp.com"
                                className="text-blue-300 hover:underline"
                            >
                                support@myapp.com
                            </a>
                        </p>
                        <p>
                            <span className="font-medium">Phone:</span>{" "}
                            <a
                                href="tel:+1234567890"
                                className="text-blue-300 hover:underline"
                            >
                                +123 456 7890
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
