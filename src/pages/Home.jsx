import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";
import { FiX } from "react-icons/fi";

import miniDetective from "../assets/miniDetective.png";
import miniBeekeeper from "../assets/miniBeekeeper.png";
import miniHotdog from "../assets/miniHotdog.png";
import miniKendo from "../assets/miniKendo.png";
import miniMe from "../assets/miniMe.png";
import miniRacer from "../assets/miniRacer.png";
import miniSprinter from "../assets/miniSprinter.png";
import miniHiker from "../assets/miniHiker.png";
import miniAstronaut from "../assets/miniAstronaut.png";

/* ---------- Typing phrases ---------- */

const PHRASES = [
  "building a LEGO set",
  "using her favorite apps and softwares",
  "reading behavioral psychology books",
  "exploring design systems",
  "geeking out over F1 car liveries",
];

const TYPING_SPEED = 65;
const PAUSE_AFTER_TYPING = 900;
const PAUSE_AFTER_DELETING = 400;

/* ---------- Selectable Minifig ---------- */

function SelectableMinifig({
  item,
  selectedId,
  setSelectedId,
  constraintsRef,
}) {
  const isSelected = selectedId === item.id;

  const resizeRef = useRef(null);
  const rotateRef = useRef(null);
  const elementRef = useRef(null);



  const [rotation, setRotation] = useState(item.r);

  /* ---------- Start with same HEIGHT for all ---------- */

  const BASE_HEIGHT = 120;

  const [aspectRatio, setAspectRatio] = useState(1);
  const [width, setWidth] = useState(BASE_HEIGHT);
  const height = width / aspectRatio;

  /* ---------- Load image ratio ---------- */

  function handleImageLoad(e) {
    const img = e.target;
    const ratio = img.naturalWidth / img.naturalHeight;
    setAspectRatio(ratio);
    setWidth(BASE_HEIGHT * ratio);
  }

  /* ---------- Resize ---------- */

  function startResize(e, direction) {
    e.stopPropagation();

    resizeRef.current = {
      startX: e.clientX,
      startWidth: width,
      direction,
    };

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

  /* ---------- Rotation ---------- */

function startRotate(e) {
  e.stopPropagation();

  const rect = elementRef.current.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const startAngle = Math.atan2(
    e.clientY - centerY,
    e.clientX - centerX
  );

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

  const currentAngle = Math.atan2(
    e.clientY - s.centerY,
    e.clientX - s.centerX
  );

  const delta = currentAngle - s.startAngle;

  const newRotation =
    s.startRotation + (delta * 180) / Math.PI;

  setRotation(newRotation);
}

  function stopRotate() {
    rotateRef.current = null;
    window.removeEventListener("pointermove", onRotate);
    window.removeEventListener("pointerup", stopRotate);
  }

  const handleBase =
    "absolute w-2 h-2 bg-white cursor-pointer";

  return (
    <motion.div
      ref={elementRef}
      data-minifig
      className="absolute"
      drag={!rotateRef.current && !resizeRef.current} // disable drag while rotating
      dragConstraints={constraintsRef}
      dragMomentum={false}
      style={{
        width,
        height,
        left: item.x,  // <-- initial horizontal position
        top: item.y,  
        rotate: rotation,
        transformOrigin: "center center", // ensures rotation is around its own center
      }}

      onPointerDown={(e) => {
        e.stopPropagation();
        setSelectedId(item.id);
      }}
    >
      <img
        src={item.src}
        onLoad={handleImageLoad}
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {isSelected && (
        <>
          {/* Bounding Box */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              border: "2px solid var(--accent-color)",
            }}
          />

          {/* Resize Handles */}
          <div onPointerDown={(e) => startResize(e, "top-left")} className={`${handleBase} -top-1 -left-1`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "top-right")} className={`${handleBase} -top-1 -right-1`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "bottom-left")} className={`${handleBase} -bottom-1 -left-1`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "bottom-right")} className={`${handleBase} -bottom-1 -right-1`} style={{ border: "1px solid var(--accent-color)" }} />

          <div onPointerDown={(e) => startResize(e, "left")} className={`${handleBase} left-0 top-1/2 -translate-y-1/2 -translate-x-1/2`} style={{ border: "1px solid var(--accent-color)" }} />
          <div onPointerDown={(e) => startResize(e, "right")} className={`${handleBase} right-0 top-1/2 -translate-y-1/2 translate-x-1/2`} style={{ border: "1px solid var(--accent-color)" }} />

          {/* Rotation Handle */}
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

          {/* Dimension Label */}
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

function MinifigPopup({ minifig, onClose }) {
  if (!minifig) return null;

  return createPortal(
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-between bg-grayLight-900 dark:bg-grayDark-900 text-grayLight-50 dark:text-grayDark-50 px-6 py-4 rounded-[16px] shadow-lg"
      style={{ minWidth: "360px", maxWidth: "360px", zIndex: 9999 }}
    >
      <div className="truncate text-left">
        <div className="font-semibold">{minifig.name}</div>
        <div className="text-xs text-grayLight-400 dark:text-grayDark-400">{minifig.series}</div>
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

/* ---------- Home ---------- */

export default function Home() {
  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  const heroConstraintsRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  const heroMinis = [
    { id: 1, src: miniDetective, x: "35%", y: "73%", r: 5, name: "Film Noir Detective", series: "Minifigures | Series 25" },
    { id: 2, src: miniBeekeeper, x: "67%", y: "82%", r: -5, name: "Beekeeper", series: "Minifigures | Series 21" },
    { id: 3, src: miniHotdog, x: "21%", y: "15%", r: -5, name: "Hot Dog Man", series: "Minifigures | Series 13" },
    { id: 4, src: miniKendo, x: "92%", y: "71%", r: 6, name: "Kendo Fighter", series: "Minifigures | Series 15" },
    { id: 5, src: miniMe, x: "42%", y: "34%", r: 6, name: "Jada Nguyen", series: "Custom | Made with DALL·E 3" },
    { id: 6, src: miniRacer, x: "10%", y: "79%", r: -4, name: "Lewis Hamilton", series: "Speed Champions | Mercedes-AMG W12" },
    { id: 7, src: miniSprinter, x: "85%", y: "42%", r: 0, name: "Sprinter", series: "Minifigures | Series 25" },
    { id: 8, src: miniHiker, x: "2%", y: "45%", r: 2, name: "Hiker", series: "Minifigures | Series 16" },
    { id: 9, src: miniAstronaut, x: "67%", y: "13%", r: -1, name: "Mae Jamison", series: "Women of NASA" },
  ];

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

  useEffect(() => {
  function handleClickOutside(e) {
    // If the click is NOT on a minifig element, deselect
    // We can check if any ancestor has a data attribute like data-minifig
    if (!e.target.closest("[data-minifig]")) {
      setSelectedId(null);
    }
  }

  document.addEventListener("pointerdown", handleClickOutside);
  return () => {
    document.removeEventListener("pointerdown", handleClickOutside);
  };
}, []);

  return (
    <Layout footer={<Footer />}>
      <section
        className="relative min-h-screen overflow-hidden"
        onPointerDown={() => setSelectedId(null)}
      >
        <AsciiBackground />
        <div ref={heroConstraintsRef} className="absolute inset-0 z-[15]" />

        <div className="absolute inset-0 z-[20]">
          {heroMinis.map((item) => (
            <SelectableMinifig
              key={item.id}
              item={item}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              constraintsRef={heroConstraintsRef}
            />
          ))}
        </div>



        <div className="relative z-10 grid grid-cols-12 min-h-screen px-6 py-24 items-center">
          <div className="col-span-12 flex flex-col items-center text-center">
            <motion.h1
              className="font-heading font-semibold uppercase leading-none text-grayLight-900 dark:text-grayDark-900"
              style={{
                fontSize: "clamp(6vw, 12vw, 15rem)",
                letterSpacing: "-0.05em",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              [JADANGUYEND]
            </motion.h1>

            <div className="mt-16 grid grid-cols-12 gap-4 w-full">
              <div className="col-span-12 flex justify-center gap-3">
                <div className="meta-pill flex items-center gap-1">
                  <FiMapPin /> Seattle, WA
                </div>
                {lastCommit && (
                  <div className="meta-pill flex items-center gap-1">
                    <FiClock /> Last Commit: {lastCommit}
                  </div>
                )}
              </div>

              <p className="col-start-3 col-span-8 text-center text-grayLight-500 dark:text-grayDark-500 text-base md:text-lg font-normal">
                Product designer shaping consumer experiences — aligning systems,
                visual craft, and thoughtful product decisions that scale.
                Bringing delight to consumer apps, enterprise systems, and complex workflows.
              </p>

              <div className="col-start-4 col-span-6 font-mono text-xs uppercase">
                {displayedText}
                <span
                  className={`inline-block ml-1 w-[1ch] bg-current ${
                    showCaret ? "opacity-100" : "opacity-0"
                  }`}
                >
                  &nbsp;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection />
              {/* Popup at the bottom */}
      <MinifigPopup minifig={heroMinis.find((m) => m.id === selectedId)} />
    </Layout>
  );
}