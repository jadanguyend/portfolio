import { useState } from "react";
import { motion } from "framer-motion";
import { FiInfo } from "react-icons/fi";

import DayCalendar from "../DayCalendar";

import howPlanner from "../../assets/howPlanner.png";
import howTinkerer from "../../assets/howTinkerer.png";
import howBuilder from "../../assets/howBuilder.png";
import howPainter from "../../assets/howPainter.png";

const howItems = [
  {
    id: 0,
    src: howPlanner,
    desc: "I carefully shape each piece so the experience feels clear, intentional, and thoughtfully connected while balancing structure, usability, and visual clarity throughout the process.",
  },
  {
    id: 1,
    src: howTinkerer,
    desc: "I constantly experiment, refine, and iterate until the experience feels seamless and intuitive, paying close attention to the small interactions that shape how people engage with a product.",
  },
  {
    id: 2,
    src: howBuilder,
    desc: "I build systems that are scalable, practical, and designed for real-world use by creating foundations that support consistency, flexibility, and long-term growth beyond polished visuals alone.",
  },
  {
    id: 3,
    src: howPainter,
    desc: "I add thoughtful details that make experiences feel memorable, delightful, and genuinely human. I bring personality and warmth into moments that might otherwise feel purely functional.",
  },
];

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const currentIndex = hoverIndex ?? activeIndex;

  return (
    <section id="about" className="relative py-12 px-16 pb-24">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <h1 className="font-mono uppercase md:sticky md:top-36 text-grayLight-900 dark:text-grayDark-900">
            [JADA]
          </h1>
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

          <h4 className="mt-16 max-w-3xl mx-auto text-grayLight-900 dark:text-grayDark-900">
            I design experiences like building LEGO — methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </h4>

          <motion.div className="font-mono text-sm uppercase tracking-tight mb-4 text-grayLight-900 dark:text-grayDark-900">
            Learn more about my{" "}
            <span className="text-accent">design philosophy and values</span> ↓
          </motion.div>

          <div className="border border-dashed border-grayLight-200 dark:border-grayDark-200 bg-grayLight-100/40 dark:bg-grayDark-800/40 rounded-lg px-6 py-4">
            <div className="flex items-center justify-between">
              {howItems.map((item, index) => {
                const isActive = currentIndex === index;

                return (
                  <img
                    key={item.id}
                    src={item.src}
                    alt=""
                    loading="lazy"
                    className="w-16 sm:w-20 md:w-24 lg:w-28 cursor-pointer transition-all duration-300"
                    style={{
                      filter: isActive ? "saturate(1)" : "saturate(0)",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                    }}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>
          </div>

          <div className="text-grayLight-700 dark:text-grayDark-700 transition-all duration-300 text-xs font-mono leading-tight">
            {howItems[currentIndex].desc}
          </div>

          <div className="mt-16">
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