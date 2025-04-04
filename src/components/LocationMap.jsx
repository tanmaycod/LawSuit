import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "./Animation - 1736434417721.json"; // Import the Lottie JSON file

const LocationMap = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Container */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row items-center gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Left Side: Lottie Animation */}
        <motion.div
          className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Lottie Animation */}
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          {/* Subtle Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
          {/* Animated Floating Badge */}
          <motion.div
            className="absolute top-4 left-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white px-4 py-2 rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Verified Legal Services
          </motion.div>
        </motion.div>

        {/* Right Side: Office Details */}
        <motion.div
          className="w-full lg:w-1/2 p-6 lg:p-12 bg-gray-800 rounded-xl shadow-xl flex flex-col justify-center border border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Title */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Welcome to Patil Associates
          </motion.h2>
          {/* Subheading */}
          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-4 lg:mb-6 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            "Your trusted partner for legal and stamp duty registration services."
          </motion.p>
          {/* Address Section */}
          <motion.div
            className="mb-4 lg:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <p className="text-sm sm:text-lg text-gray-400 mb-4">
              <span className="block font-medium text-white">
                Patil Associates
              </span>
              D-04, Shree Pimpleshwar CHS, Ground Floor
              <br />
              Mahadev Palav Marg, Currey Rd Bridge, West
              <br />
              Mumbai, Maharashtra 400013
            </p>
          </motion.div>
          {/* Contact Information */}
          <motion.div
            className="mb-4 lg:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
          >
            <p className="text-sm sm:text-lg text-gray-400 mb-4">
              Phone:
              <br />
              <a href="tel:+918369577902" className="text-gray-200 underline">
                +91 8369577902
              </a>
              <br />
              <a href="tel:+919892153613" className="text-gray-200 underline">
                +91 9892153613
              </a>
            </p>
            <p className="text-sm sm:text-lg text-gray-400">
              Email:
              <br />
              <a
                href="mailto:info@lawfirm.com"
                className="text-gray-200 underline"
              >
                info@lawfirm.com
              </a>
            </p>
          </motion.div>
          {/* Locate Button */}
          <motion.button
            onClick={() =>
              window.open(
                "https://www.google.com/maps/place/Online+Registration+%26+Stamp+Duty+-+Patil+Associates/@18.9947632,72.8320744,20.99z/data=!4m12!1m5!3m4!2zMTjCsDU5JzQxLjMiTiA3MsKwNDknNTUuNSJF!8m2!3d18.9947931!4d72.8320748!3m5!1s0x3be7cf73b0af9ce1:0xed0bf536ab57b0b3!8m2!3d18.994763!4d72.8319836!16s%2Fg%2F11mvjdv_v6?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D",
                "_blank"
              )
            }
            className="w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-500 transition-all duration-300 text-sm sm:text-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Locate Us
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LocationMap;
