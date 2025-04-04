import { motion, useAnimation } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });
  const animationControl = useAnimation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (inView) {
      animationControl.start({ opacity: 1, y: 0 });
    } else {
      animationControl.start({ opacity: 0, y: 50 });
    }
  }, [inView, animationControl]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const themeColors =
    theme === "dark"
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200"
      : "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800";

  const buttonColors =
    theme === "dark"
      ? "bg-gradient-to-r from-orange-600 to-yellow-500 text-white"
      : "bg-gradient-to-r from-blue-600 to-teal-400 text-white";

  const linkHoverColors = theme === "dark" ? "hover:text-yellow-400" : "hover:text-blue-500";

  const iconHoverColors = theme === "dark" ? "hover:text-yellow-500" : "hover:text-blue-400";

  return (
    <footer
      className={`relative overflow-hidden py-10 sm:py-14 md:py-16 transition-colors duration-500 ${themeColors}`}
      ref={ref}
    >
      <div className="absolute inset-0">
        <motion.div
          className={`absolute top-0 left-0 w-full h-full ${theme === "dark"
            ? "bg-gradient-to-br from-gray-700 to-black opacity-30"
            : "bg-gradient-to-br from-gray-300 to-white opacity-50"
            }`}
          initial={{ x: "-100%" }}
          animate={{ x: inView ? "0%" : "-100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute top-0 left-0 w-full h-full ${theme === "dark"
            ? "bg-gradient-to-tr from-gray-800 via-transparent to-gray-900 opacity-50"
            : "bg-gradient-to-tr from-white via-transparent to-gray-300 opacity-50"
            }`}
          initial={{ scale: 1.5 }}
          animate={{ scale: inView ? 1 : 1.5 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={animationControl}
          transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h4 className="text-lg sm:text-xl lg:text-2xl font-extrabold">About LegalHub</h4>

            <motion.p
              className="text-sm sm:text-base lg:text-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              LegalHub is your trusted partner for legal solutions. Empowering individuals and
              businesses across India with seamless legal services tailored to Indian laws.
            </motion.p>
            <motion.button
              className={`${buttonColors} px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
            >
              Toggle Theme
            </motion.button>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.7, staggerChildren: 0.1 }}
          >
            <h4 className="text-xl font-extrabold">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4">
              {["Services", "About Us", "Contact Us", "Privacy Policy"].map((name, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, opacity: 1 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <motion.a
                    href={`#${name.replace(/ /g, "").toLowerCase()}`}
                    className={`text-sm sm:text-base md:text-md ${linkHoverColors} transition-colors`}
                  >
                    {name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <h4 className="text-xl font-extrabold">Get in Touch</h4>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm sm:text-base">Email: <span className="font-medium">support@legalhub.com</span></p>
              <p className="text-sm sm:text-base">Phone: <span className="font-medium">+91 9876543210</span></p>
              <p className="text-sm sm:text-base">Address: <span className="font-medium">123 LegalHub Lane, Delhi, India</span></p>
            </motion.div>

            <motion.div
              className="flex space-x-6"
              initial={{ scale: 0 }}
              animate={{ scale: inView ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`${iconHoverColors} transition-colors`}
                  whileHover={{ scale: 1.3 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="border-t mt-8 pt-8"></div>

        <motion.div
          className="text-center mt-6 sm:mt-8 md:mt-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <motion.button
            className={`${buttonColors} px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:opacity-90 transition-all duration-300`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
          >
            Back to Top
          </motion.button>
        </motion.div>

        <motion.div
          className="text-center text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          © {new Date().getFullYear()} LegalHub. All Rights Reserved. Designed for India.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
