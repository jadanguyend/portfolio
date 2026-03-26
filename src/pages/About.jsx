import { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

import MeBookstore from "../assets/MeBookstore.png";

/* ================= How Images ================= */

import howPlanner from "../assets/howPlanner.png";
import howTinkerer from "../assets/howTinkerer.png";
import howBuilder from "../assets/howBuilder.png";
import howPainter from "../assets/howPainter.png";

/* ===================================================== */
/* ======================= ABOUT ======================== */
/* ===================================================== */

export default function About() {
  /* ================= Cursor Hover Image ================= */

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const smoothY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  const [showImage, setShowImage] = useState(false);

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX + 24);
    cursorY.set(e.clientY + 24);
  };

  /* ================= How I Build ================= */

  const howItems = [
    {
      id: 0,
      src: howPlanner,
      desc: "I carefully select each element so everything fits together clearly, logically, and with intention.",
    },
    {
      id: 1,
      src: howTinkerer,
      desc: "I keep experimenting, refining, and iterating until the experience feels seamless and complete.",
    },
    {
      id: 2,
      src: howBuilder,
      desc: "I build systems that are robust, scalable, and ready for real-world use — not just polished screens.",
    },
    {
      id: 3,
      src: howPainter,
      desc: "I add thoughtful details that make the experience intuitive, memorable, and genuinely enjoyable.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const currentIndex = hoverIndex ?? activeIndex;

  return (
    <Layout footer={<Footer />}>
      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-24 overflow-hidden text-center">
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          
          <h2>
            I design experiences like building LEGO — methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </h2>

          <motion.div
            className="mt-4 font-mono text-xs uppercase tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Consistent details matter. Mine’s a{" "}
            <span
              style={{ color: "#183ED8" }}
            >
              blue hat
            </span>{" "}
            :)
          </motion.div>

                  <div className="flex justify-center items-center gap-10">
          {howItems.map((item, index) => {
            const isActive = currentIndex === index;

            return (
              <img
                key={item.id}
                src={item.src}
                className="w-36 md:w-44 lg:w-52 cursor-pointer transition-all duration-300"
                style={{
                  filter: isActive ? "saturate(1)" : "saturate(0)",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>

        <div className="mt-10 max-w-xl mx-auto text-sm md:text-base text-grayLight-600 dark:text-grayDark-400 transition-all duration-300">
          {howItems[currentIndex].desc}
        </div>

          {/* Numbers */}
          <div className="grid grid-cols-3 gap-8 mt-36 w-full">
            <div>
              <div className="text-2xl md:text-3xl font-semibold">7</div>
              <div className="text-sm text-grayLight-500 dark:text-grayDark-500">
                hackathons — shipped ideas under pressure
              </div>
            </div>

            <div>
              <div className="text-2xl md:text-3xl font-semibold">10+</div>
              <div className="text-sm text-grayLight-500 dark:text-grayDark-500">
                tools — from design to development
              </div>
            </div>

            <div>
              <div className="text-2xl md:text-3xl font-semibold">2+</div>
              <div className="text-sm text-grayLight-500 dark:text-grayDark-500">
                years — building and refining products
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW I BUILD ================= */}
      <section className="py-20 text-center">
        <h2 className="mb-12">How I Build</h2>

        <div className="flex justify-center items-center gap-10">
          {howItems.map((item, index) => {
            const isActive = currentIndex === index;

            return (
              <img
                key={item.id}
                src={item.src}
                className="w-36 md:w-44 lg:w-52 cursor-pointer transition-all duration-300"
                style={{
                  filter: isActive ? "saturate(1)" : "saturate(0)",
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
        </div>

        <div className="mt-10 max-w-xl mx-auto text-sm md:text-base text-grayLight-600 dark:text-grayDark-400 transition-all duration-300">
          {howItems[currentIndex].desc}
        </div>
      </section>

      {/* ================= CURSOR IMAGE ================= */}
      <AnimatePresence>
        {showImage && (
          <motion.img
            src={MeBookstore}
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-44 md:w-52 rounded-xl shadow-2xl"
            style={{
              x: smoothX,
              y: smoothY,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          />
        )}
      </AnimatePresence>
    </Layout>
  );
}