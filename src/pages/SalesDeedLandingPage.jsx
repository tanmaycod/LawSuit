import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SplashCursor from './SplashCursor';

const Marquee = ({ text, direction }) => {
    return (
        <div
            className={`overflow-hidden whitespace-nowrap relative ${direction === 'reverse' ? 'reverse-marquee' : 'marquee'
                }`}
        >
            <motion.div
                className="inline-block"
                animate={{ x: direction === 'reverse' ? '100%' : '-100%' }}
                initial={{ x: direction === 'reverse' ? '-100%' : '100%' }}
                transition={{
                    repeat: Infinity,
                    duration: 20, // Adjust duration dynamically for responsiveness
                    ease: "linear",
                }}
            >
                {Array(10)
                    .fill(text)
                    .map((item, index) => (
                        <span
                            key={index}
                            className="mx-4 text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide text-black"
                        >
                            {item}
                        </span>
                    ))}
            </motion.div>
        </div>
    );
};


const FAQItem = ({ question, answer, index, toggle, active }) => (
    <motion.div
        whileHover={{ scale: 1.03, backgroundColor: '#F9FAFB' }}
        className={`mb-6 p-4 sm:p-6 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-transform duration-200 ${active === index ? 'bg-gray-100' : ''
            }`}
        onClick={() => toggle(index)}
        onKeyPress={(e) => e.key === 'Enter' && toggle(index)}
        role="button"
        tabIndex={0}
        aria-expanded={active === index}
    >
        <h4 className="text-xl sm:text-2xl font-semibold mb-2 text-black cursor-pointer">
            {question}
        </h4>
        {active === index && (
            <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                    duration: 0.3,
                    ease: [0.6, 0.05, 0.1, 0.9],
                }}
                className="text-gray-700 text-base sm:text-lg leading-relaxed"
            >
                {answer}
            </motion.p>
        )}
    </motion.div>
);




const SaleDeedLandingPage = () => {
    const [activeFAQ, setActiveFAQ] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="bg-white text-black min-h-screen font-sans relative">
            {/* Floating Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gray-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-64 h-64 bg-gray-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>

            {/* Header Section */}
            <header className="flex justify-between items-center p-4 md:p-8 border-b border-gray-300 z-10 relative bg-white">
                {/* Logo */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-5xl font-extrabold tracking-wide text-black"
                >
                    LegalEase
                </motion.h1>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#features" className="hover:text-gray-600 transition duration-300">
                        Features
                    </a>
                    <a href="#about" className="hover:text-gray-600 transition duration-300">
                        About Us
                    </a>
                    <a href="#faq" className="hover:text-gray-600 transition duration-300">
                        FAQ
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="block md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-16 left-0 w-full bg-white shadow-md p-6 space-y-4 text-center md:hidden z-20"
                    >
                        <a href="#features" className="block text-lg hover:text-gray-600 transition duration-300">
                            Features
                        </a>
                        <a href="#about" className="block text-lg hover:text-gray-600 transition duration-300">
                            About Us
                        </a>
                        <a href="#faq" className="block text-lg hover:text-gray-600 transition duration-300">
                            FAQ
                        </a>
                    </motion.nav>
                )}
            </header>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-24 px-6 relative z-10 min-h-screen bg-white">
                <SplashCursor
                    SIM_RESOLUTION={128}
                    DYE_RESOLUTION={1024}
                    DENSITY_DISSIPATION={2.5}
                    VELOCITY_DISSIPATION={1.8}
                    PRESSURE={0.1}
                    PRESSURE_ITERATIONS={20}
                    CURL={15}
                    SPLAT_RADIUS={0.25}
                    SPLAT_FORCE={3000}
                    SHADING={true}
                    COLOR_UPDATE_SPEED={5}
                    BACK_COLOR={{ r: 0.1, g: 0.1, b: 0.1 }}
                    TRANSPARENT={true}
                />
                <motion.h2
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wide mb-8 text-black flex space-x-2"
                >
                    {"Your Sale Deed, Simplified".split(" ").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: 0, opacity: 1 }}
                            animate={{
                                rotate: [0, -2, 0, 2, 0],
                                textShadow: "0px 0px 2px rgba(0, 0, 0, 0.2)",
                            }}
                            whileHover={{
                                y: Math.random() * 10 - 5,
                                x: Math.random() * 10 - 5,
                                color: "rgba(0, 0, 0, 0.8)",
                                textShadow: "0px 0px 8px rgba(0, 0, 0, 0.8)",
                            }}
                            whileTap={{
                                scale: 0.9,
                                color: "#f5f5f5",
                            }}
                            transition={{
                                duration: 0.4,
                                type: "spring",
                            }}
                            style={{
                                display: "inline-block",
                                transformOrigin: "center",
                            }}
                            className="inline-block"
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl mb-12 px-4 leading-relaxed"
                >
                    The most comprehensive and seamless solution for generating, managing, and executing legal sale deeds online.
                </motion.p>
                <motion.button
                    onClick={() => alert("Getting Started!")}
                    className="px-6 py-3 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white bg-black hover:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                    Get Started
                </motion.button>
            </section>


            {/* Dynamic Infinite Marquee */}
            <div className="overflow-hidden relative">
                <Marquee
                    text="Simplified Legal Documents | Trusted by Professionals"
                    direction="forward"
                    className="text-lg md:text-xl font-semibold text-gray-800 py-4"
                />
                <Marquee
                    text="Legal Transparency | Hassle-Free Sale Deeds"
                    direction="reverse"
                    className="text-lg md:text-xl font-semibold text-gray-800 py-4"
                />
            </div>

            {/* Features Section */}
            <section id="features" className="py-16 md:py-24 border-t border-gray-300 relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black px-4">
                    Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-8 xl:px-20">
                    {[
                        {
                            title: "User-Friendly Templates",
                            description: "Ready-made legal templates customized to your needs.",
                        },
                        {
                            title: "Secure Execution",
                            description: "Built-in digital signatures and secure storage.",
                        },
                        {
                            title: "Expert Assistance",
                            description: "Access to a network of legal professionals.",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#F3F4F6",
                                boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                            }}
                            className="p-6 md:p-8 bg-white border border-gray-300 rounded-lg shadow-md text-center transition-transform transform duration-300"
                        >
                            <h4 className="text-xl md:text-2xl font-semibold mb-4 text-black">
                                {feature.title}
                            </h4>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>


            {/* About Section */}
            <section id="about" className="py-16 md:py-24 border-t border-gray-300 bg-gray-100 relative z-10">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-black">
                    About Us
                </h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl md:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    At LegalEase, we believe that simplifying legal processes can empower individuals and businesses alike.
                    Our mission is to bridge the gap between technology and law, providing you with tools that make legal processes effortless.
                </motion.p>
            </section>


            {/* Government's Role Section */}
            <section id="government-role" className="py-24 border-t border-gray-300 relative z-10">
                <h3 className="text-4xl font-bold text-center mb-12 text-black">
                    Government's Role
                </h3>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-700 mb-12 text-center">
                        The government plays a critical role in the sale deed process, ensuring legal compliance, tax collection, and property ownership transparency. Explore the interactive visualizations below to understand these responsibilities in depth:
                    </p>
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr"
                    >
                        {/* Cards */}
                        {[
                            {
                                icon: '📜',
                                title: 'Registration',
                                description: 'Official registrars ensure property transactions are legally recorded.',
                                details: 'Registrars maintain the integrity of records by verifying documents and collecting official details.',
                                color: 'bg-blue-500',
                            },
                            {
                                icon: '💰',
                                title: 'Tax Collection',
                                description: 'Governments collect stamp duties and registration fees as part of transactions.',
                                details: 'These fees contribute significantly to public funds and help sustain essential services.',
                                color: 'bg-green-500',
                            },
                            {
                                icon: '📂',
                                title: 'Public Records',
                                description: 'Property records are maintained to ensure ownership transparency.',
                                details: 'These records are vital for buyers, sellers, and legal authorities.',
                                color: 'bg-yellow-500',
                            },
                            {
                                icon: '⚖️',
                                title: 'Dispute Resolution',
                                description: 'Mechanisms are in place to address property disputes efficiently.',
                                details: 'Dedicated legal frameworks and authorities handle disputes swiftly.',
                                color: 'bg-red-500',
                            },
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
                                }}
                                className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer group flex flex-col relative"
                            >
                                <div
                                    className={`absolute -top-6 -right-6 ${card.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-xl`}
                                >
                                    {card.icon}
                                </div>
                                <h4 className="text-2xl font-bold mb-4 text-center sm:text-left">
                                    {card.title}
                                </h4>
                                <p className="text-gray-700 mb-4 text-center sm:text-left">
                                    {card.description}
                                </p>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    whileHover={{ height: 'auto', opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="overflow-hidden bg-gray-100 p-4 rounded-lg mt-auto"
                                >
                                    <p className="text-gray-600 text-sm">{card.details}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>




            <section id="required-documents" className="py-24 border-t border-gray-300 bg-gray-100 relative z-10">
                <h3 className="text-4xl font-bold text-center mb-12 text-black">
                    Required Documents
                </h3>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-lg text-gray-700 mb-6 text-center">
                        To successfully execute a sale deed, the following documents are essential. Hover over each card for more details.
                    </p>
                    <div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        style={{
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        }}
                    >
                        {/* Card Component */}
                        {[
                            {
                                title: 'Original Sale Agreement',
                                description:
                                    'The agreement that outlines the terms and conditions agreed upon by both parties.',
                                icon: 'fas fa-file-signature',
                                bgColor: 'bg-indigo-500',
                                hoverColor: 'hover:bg-indigo-50',
                                tagColor: 'bg-indigo-100 text-indigo-800',
                                tagText: 'Required',
                            },
                            {
                                title: 'Property Title Deed',
                                description: 'Proof of ownership of the property being sold.',
                                icon: 'fas fa-certificate',
                                bgColor: 'bg-green-500',
                                hoverColor: 'hover:bg-green-50',
                                tagColor: 'bg-green-100 text-green-800',
                                tagText: 'Verified',
                            },
                            {
                                title: 'Encumbrance Certificate',
                                description:
                                    'A document that certifies the property is free from any legal or financial liabilities.',
                                icon: 'fas fa-file-alt',
                                bgColor: 'bg-yellow-500',
                                hoverColor: 'hover:bg-yellow-50',
                                tagColor: 'bg-yellow-100 text-yellow-800',
                                tagText: 'Check Status',
                            },
                            {
                                title: 'Government-approved Identification',
                                description:
                                    'Valid ID such as Aadhaar, Passport, etc., to verify identity.',
                                icon: 'fas fa-id-card',
                                bgColor: 'bg-blue-500',
                                hoverColor: 'hover:bg-blue-50',
                                tagColor: 'bg-blue-100 text-blue-800',
                                tagText: 'Mandatory',
                            },
                            {
                                title: 'Latest Tax Receipts',
                                description:
                                    'Receipts that confirm all property taxes have been paid up to date.',
                                icon: 'fas fa-receipt',
                                bgColor: 'bg-red-500',
                                hoverColor: 'hover:bg-red-50',
                                tagColor: 'bg-red-100 text-red-800',
                                tagText: 'Crucial',
                            },
                            {
                                title: 'No Objection Certificate (NOC)',
                                description:
                                    'Issued by relevant authorities, ensuring there are no objections to the sale.',
                                icon: 'fas fa-handshake',
                                bgColor: 'bg-purple-500',
                                hoverColor: 'hover:bg-purple-50',
                                tagColor: 'bg-purple-100 text-purple-800',
                                tagText: 'Required',
                            },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className={`group bg-white p-6 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 relative ${card.hoverColor}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`${card.bgColor} text-white rounded-full p-3`}>
                                        <i className={`${card.icon} text-xl`}></i>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800">
                                        {card.title}
                                    </h4>
                                </div>
                                <p className="text-gray-600 text-base mt-4 group-hover:opacity-70">
                                    {card.description}
                                </p>
                                <div
                                    className={`absolute top-2 right-2 ${card.tagColor} rounded-full px-3 py-1 text-xs`}
                                >
                                    {card.tagText}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            <section
                id="demo-draft"
                className="py-12 md:py-24 border-t border-gray-300 relative z-10 bg-gradient-to-b from-white to-gray-50"
            >
                <h3
                    className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-8 md:mb-12 text-black"
                    style={{ lineHeight: "1.2", wordSpacing: "0.02em" }}
                >
                    Interactive Demo: Advanced Sale Deed Draft
                </h3>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                    <p
                        className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 text-center"
                        style={{ maxWidth: "60ch", margin: "0 auto" }}
                    >
                        Dive into the sale deed draft below.
                    </p>
                    <div
                        className="p-6 md:p-8 bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-400 rounded-lg shadow-lg"
                    >
                        <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6">
                            <strong
                                className="text-indigo-700 underline cursor-pointer interactive-tooltip"
                                title="Click to learn more about the importance of a Sale Deed"
                            >
                                SALE DEED
                            </strong>
                        </p>
                        <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6">
                            This Sale Deed is made and executed on{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit the execution date"
                            >
                                [Date]
                            </span>
                            , by{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit Seller's details"
                            >
                                [Seller Name]
                            </span>
                            , residing at{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit Seller's address"
                            >
                                [Seller Address]
                            </span>
                            , hereinafter referred to as the{" "}
                            <strong
                                className="text-indigo-700 cursor-pointer tooltip"
                                title="Seller is the current owner of the property."
                            >
                                "Seller"
                            </strong>
                            , in favor of{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit Buyer's details"
                            >
                                [Buyer Name]
                            </span>
                            , residing at{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit Buyer's address"
                            >
                                [Buyer Address]
                            </span>
                            , hereinafter referred to as the{" "}
                            <strong
                                className="text-indigo-700 cursor-pointer tooltip"
                                title="Buyer is the new owner of the property upon completion of this deed."
                            >
                                "Buyer"
                            </strong>
                            .
                        </p>
                        <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-6">
                            The Seller hereby conveys, transfers, and assigns all rights, title,
                            and interest in the property located at{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit the property address"
                            >
                                [Property Address]
                            </span>
                            , free from all encumbrances, to the Buyer for a consideration of{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit the purchase amount"
                            >
                                [Amount]
                            </span>{" "}
                            (Rupees{" "}
                            <span
                                className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                title="Click to edit the purchase amount in words"
                            >
                                [Amount in Words]
                            </span>
                            ).
                        </p>
                        <div
                            className="interactive-accordion bg-white border border-gray-300 rounded-lg shadow p-4 md:p-6 mb-4 md:mb-6"
                        >
                            <h4
                                className="text-sm md:text-lg font-bold text-gray-800 cursor-pointer mb-2 md:mb-4"
                            >
                                <span className="text-indigo-700">+</span> Additional Clauses
                            </h4>
                            <div className="clause-content">
                                <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
                                    <strong>Indemnity Clause:</strong> The Seller indemnifies the Buyer
                                    against any liabilities or claims arising out of prior ownership of
                                    the property.
                                </p>
                                <p className="text-sm md:text-base text-gray-700 mb-2 md:mb-4">
                                    <strong>Encumbrances:</strong> The Seller guarantees that the
                                    property is free from all legal encumbrances, pending dues, and
                                    disputes.
                                </p>
                                <p className="text-sm md:text-base text-gray-700">
                                    <strong>Delivery of Possession:</strong> Possession of the property
                                    shall be handed over to the Buyer on the date of registration.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm md:text-lg text-gray-700">
                            Signed and delivered by the parties on the day and year first above
                            written in the presence of witnesses.
                        </p>
                        <div className="mt-4 md:mt-6">
                            <h4 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-4">
                                Witness Information
                            </h4>
                            <ul className="list-disc list-inside space-y-1 md:space-y-2">
                                <li>
                                    Witness 1:{" "}
                                    <span
                                        className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                        title="Click to edit Witness 1 details"
                                    >
                                        [Witness 1 Name]
                                    </span>{" "}
                                    residing at{" "}
                                    <span
                                        className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                        title="Click to edit Witness 1 address"
                                    >
                                        [Witness 1 Address]
                                    </span>
                                    .
                                </li>
                                <li>
                                    Witness 2:{" "}
                                    <span
                                        className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                        title="Click to edit Witness 2 details"
                                    >
                                        [Witness 2 Name]
                                    </span>{" "}
                                    residing at{" "}
                                    <span
                                        className="text-indigo-700 font-semibold underline cursor-pointer editable"
                                        title="Click to edit Witness 2 address"
                                    >
                                        [Witness 2 Address]
                                    </span>
                                    .
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section
                id="faq"
                className="relative py-16 md:py-24 lg:py-32 border-t border-gray-300 bg-gradient-to-r from-gray-50 to-gray-200 overflow-hidden"
            >
                {/* Background Decorative Gradients */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[20rem] h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-40"></div>
                    <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] md:w-[24rem] md:h-[24rem] lg:w-[28rem] lg:h-[28rem] bg-gradient-to-br from-green-400 to-teal-500 rounded-full blur-3xl opacity-40"></div>
                </div>

                <div className="relative z-10">
                    <h3
                        className="text-[clamp(1.5rem, 4vw, 3rem)] font-extrabold text-center mb-10 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 tracking-wider"
                    >
                        Frequently Asked Questions
                    </h3>

                    {/* FAQ Items */}
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                        <div className="accordion space-y-4">
                            <FAQItem
                                question="What is LegalEase?"
                                answer="LegalEase is an online platform that simplifies the process of creating and managing sale deeds and other legal documents."
                                index={0}
                                toggle={toggleFAQ}
                                active={activeFAQ}
                            />
                            <FAQItem
                                question="How secure is the platform?"
                                answer="Our platform uses top-notch encryption and digital signature technology to ensure your documents are safe and secure."
                                index={1}
                                toggle={toggleFAQ}
                                active={activeFAQ}
                            />
                            <FAQItem
                                question="Can I customize the templates?"
                                answer="Yes, our templates are fully customizable to meet your unique requirements."
                                index={2}
                                toggle={toggleFAQ}
                                active={activeFAQ}
                            />
                        </div>
                    </div>
                </div>

                {/* Immersive Decorative Elements */}
                <div
                    className="absolute inset-0 pointer-events-none z-0"
                    aria-hidden="true"
                >
                    <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                        <svg
                            className="h-[clamp(8rem, 20vw, 24rem)] w-[clamp(8rem, 20vw, 24rem)] opacity-30"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 120 120"
                        >
                            <circle cx="60" cy="60" r="50" fill="url(#gradient)" />
                            <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#34d399" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default SaleDeedLandingPage;
