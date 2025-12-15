// src/pages/Home.jsx
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] px-6 md:px-24 py-12 flex flex-col justify-between">
        {/* Top meta */}
        <div className="flex gap-3">
          <div className="meta-pill bg-white text-gray-500 border-gray-200
                          dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700">
            <FiMapPin />
            <span>Seattle, WA</span>
          </div>

          {lastCommit && (
            <div className="meta-pill bg-white text-gray-500 border-gray-200
                            dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700">
              <FiClock />
              <span className="uppercase tracking-wide">
                Last Commit · {lastCommit}
              </span>
            </div>
          )}
        </div>

        {/* Bottom content */}
        <div className="flex flex-col max-w-[50%] min-w-[300px] gap-6">
          <motion.h1
            className="font-heading text-black dark:text-white text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jada Nguyen
          </motion.h1>

          <motion.p
            className="font-satoshi text-gray-800 dark:text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Designing experiences like building Legos—methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </motion.p>

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
              className="btn-primary dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Resume <FiArrowRight />
            </a>

            <a
              href="/readme"
              className="link dark:text-gray-300 dark:hover:text-white"
            >
              Read.me <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />
    </Layout>
  );
}
