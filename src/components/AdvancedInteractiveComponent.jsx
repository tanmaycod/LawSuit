import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AdvancedMarqueeComponent = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorColor, setCursorColor] = useState("rgba(255, 255, 255, 0.8)");
  const [highlightTrail, setHighlightTrail] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const legalServices = [
    "Leave and License Agreements",
    "Power of Attorney",
    "Kararnama",
    "Agreement for Sale",
    "Sale Deed",
    "Release Deed",
    "Gift Deed",
    "Notary Services",
    "Property Legal Advice",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightTrail((trail) => trail.slice(-10)); // Limit trail length
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
    setHighlightTrail((trail) => [
      ...trail,
      { x: e.clientX, y: e.clientY, id: Date.now() },
    ]);
  };

  const handleMouseEnter = (text, color, index) => {
    setCursorActive(true);
    setCursorText(text);
    setCursorColor(color);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setCursorActive(false);
    setCursorText("");
    setCursorColor("rgba(255, 255, 255, 0.8)");
    setHoveredIndex(null);
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        style={
          cursorActive
            ? {
                position: "fixed",
                top: cursorPosition.y,
                left: cursorPosition.x,
                width: "100px",
                height: "100px",
                background: `radial-gradient(circle, ${cursorColor} 30%, transparent 70%)`,
                borderRadius: "50%",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                textShadow: "0px 0px 10px rgba(255, 255, 255, 0.8)",
                boxShadow: `0px 0px 20px ${cursorColor}`,
                transition: "all 0.3s ease",
              }
            : { display: "none" }
        }
      >
        {cursorText}
      </motion.div>

      {/* Highlight Trail */}
      <AnimatePresence>
        {highlightTrail.map((trail) => (
          <motion.div
            key={trail.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: "fixed",
              top: trail.y,
              left: trail.x,
              width: "15px",
              height: "15px",
              backgroundColor: cursorColor,
              borderRadius: "50%",
              pointerEvents: "none",
              transform: "translate(-50%, -50%)",
              zIndex: 999,
            }}
          />
        ))}
      </AnimatePresence>

      {/* Infinite Marquee */}
      <div
        className="marquee-container w-full overflow-hidden whitespace-nowrap relative py-10 bg-transparent"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="marquee flex"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          {legalServices.map((service, index) => (
            <motion.div
              key={index}
              className={`service-item mx-8 p-4 rounded-lg shadow-xl border text-lg font-semibold cursor-none transition-transform duration-500 ${
                hoveredIndex === index ? "text-yellow-400 border-yellow-400" : "text-white border-white"
              }`}
              onMouseEnter={() => handleMouseEnter(service, "rgba(255, 255, 0, 0.8)", index)}
              onMouseLeave={handleMouseLeave}
              whileHover={{
                scale: 1.3,
                rotate: 5,
                boxShadow: "0px 15px 50px rgba(255, 255, 0, 0.7)",
              }}
              whileTap={{ scale: 0.9, rotate: -5 }}
              style={{
                background: "linear-gradient(135deg, #000000, #1a1a1a)",
              }}
            >
              <motion.span
                animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
              {service}
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
                style={{
                  height: "2px",
                  background: "yellow",
                  marginTop: "8px",
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AdvancedMarqueeComponent;
