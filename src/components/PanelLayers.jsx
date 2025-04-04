import { motion, useMotionValue, useTransform } from "framer-motion";

// Variants for trigger/reset animations on entry/exit
const layerVariants = (direction) => ({
  hidden: {
    [direction]: "-100%",
    rotate: 0,
  },
  visible: {
    [direction]: "100%",
    rotate: [0, 15, -15, 0],
    transition: {
      repeat: Infinity,
      duration: Math.random() * 10 + 10,
      ease: "easeInOut",
    },
  },
});



const BackgroundPanel = () => {
  // Mouse-based transforms
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Move hooks directly into the component
  const scale1 = useTransform(mouseX, [0, window.innerWidth], [1, 1.2]);
  const rotate1 = useTransform(mouseY, [0, window.innerHeight], [-10, 10]);

  const scale2 = useTransform(mouseX, [0, window.innerWidth], [1.1, 1.3]);
  const rotate2 = useTransform(mouseY, [0, window.innerHeight], [10, -10]);

  const scale3 = useTransform(mouseX, [0, window.innerWidth], [1.2, 1]);
  const rotate3 = useTransform(mouseY, [0, window.innerHeight], [-5, 5]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, margin: "-100px" }}
    >
      {/* Layer 1 */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 opacity-30"
        style={{ scale: scale1, rotate: rotate1 }}
        variants={layerVariants("x")}
      />

      {/* Layer 2 */}
      <motion.div
        className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-white to-blue-100 opacity-40"
        style={{ scale: scale2, rotate: rotate2 }}
        variants={layerVariants("y")}
      />

      {/* Layer 3 */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-t from-blue-700 to-transparent opacity-50"
        style={{ scale: scale3, rotate: rotate3 }}
        variants={layerVariants("x")}
      />

      {/* Layer 4 - Diagonal Flow */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-bl from-purple-300 to-blue-300 opacity-30 rounded-full"
        variants={layerVariants("x")}
        style={{ scale: scale1, rotate: rotate1 }}
      />

      {/* Wave Animation Layer */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10"
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default BackgroundPanel;
