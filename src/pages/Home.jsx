import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { FiMapPin, FiClock, FiArrowUpRight, FiInfo } from "react-icons/fi";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import DayCalendar from "../components/DayCalendar";
import Postcard from "../components/Postcard";
import Ascii from "../components/AsciiBackground";
import ProjectsSection from "../components/ProjectSection";

import miniMe from "../assets/miniMe.png";
import MeBookstore from "../assets/MeBookstore.png";
import skateboarderGif from "../assets/skateboarder.gif";
import skateboarderDarkGif from "../assets/skateboarderDark.gif";

/* ===== How I Build images ===== */
import howPlanner from "../assets/howPlanner.png";
import howTinkerer from "../assets/howTinkerer.png";
import howBuilder from "../assets/howBuilder.png";
import howPainter from "../assets/howPainter.png";

/* ===== Typing phrases ===== */
const PHRASES = [
  "building a LEGO set",
  "using her favorite tools",
  "reading behavioral psychology books",
  "exploring design systems",
  "geeking out over F1 car liveries",
];

const TYPING_SPEED = 65;
const PAUSE_AFTER_TYPING = 900;
const PAUSE_AFTER_DELETING = 400;

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  /* ===== Typing effect ===== */
  const [displayedText, setDisplayedText] = useState("Currently ");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCaret((p) => !p), 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullPhrase = "Currently " + PHRASES[phraseIndex];
    let timeout;

    if (!deleting && charIndex < fullPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullPhrase.slice(0, charIndex + 1));
        setCharIndex((p) => p + 1);
      }, TYPING_SPEED);
    } else if (!deleting && charIndex === fullPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_AFTER_TYPING);
    } else if (deleting && charIndex > 9) {
      timeout = setTimeout(() => {
        setDisplayedText(fullPhrase.slice(0, charIndex - 1));
        setCharIndex((p) => p - 1);
      }, TYPING_SPEED);
    } else if (deleting && charIndex === 9) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((p) => (p + 1) % PHRASES.length);
      }, PAUSE_AFTER_DELETING);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  /* ===== Hover image for name ===== */
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const smoothY = useSpring(cursorY, { stiffness: 200, damping: 25 });
  const [showHoverImage, setShowHoverImage] = useState(false);
  const [hoverName, setHoverName] = useState(false);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX + 16);
    cursorY.set(e.clientY + 16);
  };

  /* ===== How section logic ===== */
  const howItems = [
    {
      id: 0,
      src: howPlanner,
      desc: "I carefully select each element so everything fits together clearly, logically, and with intention.",
    },
    {
      id: 1,
      src: howTinkerer,
      desc: "I keep experimenting, refining, and iterating until the experience feels seamless and complete.",
    },
    {
      id: 2,
      src: howBuilder,
      desc: "I build systems that are robust, scalable, and ready for real-world use — not just polished screens.",
    },
    {
      id: 3,
      src: howPainter,
      desc: "I add thoughtful details that make the experience intuitive, memorable, and genuinely enjoyable.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const currentIndex = hoverIndex ?? activeIndex;

  const delightItems = [
    "Project Hail Mary by Andy Weir",
    "Detective Conan Series",
    "Cup of Bac Xiu",
    "REPLICA Lazy Sunday Morning by Maison Margiela",
    "Super Mario Odyssey",
  ];

  return (
    <Layout footer={<Footer />}>
      {/* ================= HERO ================= */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-between px-6 py-12 text-center">

        {/* ===== DOTTED BACKGROUND ===== */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-dots-mask"></div>
        </div>

        {/* ===== HERO NAME ===== */}
        <div className="relative flex justify-center z-10">
          <motion.h1
            className="font-mono font-semibold uppercase leading-none cursor-pointer flex justify-center items-center"
            style={{
              fontSize: "clamp(6vw, 12vw, 15rem)",
              letterSpacing: "-0.05em",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            onMouseEnter={() => {
              setShowHoverImage(true);
              setHoverName(true);
            }}
            onMouseLeave={() => {
              setShowHoverImage(false);
              setHoverName(false);
            }}
            onMouseMove={handleMouseMove}
          >
            <span className={hoverName ? "text-grayLight-200 dark:text-grayDark-200" : "text-grayLight-900 dark:text-grayDark-900"}>[</span>
            <span className={hoverName ? "text-accent" : "text-grayLight-900 dark:text-grayDark-900"}>JADA </span>
            <span className={hoverName ? "text-grayLight-200 dark:text-grayDark-200" : "text-grayLight-900 dark:text-grayDark-900"}>NGUYEND</span>
            <span className={hoverName ? "text-grayLight-200 dark:text-grayDark-200" : "text-grayLight-900 dark:text-grayDark-900"}>]</span>
          </motion.h1>
        </div>

        {/* ===== HERO META / LOCATION / COMMIT ===== */}
        <div className="relative flex flex-col items-center gap-6 z-10">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="relative inline-flex meta-pill flex items-center gap-1">
              <FiMapPin /> SEATTLE, WA

              {/* Light mode animation */}
              <motion.img
                src={skateboarderGif}
                alt="Skateboarder"
                className="absolute -top-10 right-16 w-6 md:w-10 pointer-events-none block dark:hidden"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Dark mode animation */}
              <motion.img
                src={skateboarderDarkGif}
                alt="Skateboarder dark"
                className="absolute -top-10 right-16 w-6 md:w-10 pointer-events-none hidden dark:block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            {lastCommit && (
              <div className="relative inline-flex meta-pill flex items-center gap-1 uppercase">
                <FiClock /> LAST COMMIT: {lastCommit}
              </div>
            )}
          </div>

          {/* ===== HERO DESCRIPTION ===== */}
          <div className="grid grid-cols-12">
            <h3 className="col-span-12 md:col-span-12 font-medium text-center">
              Product designer shaping consumer experiences — aligning systems, visual craft, and thoughtful product decisions that scale. Bringing delight to consumer apps, enterprise systems, and complex workflows.
            </h3>
          </div>

          {/* ===== MINI BLUE HAT STATEMENT ===== */}
          <motion.div className="font-mono text-xs uppercase tracking-tight">
            Consistent details matter. Mine’s a <span className="text-accent">blue hat</span> :)
          </motion.div>
        </div>

        {/* ===== HOVER IMAGE ===== */}
        <AnimatePresence>
          {showHoverImage && (
            <motion.img
              src={miniMe}
              className="pointer-events-none fixed top-0 left-0 z-[9999] w-24 md:w-32"
              style={{ x: smoothX, y: smoothY }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          )}
        </AnimatePresence>
      </section>

      {/* ================= PROJECTS ================= */}
      <div id="work">
        <ProjectsSection />
      </div>


      {/* ================= ABOUT ================= */}
      <section id="about" className="relative py-12 px-16 pb-24">
        <div className="grid grid-cols-12">
          
          {/* Left */}
          <div className="col-span-12 md:col-span-4">
            <h1 className="font-mono uppercase md:sticky md:top-36 text-grayLight-900 dark:text-grayDark-900">
              [JADA]
            </h1>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden md:block md:col-span-1" />

          {/* Right */}
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
            
            {/* H2 */}
            <h2 className="text-grayLight-900 dark:text-grayDark-900">
              I’m a multi-disciplinary designer with background in product design and brand strategy.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-grayLight-900 dark:text-grayDark-900">
              I’m a Chinese <span className="text-accent">(碧玉)</span>–Vietnamese{" "}
              <span className="text-accent">(Bích Ngọc)</span> designer based in Seattle. Before I knew 
              product design was a field, I was drawn to design—starting with childhood dreams of becoming 
              an architect. That curiosity has stayed with me, shaping how I see and approach the world. 
              I keep up with what’s happening in tech and love exploring new products—lately diving into 
              [apps you’re exploring].
            </p>

            {/* Paragraph 2 */}
            <p className="text-grayLight-900 dark:text-grayDark-900">
              As a designer, I thrive in playful, collaborative environments, especially alongside people 
              who share a strong sense of care and curiosity. I bring a blend of product thinking and brand 
              sensitivity into my work, supported by tools and skills like...
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 font-mono text-xs uppercase">
              {[
                "figma",
                "photoshop",
                "illustrator",
                "prototyping",
                "wireframing",
                "user research",
                "design systems",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-accent text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LEGO statement */}
            <h4 className="mt-12 max-w-3xl mx-auto text-grayLight-900 dark:text-grayDark-900">
              I design experiences like building LEGO — methodical in structure,
              creative in execution, and thoughtfully connected to build something greater.
            </h4>

            {/* Philosophy */}
            <motion.div className="font-mono text-xs uppercase tracking-tight mb-4 text-grayLight-900 dark:text-grayDark-900">
              Learn about my <span className="text-accent">design philosophy and values</span> :)
            </motion.div>

            {/* Minifigure box */}
            <div className="border border-dashed border-grayLight-400 dark:border-grayDark-600 bg-grayLight-100/40 dark:bg-grayDark-800/40 rounded-lg px-6 py-4">
              <div className="flex items-center justify-between">
                {howItems.map((item, index) => {
                  const isActive = currentIndex === index;
                  return (
                    <img
                      key={item.id}
                      src={item.src}
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

            <div className="text-sm md:text-base text-grayLight-900 dark:text-grayDark-900 transition-all duration-300">
              {howItems[currentIndex].desc}
            </div>

            {/* ================= DELIGHT ================= */}
            <div className="mt-12">

              {/* Heading */}
              <h4 className="mb-6 text-grayLight-900 dark:text-grayDark-900">
                Little things that brings me <span className="text-accent">delight</span> when I’m not designing...
              </h4>

              {/* List */}
              <div className="flex flex-col">
                {[
                  { label: "What is Claude? Anthropic Doesn't Know, Either", href: "https://www.newyorker.com/magazine/2026/02/16/what-is-claude-anthropic-doesnt-know-either" },
                  { label: "What Google Learned From Its Quest to Build the Perfect Team", href: "https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html" },
                  { label: "Hooked: How to Build Habit-Forming Products", href: "https://www.goodreads.com/book/show/22668729-hooked" },
                  { label: "How Pokémon Go is giving delivery robots an inch-perfect view of the world", href: "https://www.technologyreview.com/2026/03/10/1134099/how-pokemon-go-is-helping-robots-deliver-pizza-on-time/" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-1 cursor-pointer relative"
                  >
                    {/* Left text with underline animation */}
                    <span className="relative inline-block text-grayLight-900 dark:text-grayDark-900 transition-colors duration-300 group-hover:text-accent">
                      {item.label}
                      <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-accent transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    {/* Arrow */}
                    <FiArrowUpRight className="opacity-70 transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===== DAY CALENDAR ===== */}
        <div className="mt-12">
          <div className="relative mb-4 flex items-center justify-between">
            <div className="font-mono text-sm uppercase text-grayLight-400 dark:text-grayDark-500">
              A delightful day in my life
            </div>

            <div className="group relative z-50">
              <FiInfo className="h-4 w-4 text-grayLight-400 dark:text-grayDark-500 cursor-pointer" />

              <div className="pointer-events-none absolute right-0 top-6 z-50 w-64 rounded-md bg-black text-white text-xs leading-relaxed p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                A great way to get to know someone is to see how they spend their time.
                Here is how I would spend my day when I’m not designing... or sleeping in :)
              </div>
            </div>
          </div>

          <DayCalendar />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="px-6 md:px-16 pt-12 pb-24">
        <h2 className="mb-6 text-grayLight-900 dark:text-grayDark-900">
          Let’s <span className="text-accent">build</span> something together!
        </h2>

        <Postcard />
      </div>


    </Layout>
  );
}