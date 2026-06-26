// src/components/LoadingScreen.jsx
import { useEffect, useState } from "react";

import Loading_Coffee from "../assets/Loading_Coffee.png";

const TEXT = "Good things take time...";
const TYPING_SPEED = 75;
const EXIT_DELAY = 3600;
const EXIT_DURATION = 650;

export default function LoadingScreen({ onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [exiting, setExiting] = useState(false);

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
      <img
        src={Loading_Coffee}
        alt=""
        draggable={false}
        className="w-24 md:w-28"
      />

      <div className="mt-8 flex items-center font-mono text-xs uppercase tracking-tight text-white">
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