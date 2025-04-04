import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = ["Home", "Services", "Why Us", "FAQ", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
    exit: { x: "100%", opacity: 0 },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    document.getElementById(link.toLowerCase().replace(/\s+/g, "-")).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-xl backdrop-blur-xl \
        ${isScrolled ? "bg-gradient-to-r from-black-900 via-black to-gray-800 text-white" : "bg-gradient-to-r from-white via-gray-100 to-gray-300 text-black"}`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <motion.div
          className="flex items-center cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <img
            src="/path-to-glossy-logo.png"
            alt="LegalHub Logo"
            className="w-14 h-14 rounded-full border-4 border-gray-800 shadow-lg hover:shadow-gray-600"
          />
          <motion.span
            className="ml-3 font-serif text-3xl tracking-wide text-gray-800"
            whileHover={{
              color: "#8B5CF6",
              scale: 1.2,
              textShadow: "0px 0px 8px rgba(139, 92, 246, 0.8)",
            }}
          >
            Legal<span className="text-gray-600">Hub</span>
          </motion.span>
        </motion.div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-medium text-lg relative group ${activeLink === link ? "text-gray-800 font-bold" : "hover:text-gray-600"} transition-colors duration-300`}
              whileHover={{
                scale: 1.3,
                textShadow: "0px 0px 10px rgba(139, 92, 246, 0.8)",
              }}
              onClick={() => handleLinkClick(link)}
            >
              {link}
              <motion.span
                className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full ${activeLink === link ? "w-full" : "w-0"}`}
              ></motion.span>
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <motion.button
          className="lg:hidden text-4xl focus:outline-none"
          whileHover={{ rotate: 180, scale: 1.2, color: "#8B5CF6" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 text-white flex flex-col space-y-8 p-8 z-50 backdrop-blur-md rounded-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="absolute top-4 right-4 text-4xl font-bold focus:outline-none hover:text-gray-400"
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ scale: 1.3, rotate: 45, color: "#8B5CF6" }}
            >
              ×
            </motion.button>

            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-2xl font-semibold transition-transform duration-300 ${activeLink === link ? "text-gray-400" : "hover:text-gray-300"}`}
                whileHover={{
                  scale: 1.3,
                  rotate: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "0.8rem 1.2rem",
                  borderRadius: "1.5rem",
                  boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                }}
                variants={menuItemVariants}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
