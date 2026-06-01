import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MagneticCursor() {
  const [visible, setVisible] = useState(false);
  const [target, setTarget] = useState(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const width = useMotionValue(44);
  const height = useMotionValue(44);

  const springX = useSpring(x, { stiffness: 260, damping: 28 });
  const springY = useSpring(y, { stiffness: 260, damping: 28 });
  const springW = useSpring(width, { stiffness: 260, damping: 28 });
  const springH = useSpring(height, { stiffness: 260, damping: 28 });

  useEffect(() => {
    const work = document.querySelector("#work");
    if (!work) return;

    const move = (e) => {
      const hoveredTarget = e.target.closest(".magnetic-target");

      if (hoveredTarget) {
        const rect = hoveredTarget.getBoundingClientRect();
        setTarget(hoveredTarget);

        x.set(rect.left);
        y.set(rect.top);
        width.set(rect.width);
        height.set(rect.height);
      } else {
        setTarget(null);

        x.set(e.clientX - 22);
        y.set(e.clientY - 22);
        width.set(44);
        height.set(44);
      }
    };

    const enter = () => setVisible(true);
    const leave = () => {
      setVisible(false);
      setTarget(null);
    };

    work.addEventListener("mousemove", move);
    work.addEventListener("mouseenter", enter);
    work.addEventListener("mouseleave", leave);

    return () => {
      work.removeEventListener("mousemove", move);
      work.removeEventListener("mouseenter", enter);
      work.removeEventListener("mouseleave", leave);
    };
  }, [x, y, width, height]);

  return (
    <motion.div
      className={`magnetic-cursor ${target ? "is-targeting" : ""}`}
      style={{
        x: springX,
        y: springY,
        width: springW,
        height: springH,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        rotate: target ? 0 : 360,
      }}
      transition={{
        opacity: { duration: 0.15 },
        rotate: {
          duration: 8,
          ease: "linear",
          repeat: target ? 0 : Infinity,
        },
      }}
    />
  );
}