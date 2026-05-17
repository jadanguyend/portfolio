// src/components/HomeHero.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";

import HeroCursorFlow from "./HeroCursorFlow";


export default function HomeHero() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;


  const [hoverName, setHoverName] = useState(false);


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
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <HeroCursorFlow />

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-grayLight-10 dark:to-grayDark-10" />
      </div>

      {/* Hero Title */}
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

      {/* Bottom Content */}
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
          <h3 className="col-span-12 font-medium text-center">
            By day, I design thoughtful product experiences that bring together systems, strategy, and 
            visual craft. By night, I disappear into creative rabbit holes — experimenting with new tools, 
            building LEGO sets, curating fragrances, and chasing niche internet deep dives.
          </h3>
        </div>

        <div className="font-mono text-xs uppercase tracking-tight text-grayLight-700 dark:text-grayDark-700">
        Consistent details matter, mine is a{" "}
        <span className="text-accent">blue hat</span>:)
        </div>
      </div>
    </section>
  );
}