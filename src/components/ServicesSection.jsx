import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaFileSignature, FaGavel, FaHandshake, FaStamp, FaBalanceScale, FaHome, FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const services = [
  {
    icon: <FaFileSignature size={50} className="text-black" />,
    title: "Leave and License Agreements",
    description: "Seamlessly draft property agreements with legal precision.",
    gradient: "from-gray-800 to-black",
    message: "Know More About Leave and License",
    path: "/leave-and-license",
    
  },
  {
    icon: <FaGavel size={50} className="text-black" />,
    title: "Power of Attorney",
    description: "Simplify the process of granting and managing authority.",
    gradient: "from-gray-700 to-gray-900",
    message: "Know More About Power of Attorney",
    path: "/power-of-attorney",
  },
  {
    icon: <FaHandshake size={50} className="text-black" />,
    title: "Kararnama",
    description: "Customizable legal contracts tailored to your needs.",
    gradient: "from-black to-gray-800",
    message: "Know More About Kararnama",
    path: "/kararnama",
  },
  {
    icon: <FaStamp size={50} className="text-black" />,
    title: "Agreement for Sale",
    description: "Draft legally sound agreements for property sales.",
    gradient: "from-gray-900 to-black",
    message: "Know More About Agreement for Sale",
    path: "/agreement-for-sale",
  },
  {
    icon: <FaBalanceScale size={50} className="text-black" />,
    title: "Sale Deed",
    description: "Comprehensive documentation for property transfers.",
    gradient: "from-black to-gray-900",
    message: "Know More About Sale Deed",
    path: "/sale-deed" 
  },
  {
    icon: <FaStamp size={50} className="text-black" />,
    title: "Release Deed",
    description: "Effortlessly create release deeds for property transfers.",
    gradient: "from-gray-800 to-gray-900",
    message: "Know More About Release Deed",
    path: "/release-deed"
  },
  {
    icon: <FaGift size={50} className="text-black" />,
    title: "Gift Deed",
    description: "Legally transfer property as a gift with ease.",
    gradient: "from-gray-700 to-black",
    message: "Know More About Gift Deed",
  },
  {
    icon: <FaStamp size={50} className="text-black" />,
    title: "Notary Services",
    description: "Reliable and professional notary services for all documents.",
    gradient: "from-gray-800 to-gray-700",
    message: "Know More About Notary Services",
  },
  {
    icon: <FaHome size={50} className="text-black" />,
    title: "Property Legal Advice",
    description: "Expert advice for all your property-related legal concerns.",
    gradient: "from-gray-900 to-black",
    message: "Know More About Property Legal Advice",
  },
];

const ServicesSection = () => {

  const navigate = useNavigate();

  const [cursorStyle, setCursorStyle] = useState({
    x: 0,
    y: 0,
    visible: false,
    message: "",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    };

    const handleMouseEnter = (message) => {
      setCursorStyle((prev) => ({ ...prev, visible: true, message }));
    };

    const handleMouseLeave = () => {
      setCursorStyle((prev) => ({ ...prev, visible: false, message: "" }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll(".custom-hover").forEach((element, index) => {
      const message = services[index]?.message;
      element.addEventListener("mouseenter", () => handleMouseEnter(message));
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll(".custom-hover").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <section
      id="services"
      className="relative py-20 min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 overflow-hidden"
    >
      {/* Custom Cursor */}
      <motion.div
        className={`fixed pointer-events-none z-50 transition-transform duration-300 transform translate-x-[-50%] translate-y-[-50%]`}
        style={{
          top: cursorStyle.y,
          left: cursorStyle.x,
        }}
        animate={{
          opacity: cursorStyle.visible ? 1 : 0,
          scale: cursorStyle.visible ? 1 : 0.5,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-64 md:w-72 h-20 md:h-24 bg-black bg-opacity-80 rounded-lg flex flex-col items-center justify-center shadow-lg border border-gray-400 backdrop-blur-md">
          <p className="text-white text-center text-xs md:text-sm px-4">
            {cursorStyle.message}
          </p>
          <motion.div
            className="mt-2 text-gray-300"
            initial={{ y: 5 }}
            animate={{ y: 0 }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-5 md:w-6 h-5 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-center text-gray-900 mb-12 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
        whileTap={{ scale: 0.95, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        style={{
          cursor: "pointer",
          textShadow: "2px 2px 8px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={(e) => {
          e.target.style.color = "#000";
          e.target.style.textShadow = "4px 4px 10px rgba(0,0,0,0.5)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "#1F2937";
          e.target.style.textShadow = "2px 2px 8px rgba(0,0,0,0.2)";
        }}
      >
        Our Advanced Legal Services
      </motion.h2>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 opacity-20 pointer-events-none"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 px-4 md:px-8 xl:px-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative p-4 md:p-6 lg:p-8 bg-white rounded-2xl md:rounded-3xl shadow-lg group hover:shadow-2xl border-4 border-dashed border-black cursor-pointer custom-hover"
            onClick={() => navigate(service.path)}
            whileHover={{
              scale: 1.08,
              rotate: 2,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 50, rotate: -5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-10 rounded-2xl md:rounded-3xl`}
            ></div>
            <motion.div
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ y: 10 }}
              whileHover={{ y: -10 }}
              exit={{ y: 10 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="mb-4 md:mb-6"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                exit={{ rotate: 0 }}
                transition={{ duration: 1 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2 md:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">
                {service.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
