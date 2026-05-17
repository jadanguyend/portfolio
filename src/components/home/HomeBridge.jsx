// src/components/home/HomeDelightBridge.jsx
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import miniDog from "../../assets/miniDog.png";
import miniRead from "../../assets/miniRead.png";
import miniSkateboard from "../../assets/miniSkateboard.png";

const stickers = [miniDog, miniRead, miniSkateboard];

export default function HomeDelightBridge() {
  const sectionRef = useRef(null);

  const [stickerIndex, setStickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStickerIndex((prev) => (prev + 1) % stickers.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(
    scrollYProgress,
    [0.38, 0.381, 0.58, 0.581],
    [0, 1, 1, 0]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0.24, 0.36, 0.62, 0.76],
    [0, 1, 1, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    [0.24, 0.4],
    [96, 0]
  );

  const textScale = useTransform(
    scrollYProgress,
    [0.24, 0.4],
    [0.82, 1]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0.38, 0.381, 0.58, 0.581],
    ["#111111", "#ffffff", "#ffffff", "#111111"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] bg-transparent"
    >
      {/* Accent overlay */}
      <motion.div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[1]
          bg-accent
        "
        style={{ opacity: bgOpacity }}
      />

      {/* Content */}
      <div className="sticky top-0 z-[2] flex h-screen items-center justify-center px-16">
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            scale: textScale,
          }}
          className="
            grid
            w-full
            grid-cols-12
          "
        >
          <div
            className="
              col-span-12
              md:col-start-4
              md:col-span-6
              flex
              flex-col
              items-center
              text-center
            "
          >
            <div className="relative mb-16 h-32 w-32">
              <AnimatePresence mode="wait">
                <motion.img
                  key={stickers[stickerIndex]}
                  src={stickers[stickerIndex]}
                  alt=""
                  draggable={false}
                  initial={{ opacity: 50 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 50 }}
                  transition={{
                    duration: 0.8,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-28 md:w-32"
                />
              </AnimatePresence>
            </div>

            <motion.h1
              style={{ color: textColor }}
              className="
                text-3xl
                md:text-4xl
                font-semibold
                leading-tight
              "
            >
              I bring delight to enterprise systems, consumer products, and
              complex workflows.
            </motion.h1>

            <motion.a
              href="#work"
              style={{
                color: textColor,
                borderColor: textColor,
              }}
              className="
                mt-10
                inline-flex
                items-center
                rounded-full
                border
                px-5
                py-2
                font-mono
                text-xs
                uppercase
                tracking-tight
                transition
                hover:bg-white
                hover:text-accent
              "
            >
              View selected work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}