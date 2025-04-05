import React from "react";

const ContactCard = ({ icon, color, title, subtitle, href }) => {
    const isExternal = href?.startsWith("http");

    return (
        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl p-6 shadow-[0_0_25px_rgba(0,255,170,0.15)] hover:shadow-[0_0_40px_rgba(0,255,255,0.2)] transition duration-300 hover:scale-[1.03]">
            <div className={`flex items-center space-x-4 ${color}`}>
                {icon}
                <div>
                    <a
                        href={href}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-xl font-semibold hover:underline"
                    >
                        {title}
                    </a>
                    <p className="text-sm text-gray-300">{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
