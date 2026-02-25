import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";

import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

import miniMe from "../assets/miniMe.png";

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const descriptionRef = useRef(null);
  const [showDescription, setShowDescription] = useState(false);

  // Scroll effect to reveal description
  useEffect(() => {
    function handleScroll() {
      if (!descriptionRef.current) return;
      const rect = descriptionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        setShowDescription(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout footer={<Footer />}>
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 pt-32 pb-24">
        {/* ASCII background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AsciiBackground className="w-full h-full object-contain" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Minifigure */}
          <div className="mt-12">
            <img
              src={miniMe}
              alt="Minifigure"
              className="w-[25vw] max-w-[220px] min-w-[140px] h-auto"
            />
          </div>

          {/* Heading */}
          <motion.h1
            className="mt-12 font-heading font-semibold uppercase leading-none text-grayLight-900 dark:text-grayDark-900 text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            [JADANGUYEND]
          </motion.h1>

          {/* Pills */}
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <div className="meta-pill flex items-center gap-1">
              <FiMapPin /> Seattle, WA
            </div>

            {lastCommit && (
              <div className="meta-pill flex items-center gap-1">
                <FiClock /> Last Commit: {lastCommit}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- DESCRIPTION SECTION ---------- */}
      <section className="relative px-6 py-32 flex justify-center">
        <motion.h2
          ref={descriptionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={showDescription ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center font-medium max-w-2xl"
        >
          Product designer shaping consumer experiences — aligning systems,
          visual craft, and thoughtful product decisions that scale.
          Bringing delight to consumer apps, enterprise systems, and complex workflows.
        </motion.h2>
      </section>

      <ProjectsSection />
    </Layout>
  );
}