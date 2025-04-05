import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";
import ContactCard from "./Contactcard.jsx";

const ContactUs = () => {
    const contactItems = [
        {
            icon: <FaLinkedin size={28} />,
            color: "text-blue-500",
            title: "LinkedIn",
            subtitle: "Connect with us on LinkedIn",
            href: "https://linkedin.com",
        },
        {
            icon: <FaTwitter size={28} />,
            color: "text-blue-400",
            title: "Twitter",
            subtitle: "Follow us for latest updates",
            href: "https://twitter.com",
        },
        {
            icon: <FaEnvelope size={28} />,
            color: "text-green-500",
            title: "support@myapp.com",
            subtitle: "Email us anytime",
            href: "mailto:support@myapp.com",
        },
        {
            icon: <FaPhone size={28} />,
            color: "text-green-500",
            title: "+123 456 7890",
            subtitle: "Available Mon–Fri, 9AM–5PM",
            href: "tel:+1234567890",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#011c1c] to-[#001111] px-6 py-16 text-white">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-[0_0_20px_rgba(0,255,170,0.4)]">
                    Contact Us
                </h1>
                <p className="text-lg text-gray-300 mt-4">
                    Have any questions or need assistance? We’re here to help you anytime!
                </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
                {contactItems.map((item, index) => (
                    <ContactCard
                        key={index}
                        icon={item.icon}
                        color={item.color}
                        title={item.title}
                        subtitle={item.subtitle}
                        href={item.href}
                    />
                ))}
            </div>
        </div>
    );

};

export default ContactUs;
