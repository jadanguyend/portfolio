import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

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
        <AsciiBackground />

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-12 min-h-screen px-6 pt-28 pb-12 items-start">
          {/* Top Section: Full width name */}
          <motion.h1
            className="col-span-12 font-heading font-semibold text-text-primary text-grayLight-900 dark:text-grayDark-900 leading-none text-center uppercase"
            style={{
              fontSize: "clamp(6vw, 12vw, 15rem)",
              letterSpacing: "-0.05em",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block w-full">{`[JADANGUYEND]`}</span>
          </motion.h1>

          {/* Bottom Section */}
          <div className="col-span-12 mt-[40vh] grid grid-cols-12 gap-4">
            {/* Pills: full width, centered */}
            <div className="col-span-12 flex justify-center gap-3">
              <div className="meta-pill flex items-center gap-1">
                <FiMapPin /> Seattle, WA
              </div>
              {lastCommit && (
                <div className="meta-pill flex items-center gap-1">
                  <FiClock /> Last Commit: {lastCommit}
                </div>
              )}
            </div>

            {/* Main Phrase: 6 columns centered */}
            <motion.p
              className="col-start-3 col-span-8 text-center text-grayLight-500 dark:text-grayDark-500 text-base md:text-lg font-normal"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Product designer shaping consumer experiences — aligning systems,
              visual craft, and thoughtful product decisions that scale. Bringing
              delight to consumer apps, enterprise systems, and complex workflows.
            </motion.p>

            {/* Currently Typing Phrase */}
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
