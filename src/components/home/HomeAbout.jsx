import { useState, useRef } from "react";
import { useScroll } from "framer-motion";
import { FiInfo, FiGrid } from "react-icons/fi";

import DayCalendar from "../DayCalendar";
import StickerPeel from "../StickerPeel";

import jadaAdult from "../../assets/jada_adult.webp";
import jadaAdultFun from "../../assets/jada_adult_fun.webp";

import minifigPlanner from "../../assets/minifig_planner.webp";
import minifigBuilder from "../../assets/minifig_builder.webp";
import minifigFixer from "../../assets/minifig_fixer.webp";
import minifigPainter from "../../assets/minifig_painter.webp";

const exploringItems = [
  { label: "Maze", href: "https://maze.co/" },
  { label: "Claude", href: "https://claude.ai" },
  { label: "GSAP", href: "https://gsap.com" },
  { label: "Three.js", href: "https://threejs.org" },
];

const tags = [
  "figma",
  "jitter",
  "spline",
  "framer",
  "illustrator",
  "react",
  "javascript",
  "vercel",
  "github",
];

const stickerSize = 160;

const minifigItems = [
  {
    src: minifigPlanner,
    alt: "Minifigure planner",
    label: "Strategic Thinker",
    rotate: -4,
    peelDirection: 0,
  },
  {
    src: minifigBuilder,
    alt: "Minifigure builder",
    label: "Systems Builder",
    rotate: 3,
    peelDirection: 8,
  },
  {
    src: minifigFixer,
    alt: "Minifigure fixer",
    label: "Relentless Tinkerer",
    rotate: -2,
    peelDirection: -6,
  },
  {
    src: minifigPainter,
    alt: "Minifigure painter",
    label: "Joyful Crafter",
    rotate: 4,
    peelDirection: 5,
  },
];

export default function HomeAbout() {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 50%"],
  });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-visible py-12 px-16 pb-24 mb-12"
    >
      <div className="grid grid-cols-12 overflow-visible">
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

        <div className="col-span-12 md:col-span-7 flex flex-col gap-6 overflow-visible">
          <h2>
            I’m a multi-disciplinary designer with background in product design
            and brand strategy.
          </h2>

          <p>
            I’m a Chinese <span className="text-accent">(碧玉)</span>
            –Vietnamese <span className="text-accent">(Bích Ngọc)</span>{" "}
            designer based in Seattle. Before I knew product design was a field,
            I have long been drawn to design — starting with childhood dreams of
            becoming an architect. That curiosity still shapes how I think,
            explore, and design today.
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
            (literally), I enjoy working across product, brand, and front-end
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

          <div className="mt-6">
            <div className="relative mb-2 flex items-center justify-between">
              <h6>What hats do I wear as a designer?</h6>

              <button
                type="button"
                aria-label="Reset stickers to original positions"
                onClick={() => setResetKey((current) => current + 1)}
                className="
                  cursor-pointer
                  text-grayLight-400
                  transition-colors
                  duration-200
                  hover:text-accent
                  focus:outline-none
                  focus-visible:text-accent
                  dark:text-grayDark-500
                  dark:hover:text-accent
                  dark:focus-visible:text-accent
                "
              >
                <FiGrid className="h-4 w-4" />
              </button>
            </div>

            <div
              className="
                grid
                grid-cols-4
                gap-3
                sm:gap-4
                rounded-lg
                bg-grayLight-50
                px-4
                pt-4
                pb-8
                overflow-visible
              "
            >
              {minifigItems.map((item) => (
                <div
                  key={item.alt}
                  className="
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    overflow-visible
                    rounded-xl
                  "
                >
                  <div
                    className="
                      relative
                      flex
                      items-center
                      justify-center
                      overflow-visible
                    "
                    style={{
                      width: stickerSize,
                      height: stickerSize,
                    }}
                  >
                    <img
                      src={item.src}
                      alt=""
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        select-none
                      "
                      style={{
                        width: stickerSize,
                        transform: `rotate(${item.rotate}deg)`,
                        opacity: 0.1,
                        filter:
                          "brightness(0) saturate(100%) invert(22%) sepia(87%) saturate(2987%) hue-rotate(225deg) brightness(94%) contrast(99%)",
                      }}
                    />

                    <StickerPeel
                      key={`${item.alt}-${resetKey}`}
                      imageSrc={item.src}
                      alt={item.alt}
                      width={stickerSize}
                      rotate={item.rotate}
                      peelDirection={item.peelDirection}
                      peelBackHoverPct={16}
                      peelBackActivePct={32}
                      shadowIntensity={0.12}
                      lightingIntensity={0.08}
                      isDraggable
                      boundsRef={sectionRef}
                    />
                  </div>

                  <p
                    className="
                      pointer-events-none
                      font-mono
                      text-xs
                      uppercase
                      tracking-tight
                      text-accent
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
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
                <FiInfo
                  className="
                    h-4
                    w-4
                    cursor-pointer
                    text-grayLight-400
                    transition-colors
                    duration-200
                    group-hover:text-accent
                    dark:text-grayDark-500
                    dark:group-hover:text-accent
                  "
                />

                <div className="pointer-events-none absolute right-0 top-6 z-50 w-64 rounded-md bg-black text-white text-xs leading-relaxed p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  A great way to get to know someone is to see how
                  they spend their time. Here is how I would spend mine... when
                  I'm not designing of course :)
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