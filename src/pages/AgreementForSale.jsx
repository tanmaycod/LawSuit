import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';

const LandingPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 text-black min-h-screen font-sans overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-gray-700 to-gray-900 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Section */}
      <motion.header
        className="fixed top-0 left-0 w-full bg-white/90 shadow-xl z-50 backdrop-blur-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-extrabold tracking-wide uppercase text-gray-800">Agreement Hub</h1>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <button
                onClick={() => handleScroll('about')}
                className="hover:text-gray-600 transition duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('features')}
                className="hover:text-gray-600 transition duration-300"
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => handleScroll('faq')}
                className="hover:text-gray-600 transition duration-300"
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
     <HeroSection/>


      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50 relative">
        <div className="container mx-auto text-center px-8">
          <motion.h2
            className="text-6xl font-bold mb-8 text-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About Our Platform
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Experience a redefined way to handle legal agreements. Our platform merges simplicity with advanced features
            to ensure secure, efficient, and elegant solutions.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold text-center text-gray-800 mb-16">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {['Dynamic Templates', 'Secure Digital Signatures', 'Real-Time Tracking'].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-10 rounded-2xl shadow-xl text-center transition duration-300 hover:scale-110 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-gray-800">{feature}</h3>
                <p className="text-gray-600 text-lg">
                  Designed with precision to meet your professional needs, ensuring speed and accuracy in every
                  agreement.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-100 relative">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold text-center text-gray-800 mb-16">FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              'How do digital agreements work?',
              'What makes this legally binding?',
              'Can I customize agreements?',
              'Is the platform secure?',
            ].map((faq, index) => (
              <motion.div
                key={index}
                onClick={() => toggleFaq(index)}
                className="p-8 bg-white rounded-2xl shadow-lg text-gray-800 hover:bg-gray-200 transition duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">{faq}</h3>
                {openFaqIndex === index && (
                  <p className="text-gray-600">
                    We provide detailed solutions tailored to answer your queries about modern agreement systems.
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
