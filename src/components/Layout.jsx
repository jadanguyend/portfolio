import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Layout({ children, footer }) {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const scale = useTransform(scrollY, [0, 1000, 1600], [1, 1, 0.95]);
  const radius = useTransform(scrollY, [0, 1000, 1600], [0, 0, 32]);

  return (
    <div className="relative min-h-screen bg-[#183ED8]">
      {/* Animated card */}
      <motion.div
        style={{ scale, borderBottomLeftRadius: radius, borderBottomRightRadius: radius }}
        className="relative z-10 bg-white dark:bg-darkBg pt-24"
      >
        {children}
      </motion.div>

      {/* Footer sits outside the card */}
      <div className="relative z-10">
        {footer}
      </div>
    </div>
  );
}
