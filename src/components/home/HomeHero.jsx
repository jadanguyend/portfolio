// src/components/HomeHero.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiClock } from "react-icons/fi";

import HeroCursorFlow from "./HeroCursorFlow";

export default function HomeHero() {
  const navigate = useNavigate();

  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const [hoverName, setHoverName] = useState(false);
  const [hoverText, setHoverText] = useState(null);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (!el) return;

    const yOffset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

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
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-grayLight-10 dark:to-grayDark-10" />
      </div>

      <div className="relative z-10 flex justify-center">
        <h1
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
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-3">
          <div className="relative inline-flex meta-pill items-center gap-1 text-accent">
            <FiMapPin />
            SEATTLE, WA
          </div>

          {lastCommit && (
            <div className="relative inline-flex meta-pill items-center gap-1 uppercase text-accent">
              <FiClock />
              LAST DEPLOYED: {lastCommit}
            </div>
          )}
        </div>

        <div className="grid grid-cols-12">
          <h3
            className={`
              col-span-12
              font-medium
              text-center
              leading-snug
              transition-colors
              duration-300
              ${
                hoverText
                  ? "text-grayLight-300 dark:text-grayDark-300"
                  : "text-grayLight-900 dark:text-grayDark-900"
              }
            `}
          >
            By day,{" "}
            <span
              role="button"
              tabIndex={0}
              onClick={scrollToWork}
              onMouseEnter={() => setHoverText("day")}
              onMouseLeave={() => setHoverText(null)}
              className="inline cursor-pointer transition-colors duration-300"
              style={{
                color: hoverText === "day" ? "var(--accent-color)" : "inherit",
              }}
            >
              I design experiences that align systems, strategy, and visual craft,
              bringing delight to enterprise systems, consumer products, and complex
              workflows
            </span>
            . By night,{" "}
            <span
              role="button"
              tabIndex={0}
              onClick={() => navigate("/sandbox")}
              onMouseEnter={() => setHoverText("night")}
              onMouseLeave={() => setHoverText(null)}
              className="inline cursor-pointer transition-colors duration-300"
              style={{
                color:
                  hoverText === "night" ? "var(--accent-color)" : "inherit",
              }}
            >
              I disappear into creative rabbit holes — experimenting with new tools,
              building LEGO sets, and discovering new fragrances
            </span>
            .
          </h3>
        </div>

        <div className="font-mono text-xs uppercase tracking-tight text-grayLight-700 dark:text-grayDark-700">
          Consistent details matter, mine is a{" "}
          <span className="text-accent">Seiko Watch (SSEH105)</span>
        </div>
      </div>
    </section>
  );
}