import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

import miniMe from "../assets/miniMe.png";
import miniBeekeeper from "../assets/miniBeekeeper.png";
import miniHiker from "../assets/miniHiker.png";
import miniDetective from "../assets/miniDetective.png";
import miniAstronaut from "../assets/miniAstronaut.png";

// Typing phrases
const PHRASES = [
  "building a LEGO set",
  "using her favorite apps and softwares",
  "reading behavioral psychology books",
  "exploring design systems",
  "geeking out over F1 car liveries",
];

const TYPING_SPEED = 65; // ms per char
const PAUSE_AFTER_TYPING = 900; // pause at end of phrase
const PAUSE_AFTER_DELETING = 400;

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const heroConstraintsRef = useRef(null);

// Initial scattered positions (x/y as percentages)
  const initialMinis = [
    { id: 1, src: miniHiker, label: "Hiker", left: "20%", top: "40%", r: 15 },
    { id: 2, src: miniDetective, label: "Detective", left: "30%", top: "55%", r: -10 },
    { id: 3, src: miniMe, label: "Me", left: "45%", top: "35%", r: 5 },
    { id: 4, src: miniAstronaut, label: "Astronaut", left: "60%", top: "45%", r: -20 },
    { id: 5, src: miniBeekeeper, label: "Beekeeper", left: "70%", top: "55%", r: 10 },
  ];

  // Organized positions
  const organizedMinis = [
    { id: 1, left: "25%", top: "50%", r: 0 },
    { id: 2, left: "35%", top: "50%", r: 0 },
    { id: 3, left: "45%", top: "50%", r: 0 },
    { id: 4, left: "55%", top: "50%", r: 0 },
    { id: 5, left: "65%", top: "50%", r: 0 },
  ];

  const [heroMinis, setHeroMinis] = useState(initialMinis);

  // Typing effect state
  const [displayedText, setDisplayedText] = useState("Currently ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  // Caret blink
  useEffect(() => {
    const interval = setInterval(() => setShowCaret((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    const fullPhrase = "Currently " + PHRASES[phraseIndex];
    let timeout;

    if (!deleting && charIndex < fullPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);
    } else if (!deleting && charIndex === fullPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPING);
    } else if (deleting && charIndex > 9) {
      timeout = setTimeout(() => {
        setDisplayedText(fullPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, TYPING_SPEED);
    } else if (deleting && charIndex === 9) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETING);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <Layout footer={<Footer />}>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* ASCII Background */}
        <AsciiBackground />

        {/* Constraint layer for dragging */}
        <div ref={heroConstraintsRef} className="absolute inset-0 z-[15]" />

        {/* Floating Draggable Minis Layer */}
        <div className="absolute inset-0 z-[20] flex justify-center items-center">
          {heroMinis.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          drag
          dragConstraints={heroConstraintsRef}
          dragElastic={0.25}
          dragMomentum={false}
          whileHover={{ scale: 1.12 }}
          whileDrag={{ scale: 1.18, zIndex: 30 }}
          style={{
            left: item.left, // CSS percent
            top: item.top,   // CSS percent
            rotate: item.r,
          }}
          animate={{
            rotate: item.r,
            transition: { type: "spring", stiffness: 120, damping: 20 },
          }}
        >
              <div className="group relative cursor-grab">
                <motion.img
                  src={item.src}
                  draggable={false}
                  className="w-28 md:w-32 select-none drop-shadow-xl"
                  style={{ rotate: item.r }}
                />

                {/* Tooltip */}
                <div
                  className="pointer-events-none absolute left-1/2 bottom-full mb-3
                            -translate-x-1/2 rounded-md bg-black text-white text-xs
                            px-3 py-1 opacity-0 group-hover:opacity-100 transition
                            whitespace-nowrap font-mono uppercase tracking-tight"
                >
                  {item.label}
                  <span
                    className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0
                              border-l-[6px] border-r-[6px] border-t-[6px]
                              border-l-transparent border-r-transparent border-t-black"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative z-30 grid grid-cols-12 min-h-screen px-6 pt-28 pb-12 items-start">
          {/* Top Section: Full width name */}
          <motion.h1
            className="col-span-12 font-heading font-semibold text-text-primary text-grayLight-900 dark:text-grayDark-900 leading-none text-center uppercase"
            style={{ fontSize: "clamp(6vw, 12vw, 15rem)", letterSpacing: "-0.05em" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block w-full">{`[JADANGUYEND]`}</span>
          </motion.h1>

          {/* Bottom Section */}
          <div className="col-span-12 mt-[40vh] grid grid-cols-12 gap-4">
            {/* Pills */}
            <div className="col-span-12 flex justify-center gap-3 relative z-[40]">
              <div className="meta-pill flex items-center gap-1">
                <FiMapPin /> Seattle, WA
              </div>
              {lastCommit && (
                <div className="meta-pill flex items-center gap-1">
                  <FiClock /> Last Commit: {lastCommit}
                </div>
              )}
              {/* Organize Button */}
              <button
                className="meta-pill cursor-pointer"
                onClick={() =>
                  setHeroMinis((prev) =>
                    prev.map((mini) => {
                      const target = organizedMinis.find((o) => o.id === mini.id);
                      return target ? { ...mini, ...target } : mini;
                    })
                  )
                }
              >
                Organize Minis
              </button>
            </div>

            {/* Main Phrase */}
            <motion.p
              className="col-start-3 col-span-8 text-center text-grayLight-500 dark:text-grayDark-500 text-base md:text-lg font-normal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Product designer shaping consumer experiences — aligning systems,
              visual craft, and thoughtful product decisions that scale. Bringing
              delight to consumer apps, enterprise systems, and complex workflows.
            </motion.p>

            {/* Typing Phrase */}
            <motion.div
              className="col-start-4 col-span-6 text-center font-mono text-xs uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {displayedText}
              <span
                className={`inline-block ml-1 w-[1ch] bg-current ${
                  showCaret ? "opacity-100" : "opacity-0"
                }`}
              >
                &nbsp;
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectsSection />
    </Layout>
  );
}