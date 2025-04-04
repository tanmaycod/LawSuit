import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What are Leave and License Agreements?",
    answer:
      "Leave and License Agreements are legally binding documents that allow a property owner to grant a license to use their property for a limited time without transferring ownership.",
  },
  {
    question: "How do I avail on-site Leave and License services?",
    answer:
      "You can schedule an appointment through our platform, and our experts will visit your location to handle the agreement process seamlessly.",
  },
  {
    question: "What kind of legal advice do you offer?",
    answer:
      "We provide tailored legal advice covering areas like property disputes, agreements, power of attorney, and general legal queries to simplify your decision-making.",
  },
  {
    question: "What documents are required for Power of Attorney?",
    answer:
      "You’ll need identity proof, the draft Power of Attorney document, witness identity proof, and photographs of both grantor and grantee.",
  },
  {
    question: "How secure is my information?",
    answer:
      "We prioritize your privacy and employ state-of-the-art encryption to ensure your data remains safe and confidential.",
  },
  {
    question: "Can I get updates on legal trends?",
    answer:
      "Yes, we provide regular updates and insights on the latest legal trends through our blog and newsletters.",
  },
  {
    question: "Are your services available nationwide?",
    answer:
      "Yes, our services are accessible across the country, ensuring seamless legal support wherever you are.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef(null);
  const controls = useAnimation();

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls]);

  return (
    <section
      ref={ref}
      id="faq"
      className="py-20 bg-gradient-to-br from-white to-gray-100 text-gray-900 relative overflow-hidden"
    >
      {/* Background Panels */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-gray-900 rounded-full opacity-20 blur-xl"
          initial={{ scale: 0 }}
          animate={controls}
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 2 },
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gray-700 rounded-full opacity-20 blur-xl"
          initial={{ scale: 0 }}
          animate={controls}
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 2 },
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-center bg-contain opacity-10"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.1 },
          }}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-12 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Legal FAQ
        </motion.h2>

        {/* FAQ Items */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.5, staggerChildren: 0.3 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`relative shadow-lg rounded-xl overflow-hidden transform transition-transform duration-500 ${
                activeIndex === index ? "scale-105" : "scale-100"
              } p-6 border-l-4 ${
                activeIndex === index
                  ? "border-gray-900 bg-gray-200"
                  : "border-gray-500 bg-white"
              }`}
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-900"
                >
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
              </button>

              {/* Answer Section */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden mt-4"
              >
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
