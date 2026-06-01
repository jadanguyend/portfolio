// src/components/HomeAbout.jsx
import { useState, useRef } from "react";
import { useScroll } from "framer-motion";
import { FiInfo } from "react-icons/fi";

import DayCalendar from "../DayCalendar";

import jadaAdult from "../../assets/jada_adult.png";
import jadaAdultHover from "../../assets/jada_adult_hover.png";
import jadaAdultFun from "../../assets/jada_adult_fun.png";

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
  const [isHovered, setIsHovered] = useState(false);

  useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 50%"],
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-12 px-16 pb-24 mb-12"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-28">
            <div
              className="
                relative
                h-40
                aspect-[3/4]
                overflow-hidden
                rounded-lg
                cursor-pointer
                select-none
              "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={jadaAdult}
                alt="Jada"
                className={`
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-opacity duration-300
                  ${isHovered ? "opacity-0" : "opacity-100"}
                `}
              />

              <img
                src={jadaAdultFun}
                alt="Jada"
                className={`
                  absolute inset-0
                  w-full h-full
                  object-cover
                  transition-opacity duration-300
                  ${isHovered ? "opacity-100" : "opacity-0"}
                `}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block md:col-span-1" />

        <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
          <h2>
            I’m a multi-disciplinary designer with background in product design
            and brand strategy.
          </h2>

          <p>
            I’m a Chinese <span className="text-accent">(碧玉)</span>
            –Vietnamese <span className="text-accent">(Bích Ngọc)</span>{" "}
            designer based in Seattle. Before I knew product design was a
            field, I have long been drawn to design — starting with childhood
            dreams of becoming an architect. That curiosity still shapes how I
            think, explore, and design today.
          </p>

          <p>
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

          <p>
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

          ...
          */}

          <div className="mt-8">
            <div className="relative mb-4 flex items-center justify-between">
              <h6>How do I spend my time when I’m not designing?</h6>

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