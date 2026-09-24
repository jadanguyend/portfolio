// src/components/home/HomeWordSearch.jsx
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const GRID = [
  "HJDXMPECCAMRJZYBHQRLIYFDIGAU",
  "ZITHANKSUXLCTKVMQHFHPICRJAJS",
  "WJYQGNNTJNOFHJIZBCBOUIQRUPWK",
  "EVGCNGUUOIFLNXSKURGKFORHIYST",
  "HDKFVOABLWCJXVKAKJKEYUNTVCJT",
  "GOJEIITFKSALBOFLZZLJSDOGNGDB",
  "BBXFTVSTBRPSHKBDQJYNUGPGHONP",
  "BHNOHUNIPGBBIIHQMYHNIEKBKSDS",
  "MUUZWXBPTCNGSFKJVPZUKNQGUZVZ",
  "IKMPCIUVGIMTEYIVBFWUOSPXMMGZ",
  "AGFATIDMZYNMHRBGFVTKTINYQOAC",
  "BWTDPRITYEBGCYQAJLCCROMGZJMH",
  "YPMINTERNETNWYOCUGUJPNDZRFLF",
  "FWEKPKIRAWFAUJDRDPZWTPNOOKNJ",
];

const WORDS = [
  {
    label: "THANKS",
    cells: [
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 5],
      [1, 6],
      [1, 7],
    ],
  },
  {
    label: "FOR",
    cells: [
      [3, 20],
      [3, 21],
      [3, 22],
    ],
  },
  {
    label: "VISITING",
    cells: [
      [4, 4],
      [5, 5],
      [6, 6],
      [7, 7],
      [8, 8],
      [9, 9],
      [10, 10],
      [11, 11],
    ],
  },
  {
    label: "MY",
    cells: [
      [7, 16],
      [7, 17],
    ],
  },
  {
    label: "TINY",
    cells: [
      [10, 20],
      [10, 21],
      [10, 22],
      [10, 23],
    ],
  },
  {
    label: "INTERNET",
    cells: [
      [12, 3],
      [12, 4],
      [12, 5],
      [12, 6],
      [12, 7],
      [12, 8],
      [12, 9],
      [12, 10],
    ],
  },
  {
    label: "NOOK",
    cells: [
      [13, 22],
      [13, 23],
      [13, 24],
      [13, 25],
    ],
  },
];

const COLS = GRID[0].length;
const ROWS = GRID.length;

const WORD_REVEAL_DELAY = 350;
const WORD_REVEAL_STAGGER = 520;

function getLinePoints(cells) {
  const firstCell = cells[0];
  const lastCell = cells[cells.length - 1];

  const x1 = firstCell[1] + 0.5;
  const y1 = firstCell[0] + 0.5;
  const x2 = lastCell[1] + 0.5;
  const y2 = lastCell[0] + 0.5;

  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.sqrt(dx * dx + dy * dy) || 1;

  const extend = 0.42;
  const extendX = (dx / length) * extend;
  const extendY = (dy / length) * extend;

  return {
    x1: x1 - extendX,
    y1: y1 - extendY,
    x2: x2 + extendX,
    y2: y2 + extendY,
  };
}

export default function HomeWordSearch() {
  const sectionRef = useRef(null);
  const hasPlayedRef = useRef(false);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.35,
  });

  const [foundCount, setFoundCount] = useState(0);

  useEffect(() => {
    if (!isInView || hasPlayedRef.current) return;

    hasPlayedRef.current = true;

    const timers = WORDS.map((_, index) => {
      return window.setTimeout(() => {
        setFoundCount(index + 1);
      }, WORD_REVEAL_DELAY + index * WORD_REVEAL_STAGGER);
    });

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="container px-16 py-20 md:py-28"
      aria-label="Animated word search that reveals: Thanks for visiting my tiny internet nook"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: `${COLS} / ${ROWS}`,
        }}
      >
        <svg
          className="absolute inset-0 z-10 h-full w-full pointer-events-none"
          viewBox={`0 0 ${COLS} ${ROWS}`}
          preserveAspectRatio="none"
        >
          {WORDS.map((word, index) => {
            const isFound = index < foundCount;
            const { x1, y1, x2, y2 } = getLinePoints(word.cells);

            return (
              <motion.line
                key={word.label}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                initial={{
                  pathLength: 0,
                  opacity: 0,
                }}
                animate={{
                  pathLength: isFound ? 1 : 0,
                  opacity: isFound ? 0.48 : 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                stroke="var(--accent-color)"
                strokeWidth="0.62"
                strokeLinecap="round"
              />
            );
          })}
        </svg>

        <div
          className="absolute inset-0 z-20 grid"
          style={{
            gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${ROWS}, minmax(0, 1fr))`,
          }}
        >
          {GRID.map((row, rowIndex) =>
            row.split("").map((letter, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className="
                  flex
                  items-center
                  justify-center
                  font-mono
                  text-[clamp(0.55rem,1vw,1.2rem)]
                  leading-none
                  uppercase
                  text-grayLight-700
                  dark:text-grayDark-200
                  select-none
                "
              >
                {letter}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}