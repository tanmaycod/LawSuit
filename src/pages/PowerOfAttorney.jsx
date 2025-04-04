import React from "react";
import { motion } from "framer-motion";
import { FaGavel, FaUserTie, FaShieldAlt } from "react-icons/fa";

const PowerOfAttorney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-black font-sans">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-black to-gray-800 text-white shadow-lg z-50 py-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-8">
          <h1 className="text-4xl font-extrabold uppercase tracking-wide text-white hover:text-gray-300 transition">
            LegalEase
          </h1>
          <ul className="flex space-x-8">
            {["Overview", "Government Insights", "Advantages", "Draft", "FAQs"].map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, color: "#cccccc" }}
                className="cursor-pointer text-lg font-semibold hover:text-gray-400 transition transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase().replace(" ", "-"))
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="overview"
        className="w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-50 to-gray-100 py-20 relative"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 to-transparent blur-xl opacity-50"
        ></motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-8xl font-extrabold uppercase text-gray-800 drop-shadow-md"
        >
          Power of Attorney
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-2xl max-w-4xl text-gray-700 drop-shadow-sm"
        >
          Entrust someone reliable to manage your legal, financial, and personal matters seamlessly.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 px-12 py-4 bg-black text-white font-semibold rounded-full text-lg uppercase hover:bg-gray-700 transform hover:scale-105 transition"
        >
          Learn More
        </motion.button>
      </section>

      {/* Government Insights Section */}
      <section id="government-insights" className="py-24 bg-white border-t border-gray-300 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 pointer-events-none"
        ></motion.div>
        <div className="max-w-7xl mx-auto px-8 relative">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-gray-800"
          >
            Government's Take on Power of Attorney
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 text-xl text-center text-gray-600"
          >
            Governments emphasize the importance of Power of Attorney to safeguard legal and financial interests. Key highlights include:
          </motion.p>
          <ul className="mt-12 space-y-6 text-gray-700 text-lg list-disc pl-12">
            {["Notarization for authenticity verification.", "Registration required for property transactions.", "Adherence to local legal requirements, including revocation clauses."].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="hover:pl-4 transition-all"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-gray-800"
          >
            Key Advantages of Power of Attorney
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Legal Representation",
                desc: "Ensures someone can act on your behalf in legal matters.",
                icon: <FaGavel size={50} className="text-gray-800" />,
              },
              {
                title: "Financial Management",
                desc: "Smooth handling of your finances during absence or incapacitation.",
                icon: <FaUserTie size={50} className="text-gray-800" />,
              },
              {
                title: "Emergency Preparedness",
                desc: "Protects your interests in unforeseen situations.",
                icon: <FaShieldAlt size={50} className="text-gray-800" />,
              },
            ].map((advantage, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-white border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transform transition"
              >
                <div className="flex items-center space-x-4">
                  {advantage.icon}
                  <h3 className="text-2xl font-semibold text-gray-800">{advantage.title}</h3>
                </div>
                <p className="mt-4 text-gray-600">{advantage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Draft Section */}
      <section id="draft" className="py-24 bg-gray-50 border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-gray-800"
          >
            Create Your Power of Attorney Draft
          </motion.h2>
          <p className="mt-8 text-xl text-center text-gray-600">
            Below is a simple draft structure to get you started with creating your Power of Attorney.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-12 p-8 bg-white border border-gray-300 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Draft Example:</h3>
            <div className="text-lg text-gray-700">
              <p className="mb-4">
                <strong className="text-gray-800">Title:</strong> Power of Attorney Document
              </p>
              <p className="mb-4">
                <strong className="text-gray-800">Appointer:</strong> [Your Full Name], residing at [Your Address].
              </p>
              <p className="mb-4">
                <strong className="text-gray-800">Attorney-in-Fact:</strong> [Appointed Person's Full Name], residing at [Appointed Person's Address].
              </p>
              <p className="mb-4">
                <strong className="text-gray-800">Effective Date:</strong> [Start Date] to [End Date] (or "until revoked").
              </p>
              <p className="mb-4">
                <strong className="text-gray-800">Powers Granted:</strong>
                <ul className="list-disc ml-6 mt-2">
                  <li>Manage financial accounts and transactions.</li>
                  <li>Make legal decisions on my behalf.</li>
                  <li>Handle real estate transactions.</li>
                  <li>Other specific powers: [Specify any additional powers].</li>
                </ul>
              </p>
              <p className="mb-4">
                <strong className="text-gray-800">Signature:</strong> [Appointer's Signature and Date]
              </p>
              <p className="mb-4">
                <strong className="text-gray-800">Witnesses:</strong> [Names and Signatures of Witnesses]
              </p>
              <p>
                <strong className="text-gray-800">Notarization:</strong> This document must be notarized to ensure legal validity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-white border-t-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-gray-800"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="mt-12 space-y-8">
            {[{
                question: "What is a Power of Attorney?",
                answer: "A Power of Attorney (PoA) is a legal document that grants an individual the authority to act on another person's behalf in specified or all matters."
              },
              {
                question: "Can a Power of Attorney be revoked?",
                answer: "Yes, the appointer can revoke a PoA at any time, provided they are of sound mind."
              },
              {
                question: "Is notarization mandatory for all PoA documents?",
                answer: "Notarization is recommended for all PoAs to ensure authenticity and legal validity, but it may not be mandatory in all cases."
              },
              {
                question: "What are the types of Power of Attorney?",
                answer: "The main types are General PoA, which covers broad powers, and Specific PoA, which is limited to certain tasks or situations."
              }].map((faq, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-gray-50 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-gradient-to-r from-black to-gray-800 text-center text-gray-400 border-t-2 border-gray-600">
        <p className="font-semibold">© 2025 LegalEase. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PowerOfAttorney;
