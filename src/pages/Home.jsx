import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

// import images for the apps/podcasts
import nineninepodcastImg from "../assets/nineninepodcast.png";
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

  // ===== Rotating text with optional links =====
  const phrases = [
    {
      text: "building a LEGO set",links: [],
    },
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
    { text: "exploring design systems", 
      links: [
        { href: "https://wise.design/", img: wiseImg },
        { href: "https://base.uber.com/6d2425e9f/p/93825b-welcome-to-base", img: baseImg },
      ] },
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
      <section className="relative min-h-[80vh] px-6 md:px-24 py-4 flex flex-col justify-between">
        {/* Top meta */}
        <div className="flex gap-3">
          <div className="meta-pill bg-white text-gray-500 border-gray-200
                          dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700">
            <FiMapPin />
            <span>Seattle, WA</span>
          </div>

          {lastCommit && (
            <div className="meta-pill bg-white text-gray-500 border-gray-200
                            dark:bg-neutral-900 dark:text-gray-300 dark:border-neutral-700">
              <FiClock />
              <span className="uppercase tracking-wide">
                Last Commit · {lastCommit}
              </span>
            </div>
          )}
        </div>

        {/* Bottom content */}
        <div className="flex flex-col max-w-[50%] min-w-[300px] gap-4">
          <motion.h1
            className="font-heading text-black dark:text-white text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jada Nguyen
          </motion.h1>

          {/* First paragraph */}
          <motion.p
            className="font-satoshi text-gray-800 dark:text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Product designer <span className="text-[#183ED8]" style={{ fontWeight: 500 }}>shaping consumer experiences</span> — aligning systems, visual craft, and thoughtful product decisions that scales.
          </motion.p>

          {/* Second line */}
          <motion.p
            className="font-satoshi text-gray-800 dark:text-gray-300 text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bringing <span className="text-[#183ED8]" style={{ fontWeight: 500 }}>delight</span> to consumer apps, enterprise systems, and complex workflows.
          </motion.p>

          {/* Rotating third line */}
          <motion.p
            className="text-sm md:text-base text-gray-500 flex items-center gap-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            She's probably —{" "}

              {phrases[index].text}

            {/* Render links if available */}
            {phrases[index].links.length > 0 && (
              <span className="flex gap-1 ml-1">
                {phrases[index].links.map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                    <img src={link.img} alt="" className="w-6 h-6 object-contain" />
                  </a>
                ))}
              </span>
            )}
          </motion.p>

          <motion.div
            className="flex items-center gap-6 mt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Resume <FiArrowRight />
            </a>

            <a
              href="/readme"
              className="link dark:text-gray-300 dark:hover:text-white"
            >
              Read.me <FiArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      <ProjectsSection />
    </Layout>
  );
}
