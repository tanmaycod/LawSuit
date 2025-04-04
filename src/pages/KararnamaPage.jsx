import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
  FaRegLightbulb,
  FaFileContract,
  FaBars,
} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const KararnamaPage = () => {
  const [faqOpen, setFaqOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after clicking
  };

  return (
    <div
      className="min-h-screen font-sans text-black"
      style={{
        background:
          "url('https://www.transparenttextures.com/patterns/legal-pad.png'), linear-gradient(to bottom, #fff, #f5f5f5)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-opacity-90 bg-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-black cursor-pointer">
            Kararnama
          </div>
          <div className="hidden md:flex space-x-8">
            {["Hero", "Overview", "Features", "Journey", "FAQ"].map(
              (item, index) => (
                <button
                  key={index}
                  className="text-black hover:text-orange-600 transition"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <div
            className="md:hidden text-orange-600 text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white bg-opacity-90 shadow-md py-4">
            {["Hero", "Overview", "Features", "Journey", "FAQ"].map(
              (item, index) => (
                <button
                  key={index}
                  className="block w-full text-left px-4 py-2 text-black hover:bg-orange-600 hover:text-white transition"
                  onClick={() => scrollToSection(item.toLowerCase())}
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Kararnama
        </motion.h1>
        <motion.p
          className="mt-4 text-xl md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empowering Decisions with Precision & Integrity
        </motion.p>
        <motion.button
          className="mt-10 px-6 py-3 text-lg font-semibold bg-orange-600 text-white rounded-full shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={() => scrollToSection("overview")}
        >
          Explore More
        </motion.button>
      </header>

      {/* Overview Section */}
      <section id="overview" className="py-16 px-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">What is a Kararnama?</h2>
          <p className="text-lg leading-relaxed">
            A Kararnama is a comprehensive and legally binding document that
            ensures transparency, accountability, and structured decision-making
            across various domains, including legal, organizational, and
            governmental agreements.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {[
            {
              icon: <FaRegLightbulb className="text-orange-600 text-4xl" />,
              title: "Innovative Design",
              description:
                "Built with precision to ensure clarity and ease of understanding.",
            },
            {
              icon: <FaFileContract className="text-orange-600 text-4xl" />,
              title: "Legally Binding",
              description:
                "Guarantees compliance and accountability for all parties involved.",
            },
            {
              icon: <BsPeopleFill className="text-orange-600 text-4xl" />,
              title: "Collaborative Framework",
              description:
                "Ensures inclusivity and collaboration in decision-making.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-16 px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-center text-orange-600 mb-12 tracking-wide">
            The Journey of a Kararnama
          </h2>
          <ol className="relative border-l-4 border-orange-600 pl-8">
            {[
              {
                title: "Drafting the Agreement",
                description:
                  "Initial preparation of the agreement by gathering requirements and setting clear objectives.",
                icon: "📝",
              },
              {
                title: "Stakeholder Review",
                description:
                  "Stakeholders review the document to ensure it aligns with their expectations and requirements.",
                icon: "👥",
              },
              {
                title: "Legal Validation",
                description:
                  "The agreement undergoes a thorough legal check to ensure compliance with applicable laws.",
                icon: "⚖️",
              },
              {
                title: "Implementation",
                description:
                  "Execution of the agreement with all involved parties fulfilling their respective obligations.",
                icon: "🚀",
              },
              {
                title: "Monitoring & Updates",
                description:
                  "Regular review and updates to ensure the agreement remains relevant and effective.",
                icon: "📈",
              },
            ].map((step, index) => (
              <li
                key={index}
                className="mb-12 ml-6 group relative transition-transform duration-300 hover:scale-105"
              >
                <span className="absolute -left-10 flex items-center justify-center w-12 h-12 bg-orange-600 text-white text-2xl font-bold rounded-full shadow-lg">
                  {step.icon}
                </span>
                <div className="absolute w-4 h-4 bg-white rounded-full -left-2 top-5 border border-orange-600"></div>
                <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-orange-600 mb-2">
                    {step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-600 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What is the purpose of a Kararnama?",
                answer:
                  "It formalizes agreements between parties to ensure legal compliance.",
              },
              {
                question: "Is it legally enforceable?",
                answer: "Yes, Kararnama serves as a legally binding document.",
              },
              {
                question: "Who can use a Kararnama?",
                answer:
                  "Anyone involved in agreements or decision-making processes, including governments and organizations.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:bg-orange-600 hover:text-white hover:shadow-md transition"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {faqOpen === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {faqOpen === index && (
                  <motion.p
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KararnamaPage;
