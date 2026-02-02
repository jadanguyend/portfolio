import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";

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

export default function About() {
  // -----------------------
  // Swipeable cards
  // -----------------------
  const initialCards = [
    { id: 1, src: MeBookstore, orientation: "vertical" },
    { id: 2, src: MeBirthday, orientation: "horizontal" },
    { id: 3, src: MeBalloon, orientation: "vertical" },
    { id: 4, src: MeIUGA, orientation: "horizontal" },
    { id: 5, src: MeFlower, orientation: "vertical" },
    { id: 6, src: MeJellybeanies, orientation: "horizontal" },
    { id: 7, src: MePortland, orientation: "vertical" },
    { id: 8, src: MeEscape, orientation: "horizontal" },
    { id: 9, src: MeMuseum, orientation: "vertical" },
    { id: 10, src: MeFunbunz, orientation: "horizontal" },
    { id: 11, src: MeCapybara, orientation: "vertical" },
    { id: 12, src: MeLitto, orientation: "horizontal" },
    { id: 13, src: MeMirror, orientation: "vertical" },
  ];

  const [cards, setCards] = useState(initialCards);

  // -----------------------
  // Precompute rotation ±5 or ±2
  // -----------------------
  const [rotationMap] = useState(() => {
    const map = {};
    let last = null;
    initialCards.forEach((card) => {
      const options = [-5, -2, 2, 5].filter((r) => r !== last);
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
  // Card sizes
  // -----------------------
  const getCardStyle = (card) =>
    card.orientation === "horizontal"
      ? { width: 400, height: 300 }
      : { width: 300, height: 400 };

  const topCardStyle = getCardStyle(cards[0]);
  const backCardStyle = getCardStyle(cards[1]);

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
    <section className="relative min-h-[100svh] pt-32 pb-24 px-6 flex flex-col items-center text-center">

      {/* Text */}
      <p className="font-body font-semibold leading-[1.2] text-[clamp(1.875rem,5vw,3rem)] tracking-[-0.05em] max-w-[42ch]">
        I design experiences like building Legos — methodical in structure,
        creative in execution, and thoughtfully connected to build something
        greater.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-6 text-base md:text-md text-grayLight-800 dark:text-grayDark-800 whitespace-nowrap font-mono text-xs uppercase tracking-tight"
      >
        Consistent details matter. Mine’s a{" "}
        <span style={{ color: "#183ED8" }}>blue hat</span>
        <span className="ml-1">:)</span>
      </motion.div>

      {/* ---------------- IMAGE STACK ---------------- */}
      <motion.div
        layout
        className="relative overflow-visible z-20 mt-20"
        style={{ width: maxWidth, height: maxHeight }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* Back card */}
        <motion.img
          key={cards[1].id}
          src={cards[1].src}
          alt=""
          className="rounded-xl shadow-xl"
          style={{
            zIndex: 1,
            scale: 0.96,
            rotate: rotationMap[cards[1].id],
            objectFit: "cover",
            pointerEvents: "none",
            ...centerStyle(backCardStyle),
          }}
        />

        {/* Top card */}
        <motion.img
          key={cards[0].id}
          src={cards[0].src}
          alt=""
          className="rounded-xl shadow-xl cursor-grab"
          style={{
            zIndex: 2,
            x,
            rotate: rotationMap[cards[0].id],
            objectFit: "cover",
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
  </Layout>
);

}
