import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import ProjectsSection from "../components/ProjectSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/Hero_Image.png')" }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen items-center text-center px-6 py-12">
          {/* Center Text Block */}
          <div className="flex flex-col items-center justify-center flex-1">

            {/* Hero Heading */}
            <motion.p
            className="font-heading text-black text-3xl md:text-4xl lg:text-5xl max-w-3xl text-center leading-snug"
            style={{ fontWeight: 400, fontStyle: "normal" }} // regular GT Alpina
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            I design experiences like building LEGOs—methodical in structure, creative in execution, and thoughtfully connected to build something greater.
            </motion.p>
          </div>

          {/* View My Work Section */}
          <motion.div
            className="flex flex-col items-center text-black"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <span className="text-lg font-satoshi">View My Work</span>
            <FaArrowDown className="mt-2 animate-bounce" />
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
