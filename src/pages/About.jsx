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

// Everyday items
import PixelComputer from "../assets/pixelComputer.png";
import PixelMusic from "../assets/pixelMusic.png";
import PixelMix from "../assets/pixelMix.png";
import PixelBook from "../assets/pixelBook.png";

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

  const [activeCard, setActiveCard] = useState(0);

  // Inside your About component (or above return)
  const buildCards = [
    {
      label: "Intentional",
      shortDesc: "Choose pieces with purpose.",
      longDesc: "I carefully select each element to ensure everything fits together logically and beautifully."
    },
    {
      label: "Tenacious",
      shortDesc: "Explore and iterate until everything clicks.",
      longDesc: "I keep experimenting, refining, and iterating until the design is seamless and complete."
    },
    {
      label: "Reliable",
      shortDesc: "The structure stands the test of use.",
      longDesc: "Every system I build is robust, scalable, and designed to withstand real-world use."
    },
    {
      label: "Delightful",
      shortDesc: "The finished build sparks joy.",
      longDesc: "I aim to surprise and delight users with thoughtful touches and intuitive design."
    },
  ];


  // Map each card label to its image
  const iconMap = {
    Reliable: PixelComputer,
    Delightful: PixelMusic,
    Tenacious: PixelMix,
    Intentional: PixelBook,
  };



  /* ================= EVERYDAY OBJECTS ================= */
  const everydayItems = [
    { id: 1, src: ItemMe, desc: "ISTJ, through and through", x: "1%", y: "60%", rotation: -5 },
    { id: 2, src: ItemHandcream, desc: "Always nearby, always handy ;)", x: "29%", y: "6%", rotation: -10 },
    { id: 3, src: ItemFragrance, desc: "Favorite layering scent", x: "54%", y: "18%", rotation: 4 },
    { id: 4, src: ItemCandle, desc: "Always in the background", x: "83%", y: "7%", rotation: -5 },
    { id: 5, src: ItemHat, desc: "Yes, that blue hat", x: "16%", y: "20%", rotation: -8 },
    { id: 6, src: ItemLaptop, desc: "Heavy, but everything happens here", x: "34%", y: "44%", rotation: -8 },
    { id: 7, src: ItemRamen, desc: "Comfort food for rainy days", x: "68%", y: "15%", rotation: 12 },
    { id: 8, src: ItemCar, desc: "Porsche 911, favorite LEGO build", x: "84%", y: "52%", rotation: 4 },
    { id: 9, src: ItemCoffee, desc: "Vietnamese coffee, every morning", x: "2%", y: "10%", rotation: -5 },
    { id: 10, src: ItemKeyboard, desc: "Creamy and clean", x: "30%", y: "78%", rotation: -3 },
    { id: 11, src: ItemPlant, desc: "Trying my best", x: "14%", y: "58%", rotation: 1 },
    { id: 12, src: ItemSmiski, desc: "Tiny joy around my space", x: "68%", y: "54%", rotation: 2 },
    { id: 13, src: ItemBag, desc: "Finally found the right bag", x: "42%", y: "6%", rotation: 3 },
    { id: 14, src: ItemLunchbox, desc: "Keeps me fed", x: "52%", y: "62%", rotation: -2 },
    { id: 15, src: ItemPen, desc: "Fountain pen > everything else", x: "82%", y: "84%", rotation: 2 },
  ];
  

  return (
    <Layout footer={<Footer />}>
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 h-[100svh]">
          <AsciiBackground />
        </div>

        <div className="relative z-10 grid grid-cols-12 gap-12 items-center">
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
      <section className="py-6 mt-16">
        {/* Constrained content container */}
        <h2 className="mb-12">My Building Blocks —</h2>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-grayLight-500 dark:text-grayDark-500 text-sm uppercase mb-4">
              Design & UX
            </p>
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
            <p className="font-mono text-grayLight-500 dark:text-grayDark-500 uppercase text-sm mb-4">
              Research & Analytics
            </p>
            <ul>
              <li>A/B Testing</li>
              <li>User Behavior Analysis</li>
              <li>Usability Testing</li>
              <li>Data Visualization</li>
              <li>Research Synthesis</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-grayLight-500 dark:text-grayDark-500 uppercase text-sm mb-4">
              Product & Growth
            </p>
            <ul>
              <li>Value Proposition</li>
              <li>Conversion & Funnel Design</li>
              <li>Marketing Flow</li>
              <li>Customer Journey Mapping</li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-grayLight-500 dark:text-grayDark-500 uppercase text-sm mb-4">
              Currently Exploring
            </p>
            <ul>
              <li>Frontend Development</li>
              <li>Animation & Motion Design</li>
              <li>3D Design</li>
              <li>0-to-1 Product Launch</li>
              <li>AI-native workflows</li>
            </ul>
          </div>
        </div>

        {/* Draggable objects area */}
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
                  className="w-40 max-h-40 object-contain select-none pointer-events-none"
                  draggable={false}
                  style={{ rotate: item.rotation }}
                />

                <div
                  className="pointer-events-none absolute left-1/2 bottom-full mb-3
                            -translate-x-1/2 rounded-md bg-black text-white text-xs
                            px-3 py-1 opacity-0 group-hover:opacity-100 transition
                            whitespace-nowrap font-mono leading-tighter"
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



      {/* ================= HOW I BUILD ================= */}
      <section className="py-12 mt-16">
        {/* Constrained content container */}
        <div className="grid grid-cols-12 gap-12 items-start">
          
          {/* Left side: H2 */}
          <div className="col-span-12 md:col-span-6">
            <h2 className="mb-6">
              How I Build —
            </h2>
          </div>

          {/* Right side: stacked cards */}
          <div className="col-span-12 md:col-span-6 flex flex-col gap-4 h-full relative">
            {buildCards.map((item, index) => {
              const iconSrc = iconMap[item.label];
              const isActive = activeCard === index;

              return (
                <div
                  key={index}
                  className={`relative border-grayLight-300 dark:border-grayDark-300 
                              bg-grayLight-100 dark:bg-grayDark-50 
                              text-grayLight-800 dark:text-grayDark-800
                              rounded-md overflow-hidden transition-all duration-300 cursor-pointer`}
                  style={{
                    height: isActive
                      ? "clamp(140px, 20vw, 250px)" // expanded height
                      : "clamp(70px, 9vw, 90px)",   // collapsed height
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Label + short description (always visible) */}
                  <div className="px-4 pt-4 font-mono text-xs uppercase text-grayLight-400 dark:text-grayDark-400">
                    {item.label}
                  </div>

                  <div className="px-4 text-base md:text-lg font-semibold text-grayLight-800 dark:text-grayDark-800">
                    {item.shortDesc}
                  </div>

                  {/* Long description + icon (only on hover) */}
                  {isActive && (
                    <>
                      <div className="px-4 pb-2 mt-2 text-sm md:text-base font-medium text-grayLight-800 dark:text-grayDark-800">
                        {item.longDesc}
                      </div>

                      <img
                        src={iconSrc}
                        alt={item.label}
                        className="absolute bottom-2 right-2 object-contain pointer-events-none select-none"
                        style={{
                          width: "clamp(60px, 12vw, 120px)",
                          height: "clamp(60px, 12vw, 120px)",
                        }}
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-12 mt-16">
        <motion.div
          className="project-card-cta group transition-colors duration-300"
          whileHover={{ scale: 1 }}
        >
          <div className="flex flex-col items-center justify-center gap-4 h-72 md:h-96 text-center w-full">
            <p className="text-lg md:text-xl transition-colors duration-300">
              Let’s create something great together!
            </p>
            <a
              href="/contact"
              className="btn-primary font-ibm transition-all duration-300 hover:scale-105"
            >
              Connect
            </a>
          </div>
        </motion.div>
      </section>

    </Layout>
  );
}
