import React from "react";
import { motion } from "framer-motion";
import { FaFileContract, FaCheckCircle, FaPenFancy } from "react-icons/fa";

const LeaveAndLicense = () => {

    return (
        <div className="min-h-screen bg-gray-50 text-black font-serif relative">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 w-full bg-white bg-opacity-95 z-50 py-4 shadow-lg">
                <nav className="max-w-7xl mx-auto flex justify-between items-center px-6">
                    <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
                        Leave & License
                    </h1>
                    <ul className="flex space-x-6">
                        {"Home Why Us Services Documents Draft".split(" ").map((item, idx) => (
                            <li
                                key={idx}
                                className="text-gray-600 hover:text-gray-900 cursor-pointer transition"
                                onClick={() =>
                                    document
                                        .getElementById(item.toLowerCase().replace(" ", "-"))
                                        .scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section
                id="home"
                className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-200 to-white text-gray-900"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl font-bold tracking-wide uppercase"
                >
                    Leave & License Agreements
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-4 text-2xl text-gray-600"
                >
                    Simplify your legal processes with ease.
                </motion.p>
            </section>

            {/* Details Section */}
            <section
                id="why-us"
                className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-bold text-gray-900 border-l-4 border-gray-900 pl-4">
                        Why Choose Us?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        A Leave and License Agreement is vital for landlords and tenants, ensuring
                        transparency and legal compliance. We deliver precision and protection for all parties.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our agreements meet local standards, reduce risks, and foster trust between stakeholders.
                    </p>
                </motion.div>
                <motion.img
                    src="https://via.placeholder.com/600x400"
                    alt="Legal Agreement"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-lg shadow-lg border border-gray-300"
                />
            </section>

            {/* Services Section */}
            <section
                id="services"
                className="bg-gradient-to-b from-white to-gray-200 py-16"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl font-bold text-center text-gray-900 border-b-2 border-gray-500 pb-4"
                    >
                        Our Tailored Services
                    </motion.h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[{
                            title: "Agreement Drafting",
                            desc: "Personalized drafting to meet all requirements.",
                            icon: <FaFileContract size={40} className="text-gray-900" />, }, {
                            title: "Legal Verification",
                            desc: "Ensuring document authenticity and compliance.",
                            icon: <FaCheckCircle size={40} className="text-gray-900" /> }, {
                            title: "On-Site Execution",
                            desc: "Convenient on-the-spot signing and stamping.",
                            icon: <FaPenFancy size={40} className="text-gray-900" />, }
                        ].map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
                            >
                                <div className="flex items-center space-x-4">
                                    {service.icon}
                                    <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                                </div>
                                <p className="text-gray-600 mt-4">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Required Documents */}
            <section
                id="documents"
                className="max-w-7xl mx-auto px-6 py-24"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center text-gray-900 border-b-2 border-gray-500 pb-4"
                >
                    Required Documents
                </motion.h2>
                <ul className="mt-8 text-gray-700 space-y-4 list-disc pl-10">
                    {["Identity Proof (Aadhaar, PAN, Passport, etc.)", "Property Ownership Documents", "Recent Utility Bills", "Passport-sized Photographs",].map((item, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="hover:text-gray-900 transition duration-200"
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </section>

            {/* Draft Agreement Section */}
            <section
                id="draft"
                className="bg-white py-16"
            >
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl font-bold text-center text-gray-900"
                >
                    Draft Agreement
                </motion.h2>
                <div className="mt-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg"
                    >
                        <iframe
                            src="/LAndL.pdf"
                            title="Draft Agreement"
                            className="w-full h-[600px] border border-gray-300 rounded-lg"
                        />
                        <div className="flex justify-between mt-4">
                            <p className="text-gray-600">Preview the legal draft above</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-6 bg-white text-center text-gray-600 border-t border-gray-300">
                <p>© 2025 Leave and License Services. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LeaveAndLicense;
