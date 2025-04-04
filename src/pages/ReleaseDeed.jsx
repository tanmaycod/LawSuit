import React, { useState } from "react";
import { FaIdCard, FaFileAlt, FaHandshake, FaUserFriends, FaFileInvoice, FaUniversity, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import BlobCursor from "./BlobCursor";
import FlowingMenu from "./FlowingMenu";
import "tailwindcss/tailwind.css";

const ReleaseDeed = () => {

    const FAQs = [
        {
            question: "What is a release deed?",
            answer:
                "A release deed is a legal document transferring ownership of property or rights from one party to another. It is often used to relinquish claims or interests in a property.",
        },
        {
            question: "What documents are required for a release deed?",
            answer:
                "Typically, the required documents include proof of ownership, identity proofs of both parties, property tax receipts, and a drafted release deed. Our platform provides a customized checklist for your convenience.",
        },
        {
            question: "How long does it take to execute a release deed?",
            answer:
                "The timeline varies depending on the complexity of the property and jurisdiction. Generally, it takes 7–14 business days if all documents are in order.",
        },
        {
            question: "Is a release deed the same as a relinquishment deed?",
            answer:
                "No, while both documents are used to transfer rights, a release deed is broader and may apply to various property types, whereas a relinquishment deed specifically pertains to joint property ownership.",
        },
        {
            question: "Can a release deed be revoked?",
            answer:
                "A release deed, once registered, is generally irrevocable unless both parties agree to cancel it, or a court invalidates it due to fraud or misrepresentation.",
        },
        {
            question: "Do I need a lawyer to create a release deed?",
            answer:
                "While not mandatory, consulting a legal expert ensures accuracy and compliance with local property laws, minimizing potential disputes.",
        },
        {
            question: "What are the government fees associated with a release deed?",
            answer:
                "The fees vary by state or region and may include stamp duty, registration fees, and processing charges. Our platform helps calculate these based on your location.",
        },
        {
            question: "What happens if a release deed is not registered?",
            answer:
                "An unregistered release deed is legally invalid in most jurisdictions. Registration is crucial to make it enforceable and official.",
        },
        {
            question: "Can a release deed include conditions or clauses?",
            answer:
                "Yes, a release deed can include conditional terms, provided they comply with legal requirements and do not contradict existing laws.",
        },
        {
            question: "Is digital registration of release deeds possible?",
            answer:
                "Yes, some jurisdictions allow digital or online registration of release deeds, making the process faster and more convenient. Check with local authorities or our platform for availability.",
        },
        {
            question: "What is the difference between a release deed and a gift deed?",
            answer:
                "A release deed transfers rights for a consideration or mutual agreement, while a gift deed is used to transfer property without monetary exchange, typically as a gesture of goodwill.",
        },
        {
            question: "Are there any tax implications of executing a release deed?",
            answer:
                "Yes, there could be tax implications such as capital gains tax for the releasor or stamp duty for the releasee. Consult a tax advisor for specifics."
        },
        {
            question: "Can a minor execute or receive a release deed?",
            answer:
                "Minors cannot independently execute or receive a release deed. A legal guardian may act on their behalf, subject to court approval in some cases.",
        },
    ];

    const documents = [
        {
            title: "Identity Proof",
            description: "Official documents that confirm your identity, such as a passport or driver's license.",
            icon: <FaIdCard size={50} className="text-blue-500" />,
            tooltip: "Examples: Passport, Driver's License, National ID"
        },
        {
            title: "Ownership Proof",
            description: "Documents proving ownership of the asset, such as deeds or titles.",
            icon: <FaFileAlt size={50} className="text-green-500" />,
            tooltip: "Examples: Property Deed, Vehicle Title"
        },
        {
            title: "Previous Agreements",
            description: "Copies of past agreements or contracts related to the transaction.",
            icon: <FaHandshake size={50} className="text-orange-500" />,
            tooltip: "Examples: Previous Contracts, Agreements"
        },
        {
            title: "Witness Details",
            description: "Information about individuals who will serve as witnesses.",
            icon: <FaUserFriends size={50} className="text-purple-500" />,
            tooltip: "Include witness names, addresses, and contact details"
        },
        {
            title: "Tax Records",
            description: "Relevant tax records to ensure compliance.",
            icon: <FaFileInvoice size={50} className="text-red-500" />,
            tooltip: "Examples: Income Tax Returns, Property Tax Receipts"
        },
        {
            title: "Bank Statements",
            description: "Recent bank statements for financial verification.",
            icon: <FaUniversity size={50} className="text-blue-700" />,
            tooltip: "Provide statements from the last 6 months"
        },
        {
            title: "Legal Clearance",
            description: "Clearance certificates from legal authorities.",
            icon: <FaBalanceScale size={50} className="text-gray-500" />,
            tooltip: "Examples: No Objection Certificate, Clearance Letter"
        },
        {
            title: "Insurance Documents",
            description: "Proof of insurance for relevant assets.",
            icon: <FaShieldAlt size={50} className="text-teal-500" />,
            tooltip: "Examples: Health Insurance, Vehicle Insurance"
        }
    ];

    const demoItems = [
        {  text:  "Advanced Security",  image: 'https://i.pinimg.com/originals/99/e2/4e/99e24e251bd535b7717a0f99b3e84138.gif' },
        {  text:  "Interactive UI",     image: 'https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif' },
        {  text: "AI-Powered Drafting",   image: 'https://i.pinimg.com/originals/6a/9a/8b/6a9a8bc2e11be473e4d8f50cbfbf010e.gif' },
        {  text: "Real-Time Collaboration",   image: 'https://i.pinimg.com/originals/ad/3a/a1/ad3aa168b76a1846c56edad68c218242.gif' },
        {  text: "Seamless Government Compliance",    image: 'https://i.pinimg.com/originals/30/93/cc/3093cc9a62ab000c8b36f3e9010b32d0.gif' },
        {  text: "Cloud Integration",   image: 'https://i.pinimg.com/originals/95/fa/54/95fa543775583cad8944f0fafa9f7d73.gif' },
    ];

    const [activeFAQ, setActiveFAQ] = useState(null);
    const [filteredFAQs] = useState(FAQs);

    const toggleFAQ = (index) => {
        setActiveFAQ(activeFAQ === index ? null : index);
    };

    return (
        <div className="bg-white text-black min-h-screen font-sans">
            {/* Header Section */}
            <header className="p-4 md:p-6 border-b border-gray-300 shadow-lg sticky top-0 z-50 backdrop-blur-md bg-white/80">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <h1
                        className="text-3xl md:text-4xl font-extrabold tracking-wider text-black hover:text-indigo-600 transition-transform transform hover:scale-110 cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        ReleaseDeed
                    </h1>

                    {/* Mobile Menu Button */}
                    <button
                        className="block md:hidden p-2 rounded-lg focus:outline-none hover:bg-gray-100"
                        id="menu-toggle"
                        onClick={() =>
                            document
                                .getElementById("mobile-menu")
                                .classList.toggle("hidden")
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Navigation */}
                    <nav
                        id="mobile-menu"
                        className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center"
                    >
                        {[
                            { href: "#features", label: "Features" },
                            { href: "#about", label: "About Us" },
                            { href: "#government-role", label: "Government's Role" },
                            { href: "#documents", label: "Required Documents" },
                            { href: "#draft", label: "Draft" },
                            { href: "#faq", label: "FAQs" },
                        ].map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="relative group text-lg text-gray-800 hover:text-indigo-600 transition-transform transform hover:scale-105"
                            >
                                {link.label}
                                {/* Underline Effect */}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Subtle Shadow for Depth */}
                <div className="absolute inset-x-0 bottom-[-1px] h-[6px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"></div>
            </header>




            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center text-center bg-gradient-to-br from-gray-100 via-white to-gray-200 overflow-hidden">
                {/* Infinite Marquee Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute flex space-x-8 animate-marquee w-[200%]">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="text-xl font-semibold text-gray-400">
                                Seamless | Efficient | Modern
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 flex space-x-8 animate-marquee-reverse w-[200%]">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="text-xl font-semibold text-gray-400">
                                Legal Automation | Your Partner in Growth
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-0">
                    <BlobCursor blobType="circle" fillColor="#e6e6e6 " />
                </div>

                {/* Animated Hero Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl px-8 py-12 max-w-3xl hover:scale-105 transition-transform duration-300 ease-out"
                    style={{
                        perspective: "1000px",
                        transformStyle: "preserve-3d",
                        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), inset 0 4px 8px rgba(255, 255, 255, 0.2)",
                    }}
                    onMouseMove={(e) => {
                        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - left) / width) * 2 - 1;
                        const y = ((e.clientY - top) / height) * 2 - 1;
                        e.currentTarget.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
                        e.currentTarget.style.boxShadow = `0 ${y * 20}px ${x * 20}px rgba(0, 0, 0, 0.4)`;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
                        e.currentTarget.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.3), inset 0 4px 8px rgba(255, 255, 255, 0.2)";
                    }}
                >
                    <h1
                        className="text-6xl font-extrabold tracking-tight leading-tight mb-6 relative"
                        style={{
                            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3), -2px -2px 8px rgba(255, 255, 255, 0.5)",
                        }}
                    >
                        <span className="relative inline-block">
                            <span className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-500 to-indigo-500 blur-md opacity-75 rounded-lg"></span>
                            <span className="relative z-10 typing-animation">
                                Transform Your Legal Workflow
                            </span>
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
                        Leverage cutting-edge tools and a seamless design to simplify the release deed process.
                    </p>
                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            rotate: 3,
                            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.5)",
                        }}
                        whileTap={{
                            scale: 0.9,
                            rotate: -3,
                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.4)",
                        }}
                        className="mt-8 px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-lg shadow-lg transition transform duration-300 ease-out relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-25 rounded-full animate-ripple"></span>
                        Get Started Now
                    </motion.button>
                </motion.div>
            </section>

            <section
                id="features"
                className="py-16 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen flex items-center justify-center"
                style={{ height: '600px', position: 'relative' }}
            >

                <FlowingMenu items={demoItems} />
            </section>





            <section id="about" className="py-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 relative overflow-hidden">
                {/* Content Container */}
                <div className="container mx-auto text-center relative z-10">
                    {/* Heading */}
                    <h2 className="text-5xl font-extrabold mb-12 relative group text-gray-800">
                        <span className="inline-flex items-center">
                            <span>About Us</span>
                            {/* Animated SVG Icon */}
                            <span className="ml-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-8 h-8 text-blue-500 transform group-hover:rotate-360 transition-transform duration-500"
                                >
                                    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
                                    <circle cx="12" cy="12" r="4" className="fill-current" />
                                </svg>
                            </span>
                        </span>
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 group-hover:w-32"></span>
                        <span className="absolute inset-0 text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
                    </h2>

                    {/* Description */}
                    <p
                        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed p-10 rounded-xl bg-white shadow-2xl relative transition-transform duration-500 hover:scale-110 hover:shadow-3xl hover:bg-gradient-to-br from-white via-gray-100 to-blue-100"
                        style={{
                            perspective: "1000px",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        At <span className="font-bold text-blue-500">ReleaseDeed</span>, we empower individuals and businesses with streamlined,
                        transparent, and efficient legal document solutions, leveraging AI and
                        modern technology.
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 opacity-0 hover:opacity-25 transition-opacity duration-500 rounded-lg"></span>
                    </p>
                </div>
            </section>




            <section id="government-role" className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 relative">
                <div className="container mx-auto text-center relative z-10">
                    <h2 className="text-5xl font-extrabold mb-8 text-blue-900 drop-shadow-2xl animate-pulse">
                        The Government's Role
                    </h2>
                    <div
                        className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed shadow-2xl bg-white/90 p-8 rounded-lg backdrop-blur-md transform transition-transform duration-300 hover:scale-105 ease-in-out"
                    >
                        <p>
                            Our platform serves as a bridge between citizens and regulatory bodies, simplifying compliance with government standards while streamlining the deed approval process. Experience efficiency and trust, powered by secure integrations and real-time updates.
                        </p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div
                                className="p-6 bg-gradient-to-b from-blue-200/95 to-blue-100/95 rounded-lg shadow-xl backdrop-blur-md transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 hover:scale-105"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                                    Citizen Engagement
                                </h3>
                                <p>
                                    An intuitive system that enables citizens to track the progress of their approvals, access digital records, and communicate directly with relevant government departments.
                                </p>

                                <div className="mt-4">
                                    <div className="relative h-2 bg-gray-300 rounded-full">
                                        <div
                                            className="absolute h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-in-out"
                                            style={{ width: '75%' }}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">Engagement Progress: 75%</p>
                                </div>
                            </div>

                            <div
                                className="p-6 bg-gradient-to-b from-blue-200/95 to-blue-100/95 rounded-lg shadow-xl backdrop-blur-md transform transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 hover:scale-105"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                                    Streamlined Processes
                                </h3>
                                <p>
                                    By leveraging cutting-edge technology, we simplify complex workflows, reduce redundancy, and ensure faster turnaround times for applications and approvals.
                                </p>

                                <div className="mt-4">
                                    <div className="relative h-2 bg-gray-300 rounded-full">
                                        <div
                                            className="absolute h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-in-out"
                                            style={{ width: '90%' }}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-600">Process Efficiency: 90%</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-gray-500 text-sm italic max-w-3xl mx-auto animate-fade-in">
                        "Empowering citizens and governments to build a transparent and efficient ecosystem."
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none animate-slow-fade"></div>
                </div>


            </section>




            <section id="documents" className="py-20 bg-gradient-to-b from-gray-100 to-gray-300">
                <div className="container mx-auto text-center px-6">
                    <h2 className="text-5xl font-bold mb-12 text-gray-800 drop-shadow-lg">
                        Required Documents
                    </h2>
                    <p className="text-lg mb-12 text-gray-600 leading-relaxed">
                        Ensure you have all the necessary paperwork ready for a smooth process.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {documents.map((doc, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1, translateY: -10 }}
                                className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:translate-y-[-5px] border-t-[6px] border-gray-200 group"
                            >
                                {/* Interactive hover overlay with tooltip */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-tr from-gray-200 via-gray-300 to-gray-400 opacity-0 group-hover:opacity-30 rounded-xl transition"
                                    aria-label={`More information about ${doc.title}`}
                                />
                                <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-4">
                                    {/* Icon with hover effect */}
                                    <motion.div
                                        className="p-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-md group-hover:shadow-xl transform group-hover:scale-105 transition"
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                    >
                                        {doc.icon}
                                    </motion.div>
                                    {/* Title with animation */}
                                    <motion.h3
                                        className="text-2xl font-semibold text-gray-800 mb-2 tracking-wide drop-shadow"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {doc.title}
                                    </motion.h3>
                                    {/* Description with tooltip */}
                                    <p
                                        className="text-gray-600 text-sm text-center leading-relaxed group-hover:cursor-help relative"
                                        data-tooltip={doc.tooltip}
                                    >
                                        {doc.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Draft Section */}
            <section
                id="draft"
                className="py-20 bg-gradient-to-b from-blue-50 to-gray-100"
            >
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-8 sm:mb-10 tracking-tight">
                        Draft Your Deed
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12">
                        Seamlessly create a personalized release deed with our advanced editor,
                        ensuring precision and elegance tailored to your needs.
                    </p>

                    {/* Demo Draft Preview */}
                    <div className="mt-10 sm:mt-16 bg-white shadow-lg md:shadow-2xl rounded-xl border border-gray-300 max-w-4xl md:max-w-5xl mx-auto p-6 sm:p-8 md:p-10">
                        <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-900">
                            Demo Draft Preview
                        </h3>
                        <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
                            Preview your customized release deed in detail below:
                        </p>

                        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 sm:p-8 shadow-inner border border-gray-200">
                            <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                                Release Deed
                            </p>
                            <p className="text-sm sm:text-base text-gray-600 mb-6">
                                Date: January 20, 2025
                            </p>

                            <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
                                This deed is made on this day, January 20, 2025, between{" "}
                                <strong>John Doe</strong> (the "Releasor") and <strong>Jane Smith</strong> (the "Releasee"). The Releasor hereby releases and forever
                                discharges the Releasee from any and all claims, demands, and causes
                                of action, whether known or unknown, arising out of or relating to
                                the subject matter described herein. The terms and conditions are as
                                follows:
                            </p>

                            <ul className="text-base sm:text-lg text-gray-700 list-inside list-decimal space-y-4 mb-6 sm:mb-8">
                                <li>
                                    <strong>Scope of Release:</strong> The Releasor acknowledges that
                                    this deed covers all claims related to the subject matter up to the
                                    date of this agreement.
                                </li>
                                <li>
                                    <strong>Confidentiality:</strong> Both parties agree to maintain the
                                    confidentiality of this release and its terms, except as required
                                    by law.
                                </li>
                                <li>
                                    <strong>Indemnity Clause:</strong> The Releasor agrees to indemnify
                                    and hold the Releasee harmless against any further claims or
                                    liabilities arising from the subject matter.
                                </li>
                                <li>
                                    <strong>Governing Law:</strong> This deed shall be governed by the
                                    laws of the State of California, USA.
                                </li>
                                <li>
                                    <strong>Dispute Resolution:</strong> Any disputes arising from this
                                    deed shall be resolved through mediation or arbitration.
                                </li>
                                <li>
                                    <strong>Entire Agreement:</strong> This deed constitutes the entire
                                    agreement between the parties and supersedes all prior agreements.
                                </li>
                            </ul>

                            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                                    <span className="text-sm sm:text-base text-gray-600 font-medium">
                                        Signature (Releasor):{" "}
                                        <span className="text-gray-800 underline">
                                            ___________________
                                        </span>
                                    </span>
                                    <span className="text-sm sm:text-base text-gray-600 font-medium">
                                        Signature (Releasee):{" "}
                                        <span className="text-gray-800 underline">
                                            ___________________
                                        </span>
                                    </span>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
                                    <span className="text-sm sm:text-base text-gray-600 font-medium">
                                        Witness Name:{" "}
                                        <span className="text-gray-800 underline">
                                            ___________________
                                        </span>
                                    </span>
                                    <span className="text-sm sm:text-base text-gray-600 font-medium">
                                        Witness Signature:{" "}
                                        <span className="text-gray-800 underline">
                                            ___________________
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs sm:text-sm text-gray-500 mt-8 italic">
                                Note: Please ensure all fields are completed accurately. This
                                document is legally binding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>





            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100">
                <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-gray-800">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-8">
                        {filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                onClick={() => toggleFAQ(index)}
                                className={`relative p-6 bg-white rounded-xl shadow-lg transform transition-all duration-300 ${activeFAQ === index
                                    ? "scale-105 shadow-2xl"
                                    : "hover:scale-101 hover:shadow-xl"
                                    } cursor-pointer`}
                            >
                                {/* Top Accent Line */}
                                <span
                                    className={`absolute top-0 left-0 w-full h-1 rounded-t-xl transition-all ${activeFAQ === index ? "bg-blue-500" : "bg-gray-200"
                                        }`}
                                ></span>

                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
                                        {faq.question}
                                    </h3>
                                    <span
                                        className={`transform transition-transform duration-300 ${activeFAQ === index ? "rotate-180" : "rotate-0"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </span>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, maxHeight: 0 }}
                                    animate={{
                                        opacity: activeFAQ === index ? 1 : 0,
                                        maxHeight: activeFAQ === index ? "300px" : "0px",
                                    }}
                                    exit={{ opacity: 0, maxHeight: 0 }}
                                    className="mt-4 text-gray-600 overflow-hidden"
                                >
                                    {activeFAQ === index && (
                                        <p className="text-base md:text-lg leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ReleaseDeed;
