import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

// Swipeable images
import MeBookstore from "../assets/MeBookstore.png";
import MeFunbunz from "../assets/MeFunbunz.png";
import MeBalloon from "../assets/MeBalloon.png";
import MeIUGA from "../assets/MeIUGA.png";
import MeFlower from "../assets/MeFlower.png";
import MeJellybeanies from "../assets/MeJellybeanies.png";
import MePortland from "../assets/MePortland.png";
import MeEscape from "../assets/MeEscape.png";
import MeMuseum from "../assets/MeMuseum.png";
import MeBirthday from "../assets/MeBirthday.png";
import MeCapybara from "../assets/MeCapybara.png";
import MeLitto from "../assets/MeLitto.png";
import MeMirror from "../assets/MeMirror.png";

// Phrase images
import ticktickImg from "../assets/ticktick.png";
import retroImg from "../assets/retro.png";
import arcImg from "../assets/arc.png";
import ondittoImg from "../assets/onditto.png";
import wiseImg from "../assets/wise.png";
import baseImg from "../assets/base.png";

export default function About() {
  // -----------------------
  // Rotating phrases
  // -----------------------
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

  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // -----------------------
  // Swipeable cards
  // -----------------------
  const initialCards = [
    { id: 1, src: MeBookstore, orientation: "vertical" },
    { id: 2, src: MeFunbunz, orientation: "horizontal" },
    { id: 3, src: MeBalloon, orientation: "vertical" },
    { id: 4, src: MeIUGA, orientation: "horizontal" },
    { id: 5, src: MeFlower, orientation: "vertical" },
    { id: 6, src: MeJellybeanies, orientation: "horizontal" },
    { id: 7, src: MePortland, orientation: "vertical" },
    { id: 8, src: MeEscape, orientation: "horizontal" },
    { id: 9, src: MeMuseum, orientation: "vertical" },
    { id: 10, src: MeBirthday, orientation: "horizontal" },
    { id: 11, src: MeCapybara, orientation: "vertical" },
    { id: 12, src: MeLitto, orientation: "horizontal" },
    { id: 13, src: MeMirror, orientation: "vertical" },
  ];

  const [cards, setCards] = useState(initialCards);

  // -----------------------
  // Precompute rotation ±5 or ±2, no consecutive repeats
  // -----------------------
  const [rotationMap] = useState(() => {
    const map = {};
    let last = null;
    initialCards.forEach((card) => {
      const options = [-5, -2, 2, 5].filter(r => r !== last);
      const rot = options[Math.floor(Math.random() * options.length)];
      map[card.id] = rot;
      last = rot;
    });
    return map;
  });

  // -----------------------
  // Motion values
  // -----------------------
  const x = useMotionValue(0);

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipePower = Math.abs(offset) + Math.abs(velocity);

    if (swipePower > 500) {
      const direction = offset > 0 ? 1 : -1;
      x.set(direction * 600);

      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      x.set(0);
    }
  };

  // -----------------------
  // Card sizes fixed
  // -----------------------
  const getCardStyle = (card) => {
    if (card.orientation === "horizontal") {
      return { width: 480, height: 360 };
    } else {
      return { width: 360, height: 480 };
    }
  };

  const topCardStyle = getCardStyle(cards[0]);
  const backCardStyle = getCardStyle(cards[1]);

  // -----------------------
  // Centering helper
  // -----------------------
  const maxWidth = Math.max(topCardStyle.width, backCardStyle.width);
  const maxHeight = Math.max(topCardStyle.height, backCardStyle.height);

  const centerStyle = (cardStyle) => ({
    width: cardStyle.width,
    height: cardStyle.height,
    position: "absolute",
    top: (maxHeight - cardStyle.height) / 2,
    left: (maxWidth - cardStyle.width) / 2,
  });

  return (
    <Layout footer={<Footer />}>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          layout
          className="relative overflow-visible z-20"
          style={{
            width: maxWidth,
            height: maxHeight,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {/* Back card */}
          <motion.img
            key={cards[1].id}
            layout={false}
            src={cards[1].src}
            alt=""
            className="rounded-xl shadow-xl"
            style={{
              zIndex: 1,
              scale: 0.96,
              y: 0,
              rotate: rotationMap[cards[1].id],
              objectFit: "cover", // <-- fill the card
              ...centerStyle(backCardStyle),
              pointerEvents: "none",
            }}
          />

          {/* Top card */}
          <motion.img
            key={cards[0].id}
            layout={false}
            src={cards[0].src}
            alt=""
            className="rounded-xl shadow-xl cursor-grab"
            style={{
              zIndex: 2,
              x,
              rotate: rotationMap[cards[0].id],
              objectFit: "cover", // <-- fill the card
              ...centerStyle(topCardStyle),
            }}
            drag="x"
            dragElastic={0.25}
            dragMomentum={false}
            transition={{ duration: 0.15 }}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          />
        </motion.div>
      </section>

      {/* ---------------- TEXT SECTION ---------------- */}
      <section className="relative min-h-screen pt-32 px-6 flex flex-col items-center text-center">
        <p className="font-body font-semibold leading-[1.2] text-[clamp(1.875rem,5vw,3rem)] tracking-[-0.05em] max-w-[42ch]">
          I design experiences like building Legos — methodical in structure,
          creative in execution, and thoughtfully connected to build something
          greater.
        </p>

        {/* Rotating phrase */}
        <div className="mt-6 flex items-center justify-center gap-1 text-base md:text-md text-neutral-600 whitespace-nowrap font-mono tracking-tighter">
          <span className="mr-1 flex-shrink-0">She's probably —</span>
          <AnimatePresence mode="wait">
            <motion.div
              key={phraseIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-1 whitespace-nowrap"
            >
              {phrases[phraseIndex].text}
              {phrases[phraseIndex].links.length > 0 && (
                <span className="flex items-center gap-1 ml-1">
                  {phrases[phraseIndex].links.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
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
      </section>
    </Layout>
  );
}
