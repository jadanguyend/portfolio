// src/components/HomeHero.jsx
import { useEffect, useState } from "react";
import HeroCursorFlow from "./HeroCursorFlow";

export default function HomeHero() {
  const [hoverHero, setHoverHero] = useState(false);
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
          hour: "numeric",
          minute: "2-digit",
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
        flex
        flex-col
        justify-between
        px-6
        md:px-16
        pt-28
        pb-10
        overflow-hidden
        bg-grayLight-10
        dark:bg-grayDark-10
        mb-12
      "
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <HeroCursorFlow />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-grayLight-10 dark:to-grayDark-10" />
      </div>

      <div className="relative z-10 grid grid-cols-12">
        <div className="col-span-12 md:col-span-12">
          <h1
            onMouseEnter={() => setHoverHero(true)}
            onMouseLeave={() => setHoverHero(false)}
            className={`
              font-bold
              transition-colors
              duration-300
              leading-[1.1]
              ${
                hoverHero
                  ? "text-grayLight-200 dark:text-grayDark-200"
                  : "text-grayLight-900 dark:text-grayDark-900"
              }
            `}
          >
            <span
              className={`
                transition-colors
                duration-300
                ${hoverHero ? "text-accent" : ""}
              `}
            >
              Jada Nguyen
            </span>{" "}
              designs experiences that align systems, strategy, and visual craft, bringing 
              delight to enterprise products, consumer experiences, and complex workflows.
          </h1>

          <h3 className="mt-4 text-grayLight-400 dark:text-grayDark-400">
            Consistent details matter, mine is a Seiko Watch (SSEH105)
          </h3>
        </div>
      </div>

      <div
        className="
          relative
          z-10
          flex
          items-end
          justify-between
          gap-6
          font-mono
          text-xs
          md:text-sm
          uppercase
          tracking-tight
        "
      >
        <h6 className="font-mono font-medium text-grayLight-400 dark:text-grayDark-400">
          {lastCommit ? `Current Build: ${lastCommit}` : "Current Build"}
        </h6>

        <div className="flex gap-6 text-right">
          <h6 className="font-mono font-medium text-grayLight-400 dark:text-grayDark-400">Seattle, WA</h6>
          <h6 className="font-mono font-medium text-grayLight-400 dark:text-grayDark-400">{currentTime}</h6>
        </div>
      </div>
    </section>
  );
}