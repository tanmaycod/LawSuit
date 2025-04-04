import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaFileContract, FaGavel, FaCogs } from "react-icons/fa";
import ImmersiveText from "./ImmersiveText";

const cardsData = [
  {
    icon: <FaFileContract className="text-white text-5xl" />,
    title: "Seamless Agreements",
    description:
      "Get your legal documents executed with unmatched precision and efficiency, wherever you are in India.",
    color: "bg-gradient-to-b from-gray-800 via-gray-900 to-black",
  },
  {
    icon: <FaGavel className="text-white text-5xl" />,
    title: "Expert Legal Advice",
    description:
      "Receive bespoke guidance from seasoned legal professionals, tailored to the complexities of Indian law.",
    color: "bg-gradient-to-b from-gray-700 via-gray-800 to-black",
  },
  {
    icon: <FaCogs className="text-white text-5xl" />,
    title: "Smart Document Automation",
    description:
      "Leverage our cutting-edge tech to automate and streamline your legal paperwork effortlessly.",
    color: "bg-gradient-to-b from-gray-900 via-gray-800 to-black",
  },
  {
    icon: <FaHandshake className="text-white text-5xl" />,
    title: "Comprehensive Legal Services",
    description:
      "Access a one-stop platform for all your legal needs, crafted with trust and integrity.",
    color: "bg-gradient-to-b from-gray-800 via-gray-700 to-black",
  },
];

const StackingCards = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const cardRef = cardRefs.current[index];
    if (!cardRef) return;

    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    cardRef.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const cardRef = cardRefs.current[index];
    if (cardRef) {
      cardRef.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      id="why-us"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative text-center mb-16 px-4"
      >
        {/* Content */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-wide relative group"
        >
          Why <motion.span
            whileHover={{
              scale: 1.3,
              rotate: 8,
              textShadow: "0px 0px 20px rgba(255, 255, 255, 0.9)",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:text-gray-500 transition-transform duration-300 ease-in-out"
          >
            Choose
          </motion.span> Us?
          <motion.span
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-white to-gray-400 rounded-full shadow-lg"
            animate={{ width: ["16px", "48px", "16px"], scaleX: [1, 1.2, 1] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              ease: "easeInOut",
            }}
          ></motion.span>
        </motion.h2>
        <ImmersiveText />
      </motion.div>

      <div className="w-[90%] mx-auto bg-gradient-to-br from-black-800 via-black-800 to-black p-6 md:p-8 rounded-3xl shadow-xl">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {cardsData.map((card, index) => (
            <motion.li
              key={index}
              className={`sticky top-10 lg:top-20 bg-gradient-to-b rounded-3xl shadow-xl group hover:shadow-2xl border-4 border-dashed border-white transform perspective-1000`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              style={{ perspective: "1000px" }}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <motion.div
                className={`relative transform ${card.color} text-white text-center p-6 sm:p-8 rounded-3xl shadow-lg min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:h-[75vh] flex flex-col justify-center items-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="relative z-10 flex flex-col items-center text-center"
                  initial={{ y: 10 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="mb-4 sm:mb-6"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1 }}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg">
                    {card.description}
                  </p>
                </motion.div>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>

    </section>
  );
};

export default StackingCards;
