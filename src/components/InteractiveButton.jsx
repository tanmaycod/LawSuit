import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function FuturisticButton() {
  const canvasRef = useRef(null);

  const createParticles = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const particles = [];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 6,
        speedY: (Math.random() - 0.5) * 6,
        color: `hsl(${Math.random() * 360}, 100%, 70%)`,
        opacity: 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.opacity -= 0.02;

        if (particle.opacity <= 0) particles.splice(index, 1);

        ctx.fillStyle = `hsla(${Math.random() * 360}, 100%, 70%, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (particles.length > 0) requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none"
        style={{ zIndex: 10 }}
      ></canvas>

      <motion.div
        className="relative z-20 mt-10 p-8 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 rounded-xl shadow-2xl overflow-hidden"
        style={{ boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.3)" }}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          background: "linear-gradient(135deg, #ff7eb3, #7b2ff7)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        whileTap={{
          scale: 0.9,
          rotate: -5,
          background: "linear-gradient(135deg, #7b2ff7, #2f7bff)",
          transition: { duration: 0.2 },
        }}
        onClick={(e) => {
          createParticles(e);

          const button = e.currentTarget;
          const originalHTML = button.innerHTML;
          button.innerHTML = "<span style='color: #fff; font-size: 1.5em;'>Engaging...</span>";
          setTimeout(() => {
            button.innerHTML = originalHTML;
          }, 1000);
        }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-white font-bold text-2xl sm:text-3xl text-center">Activate</h1>
        </motion.div>

        <motion.div
          className="absolute w-40 h-40 bg-purple-300 opacity-20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ bottom: "-50%", left: "20%" }}
        ></motion.div>

        <motion.div
          className="absolute w-32 h-32 bg-blue-300 opacity-30 rounded-full blur-lg"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -360],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: "-30%", right: "15%" }}
        ></motion.div>
      </motion.div>
    </div>
  );
}
