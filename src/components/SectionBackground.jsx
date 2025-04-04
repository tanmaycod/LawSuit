import React from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring } from "framer-motion";

const SectionBackground = () => {
  const xParallax = useMotionValue(0);
  const yParallax = useMotionValue(0);

  useAnimationFrame(({ delta }) => {
    const speed = delta * 0.05;
    xParallax.set((prev) => prev + speed);
    yParallax.set((prev) => prev + speed * 0.5);
  });

  const xSpring = useSpring(xParallax, { stiffness: 100, damping: 20 });
  const ySpring = useSpring(yParallax, { stiffness: 100, damping: 20 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background Layer 1: Gradient Panel with Parallax */}
      <motion.div
        className="absolute top-0 left-0 w-full md:w-2/3 h-full bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 opacity-40"
        style={{
          x: xSpring,
          y: ySpring,
        }}
        initial={{ opacity: 0, x: "-50%" }}
        whileInView={{ opacity: 1, x: "0%" }}
        exit={{ opacity: 0, x: "-50%" }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      ></motion.div>

      {/* Floating Bubble with Interactive Bounce */}
      <motion.div
        className="absolute top-10 left-20 w-24 h-24 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-full shadow-lg"
        animate={{ y: [0, 30, 0], x: [0, -15, 15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
      ></motion.div>

      {/* Background Layer 2: Highlight Panel with Smooth Transition */}
      <motion.div
        className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-l from-blue-100 via-blue-200 to-transparent opacity-30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      ></motion.div>

      {/* Abstract Motif with Expanding Border Animation */}
      <motion.div
        className="absolute top-5 right-5 md:top-10 md:right-10 w-20 h-20 md:w-40 md:h-40 bg-gradient-to-br from-blue-50 via-blue-200 to-blue-300 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-0 border-2 border-blue-400 rounded-lg"
          animate={{
            scale: [0.95, 1.05],
            opacity: [0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        ></motion.div>
      </motion.div>

      {/* Vertical Flowing Panel with Layered Animation */}
      <motion.div
        className="absolute top-0 left-10 md:left-20 w-1/2 md:w-1/3 h-1/2 md:h-full bg-gradient-to-t from-blue-100 via-blue-200 to-blue-300 opacity-25"
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 0.7, y: "0%" }}
        exit={{ opacity: 0, y: "100%" }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: "easeOut",
        }}
      ></motion.div>
    </div>
  );
};

export default SectionBackground;
