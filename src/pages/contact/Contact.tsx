import React, { useState } from "react";
import FadeInScale from "../../components/animations/FadeInScale.js";

const CONTACT_DATA = [
    {
        id: "parking",
        title: "Parking",
        content: (
            <FadeInScale className="mx-6">
                <p>
                    Grace provides convenient on-site parking with plenty of space available.
                    The parking area is well-maintained, and there are no restrictions or fees.
                </p>
            </FadeInScale>
        ),
        defaultOpen: true,
    },
    {
        id: "taxi",
        title: "Uber / Taxi",
        content: (
            <FadeInScale className="mx-6">
                <p>Uber and taxi services are available in the Leeds and Bradford area, providing a convenient way to travel to Grace. You can easily book an Uber/taxi for a pickup or drop-off right outside the location.</p>
            </FadeInScale>
        ),
    },
    {
        id: "disabled",
        title: "Disabled Access",
        content: (
            <FadeInScale className="mx-6">
                <p>
                    We sincerely apologise, but please note that there is no designated disabled access or facilities available at this time.
                </p>
            </FadeInScale>
        ),
    },
];


interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen: boolean;
    id: string;
    setOpen: (id: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, id, setOpen }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 px-4 text-main hover:bg-primary transition-colors"
                onClick={() => setOpen(id)}
                aria-expanded={isOpen}
                aria-controls={`contact-${id}`}
            >
                <span className="font-semibold text-start text-lg">{title}</span>
                <svg
                    className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                        }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    ></path>
                </svg>
            </button>

            <div
                id={`contact-${id}`}
                className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[800px] opacity-100 py-4" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-2 text-sm lg:text-base">{content}</div>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const [openId, setOpenId] = useState<string>("");

    const handleToggle = (id: string) => {
        setOpenId((prev) => (prev === id ? "" : id));
    };

    return (
        <div className="bg-secondary w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-main">
                <FadeInScale delay={0.1} className="w-full flex items-center gap-4 mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold italic whitespace-nowrap">
                        Plan Your Route
                    </h2>
                    <div className="w-full h-0.5 bg-main"></div>
                </FadeInScale>
                <FadeInScale delay={0.2} className="border border-gray-200 rounded-lg overflow-hidden">
                    {CONTACT_DATA.map((item) => (
                        <AccordionItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            isOpen={openId === item.id}
                            setOpen={handleToggle}
                        />
                    ))}
                </FadeInScale>
            </div>
        </div>
    );
};

export default Contact;
