import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock, FiArrowRight } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

// Import images for the apps/podcasts
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
        { href: "https://base.uber.com/6d2425e9f/p/93825b-welcome-to-base", img: baseImg },
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
      <section className="container relative min-h-[80vh] py-8 flex flex-col justify-between">
        {/* Top meta */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="meta-pill">
            <FiMapPin />
            <span>Seattle, WA</span>
          </div>

          {lastCommit && (
            <div className="meta-pill">
              <FiClock />
              <span className="tracking-wide">
                Last Commit: {lastCommit}
              </span>
            </div>
          )}
        </div>

        {/* Bottom content */}
        <div className="flex flex-col w-full md:w-1/2 gap-4">
          <motion.h1
            className="font-heading font-medium italic text-text-primary dark:text-darkText text-4xl md:text-5xl lg:text-6xl mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Jada Nguyen
          </motion.h1>

          <motion.p
            className="font-body text-text-neutral-800 dark:text-darkMuted text-base md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Product designer{" "}
            <span className="text-accent" style={{ fontWeight: 500 }}>
              shaping consumer experiences
            </span>{" "}
            — aligning systems, visual craft, and thoughtful product decisions that scale. Bringing{" "}
            <span className="text-accent" style={{ fontWeight: 500 }}>
              delight
            </span>{" "}
            to consumer apps, enterprise systems, and complex workflows.
          </motion.p>

          <motion.p
            className="text-sm md:text-base text-text-neutral-600 flex flex-wrap items-center gap-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            She's probably — {phrases[index].text}
            {phrases[index].links.length > 0 && (
              <span className="flex gap-1 ml-1 flex-wrap">
                {phrases[index].links.map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                    <img src={link.img} alt="" className="w-6 h-6 object-contain" />
                  </a>
                ))}
              </span>
            )}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 md:gap-6 mt-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary dark:bg-darkText dark:text-background-0 dark:hover:bg-darkMuted"
            >
              Resume <FiArrowRight />
            </a>

            <a
              href="/readme"
              className="link dark:text-darkMuted dark:hover:text-background-0"
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
