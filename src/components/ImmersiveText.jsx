import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const ImmersiveText = () => {
  const subtitle = "Simplifying Legal Complexities for a Clearer Tomorrow";

  // Track mouse position for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX - innerWidth / 2;
      const y = e.clientY - innerHeight / 2;
      mouseX.set(x / innerWidth);
      mouseY.set(y / innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transforms for parallax effects
  const parallaxX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
  const parallaxY = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);

  return (
    <motion.div
      className="relative max-w-4xl mx-auto p-8 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Subtitle Text */}
      <motion.h2
        className="text-center text-1xl md:text-2xl font-serif font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
      >
        {subtitle}
      </motion.h2>

      {/* Underline Animation */}
      <motion.div
        className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, type: "spring", stiffness: 150 }}
      ></motion.div>

      {/* Floating Interactive Decorations */}
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-70 blur-md cursor-pointer"
        style={{
          top: "20%",
          left: "15%",
          x: parallaxX,
          y: parallaxY,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        whileHover={{
          scale: 1.5,
          rotate: 360,
          transition: { duration: 1 },
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-teal-500 to-green-500 opacity-80 blur-lg cursor-pointer"
        style={{
          bottom: "10%",
          right: "20%",
          x: parallaxX,
          y: parallaxY,
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{
          scale: 1.3,
          skewX: 10,
          skewY: 10,
          transition: { duration: 1 },
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Background Interactive Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 blur-3xl"
        style={{
          x: parallaxX,
          y: parallaxY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  );
};

export default ImmersiveText;
