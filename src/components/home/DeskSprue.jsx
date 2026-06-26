import { useState } from "react";

import DeskLaptop from "../../assets/DeskLaptop.png";
import DeskHeadphone from "../../assets/DeskHeadphone.png";
import DeskFragrance from "../../assets/DeskFragrance.png";
import DeskKeyboard from "../../assets/DeskKeyboard.png";
import DeskHandCream from "../../assets/DeskHandCream.png";
import DeskCar from "../../assets/DeskCar.png";
import DeskCandle from "../../assets/DeskCandle.png";
import DeskPen from "../../assets/DeskPen.png";
import DeskKubo from "../../assets/DeskKubo.png";
import DeskMouse from "../../assets/DeskMouse.png";
import DeskCoffee from "../../assets/DeskCoffee.png";
import DeskAlbum from "../../assets/DeskAlbum.png";
import DeskFidget from "../../assets/DeskFidget.png";
import DeskClock from "../../assets/DeskClock.png";
import DeskSpeaker from "../../assets/DeskSpeaker.png";

const deskItems = [
  {
    id: "album",
    name: "Album",
    label: "A1",
    image: DeskAlbum,
    left: 0,
    top: 0,
    width: 27,
    height: 50,
    imageMaxWidth: "88%",
    imageMaxHeight: "88%",
    gates: [{ side: "right", offset: "50%" }],
    title: "Album",
    category: "Mood / Taste",
    description:
      "A visual and emotional reference point. Music, packaging, photography, and atmosphere shape how I think about digital experiences.",
  },
  {
    id: "fidget",
    name: "Fidget",
    label: "A2",
    image: DeskFidget,
    left: 27,
    top: 0,
    width: 11,
    height: 25,
    imageMaxWidth: "56%",
    imageMaxHeight: "56%",
    gates: [{ side: "bottom", offset: "50%" }],
    title: "Fidget",
    category: "Thinking Object",
    description:
      "A small object for restless thinking. It represents the in-between moments where ideas are still forming.",
  },
  {
    id: "speaker",
    name: "Speaker",
    label: "A3",
    image: DeskSpeaker,
    left: 38,
    top: 0,
    width: 29,
    height: 25,
    imageMaxWidth: "88%",
    imageMaxHeight: "62%",
    gates: [{ side: "bottom", offset: "50%" }],
    title: "Speaker",
    category: "Atmosphere",
    description:
      "Sound shapes the mood of my workspace. It helps set the pace for deep work, visual exploration, and building.",
  },
  {
    id: "clock",
    name: "Clock",
    label: "A4",
    image: DeskClock,
    left: 67,
    top: 0,
    width: 33,
    height: 25,
    imageMaxWidth: "86%",
    imageMaxHeight: "72%",
    gates: [{ side: "left", offset: "50%" }],
    title: "Clock",
    category: "Time / Rhythm",
    description:
      "A reminder that design work has rhythm: exploration, iteration, polish, and knowing when to move forward.",
  },
  {
    id: "coffee",
    name: "Coffee",
    label: "B1",
    image: DeskCoffee,
    left: 27,
    top: 25,
    width: 14,
    height: 25,
    imageMaxWidth: "74%",
    imageMaxHeight: "82%",
    gates: [{ side: "top", offset: "50%" }],
    title: "Vietnamese Coffee",
    category: "Ritual",
    description:
      "Part of my work ritual. It represents the slower, reflective part of my process before things become polished.",
  },
  {
    id: "candle",
    name: "Candle",
    label: "B2",
    image: DeskCandle,
    left: 41,
    top: 25,
    width: 15,
    height: 25,
    imageMaxWidth: "76%",
    imageMaxHeight: "82%",
    gates: [{ side: "top", offset: "50%" }],
    title: "Candle",
    category: "Atmosphere",
    description:
      "A mood-setting object. It reminds me that design is not only about function, but also about feeling and environment.",
  },
  {
    id: "headphone",
    name: "Headphones",
    label: "B3",
    image: DeskHeadphone,
    left: 56,
    top: 25,
    width: 24,
    height: 25,
    imageMaxWidth: "92%",
    imageMaxHeight: "90%",
    gates: [{ side: "bottom", offset: "50%" }],
    title: "Headphones",
    category: "Focus",
    description:
      "My deep work switch. A small signal that I’m in the zone working through a flow, system, or interaction problem.",
  },
  {
    id: "kubo",
    name: "Kubo",
    label: "B4",
    image: DeskKubo,
    left: 80,
    top: 25,
    width: 20,
    height: 25,
    imageMaxWidth: "58%",
    imageMaxHeight: "84%",
    gates: [{ side: "left", offset: "50%" }],
    title: "Kubo Figure",
    category: "Delight",
    description:
      "A playful desk companion. I like small moments of delight, both in my physical space and in the products I design.",
  },
  {
    id: "fragrance",
    name: "Fragrance",
    label: "C1",
    image: DeskFragrance,
    left: 0,
    top: 50,
    width: 10,
    height: 25,
    imageMaxWidth: "64%",
    imageMaxHeight: "78%",
    gates: [{ side: "right", offset: "50%" }],
    title: "Fragrance",
    category: "Sensory Systems",
    description:
      "A nod to my interest in taste, memory, categorization, and subjective experience — especially through fragrance.",
  },
  {
    id: "handcream",
    name: "Hand Cream",
    label: "C2",
    image: DeskHandCream,
    left: 0,
    top: 75,
    width: 10,
    height: 25,
    imageMaxWidth: "56%",
    imageMaxHeight: "92%",
    gates: [{ side: "right", offset: "50%" }],
    title: "Hand Cream",
    category: "Care",
    description:
      "A small reset object during long work sessions. It reminds me that comfort and care are part of good working systems too.",
  },
  {
    id: "pen",
    name: "Pen",
    label: "C3",
    image: DeskPen,
    left: 10,
    top: 50,
    width: 8,
    height: 25,
    imageMaxWidth: "34%",
    imageMaxHeight: "88%",
    gates: [{ side: "right", offset: "50%" }],
    title: "Pen",
    category: "Sketching",
    description:
      "The fastest way to make an idea visible. A lot of my thinking starts as messy notes, arrows, and rough structures.",
  },
  {
    id: "car",
    name: "Car",
    label: "D1",
    image: DeskCar,
    left: 18,
    top: 50,
    width: 58,
    height: 25,
    imageMaxWidth: "92%",
    imageMaxHeight: "78%",
    gates: [{ side: "left", offset: "50%" }],
    title: "LEGO Car",
    category: "Systems / Play",
    description:
      "A reminder that products are assembled piece by piece: structure, constraints, craft, and a little bit of play.",
  },
  {
    id: "keyboard",
    name: "Keyboard",
    label: "D2",
    image: DeskKeyboard,
    left: 10,
    top: 75,
    width: 51,
    height: 25,
    imageMaxWidth: "90%",
    imageMaxHeight: "66%",
    gates: [{ side: "right", offset: "50%" }],
    title: "Keyboard",
    category: "Execution",
    description:
      "The production tool. It turns loose ideas into specs, notes, prototypes, and actual shipped work.",
  },
  {
    id: "mouse",
    name: "Mouse",
    label: "D3",
    image: DeskMouse,
    left: 61,
    top: 75,
    width: 15,
    height: 25,
    imageMaxWidth: "54%",
    imageMaxHeight: "66%",
    gates: [{ side: "left", offset: "50%" }],
    title: "Mouse",
    category: "Precision",
    description:
      "For tiny adjustments: spacing, alignment, interaction polish, and moving quickly between design and build.",
  },
  {
    id: "laptop",
    name: "Laptop",
    label: "D4",
    image: DeskLaptop,
    left: 76,
    top: 50,
    width: 24,
    height: 50,
    imageMaxWidth: "92%",
    imageMaxHeight: "88%",
    gates: [{ side: "left", offset: "50%" }],
    title: "Laptop",
    category: "Design / Build",
    description:
      "Where most of the work comes together: research, Figma, writing, code, portfolio edits, and product thinking.",
  },
];

function SprueGate({ side = "top", offset = "50%" }) {
  const sharedClass =
    "pointer-events-none absolute z-[7] rounded-full bg-blue-300/32 shadow-[inset_0_1px_1px_rgba(255,255,255,0.50)]";

  if (side === "top") {
    return (
      <span
        className={`${sharedClass} top-0 h-4 w-[5px] -translate-x-1/2 -translate-y-[2px]`}
        style={{ left: offset }}
      />
    );
  }

  if (side === "bottom") {
    return (
      <span
        className={`${sharedClass} bottom-0 h-4 w-[5px] -translate-x-1/2 translate-y-[2px]`}
        style={{ left: offset }}
      />
    );
  }

  if (side === "left") {
    return (
      <span
        className={`${sharedClass} left-0 h-[5px] w-4 -translate-x-[2px] -translate-y-1/2`}
        style={{ top: offset }}
      />
    );
  }

  return (
    <span
      className={`${sharedClass} right-0 h-[5px] w-4 translate-x-[2px] -translate-y-1/2`}
      style={{ top: offset }}
    />
  );
}

export default function DeskSprue() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      className="
        relative
        w-full
        h-[520px]
        md:h-[640px]
        lg:h-[760px]
        overflow-hidden
        rounded-[2rem]
      "
      aria-label="Interactive designer desk sprue"
    >
      <div
        className="
          absolute inset-0
          rounded-[2rem]
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.66),transparent_36%),linear-gradient(180deg,rgba(240,249,255,0.48),rgba(216,237,255,0.22))]
        "
      />

      <div
        className="
          absolute inset-0
          rounded-[2rem]
          bg-blue-200/14
          shadow-[inset_0_1px_0_rgba(255,255,255,0.72),inset_0_-18px_28px_rgba(67,143,205,0.10),0_24px_80px_rgba(0,0,0,0.06)]
          backdrop-blur-md
        "
      />

      <div className="absolute inset-[14px] md:inset-[18px] lg:inset-[22px] rounded-[1.5rem]">
        {deskItems.map((item) => {
          const isSelected = selectedItem?.id === item.id;

          return (
            <div
              key={item.id}
              className="absolute z-[4]"
              style={{
                left: `${item.left}%`,
                top: `${item.top}%`,
                width: `${item.width}%`,
                height: `${item.height}%`,
              }}
            >
              <div
                className={`
                  absolute inset-[4px]
                  rounded-[0.85rem]
                  border
                  ${
                    isSelected
                      ? "border-blue-300/50"
                      : "border-white/24"
                  }
                  bg-white/[0.035]
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.32),inset_0_-6px_14px_rgba(54,126,190,0.05)]
                `}
              />

              <div
                className="
                  pointer-events-none
                  absolute left-[8px] right-[8px] top-[8px]
                  h-[16%]
                  rounded-[0.6rem]
                  bg-white/12
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute right-2.5 top-2.5
                  z-[6]
                  h-3 w-3
                  rounded-full
                  border border-blue-200/16
                  bg-blue-200/8
                "
              />

              {item.gates?.map((gate, index) => (
                <SprueGate
                  key={`${item.id}-gate-${index}`}
                  side={gate.side}
                  offset={gate.offset}
                />
              ))}

              <span
                className="
                  pointer-events-none
                  absolute left-3 top-3 z-[6]
                  font-mono text-[0.6rem] font-bold
                  uppercase tracking-[-0.04em]
                  text-blue-500/28
                "
              >
                {item.label}
              </span>

              <button
                type="button"
                onClick={() => setSelectedItem(item)}
                aria-label={`View details for ${item.name}`}
                className={`
                  group
                  absolute inset-0
                  z-[8]
                  flex items-center justify-center
                  p-2 md:p-3 lg:p-4
                  border-0
                  bg-transparent
                  cursor-pointer
                  transition duration-300
                  ${isSelected ? "scale-[1.01]" : "hover:scale-[1.01]"}
                `}
              >
                <img
                  src={item.image}
                  alt=""
                  draggable="false"
                  className={`
                    pointer-events-none
                    block
                    h-auto w-auto
                    object-contain
                    select-none
                    transition duration-300
                    ${
                      isSelected
                        ? "drop-shadow-[0_16px_24px_rgba(0,0,0,0.13)]"
                        : "group-hover:drop-shadow-[0_14px_20px_rgba(0,0,0,0.10)]"
                    }
                  `}
                  style={{
                    maxWidth: item.imageMaxWidth,
                    maxHeight: item.imageMaxHeight,
                  }}
                />

                <span
                  className={`
                    pointer-events-none
                    absolute bottom-2 left-1/2 z-20
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    bg-white/72
                    px-2.5 py-1
                    text-[0.65rem] font-medium
                    text-grayLight-400
                    shadow-sm
                    backdrop-blur-md
                    transition duration-200
                    dark:bg-grayDark-10/72
                    dark:text-grayDark-400
                    ${
                      isSelected
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                >
                  {item.name}
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {selectedItem && (
        <article
          className="
            absolute
            bottom-4 right-4
            z-30
            w-[min(320px,calc(100%-32px))]
            rounded-3xl
            border border-white/70
            bg-white/78
            p-5
            shadow-[0_24px_70px_rgba(0,0,0,0.14)]
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-grayDark-10/82
          "
        >
          <button
            type="button"
            onClick={() => setSelectedItem(null)}
            aria-label="Close item details"
            className="
              absolute right-4 top-3
              border-0 bg-transparent
              text-xl leading-none
              text-grayLight-400 transition
              hover:text-grayLight-900
              dark:text-grayDark-400
              dark:hover:text-grayDark-900
            "
          >
            ×
          </button>

          <span
            className="
              mb-4
              grid h-9 w-9 place-items-center
              rounded-full
              bg-blue-300
              text-xs font-bold text-white
            "
          >
            {selectedItem.label}
          </span>

          <h2 className="m-0 text-2xl font-bold leading-none tracking-[-0.04em] text-grayLight-900 dark:text-grayDark-900">
            {selectedItem.title}
          </h2>

          <p className="mt-2 text-xs uppercase tracking-[0.12em] text-grayLight-400 dark:text-grayDark-400">
            {selectedItem.category}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-grayLight-600 dark:text-grayDark-500">
            {selectedItem.description}
          </p>
        </article>
      )}
    </div>
  );
}