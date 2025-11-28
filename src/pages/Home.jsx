import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Hero_Image.png')" }}
      ></div>

      {/* Hero content container */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen items-center text-center px-6 py-12">
        {/* Top / center content */}
        <div className="flex flex-col items-center justify-center flex-1">
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black max-w-3xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            I design experiences like building Legos—methodical in structure, creative in execution, and thoughtfully connected to build something greater.
          </motion.p>

          {/* Connect with Me button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12"
          >
            <a
              href="https://www.linkedin.com/in/jadanguyend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Connect with Me!
            </a>
          </motion.div>
        </div>

        {/* Bottom center View My Work + arrow */}
        <motion.div
          className="flex flex-col items-center text-black"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <span className="text-lg">View My Work</span>
          <FaArrowDown className="mt-2 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
}
