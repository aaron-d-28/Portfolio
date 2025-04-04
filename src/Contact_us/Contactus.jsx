import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const ContactUs = () => {
    return (
        <div className="max-w-2xl mx-auto p-6 mt-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">
                Have any questions or need assistance? Feel free to reach out to us!
            </p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Get in Touch</h2>

                <div className="flex flex-col items-center mt-4 space-y-4">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-700 hover:underline">
                        <FaLinkedin className="mr-2" /> LinkedIn
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:underline">
                        <FaTwitter className="mr-2" /> Twitter
                    </a>

                    {/* Email */}
                    <a href="mailto:support@myapp.com" className="flex items-center text-gray-700 hover:underline">
                        <FaEnvelope className="mr-2" /> support@myapp.com
                    </a>

                    {/* Phone */}
                    <a href="tel:+1234567890" className="flex items-center text-gray-700 hover:underline">
                        <FaPhone className="mr-2" /> +123 456 7890
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
