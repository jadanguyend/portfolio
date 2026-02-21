import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiClock } from "react-icons/fi";
import ProjectsSection from "../components/ProjectSection";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import AsciiBackground from "../components/AsciiBackground";

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

/* ---------- Resize Handle ---------- */

function Handle({ className, onPointerDown }) {
  return (
    <div
      onPointerDown={onPointerDown}
      className={`absolute w-2.5 h-2.5 bg-white ${className}`}
      style={{
        border: "1px solid var(--accent-color)",
      }}
    />
  );
}

/* ---------- Selectable Minifig ---------- */

function SelectableMinifig({
  item,
  selectedId,
  setSelectedId,
  constraintsRef,
}) {
  const isSelected = selectedId === item.id;

  const wrapperRef = useRef(null);
  const resizeSession = useRef(null);
  const rotateSession = useRef(null);

  const [isRotating, setIsRotating] = useState(false);

  const MIN_SCALE =
    typeof window !== "undefined" && window.innerWidth < 768 ? 0.7 : 0.5;

  const [transform, setTransform] = useState({
    x: item.x,
    y: item.y,
    scale: 0.6,
    rotation: item.r,
  });

  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setSize({
        w: Math.round(rect.width),
        h: Math.round(rect.height),
      });
    }
  }, [transform.scale, isSelected]);

  /* ---------- Resize ---------- */

  function startResize(e) {
    e.stopPropagation();

    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    resizeSession.current = {
      startScale: transform.scale,
      startDistance: Math.hypot(e.clientX - cx, e.clientY - cy),
      centerX: cx,
      centerY: cy,
    };

    window.addEventListener("pointermove", onResize);
    window.addEventListener("pointerup", stopResize);
  }

  function onResize(e) {
    const s = resizeSession.current;
    if (!s) return;

    const dist = Math.hypot(
      e.clientX - s.centerX,
      e.clientY - s.centerY
    );

    const nextScale = s.startScale * (dist / s.startDistance);

    setTransform((t) => ({
      ...t,
      scale: Math.min(3, Math.max(MIN_SCALE, nextScale)),
    }));
  }

  function stopResize() {
    resizeSession.current = null;
    window.removeEventListener("pointermove", onResize);
    window.removeEventListener("pointerup", stopResize);
  }

  /* ---------- Rotation ---------- */

  function startRotate(e) {
    e.stopPropagation();
    setIsRotating(true);

    const rect = wrapperRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    rotateSession.current = {
      centerX: cx,
      centerY: cy,
      startAngle: Math.atan2(e.clientY - cy, e.clientX - cx),
      startRotation: transform.rotation,
    };

    window.addEventListener("pointermove", onRotate);
    window.addEventListener("pointerup", stopRotate);
  }

  function onRotate(e) {
    const s = rotateSession.current;
    if (!s) return;

    const angle = Math.atan2(
      e.clientY - s.centerY,
      e.clientX - s.centerX
    );

    const deg =
      s.startRotation + ((angle - s.startAngle) * 180) / Math.PI;

    setTransform((t) => ({ ...t, rotation: deg }));
  }

  function stopRotate() {
    rotateSession.current = null;
    setIsRotating(false);
    window.removeEventListener("pointermove", onRotate);
    window.removeEventListener("pointerup", stopRotate);
  }

  return (
    <motion.div
      className="absolute"
      drag={!isRotating}
      dragConstraints={constraintsRef}
      dragElastic={0.25}
      dragMomentum={false}
      style={{ left: transform.x, top: transform.y }}
      onDragEnd={(e, info) => {
        setTransform((t) => ({
          ...t,
          x: t.x + info.offset.x,
          y: t.y + info.offset.y,
        }));
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        setSelectedId(item.id);
      }}
    >
      <div
        ref={wrapperRef}
        className="relative cursor-grab"
        style={{
          transform: `scale(${transform.scale}) rotate(${transform.rotation}deg)`,
          transformOrigin: "50% 50%",
        }}
      >
        <img
          src={item.src}
          draggable={false}
          className="w-28 md:w-32 select-none drop-shadow-xl pointer-events-none"
        />

        {isSelected && (
          <>
            {/* Bounding box */}
            <div
              className="absolute inset-0 border-2 pointer-events-none"
              style={{ borderColor: "var(--accent-color)" }}
            />

            {/* Resize handles (8) */}
            <Handle className="-top-1 -left-1" onPointerDown={startResize} />
            <Handle className="-top-1 -right-1" onPointerDown={startResize} />
            <Handle className="-bottom-1 -left-1" onPointerDown={startResize} />
            <Handle className="-bottom-1 -right-1" onPointerDown={startResize} />

            <Handle className="top-1/2 -left-1 -translate-y-1/2" onPointerDown={startResize} />
            <Handle className="top-1/2 -right-1 -translate-y-1/2" onPointerDown={startResize} />
            <Handle className="-top-1 left-1/2 -translate-x-1/2" onPointerDown={startResize} />
            <Handle className="-bottom-1 left-1/2 -translate-x-1/2" onPointerDown={startResize} />

            {/* Rotation handle */}
            <div
              onPointerDown={startRotate}
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-sm cursor-grab bg-white"
              style={{
                border: "1px solid var(--accent-color)",
                color: "var(--accent-color)",
              }}
            >
              ↻
            </div>

            {/* Dimension label */}
            <div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-xs font-mono px-2 py-0.5 rounded whitespace-nowrap"
              style={{
                background: "var(--accent-color)",
                color: "#fff",
              }}
            >
              {size.w} × {size.h}
            </div>
          </>
        )}
      </div>
    </motion.div>
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
    { id: 1, src: miniDetective, x: "23%", y: "23%", r: -5 },
    { id: 2, src: miniBeekeeper, x: "32%", y: "23%", r: -5 },
    { id: 3, src: miniHotdog, x: "60%", y: "15%", r: 0 },
    { id: 4, src: miniKendo, x: "90%", y: "17%", r: 12 },
    { id: 5, src: miniMe, x: "80%", y: "17%", r: 12 },
    { id: 6, src: miniRacer, x: "70%", y: "17%", r: 12 },
    { id: 7, src: miniSprinter, x: "60%", y: "17%", r: 12 },
    { id: 8, src: miniHiker, x: "50%", y: "17%", r: 12 },
    { id: 9, src: miniAstronaut, x: "40%", y: "17%", r: 12 },
  ];

  /* ---------- Typing effect ---------- */

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

        {/* Content unchanged */}
        <div className="relative z-10 grid grid-cols-12 min-h-screen px-6 py-24 items-center">
          <div className="col-span-12 flex flex-col items-center text-center">
            <motion.h1
              className="font-heading font-semibold uppercase leading-none"
              style={{
                fontSize: "clamp(6vw, 12vw, 15rem)",
                letterSpacing: "-0.05em",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              [JADANGUYEND]
            </motion.h1>

            <div className="mt-12 grid grid-cols-12 gap-4 w-full">
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
                visual craft, and thoughtful product decisions that scale. Bringing
                delight to consumer apps, enterprise systems, and complex workflows.
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
    </Layout>
  );
}