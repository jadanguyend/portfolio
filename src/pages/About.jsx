import { useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

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

// Everyday items
import ItemMe from "../assets/ItemMe.png";
import ItemHandcream from "../assets/ItemHandcream.png";
import ItemFragrance from "../assets/ItemFragrance.png";
import ItemCandle from "../assets/ItemCandle.png";
import ItemHat from "../assets/ItemHat.png";
import ItemLaptop from "../assets/ItemLaptop.png";
import ItemRamen from "../assets/ItemRamen.png";
import ItemCar from "../assets/ItemCar.png";
import ItemCoffee from "../assets/ItemCoffee.png";
import ItemKeyboard from "../assets/ItemKeyboard.png";
import ItemPlant from "../assets/ItemPlant.png";
import ItemSmiski from "../assets/ItemSmiski.png";
import ItemBag from "../assets/ItemBag.png";
import ItemLunchbox from "../assets/ItemLunchbox.png";
import ItemPen from "../assets/ItemPen.png";

export default function About() {
  const constraintsRef = useRef(null);

  /* ================= IMAGE STACK ================= */
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

  const x = useMotionValue(0);

  const handleDragEnd = (_, info) => {
    const swipePower = Math.abs(info.offset.x) + Math.abs(info.velocity.x);
    if (swipePower > 500) {
      const direction = info.offset.x > 0 ? 1 : -1;
      x.set(direction * 600);

      setCards((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      x.set(0);
    }
  };

  const getCardStyle = (card) =>
    card.orientation === "horizontal"
      ? { width: 400, height: 300 }
      : { width: 300, height: 400 };

  const topCardStyle = getCardStyle(cards[0]);
  const backCardStyle = getCardStyle(cards[1]);
  const maxHeight = Math.max(topCardStyle.height, backCardStyle.height);

  const centerStyle = (cardStyle) => ({
    width: cardStyle.width,
    height: cardStyle.height,
    position: "absolute",
    inset: 0,
    margin: "auto",
  });

  /* ================= EVERYDAY OBJECTS ================= */
  const everydayItems = [
    { id: 1, src: ItemMe, desc: "Designing, tinkering, overthinking", x: "1%", y: "60%", rotation: -5 },
    { id: 2, src: ItemHandcream, desc: "Always nearby", x: "29%", y: "6%", rotation: -10 },
    { id: 3, src: ItemFragrance, desc: "Daily ritual", x: "54%", y: "18%", rotation: 4 },
    { id: 4, src: ItemCandle, desc: "Background focus energy", x: "83%", y: "7%", rotation: -5 },
    { id: 5, src: ItemHat, desc: "Yes, the blue one", x: "16%", y: "20%", rotation: -8 },
    { id: 6, src: ItemLaptop, desc: "Where everything happens", x: "34%", y: "44%", rotation: -8 },
    { id: 7, src: ItemRamen, desc: "Comfort food", x: "68%", y: "15%", rotation: 12 },
    { id: 8, src: ItemCar, desc: "Thinking space", x: "84%", y: "48%", rotation: 4 },
    { id: 9, src: ItemCoffee, desc: "Fuel", x: "2%", y: "10%", rotation: -5 },
    { id: 10, src: ItemKeyboard, desc: "Clicky on purpose", x: "30%", y: "72%", rotation: -3 },
    { id: 11, src: ItemPlant, desc: "Trying my best", x: "14%", y: "58%", rotation: 1 },
    { id: 12, src: ItemSmiski, desc: "Tiny joy", x: "68%", y: "54%", rotation: 2 },
    { id: 13, src: ItemBag, desc: "Carries everything", x: "42%", y: "6%", rotation: 3 },
    { id: 14, src: ItemLunchbox, desc: "Midday reset", x: "52%", y: "62%", rotation: -2 },
    { id: 15, src: ItemPen, desc: "Still sketch first", x: "82%", y: "76%", rotation: 2 },
  ];

  return (
    <Layout footer={<Footer />}>
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 h-[100svh]">
          <AsciiBackground />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <p className="font-body font-semibold leading-[1.2] text-[clamp(1.875rem,5vw,3rem)] tracking-[-0.05em] max-w-[42ch]">
              I design experiences like building Legos — methodical in structure,
              creative in execution, and thoughtfully connected to build something
              greater.
            </p>

            <motion.div
              className="mt-4 font-mono text-xs uppercase tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Consistent details matter. Mine’s a{" "}
              <span style={{ color: "#183ED8" }}>blue hat</span> :)
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[400px]" style={{ height: maxHeight }}>
              <motion.img
                src={cards[1].src}
                className="rounded-xl shadow-xl"
                style={{
                  zIndex: 1,
                  scale: 0.96,
                  rotate: rotationMap[cards[1].id],
                  ...centerStyle(backCardStyle),
                }}
              />

              <motion.img
                src={cards[0].src}
                className="rounded-xl shadow-xl cursor-grab"
                style={{
                  zIndex: 2,
                  x,
                  rotate: rotationMap[cards[0].id],
                  ...centerStyle(topCardStyle),
                }}
                drag="x"
                dragElastic={0.25}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TOOLS / OBJECTS ================= */}
      <section className="px-6 py-6 max-w-7xl mx-auto">
        <h2 className="mb-12">My Building Blocks —</h2>
                <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono uppercase mb-4">Design & UX</p>
            <ul>
              <li>Information Architecture</li>
              <li>Wireframing & User Flows</li>
              <li>Interaction Design</li>
              <li>Design Systems</li>
              <li>Accessibility</li>
              <li>Web & Responsive Design</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono uppercase mb-4">Research & Analytics</p>
            <ul>
              <li>A/B Testing</li>
              <li>User Behavior Analysis</li>
              <li>Usability Testing</li>
              <li>Data Visualization</li>
              <li>Research Synthesis</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono uppercase mb-4">Product & Growth</p>
            <ul>
              <li>Value Proposition</li>
              <li>Conversion & Funnel Design</li>
              <li>Marketing Flow</li>
              <li>Customer Journey Mapping</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono uppercase mb-4">Currently Exploring</p>
            <ul>
              <li>Frontend Development</li>
              <li>Animation & Motion Design</li>
              <li>3D Design</li>
              <li>0-to-1 Product Launch</li>
              <li>AI-native workflows</li>
            </ul>
          </div>
        </div>

        <div
          ref={constraintsRef}
          className="relative w-full h-[520px] border border-dashed rounded-xl overflow-visible mt-16"
        >
          {everydayItems.map((item) => (
            <motion.div
              key={item.id}
              className="absolute"
              drag
              dragConstraints={constraintsRef}
              dragElastic={0.2}
              dragMomentum={false}
              whileHover={{ scale: 1.08 }}
              style={{ left: item.x, top: item.y }}
            >
              <div className="group relative cursor-grab">
                <motion.img
                  src={item.src}
                  className="w-40 h-40 object-contain select-none pointer-events-none"
                  draggable={false}
                  style={{ rotate: item.rotation }}
                />

                <div
                  className="pointer-events-none absolute left-1/2 bottom-full mb-3
                             -translate-x-1/2 rounded-md bg-black text-white text-xs
                             px-3 py-1 opacity-0 group-hover:opacity-100 transition
                             whitespace-nowrap"
                >
                  {item.desc}

                <span
                  className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0
                            border-l-[6px] border-r-[6px] border-t-[6px]
                            border-l-transparent border-r-transparent border-t-black"
                />

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
