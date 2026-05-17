// src/components/LoadingScreen.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import miniDog from "../assets/miniDog.png";
import miniRead from "../assets/miniRead.png";
import miniSkateboard from "../assets/miniSkateboard.png";

const stickers = [miniDog, miniRead, miniSkateboard];

const TEXT = "loading...";
const TYPING_SPEED = 75;
const STICKER_SPEED = 650;
const EXIT_DELAY = 3600;
const EXIT_DURATION = 650;

export default function LoadingScreen({ onComplete }) {
  const [stickerIndex, setStickerIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const stickerInterval = setInterval(() => {
      setStickerIndex((prev) => (prev + 1) % stickers.length);
    }, STICKER_SPEED);

    return () => clearInterval(stickerInterval);
  }, []);

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText(TEXT.slice(0, index + 1));
      index++;

      if (index === TEXT.length) {
        clearInterval(typingInterval);
      }
    }, TYPING_SPEED);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    const exitTimeout = setTimeout(() => {
      setExiting(true);

      setTimeout(() => {
        onComplete();
      }, EXIT_DURATION);
    }, EXIT_DELAY);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
      clearTimeout(exitTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        bg-accent
        transition-transform
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${exiting ? "-translate-y-full" : "translate-y-0"}
      `}
      style={{
        transitionDuration: `${EXIT_DURATION}ms`,
      }}
    >
      <div className="relative h-32 w-32">
        <AnimatePresence mode="wait">
          <motion.img
            key={stickers[stickerIndex]}
            src={stickers[stickerIndex]}
            alt=""
            draggable={false}
            initial={{ opacity: 50 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 50 }}
            transition={{
              duration: 0.35,
              ease: "linear",
            }}
            className="absolute inset-0 w-28 md:w-32"
          />
        </AnimatePresence>
      </div>

      <div className="mt-16 flex items-center font-mono text-xs uppercase tracking-tight text-white">
        <span>{displayedText}</span>

        <span
          className={`
            ml-[2px]
            inline-block
            h-[1em]
            w-[0.55em]
            bg-white
            ${showCursor ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>
    </div>
  );
}