import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Layout({ children, footer }) {
  const scrollY = useMotionValue(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () =>
      setDocHeight(document.body.scrollHeight - window.innerHeight);

    updateHeight();

    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateHeight);
    };
  }, [scrollY]);

  // Scroll percentage from 0 → 1
  const scrollPercent = useTransform(scrollY, [0, docHeight || 1], [0, 1]);

  // Card animation
  const scale = useTransform(scrollPercent, [0.7, 0.9], [1, 0.95]);
  const radius = useTransform(scrollPercent, [0.7, 0.9], [0, 32]);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: "var(--accent-color)" }}>
      {/* Animated card */}
      <motion.div
        style={{
          scale,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
        }}
        className="relative z-10 bg-white dark:bg-darkBg pt-24"
      >
        {/* ✅ THIS IS THE IMPORTANT PART */}
        <div className="container">
          {children}
        </div>
      </motion.div>

      {/* Footer sits outside the card */}
      <div className="relative z-10">
        {footer}
      </div>
    </div>
  );
}
