import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import ProjectsSection from "../components/ProjectSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative">

      {/* Hero Section */}
      <section className="relative py-12 px-6 md:px-24 flex justify-center">

        {/* Image Container */}
        <div className="relative w-full max-w-[1280px] rounded-lg overflow-hidden">

          {/* Background Image */}
          <img
            src="/Hero_Image.png"
            alt="Hero"
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

            {/* Main Hero Text */}
            <motion.p
              className="font-heading text-black text-3xl md:text-4xl lg:text-5xl leading-snug max-w-3xl"
              style={{ fontWeight: 400, fontStyle: "normal" }} // regular GT Alpina
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              I design experiences like building LEGOs—methodical in structure, creative in execution, and thoughtfully connected to build something greater.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-16 flex flex-col items-center" // increased margin-top
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-lg font-satoshi text-black">View My Work</span>
              <FaArrowDown className="mt-2 animate-bounce text-black" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
