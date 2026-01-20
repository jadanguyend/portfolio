import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

// Images for rotating phrase links
import ticktickImg from "../assets/ticktick.png";
import retroImg from "../assets/retro.png";
import arcImg from "../assets/arc.png";
import ondittoImg from "../assets/onditto.png";
import wiseImg from "../assets/wise.png";
import baseImg from "../assets/base.png";

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const phrases = [
    { text: "building a LEGO set", links: [] },
    {
      text: "using her favorite apps and softwares",
      links: [
        { href: "https://ticktick.com/?language=en_us", img: ticktickImg },
        { href: "https://retro.app/", img: retroImg },
        { href: "https://arc.net/", img: arcImg },
        { href: "https://www.onditto.com/list", img: ondittoImg },
      ],
    },
    { text: "reading behavioral psychology books", links: [] },
    {
      text: "exploring design systems",
      links: [
        { href: "https://wise.design/", img: wiseImg },
        {
          href: "https://base.uber.com/6d2425e9f/p/93825b-welcome-to-base",
          img: baseImg,
        },
      ],
    },
    { text: "geeking out over F1 car liveries", links: [] },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout footer={<Footer />}>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        {/* ASCII background */}
        <AsciiBackground />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen px-6 pt-24 pb-12">
          {/* Top meta */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="meta-pill">
              <FiMapPin />
              <span>Seattle, WA</span>
            </div>
            {lastCommit && (
              <div className="meta-pill">
                <FiClock />
                <span>Last Commit: {lastCommit}</span>
              </div>
            )}
          </div>

          {/* Bottom content */}
          <div className="flex flex-col w-full md:w-1/2 gap-4">
            <motion.h1
              className="font-heading font-semi-bold text-text-primary dark:text-darkText text-4xl md:text-5xl lg:text-6xl mb-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              [JADANGUYEND]
            </motion.h1>

            <motion.p
              className="text-grayLight-800 dark:text-grayDark-600 text-base md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Product designer{" "}
              <span className="text-accent font-medium">
                shaping consumer experiences
              </span>{" "}
              — aligning systems, visual craft, and thoughtful product decisions
              that scale. Bringing{" "}
              <span className="text-accent font-medium">delight</span> to consumer
              apps, enterprise systems, and complex workflows.
            </motion.p>

            {/* Rotating phrase */}
            <div className="overflow-hidden flex flex-wrap items-center gap-1">
              <span className="mr-1 flex-shrink-0">She's probably —</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-wrap items-center gap-1"
                >
                  {phrases[index].text}
                  {phrases[index].links.length > 0 && (
                    <span className="flex gap-1 flex-wrap ml-1">
                      {phrases[index].links.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.img}
                            alt=""
                            className="w-5 md:w-6 h-5 md:h-6 object-contain"
                          />
                        </a>
                      ))}
                    </span>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Buttons */}
            <motion.div className="flex gap-4 mt-4">
              <a href="/resume.pdf" className="btn-primary">
                Resume <FiArrowRight />
              </a>
              <a href="/readme" className="link">
                Read.me <FiArrowRight />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectsSection />
    </Layout>
  );
}
