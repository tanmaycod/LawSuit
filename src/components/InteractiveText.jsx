import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const EnhancedHeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const inView = useInView(sectionRef, { once: false });
  const textInView = useInView(textRef, { once: false });

  const sectionControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (inView) {
      sectionControls.start("visible");
    } else {
      sectionControls.start("hidden");
    }
  }, [inView, sectionControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [textInView, textControls]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rippleVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: [0.3, 0],
      scale: [1, 3],
      transition: {
        duration: 1,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 1.2,
      },
    },
  };

  const interactiveBackgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  const dynamicHighlightStyle = {
    position: "absolute",
    top: `${cursorPosition.y}px`,
    left: `${cursorPosition.x}px`,
    width: "150px",
    height: "150px",
    background: "radial-gradient(circle, rgba(255,255,255,0.5), rgba(255,255,255,0) 70%)",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    mixBlendMode: "soft-light",
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative z-10 text-center px-6 max-w-4xl overflow-hidden"
      initial="hidden"
      animate={sectionControls}
      variants={sectionVariants}
      style={{ perspective: 1800, position: "relative" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
        border: "2px solid rgba(255, 255, 255, 0.5)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <div style={dynamicHighlightStyle}></div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 opacity-80"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1), rgba(0,0,0,0))`,
        }}
        whileHover={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.3), rgba(0,0,0,0))`,
        }}
      />

      {hovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            background: "rgba(255, 255, 255, 0.1)",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          variants={rippleVariants}
          initial="initial"
          animate="animate"
        />
      )}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={interactiveBackgroundVariants}
        initial="hidden"
        animate="visible"
        style={{
          background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.05), transparent 70%)`,
        }}
      />

      <motion.h1
        ref={textRef}
        className="text-white text-3xl sm:text-5xl font-bold leading-tight hero-title relative"
        initial="hidden"
        animate={textControls}
        variants={textVariants}
        style={{
          textShadow:
            "3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
        }}
      >
        {Array.from("Empowering Justice Across India").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            style={{
              display: "inline-block",
              textShadow:
                "3px 3px 12px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              scale: 1.5,
              rotateX: 35,
              rotateY: 30,
              rotateZ: Math.random() > 0.5 ? 15 : -15,
              color: "#A9A9A9",
              textShadow:
                "5px 5px 20px rgba(0, 0, 0, 1), 0 0 30px rgba(255, 255, 255, 0.8)",
            }}
            whileTap={{
              scale: 1.3,
              rotateX: 20,
              rotateY: 20,
              color: "#C0C0C0",
            }}
            transition={{ duration: 0.5 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed relative"
        initial="hidden"
        animate={textControls}
        variants={textVariants}
        style={{
          textShadow:
            "1px 1px 12px rgba(0, 0, 0, 0.6), 0 0 18px rgba(255, 255, 255, 0.5)",
          letterSpacing: "0.1em",
          lineHeight: "2",
        }}
        whileHover={{
          scale: 1.15,
          color: "#DCDCDC",
          textShadow: "4px 4px 18px rgba(0, 0, 0, 1), 0 0 30px rgba(255, 255, 255, 0.7)",
        }}
        transition={{ duration: 0.5 }}
      >
        Simplifying access to justice with innovation and trust.
      </motion.p>
    </motion.div>
  );
};

export default EnhancedHeroSection;
