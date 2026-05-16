// src/components/HomeHero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";

import HeroCursorFlow from "./HeroCursorFlow";

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
  const [hoverName, setHoverName] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 500);

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
      timeout = setTimeout(() => {
        setDeleting(true);
      }, PAUSE_AFTER_TYPING);
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
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex
        flex-col
        justify-between
        px-16
        pt-24
        pb-12
        text-center
        overflow-hidden
        bg-grayLight-10
        dark:bg-grayDark-10
      "
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <HeroCursorFlow />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-transparent via-transparent to-grayLight-10 dark:to-grayDark-10" />
      </div>

      <div className="relative z-10 flex justify-center pointer-events-none">
        <motion.h1
          className="
            pointer-events-auto
            font-mono
            font-semibold
            uppercase
            leading-none
            cursor-pointer
            flex
            justify-center
            items-center
            select-none
          "
          style={{
            fontSize: "clamp(6vw, 12vw, 15rem)",
            letterSpacing: "-0.05em",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          onMouseEnter={() => setHoverName(true)}
          onMouseLeave={() => setHoverName(false)}
        >
          <span
            className={
              hoverName
                ? "text-grayLight-10 dark:text-grayDark-10"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            [
          </span>

          <span
            className={
              hoverName
                ? "text-accent"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            JADA{" "}
          </span>

          <span
            className={
              hoverName
                ? "text-grayLight-10 dark:text-grayDark-10"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            NGUYEND
          </span>

          <span
            className={
              hoverName
                ? "text-grayLight-10 dark:text-grayDark-10"
                : "text-grayLight-900 dark:text-grayDark-900"
            }
          >
            ]
          </span>
        </motion.h1>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 pointer-events-none">
        <div className="flex flex-wrap justify-center gap-3">
          <div className="relative inline-flex meta-pill items-center gap-1">
            <FiMapPin />
            SEATTLE, WA
          </div>

          {lastCommit && (
            <div className="relative inline-flex meta-pill items-center gap-1 uppercase">
              <FiClock />
              LAST DEPLOYED: {lastCommit}
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
          <span>{displayedText}</span>
          <span
            className={`ml-[1px] ${
              showCaret ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
          >
            |
          </span>
        </motion.div>
      </div>
    </section>
  );
}