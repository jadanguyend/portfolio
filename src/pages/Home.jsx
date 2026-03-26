import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectSection";

import miniMe from "../assets/miniMe.png";
import MeBookstore from "../assets/MeBookstore.png";

/* ===== How I Build images ===== */
import howPlanner from "../assets/howPlanner.png";
import howTinkerer from "../assets/howTinkerer.png";
import howBuilder from "../assets/howBuilder.png";
import howPainter from "../assets/howPainter.png";

/* ===== Typing phrases ===== */
const PHRASES = [
  "building a LEGO set",
  "using her favorite tools",
  "reading behavioral psychology books",
  "exploring design systems",
  "geeking out over F1 car liveries",
];

const TYPING_SPEED = 65;
const PAUSE_AFTER_TYPING = 900;
const PAUSE_AFTER_DELETING = 400;

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  /* ===== Typing effect ===== */
  const [displayedText, setDisplayedText] = useState("Currently ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCaret((p) => !p), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullPhrase = "Currently " + PHRASES[phraseIndex];
    let timeout;

    if (!deleting && charIndex < fullPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullPhrase.slice(0, charIndex + 1));
        setCharIndex((p) => p + 1);
      }, TYPING_SPEED);
    } else if (!deleting && charIndex === fullPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPING);
    } else if (deleting && charIndex > 9) {
      timeout = setTimeout(() => {
        setDisplayedText(fullPhrase.slice(0, charIndex - 1));
        setCharIndex((p) => p - 1);
      }, TYPING_SPEED);
    } else if (deleting && charIndex === 9) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((p) => (p + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETING);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  /* ===== Hover image for name ===== */
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const smoothY = useSpring(cursorY, { stiffness: 200, damping: 25 });
  const [showHoverImage, setShowHoverImage] = useState(false);
  const [hoverName, setHoverName] = useState(false);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX + 16);
    cursorY.set(e.clientY + 16);
  };

  /* ===== About section logic ===== */
  const howItems = [
    {
      id: 0,
      src: howPlanner,
      desc: "I carefully select each element so everything fits together clearly, logically, and with intention.",
    },
    {
      id: 1,
      src: howTinkerer,
      desc: "I keep experimenting, refining, and iterating until the experience feels seamless and complete.",
    },
    {
      id: 2,
      src: howBuilder,
      desc: "I build systems that are robust, scalable, and ready for real-world use — not just polished screens.",
    },
    {
      id: 3,
      src: howPainter,
      desc: "I add thoughtful details that make the experience intuitive, memorable, and genuinely enjoyable.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const currentIndex = hoverIndex ?? activeIndex;

  return (
    <Layout footer={<Footer />}>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col justify-between px-6 py-24 text-center">
        {/* Name */}
        <motion.h1
          className="font-mono font-semibold uppercase leading-none cursor-pointer flex justify-center items-center"
          style={{
            fontSize: "clamp(6vw, 12vw, 15rem)",
            letterSpacing: "-0.05em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() => {
            setShowHoverImage(true);
            setHoverName(true);
          }}
          onMouseLeave={() => {
            setShowHoverImage(false);
            setHoverName(false);
          }}
          onMouseMove={handleMouseMove}
        >
          <span className={hoverName ? "text-grayLight-200 dark:text-grayDark-200" : "text-grayLight-900 dark:text-grayDark-900"}>[</span>

          <span className={hoverName ? "text-accent dark:text-accent2" : "text-grayLight-900 dark:text-grayDark-900"}>
            JADA{" "}
          </span>

          <span className={hoverName ? "text-grayLight-200 dark:text-grayDark-200" : "text-grayLight-900 dark:text-grayDark-900"}>
            NGUYEND
          </span>

          <span className={hoverName ? "text-grayLight-200 dark:text-grayDark-200" : "text-grayLight-900 dark:text-grayDark-900"}>]</span>
        </motion.h1>

        {/* Bottom content */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="meta-pill flex items-center gap-1">
              <FiMapPin /> SEATTLE, WA
            </div>
            {lastCommit && (
              <div className="meta-pill flex items-center gap-1 uppercase">
                <FiClock /> LAST COMMIT: {lastCommit}
              </div>
            )}
          </div>

          <div className="grid grid-cols-12">
            <h3 className="col-span-12 md:col-span-10 md:col-start-2 font-medium text-center">
              Product designer shaping consumer experiences — aligning systems, visual craft, and thoughtful product decisions that scale. Bringing delight to consumer apps, enterprise systems, and complex workflows.
            </h3>
          </div>

          <div className="font-mono text-xs uppercase">
            {displayedText}
            <span className={`inline-block ml-1 w-[1ch] bg-current ${showCaret ? "opacity-100" : "opacity-0"}`} />
          </div>
        </div>

        {/* Hover image */}
        <AnimatePresence>
          {showHoverImage && (
            <motion.img
              src={miniMe}
              className="pointer-events-none fixed top-0 left-0 z-[9999] w-24 md:w-32"
              style={{ x: smoothX, y: smoothY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          )}
        </AnimatePresence>
      </section>

      {/* ================= PROJECTS ================= */}
      <ProjectsSection />


      {/* ================= ABOUT ================= */}
      <section className="relative py-24 text-center">
        <h2 className="mb-8 max-w-3xl mx-auto">
          I design experiences like building LEGO — methodical in structure,
          creative in execution, and thoughtfully connected to build something greater.
        </h2>

        <motion.div className="mt-4 font-mono text-xs uppercase tracking-tight mb-16">
          Consistent details matter. Mine’s a{" "}
          <span className="text-blue-600">blue hat</span> :)
        </motion.div>

        <div className="flex justify-center items-center gap-10 mb-10 flex-wrap">
          {howItems.map((item, index) => {
            const isActive = currentIndex === index;
            return (
              <img
                key={item.id}
                src={item.src}
                className="w-36 md:w-44 lg:w-52 cursor-pointer transition-all duration-300"
                style={{
                  filter: isActive ? "saturate(1)" : "saturate(0)",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>

        <div className="max-w-xl mx-auto text-sm md:text-base text-grayLight-600 dark:text-grayDark-400 transition-all duration-300">
          {howItems[currentIndex].desc}
        </div>

        
      </section>
    </Layout>
  );
}