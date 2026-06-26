// src/components/home/HeroInteractiveItems.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";

import StickerKubo from "../../assets/Sticker_Kubo.png";
import StickerCar from "../../assets/Sticker_Car.png";
import StickerSmiski from "../../assets/Sticker_Smiski.png";
import StickerFragrance from "../../assets/Sticker_Fragrance.png";
import StickerCoffee from "../../assets/Sticker_Cofee.png";
import StickerPlant from "../../assets/Sticker_Plant.png";
import StickerMinifig from "../../assets/Sticker_Minifig.png";

const SPAWN_DURATION = 0.32;
const SPAWN_GAP = 0.06;
const SPAWN_STEP = SPAWN_DURATION + SPAWN_GAP;

const CLICK_FILTER_FREQUENCY = 7200;
const CLICK_FILTER_Q = 1.8;
const CLICK_VOLUME = 0.07;
const CLICK_DURATION = 0.01;

let sharedAudioContext = null;
let sharedClickBuffer = null;

const heroItems = [
  {
    id: 1,
    src: StickerKubo,
    x: "6%",
    y: "64%",
    r: -6,
    baseHeight: 118,
    zIndex: 1,
    name: "KUBO 24/7 YOU Series | Bedtime Story",
    description: "Desk companion for late-night making",
  },
  {
    id: 2,
    src: StickerPlant,
    x: "15%",
    y: "12%",
    r: -8,
    baseHeight: 116,
    zIndex: 1,
    name: "LEGO 1/2 Happy Plant",
    description: "The only plant I can keep alive",
  },
  {
    id: 3,
    src: StickerCar,
    x: "46%",
    y: "78%",
    r: -12,
    baseHeight: 72,
    zIndex: 1,
    name: "LEGO Porsche 911",
    description: "A timeless display piece",
  },
  {
    id: 4,
    src: StickerCoffee,
    x: "52%",
    y: "8%",
    r: 8,
    baseHeight: 120,
    zIndex: 1,
    name: "Vietnamese Drip Coffee",
    description: "Condensed milk required",
  },
  {
    id: 5,
    src: StickerFragrance,
    x: "33%",
    y: "38%",
    r: -10,
    baseHeight: 126,
    zIndex: 1,
    name: "Diptyque Eau Moheli EDT",
    description: "Summer 2026 Signature Scent",
  },
  {
    id: 6,
    src: StickerSmiski,
    x: "76%",
    y: "62%",
    r: 4,
    baseHeight: 112,
    zIndex: 1,
    name: "SMISKI Sunday Series | Skateboarding",
    description: "Keeping things playful ;)",
  },
  {
    id: 7,
    src: StickerMinifig,
    x: "90%",
    y: "22%",
    r: -9,
    baseHeight: 120,
    zIndex: 1,
    name: "Customized Minifig",
    description: "My hypothetical little sidekick, Kimi",
  },
];

function getSharedAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;

  if (!AudioContext) return null;

  if (!sharedAudioContext || sharedAudioContext.state === "closed") {
    sharedAudioContext = new AudioContext();
    sharedClickBuffer = null;
  }

  return sharedAudioContext;
}

function createDeterministicClickBuffer(audioContext, duration = CLICK_DURATION) {
  const sampleRate = audioContext.sampleRate;
  const length = Math.floor(sampleRate * duration);
  const buffer = audioContext.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);

  /*
    Seeded noise keeps the click sound consistent.
    Do not use Math.random() here if you want every click to match.
  */
  let seed = 7;

  for (let i = 0; i < length; i++) {
    seed = (seed * 16807) % 2147483647;

    const noise = (seed / 2147483647) * 2 - 1;
    const envelope = Math.pow(1 - i / length, 3.2);

    data[i] = noise * envelope;
  }

  return buffer;
}

function getClickBuffer(audioContext) {
  if (!sharedClickBuffer) {
    sharedClickBuffer = createDeterministicClickBuffer(
      audioContext,
      CLICK_DURATION
    );
  }

  return sharedClickBuffer;
}

function playClickBurst(audioContext, startTime, volume, duration) {
  const source = audioContext.createBufferSource();
  const filter = audioContext.createBiquadFilter();
  const gain = audioContext.createGain();

  source.buffer = getClickBuffer(audioContext);

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(CLICK_FILTER_FREQUENCY, startTime);
  filter.Q.setValueAtTime(CLICK_FILTER_Q, startTime);

  gain.gain.setValueAtTime(volume, startTime);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);

  source.start(startTime);
  source.stop(startTime + duration);
}

function playItemClickSound() {
  const audioContext = getSharedAudioContext();

  if (!audioContext) return;

  const play = () => {
    const now = audioContext.currentTime;
    playClickBurst(audioContext, now, CLICK_VOLUME, CLICK_DURATION);
  };

  if (audioContext.state === "suspended") {
    audioContext.resume().then(play).catch(() => {});
  } else {
    play();
  }
}

function HeroSelectableItem({
  item,
  index,
  visibleCount,
  selectedId,
  setSelectedId,
  setActiveItem,
  constraintsRef,
}) {
  const isSelected = selectedId === item.id;
  const shouldSpawn = index < visibleCount;

  const resizeRef = useRef(null);
  const rotateRef = useRef(null);
  const elementRef = useRef(null);

  const BASE_HEIGHT = item.baseHeight || 110;

  const [rotation, setRotation] = useState(item.r || 0);
  const [aspectRatio, setAspectRatio] = useState(1);
  const [width, setWidth] = useState(BASE_HEIGHT);
  const [isTransforming, setIsTransforming] = useState(false);

  const height = width / aspectRatio;

  function handleImageLoad(e) {
    const img = e.target;
    const ratio = img.naturalWidth / img.naturalHeight;

    setAspectRatio(ratio);
    setWidth(BASE_HEIGHT * ratio);
  }

  function startResize(e, direction) {
    e.stopPropagation();

    playItemClickSound();

    setIsTransforming(true);

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
    setIsTransforming(false);

    window.removeEventListener("pointermove", onResize);
    window.removeEventListener("pointerup", stopResize);
  }

  function startRotate(e) {
    e.stopPropagation();

    playItemClickSound();

    setIsTransforming(true);

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

    const currentAngle = Math.atan2(
      e.clientY - s.centerY,
      e.clientX - s.centerX
    );

    const delta = currentAngle - s.startAngle;
    const newRotation = s.startRotation + (delta * 180) / Math.PI;

    setRotation(newRotation);
  }

  function stopRotate() {
    rotateRef.current = null;
    setIsTransforming(false);

    window.removeEventListener("pointermove", onRotate);
    window.removeEventListener("pointerup", stopRotate);
  }

  const handleBase = "absolute w-2 h-2 bg-white cursor-pointer";

  return (
    <motion.div
      className="
        absolute
        pointer-events-none
        select-none
        touch-none
      "
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: shouldSpawn ? 1 : 0,
        opacity: shouldSpawn ? 1 : 0,
      }}
      transition={{
        duration: SPAWN_DURATION,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        width,
        height,
        left: item.x,
        top: item.y,
        transformOrigin: "center center",
        zIndex: isSelected ? 10 : item.zIndex || 1,
      }}
    >
      <motion.div
        ref={elementRef}
        data-hero-item
        className="
          relative
          w-full
          h-full
          pointer-events-auto
          cursor-grab
          select-none
          touch-none
        "
        drag={!isTransforming}
        dragConstraints={constraintsRef}
        dragMomentum={false}
        animate={{
          rotate: rotation,
        }}
        style={{
          transformOrigin: "center center",
        }}
        onPointerDown={(e) => {
          e.stopPropagation();

          playItemClickSound();

          setSelectedId(item.id);
          setActiveItem(item);
        }}
        whileHover={{
          scale: isSelected ? 1 : 1.04,
        }}
      >
        <img
          src={item.src}
          alt=""
          draggable={false}
          onLoad={handleImageLoad}
          className="
            absolute
            inset-0
            w-full
            h-full
            select-none
            pointer-events-none
          "
        />

        {isSelected && (
          <>
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{ border: "2px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={(e) => startResize(e, "top-left")}
              className={`${handleBase} z-20 -top-1 -left-1`}
              style={{ border: "1px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={(e) => startResize(e, "top-right")}
              className={`${handleBase} z-20 -top-1 -right-1`}
              style={{ border: "1px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={(e) => startResize(e, "bottom-left")}
              className={`${handleBase} z-20 -bottom-1 -left-1`}
              style={{ border: "1px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={(e) => startResize(e, "bottom-right")}
              className={`${handleBase} z-20 -bottom-1 -right-1`}
              style={{ border: "1px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={(e) => startResize(e, "left")}
              className={`${handleBase} z-20 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2`}
              style={{ border: "1px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={(e) => startResize(e, "right")}
              className={`${handleBase} z-20 right-0 top-1/2 -translate-y-1/2 translate-x-1/2`}
              style={{ border: "1px solid var(--accent-color)" }}
            />

            <div
              onPointerDown={startRotate}
              className="
                absolute
                z-20
                -top-10
                left-1/2
                -translate-x-1/2
                w-6
                h-6
                rounded-full
                bg-white
                flex
                items-center
                justify-center
                cursor-grab
                text-xs
              "
              style={{
                border: "1px solid var(--accent-color)",
                color: "var(--accent-color)",
              }}
            >
              ↻
            </div>

            <div
              className="
                absolute
                z-20
                top-full
                mt-2
                left-1/2
                -translate-x-1/2
                text-xs
                font-mono
                px-2
                py-1
                rounded
                whitespace-nowrap
              "
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
    </motion.div>
  );
}

function HeroItemPopup({ item, onClose }) {
  const title = item ? item.name : "Click around to learn more";

  const description = item
    ? item.description
    : "Welcom to my tiny internet nook!";

  return (
    <div
      className="
        absolute
        right-12
        bottom-0
        z-[80]
        flex
        items-center
        justify-between
        w-[360px]
        max-w-full
        px-5
        py-4
        rounded-xl
        bg-grayLight-50/30
        backdrop-blur-md
        border
        border-grayLight-300/30
        text-grayLight-900
        dark:text-grayDark-50
        pointer-events-auto
      "
    >
      <div className="min-w-0 text-left">
        <div className="truncate font-mono text-xs uppercase tracking-tight text-grayLight-500 dark:text-grayDark-400">
          {title}
        </div>

        <div className="mt-1 truncate text-sm font-medium text-grayLight-900 dark:text-grayDark-50">
          {description}
        </div>
      </div>

      {item && (
        <button
          onClick={() => {
            playItemClickSound();
            onClose();
          }}
          className="
            ml-4
            w-8
            h-8
            shrink-0
            flex
            items-center
            justify-center
            rounded-md
            bg-grayLight-50/30
            backdrop-blur-md
            border
            border-grayLight-300/30
            hover:bg-grayLight-50/50
            transition-colors
          "
          aria-label="Close item popup"
        >
          <FiX className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default function HeroInteractiveItems() {
  const constraintsRef = useRef(null);

  const [selectedId, setSelectedId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [spawnCycle, setSpawnCycle] = useState(() => Date.now());

  useEffect(() => {
    function handleClickOutside(e) {
      if (!e.target.closest("[data-hero-item]")) {
        setSelectedId(null);
        setActiveItem(null);
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setVisibleCount(0);

    const timers = heroItems.map((_, index) => {
      return window.setTimeout(() => {
        setVisibleCount(index + 1);
      }, index * SPAWN_STEP * 1000);
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [spawnCycle]);

  useEffect(() => {
    function handlePageShow() {
      setSelectedId(null);
      setActiveItem(null);
      setSpawnCycle(Date.now());
    }

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);

  return (
    <div
      className="
        absolute
        inset-0
        overflow-visible
        pointer-events-none
        hidden
        md:block
      "
    >
      <div
        className="
          h-full
          w-full
          px-6
          md:px-16
          pt-28
          pb-10
        "
      >
        <div
          ref={constraintsRef}
          className="
            relative
            h-full
            w-full
            overflow-visible
          "
        >
          {heroItems.map((item, index) => (
            <HeroSelectableItem
              key={`${item.id}-${spawnCycle}`}
              item={item}
              index={index}
              visibleCount={visibleCount}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              setActiveItem={setActiveItem}
              constraintsRef={constraintsRef}
            />
          ))}

          <HeroItemPopup
            item={activeItem}
            onClose={() => {
              setActiveItem(null);
              setSelectedId(null);
            }}
          />
        </div>
      </div>
    </div>
  );
}