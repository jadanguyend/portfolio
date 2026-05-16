import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";

import miniMe from "../../assets/miniMe.png";
import skateboarderGif from "../../assets/skateboarder.gif";
import skateboarderDarkGif from "../../assets/skateboarderDark.gif";

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

export default function HomeHero() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const [displayedText, setDisplayedText] = useState("Currently ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const smoothY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  const [showHoverImage, setShowHoverImage] = useState(false);
  const [hoverName, setHoverName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowCaret((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

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

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX + 16);
    cursorY.set(e.clientY + 16);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-16 pt-24 pb-12 text-center"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-dots-mask" />
      </div>

      <div className="relative flex justify-center z-10">
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
          <span
            className={
              hoverName
                ? "text-grayLight-200 dark:text-grayDark-200"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            [
          </span>
          <span className={hoverName ? "text-accent" : "text-grayLight-900 dark:text-grayDark-900"}>
            JADA{" "}
          </span>
          <span
            className={
              hoverName
                ? "text-grayLight-200 dark:text-grayDark-200"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            NGUYEND
          </span>
          <span
            className={
              hoverName
                ? "text-grayLight-200 dark:text-grayDark-200"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            ]
          </span>
        </motion.h1>
      </div>

      <div className="relative flex flex-col items-center gap-6 z-10">
        <div className="flex flex-wrap justify-center gap-3">
          <div className="relative inline-flex meta-pill items-center gap-1">
            <FiMapPin /> SEATTLE, WA

            <motion.img
              src={skateboarderGif}
              alt="Skateboarder"
              className="absolute -top-10 right-16 w-6 md:w-10 pointer-events-none block dark:hidden"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={skateboarderDarkGif}
              alt="Skateboarder dark"
              className="absolute -top-10 right-16 w-6 md:w-10 pointer-events-none hidden dark:block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {lastCommit && (
            <div className="relative inline-flex meta-pill items-center gap-1 uppercase">
              <FiClock /> LAST COMMIT: {lastCommit}
            </div>
          )}
        </div>

        <div className="grid grid-cols-12">
          <h3 className="col-span-12 font-medium text-center">
            Product designer shaping consumer experiences — aligning systems,
            visual craft, and thoughtful product decisions that scale. Bringing
            delight to consumer apps, enterprise systems, and complex workflows.
          </h3>
        </div>

        <motion.div className="font-mono text-xs uppercase tracking-tight">
          Consistent details matter. Mine’s a{" "}
          <span className="text-accent">blue hat</span> :)
        </motion.div>
      </div>

      <AnimatePresence>
        {showHoverImage && (
          <motion.img
            src={miniMe}
            alt=""
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-24 md:w-32"
            style={{ x: smoothX, y: smoothY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}