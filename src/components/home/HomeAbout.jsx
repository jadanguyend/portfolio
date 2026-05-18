// src/components/HomeAbout.jsx
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiInfo } from "react-icons/fi";

import DayCalendar from "../DayCalendar";

import miniMe from "../../assets/miniMe.png";



const exploringItems = [
  { label: "Retro.app", href: "https://retro.app" },
  { label: "Claude", href: "https://claude.ai" },
  { label: "GSAP", href: "https://gsap.com" },
  { label: "Three.js", href: "https://threejs.org" },
];

const tags = [
  "figma",
  "jitter",
  "spline",
  "illustrator",
  "react",
  "user research",
  "prototyping",
  "interaction design",
  "design systems",
];

export default function HomeAbout() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 50%"],
  });

    const stampOpacity = useTransform(
    scrollYProgress,
    [0.22, 0.32],
    [0, 1]
    );

    const stampScale = useTransform(
    scrollYProgress,
    [0.22, 0.32],
    [2.4, 1]
    );

    const stampRotate = useTransform(
    scrollYProgress,
    [0.22, 0.32],
    [28, 10]
    );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-12 px-16 pb-24"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
        <div className="md:sticky md:top-36 min-h-[320px]">
            <div className="relative inline-block">
            <h1 className="relative z-10 font-mono uppercase text-grayLight-900 dark:text-grayDark-900">
                [JADA]
            </h1>

            <motion.img
                src={miniMe}
                alt=""
                className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                z-20
                w-20
                md:w-24
                drop-shadow-sm
                "
                style={{
                opacity: stampOpacity,
                scale: stampScale,
                rotate: stampRotate,
                x: "-50%",
                y: "-50%",
                }}
            />
            </div>
        </div>
        </div>

        <div className="hidden md:block md:col-span-1" />

        <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
          <h2 className="text-grayLight-900 dark:text-grayDark-900">
            I’m a multi-disciplinary designer with background in product design
            and brand strategy.
          </h2>

          <p className="text-grayLight-900 dark:text-grayDark-900">
            I’m a Chinese <span className="text-accent">(碧玉)</span>
            –Vietnamese <span className="text-accent">(Bích Ngọc)</span>{" "}
            designer based in Seattle. Before I knew product design was a
            field, I have long been drawn to design — starting with childhood
            dreams of becoming an architect. That curiosity still shapes how I
            think, explore, and design today.
          </p>

          <p className="text-grayLight-900 dark:text-grayDark-900">
            I keep up with what’s happening in tech and love exploring new
            products and tools, lately diving into{" "}
            {exploringItems.map((item, index) => (
              <span key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline text-accent"
                >
                  <span className="relative inline-block">
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
                {index < exploringItems.length - 1 && ", "}
              </span>
            ))}
            .
          </p>

          <p className="text-grayLight-900 dark:text-grayDark-900">
            I thrive in playful, collaborative environments, especially
            alongside people who share a strong sense of care and curiosity. As{" "}
            <span className="text-accent">a designer who wears many hats</span>{" "}
            literally, I enjoy working across product, brand, and front-end
            experiences, blending systems thinking with visual craft through
            tools and skills like...
          </p>

          <div className="flex flex-wrap gap-2 font-mono text-xs uppercase">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-accent text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
{/*
          <h4 className="mt-16 max-w-3xl mx-auto text-grayLight-900 dark:text-grayDark-900">
            I design experiences like building LEGO — methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </h4>

          <motion.div className="font-mono text-sm uppercase tracking-tight mb-4 text-grayLight-900 dark:text-grayDark-900">
            Learn more about my{" "}
            <span className="text-accent">design philosophy and values</span> ↓
          </motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
  {[
    {
      symbol: "⌘",
      title: "Intentionality",
      description:
        "Designing with clarity, purpose, and thoughtful attention.",
    },
    {
      symbol: "⌥",
      title: "Tenacity",
      description:
        "Embracing curiosity and iteration to uncover intuitive experiences.",
    },
    {
      symbol: "[]",
      title: "Reliable",
      description:
        "Building flexible foundations that support consistency and growth.",
    },
    {
      symbol: "*",
      title: "Delight",
      description:
        "Creating small moments that make experiences feel memorable.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      className="
        group
        rounded-lg
        border
        border-dashed
        border-grayLight-200
        dark:border-grayDark-200
        bg-grayLight-100/40
        dark:bg-grayDark-800/40
        px-5
        py-4
        transition-all
        duration-300
        hover:border-accent
      "
      whileHover={{ y: -2 }}
    >
      <div className="grid grid-cols-[56px_1fr] gap-4 items-start">
        <div
        className={`
            font-mono
            leading-none
            text-accent
            ${item.symbol === "[]" ? "text-2xl pt-1" : "text-4xl"}
        `}
        >
        {item.symbol}
        </div>

        <div>
          <h5 className="mb-1 text-sm text-grayLight-900 dark:text-grayDark-900">
            {item.title}
          </h5>

          <p className="text-[11px] leading-relaxed text-grayLight-700 dark:text-grayDark-700">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
*/}
          <div className="mt-8">
            <div className="relative mb-4 flex items-center justify-between">
              <div className="font-mono text-sm uppercase text-grayLight-900 dark:text-grayDark-900">
                How do I spend my time when I’m not designing?
              </div>

              <div className="group relative z-50">
                <FiInfo className="h-4 w-4 text-grayLight-400 dark:text-grayDark-500 cursor-pointer" />

                <div className="pointer-events-none absolute right-0 top-6 z-50 w-64 rounded-md bg-black text-white text-xs leading-relaxed p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  I believe a great way to get to know someone is to see how
                  they spend their time. Here is how I would spend mine... when
                  I'm not designing :)
                </div>
              </div>
            </div>

            <DayCalendar />
          </div>
        </div>
      </div>
    </section>
  );
}