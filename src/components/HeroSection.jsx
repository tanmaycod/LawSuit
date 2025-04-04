import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractivePanel from "./AdvancedInteractiveComponent";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Animations for individual elements

    // Hero Title Animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-title",
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Tagline Animation
    gsap.fromTo(
      ".hero-tagline",
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.75)",
        scrollTrigger: {
          trigger: ".hero-tagline",
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Floating Decor Animation
    gsap.fromTo(
      ".floating-decor",
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".floating-decor",
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Decorative Element Animations
    const decorativeElements = gsap.utils.toArray(".decor-element");
    decorativeElements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    // Observing Hero Section for triggering animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.5 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="home"
      ref={heroRef}
      className="hero h-screen relative bg-gradient-to-b from-gray-800 via-black to-gray-800 overflow-hidden flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={sectionVariants}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>

      {/* Hero Title */}
      <motion.div
        className="text-center hero-title relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-white leading-tight relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="dynamic-text">
            Your <span className="text-blue-500 animate-pulse">Trusted Partner</span>
          </span>
          <br />
          <motion.span
            className="text-gray-400 interactive-tagline hero-tagline relative"
            whileHover={{
              color: "#ffffff",
              scale: 1.2,
              textShadow: "0px 0px 15px rgba(255, 255, 255, 1)",
            }}
            transition={{ duration: 0.5 }}
          >
            in Legal Solutions
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-gray-300 mt-4 text-sm sm:text-lg relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          whileHover={{
            scale: 1.1,
            color: "#ffffff",
            textShadow: "0px 0px 8px rgba(255, 255, 255, 1)",
          }}
          style={{ cursor: "pointer" }}
        >
          Leave & License Agreements, Sale Deeds, Notary Services, and More.
        </motion.p>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-16 left-8 sm:left-16 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-b from-gray-800 to-gray-600 rounded-full floating-decor flex items-center justify-center border border-gray-700 decor-element"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/b5fe479400bb6b3a57356e65b50f801d.png"
          alt="Ashoka Chakra"
          className="w-10 sm:w-14 h-10 sm:h-14 opacity-80"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-16 right-8 sm:right-16 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-b from-gray-800 to-gray-600 rounded-full floating-decor flex items-center justify-center border border-gray-700 decor-element"
        whileHover={{ rotate: -360, scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/justice.png"
          alt="Scales of Justice"
          className="w-10 sm:w-14 h-10 sm:h-14 opacity-80"
        />
      </motion.div>

      {/* Interactive Panels */}
      <InteractivePanel />
    </motion.section>
  );
};

export default HeroSection;
