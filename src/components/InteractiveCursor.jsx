import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const InteractiveCursor = () => {
  const [cursorStyle, setCursorStyle] = useState({
    visible: false,
    top: 0,
    left: 0,
    message: "Explore",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorStyle((prev) => ({
        ...prev,
        top: e.clientY,
        left: e.clientX,
      }));
    };

    const handleMouseEnter = () => {
      setCursorStyle((prev) => ({
        ...prev,
        visible: true,
        message: "Discover!",
      }));
    };

    const handleMouseLeave = () => {
      setCursorStyle((prev) => ({
        ...prev,
        visible: false,
        message: "Explore",
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className={`fixed pointer-events-none z-50 transition-all duration-300 transform ${
        cursorStyle.visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{
        top: cursorStyle.top,
        left: cursorStyle.left,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        opacity: cursorStyle.visible ? 1 : 0,
        scale: cursorStyle.visible ? 1.2 : 0.8,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className="bg-gradient-to-tr from-teal-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-xl text-sm animate-bounce cursor-pointer"
        whileHover={{
          scale: 1.3,
          rotate: 5,
          boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.8)",
        }}
        whileTap={{ scale: 1, rotate: -5 }}
      >
        {cursorStyle.message}
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCursor;
