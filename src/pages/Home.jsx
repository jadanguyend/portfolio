import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Footer from "../components/Footer";

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] px-6 md:px-24 py-12 flex flex-col justify-end bg-[#EEF3FF]">
        {/* Top-left meta pills */}
        <div className="absolute top-6 left-6 md:top-8 md:left-24 flex gap-3">
          <div className="meta-pill text-[#ababab] flex items-center gap-1">
            <FiMapPin />
            <span>Seattle, WA</span>
          </div>

          {lastCommit && (
            <div className="meta-pill text-[#ababab] flex items-center gap-1">
              <FiClock />
              <span className="tracking-wide uppercase">
                Last Commit · {lastCommit}
              </span>
            </div>
          )}
        </div>

        {/* Bottom-left content */}
        <div className="flex flex-col max-w-[50%] min-w-[300px] mb-16 md:mb-24">
          <motion.h1
            className="font-heading text-black text-4xl md:text-5xl lg:text-6xl mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jada Nguyen
          </motion.h1>

          <motion.p
            className="font-satoshi text-black text-base md:text-lg mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Designing experiences like building Legos—methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </motion.p>

          {/* Actions */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              Resume
              <FiArrowRight />
            </a>

            <a href="/readme" className="link flex items-center gap-2">
              Read.me
              <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
