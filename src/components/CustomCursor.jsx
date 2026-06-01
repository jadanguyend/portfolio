import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [cursorLabel, setCursorLabel] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setCursorLabel(null);
  }, [location.pathname]);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

      const projectCard = e.target.closest(".project-card");
      const sandboxCard = e.target.closest(".sandbox-card");

      if (projectCard) {
        setCursorLabel("VIEW PROJECT");
      } else if (sandboxCard) {
        setCursorLabel("COMING SOON");
      } else {
        setCursorLabel(null);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", () => setCursorLabel(null));

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const isPill = Boolean(cursorLabel);

  return (
    <div
      ref={cursorRef}
      className={`
        pointer-events-none fixed left-0 top-0 z-[99999] hidden md:flex
        items-center justify-center rounded-full will-change-transform
        ${isPill ? "h-9 px-4 bg-accent" : "h-3 w-3 bg-white"}
      `}
      style={{
        mixBlendMode: isPill ? "normal" : "difference",
      }}
    >
      <span
        className={`
          font-mono text-xs uppercase tracking-wide text-white whitespace-nowrap
          ${isPill ? "opacity-100" : "opacity-0"}
        `}
      >
        {cursorLabel}
      </span>
    </div>
  );
}