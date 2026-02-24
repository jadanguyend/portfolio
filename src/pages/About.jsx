import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

/* ================= Swipeable Images ================= */

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

/* ================= Everyday Items ================= */

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

/* ================= Pixel Icons ================= */

import PixelComputer from "../assets/pixelComputer.png";
import PixelMusic from "../assets/pixelMusic.png";
import PixelMix from "../assets/pixelMix.png";
import PixelBook from "../assets/pixelBook.png";

/* ===================================================== */
/* ================= SELECTABLE ITEM ================= */
/* ===================================================== */

function SelectableItem({
  item,
  selectedId,
  setSelectedId,
  setActiveItem,
  constraintsRef
}) {
  const isSelected = selectedId === item.id;

  const resizeRef = useRef(null);
  const rotateRef = useRef(null);
  const elementRef = useRef(null);

  const [rotation, setRotation] = useState(item.r);
  const BASE_HEIGHT = 120;

  const [aspectRatio, setAspectRatio] = useState(1);
  const [width, setWidth] = useState(BASE_HEIGHT);
  const height = width / aspectRatio;

  function handleImageLoad(e) {
    const img = e.target;
    const ratio = img.naturalWidth / img.naturalHeight;
    setAspectRatio(ratio);
    setWidth(BASE_HEIGHT * ratio);
  }

  function startResize(e, direction) {
    e.stopPropagation();
    resizeRef.current = { startX: e.clientX, startWidth: width, direction };
    window.addEventListener("pointermove", onResize);
    window.addEventListener("pointerup", stopResize);
  }

  function onResize(e) {
    const s = resizeRef.current;
    if (!s) return;
    const dx = e.clientX - s.startX;
    let newWidth = s.startWidth;
    if (s.direction.includes("right")) newWidth += dx;
    if (s.direction.includes("left")) newWidth -= dx;
    newWidth = Math.max(40, newWidth);
    setWidth(newWidth);
  }

  function stopResize() {
    resizeRef.current = null;
    window.removeEventListener("pointermove", onResize);
    window.removeEventListener("pointerup", stopResize);
  }

  function startRotate(e) {
    e.stopPropagation();
    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    rotateRef.current = {
      centerX,
      centerY,
      startAngle,
      startRotation: rotation,
    };

    window.addEventListener("pointermove", onRotate);
    window.addEventListener("pointerup", stopRotate);
  }

  function onRotate(e) {
    const s = rotateRef.current;
    if (!s) return;

    const currentAngle = Math.atan2(e.clientY - s.centerY, e.clientX - s.centerX);
    const delta = currentAngle - s.startAngle;
    const newRotation = s.startRotation + (delta * 180) / Math.PI;

    setRotation(newRotation);
  }

  function stopRotate() {
    rotateRef.current = null;
    window.removeEventListener("pointermove", onRotate);
    window.removeEventListener("pointerup", stopRotate);
  }

  const handleBase = "absolute w-2 h-2 bg-white cursor-pointer";

  return (
    <motion.div
      ref={elementRef}
      data-item
      className="absolute"
      drag={!rotateRef.current && !resizeRef.current}
      dragConstraints={constraintsRef}
      dragMomentum={false}
      style={{
        width,
        height,
        left: item.x,
        top: item.y,
        rotate: rotation,
        transformOrigin: "center center",
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        setSelectedId(item.id);
        setActiveItem(item);
      }}
    >
      <img
        src={item.src}
        onLoad={handleImageLoad}
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {isSelected && (
        <>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ border: "2px solid var(--accent-color)" }}
          />

          <div onPointerDown={(e) => startResize(e, "top-left")} className={`${handleBase} -top-1 -left-1`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "top-right")} className={`${handleBase} -top-1 -right-1`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "bottom-left")} className={`${handleBase} -bottom-1 -left-1`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "bottom-right")} className={`${handleBase} -bottom-1 -right-1`} style={{ border: "1px solid var(--accent-color)" }} />

          <div onPointerDown={(e) => startResize(e, "left")} className={`${handleBase} left-0 top-1/2 -translate-y-1/2 -translate-x-1/2`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "right")} className={`${handleBase} right-0 top-1/2 -translate-y-1/2 translate-x-1/2`} style={{ border: "1px solid var(--accent-color)" }} />

          <div
            onPointerDown={startRotate}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white flex items-center justify-center cursor-grab"
            style={{
              border: "1px solid var(--accent-color)",
              color: "var(--accent-color)",
            }}
          >
            ↻
          </div>

          <div
            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-mono px-2 py-1 rounded whitespace-nowrap"
            style={{
              background: "var(--accent-color)",
              color: "#fff",
            }}
          >
            {Math.round(width)} × {Math.round(height)}
          </div>
        </>
      )}
    </motion.div>
  );
}

function ItemPopup({ item, onClose }) {
  if (!item) return null;

  return createPortal(
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between bg-grayLight-900 dark:bg-grayDark-900 text-grayLight-50 dark:text-grayDark-50 px-6 py-4 rounded-[16px] shadow-lg"
      style={{ minWidth: "360px", maxWidth: "360px", zIndex: 9999 }}
    >
      <div className="truncate text-left">
        <div className="font-semibold">{item.name}</div>
        <div className="text-xs text-grayLight-400 dark:text-grayDark-400">
          {item.description}
        </div>
      </div>

      <button
        onClick={onClose}
        className="ml-4 w-8 h-8 flex items-center justify-center rounded-[6px] bg-grayLight-700 dark:bg-grayDark-700 hover:bg-grayLight-600 hover:dark:bg-grayDark-900"
      >
        <FiX className="w-4 h-4" />
      </button>
    </div>,
    document.body
  );
}

/* ===================================================== */
/* ======================= ABOUT ======================== */
/* ===================================================== */

export default function About() {
  const constraintsRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
  function handleClickOutside(e) {
    if (!e.target.closest("[data-item]")) {
      setSelectedId(null);
      setActiveItem(null);
    }
  }
    document.addEventListener("pointerdown", handleClickOutside);
    return () =>
      document.removeEventListener("pointerdown", handleClickOutside);
  }, []);

  /* ================= Hero Image Stack ================= */

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

  /* ================= Everyday Items ================= */

  const everydayItems = [
    { id: 1, src: ItemMe, x: "1%", y: "60%", r: -5, name: "Jada Nguyen",description: "The builder behind the scenes" },
    { id: 2, src: ItemHandcream, x: "29%", y: "6%", r: -10, name: "L'Occitane Shea Butter Hand Cream",description: "Always near by. Always handy ;)" },
    { id: 3, src: ItemFragrance, x: "54%", y: "18%", r: 4, name: "Le Labo Another 13",description: "Favorite layoring scent" },
    { id: 4, src: ItemCandle, x: "83%", y: "7%", r: -5, name: "Me",description: "The builder behind the scenes." },
    { id: 5, src: ItemHat, x: "16%", y: "20%", r: 82, name: "Blue Hat",description: "Yes, that blue hat" },
    { id: 6, src: ItemLaptop, x: "34%", y: "44%", r: 82, name: "MacBook Pro M4",description: "Heavy, but everything happens here" },
    { id: 7, src: ItemRamen, x: "68%", y: "15%", r: 112, name: "Shio Ramen",description: "Comfort food for rainy days" },
    { id: 8, src: ItemCar, x: "84%", y: "52%", r: 4, name: "LEGO Porsche 911",description: "Favorite LEGO build" },
    { id: 9, src: ItemCoffee, x: "2%", y: "10%", r: -5, name: "Vietnamese Coffee",description: "Every morning" },
    { id: 10, src: ItemKeyboard, x: "30%", y: "78%", r: 87, name: "Lofree Flow84",description: "Creamy and clean" },
    { id: 11, src: ItemPlant, x: "14%", y: "58%", r: 1, name: "Me",description: "The builder behind the scenes." },
    { id: 12, src: ItemSmiski, x: "68%", y: "54%", r: 2, name: "SMISKI Skatboarding",description: "Tiny joy around my space" },
    { id: 13, src: ItemBag, x: "42%", y: "6%", r: 3, name: "Sage Bag",description: "The builder behind the scenes." },
    { id: 14, src: ItemLunchbox, x: "52%", y: "62%", r: -2, name: "Bellroy Cooler Caddy",description: "Keeps me fed" },
    { id: 15, src: ItemPen, x: "82%", y: "80%", r: 92, name: "LAMY Safari Fountain Pen",description: "The builder behind the scenes." },
  ];

  /* ================= Build Cards ================= */

  const buildCards = [
    {
      label: "Intentional",
      shortDesc: "Choose pieces with purpose.",
      longDesc:
        "I carefully select each element to ensure everything fits together logically and beautifully.",
    },
    {
      label: "Tenacious",
      shortDesc: "Explore and iterate until everything clicks.",
      longDesc:
        "I keep experimenting, refining, and iterating until the design is seamless and complete.",
    },
    {
      label: "Reliable",
      shortDesc: "The structure stands the test of use.",
      longDesc:
        "Every system I build is robust, scalable, and designed to withstand real-world use.",
    },
    {
      label: "Delightful",
      shortDesc: "The finished build sparks joy.",
      longDesc:
        "I aim to surprise and delight users with thoughtful touches and intuitive design.",
    },
  ];

  const iconMap = {
    Reliable: PixelComputer,
    Delightful: PixelMusic,
    Tenacious: PixelMix,
    Intentional: PixelBook,
  };

  const [activeCard, setActiveCard] = useState(null);

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

      {/* ================= BUILDING BLOCKS ================= */}
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

        {/* Everyday Objects */}
        <div
          ref={constraintsRef}
          className="relative w-full h-[520px] border border-dashed rounded-xl overflow-hidden mt-16"
          onPointerDown={() => setSelectedId(null)}
        >
          {everydayItems.map((item) => (
          <SelectableItem
            key={item.id}
            item={item}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setActiveItem={setActiveItem}
            constraintsRef={constraintsRef}
          />
          ))}
        </div>
      </section>

      {/* ================= HOW I BUILD ================= */}
      <section className="py-12 mt-16">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-6">
            <h2 className="mb-6">How I Build —</h2>
          </div>

          <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
            {buildCards.map((item, index) => {
              const isActive = activeCard === index;
              const iconSrc = iconMap[item.label];

              return (
                <div
                  key={index}
                  className="relative rounded-md overflow-hidden cursor-pointer transition-all duration-300 bg-grayLight-100 dark:bg-grayDark-50"
                  style={{
                    height: isActive ? "220px" : "80px",
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="px-4 pt-4 font-mono text-xs uppercase">
                    {item.label}
                  </div>

                  <div className="px-4 text-lg font-semibold">
                    {item.shortDesc}
                  </div>

                  {isActive && (
                    <>
                      <div className="px-4 mt-2 text-sm">
                        {item.longDesc}
                      </div>

                      <img
                        src={iconSrc}
                        alt={item.label}
                        className="absolute bottom-2 right-2 w-20 h-20 object-contain pointer-events-none"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ItemPopup
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />
    </Layout>
  );
}