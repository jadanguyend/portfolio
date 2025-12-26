import { useEffect, useState } from "react";

const TEXT = "[JADANGUYEND]";
const TYPING_SPEED = 65;      // slightly faster
const CARET_DELAY = 900;     // pause after typing
const EXIT_DURATION = 450;   // fade duration

export default function LoadingScreen({ onComplete }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCaret, setShowCaret] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(TEXT.slice(0, index + 1));
      index++;

      if (index === TEXT.length) {
        clearInterval(interval);

        // Let caret blink naturally after typing
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, EXIT_DURATION);
        }, CARET_DELAY);
      }
    }, TYPING_SPEED);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center bg-white
        transition-all ease-out
        ${exiting ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"}
      `}
      style={{ transitionDuration: `${EXIT_DURATION}ms` }}
    >
      <h1 className="text-4xl md:text-6xl font-heading text-black tracking-tight flex items-center">
        <span>{displayedText}</span>

        {showCaret && (
          <span className="ml-1 caret">|</span>
        )}
      </h1>
    </div>
  );
}
