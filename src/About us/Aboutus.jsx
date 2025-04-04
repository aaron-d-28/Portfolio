import React from "react";

const AboutUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 mt-16 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
                Welcome to MyApp! We are dedicated to providing the best services for event discovery and booking.
                Our mission is to connect people with amazing experiences happening around them.
            </p>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Our Team</h2>
                <p className="text-gray-600 mt-2">
                    We are a group of passionate developers, designers, and marketers working together to create a seamless experience for our users.
                </p>
            </div>

            <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
                <p className="text-gray-600 mt-2">Email: support@myapp.com</p>
                <p className="text-gray-600">Phone: +123 456 7890</p>
            </div>
        </div>
    );
};

export default AboutUs;
