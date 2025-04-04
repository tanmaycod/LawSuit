import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const bgRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xOffset = (clientX / window.innerWidth - 0.5) * 30;
      const yOffset = (clientY / window.innerHeight - 0.5) * 30;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(255, 255, 255, 0.3), transparent 50%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (targetId) => {
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="hero"
      className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 relative overflow-hidden text-white"
    >
      {/* Glassmorphic Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg z-0 shadow-2xl"
        style={{
          transition: "transform 0.8s ease-out",
        }}
      ></div>

      {/* Dynamic Spotlight */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.3), transparent 50%)",
        }}
      ></div>

      {/* Wavy Scrolling Text - Layer 1 */}
      <motion.div
        className="absolute top-1/4 w-full flex items-center justify-center"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="text-6xl font-bold text-gray-600 whitespace-nowrap">
          AGREEMENT FOR SALE &nbsp; AGREEMENT FOR SALE &nbsp; AGREEMENT FOR SALE
        </div>
      </motion.div>

      {/* Wavy Scrolling Text - Layer 2 (Reverse) */}
      <motion.div
        className="absolute bottom-1/4 w-full flex items-center justify-center"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="text-6xl font-bold text-gray-500 opacity-70 whitespace-nowrap">
          AGREEMENT FOR SALE &nbsp; AGREEMENT FOR SALE &nbsp; AGREEMENT FOR SALE
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="text-center max-w-3xl px-6 relative z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.h1
          className="text-7xl font-extrabold leading-tight"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Revolutionizing <span className="text-gray-400">Digital Agreements</span>
        </motion.h1>
        <p className="mt-6 text-xl text-gray-300">
          Seamlessly create, customize, and manage agreements with advanced tools
          for the modern professional.
        </p>

        <motion.button
          whileHover={{
            scale: 1.2,
            boxShadow: "0 8px 30px rgba(255, 255, 255, 0.3)",
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="mt-10 px-10 py-4 bg-gradient-to-r from-gray-800 to-gray-600 text-white font-semibold rounded-full shadow-xl"
          onClick={() => handleScroll("features")}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
