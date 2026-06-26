// src/components/home/HomeHero.jsx
import { useEffect, useState } from "react";
import HeroCursorFlow from "./HeroCursorFlow";
import HeroInteractiveItems from "./HeroInteractiveItems";

export default function HomeHero() {
  const [currentTime, setCurrentTime] = useState("");

  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-grayLight-10
        dark:bg-grayDark-10
        mb-12
      "
    >
      {/* Background shader / cursor flow */}
      <div className="absolute top-0 left-1/2 z-0 h-full w-screen -translate-x-1/2 overflow-hidden pointer-events-auto">
        <HeroCursorFlow />

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-grayLight-10 dark:to-grayDark-10" />
      </div>

      {/* Interactive draggable hero items */}
      <HeroInteractiveItems />

      {/* Main hero content */}
      <div
        className="
          relative
          min-h-screen
          flex
          flex-col
          justify-between
          px-6
          md:px-16
          pt-28
          pb-10
          pointer-events-none
        "
      >
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-12">
            <h1
              className="
                relative
                z-[5]
                font-bold
                leading-[1.1]
                pointer-events-none
                text-grayLight-0
                mix-blend-difference
              "
              style={{
                textShadow: "0 0 20px rgba(0, 0, 0, 0.10)",
              }}
            >
              <span>Jada Nguyen</span>{" "}
              designs experiences that align systems, strategy, and visual
              craft, bringing delight to enterprise products, consumer
              experiences, and complex workflows.
            </h1>

            <h3
              className="
                relative
                z-[5]
                mt-4
                pointer-events-none
                text-grayLight-0/40
                mix-blend-difference
              "
              style={{
                textShadow: "0 0 20px rgba(0, 0, 0, 0.10)",
              }}
            >
              Consistent details matter, mine is a Seiko Watch &#40;SSEH105&#41;
            </h3>
          </div>
        </div>

        <div
          className="
            relative
            z-[5]
            flex
            items-center
            gap-12
            font-mono
            text-xs
            md:text-sm
            uppercase
            tracking-tight
            pointer-events-none
            text-grayLight-0/40
            mix-blend-difference
          "
        >
          <span className="font-medium">
            {lastCommit ? `Current Build: ${lastCommit}` : "Current Build"}
          </span>

          <span className="font-medium">Seattle {currentTime}</span>
        </div>
      </div>
    </section>
  );
}