import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Layout({ children, footer }) {
  const scrollY = useMotionValue(0);
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    setDocHeight(document.body.scrollHeight - window.innerHeight);

    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setDocHeight(document.body.scrollHeight - window.innerHeight));

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Scroll percentage from 0 to 1
  const scrollPercent = useTransform(scrollY, [0, docHeight || 1], [0, 1]);

  // Shrink only after 10% scroll, finish at 50% scroll
  const scale = useTransform(scrollPercent, [0.7, 0.9], [1, 0.95]);
  const radius = useTransform(scrollPercent, [0.7, 0.9], [0, 32]);

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