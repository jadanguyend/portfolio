import { useEffect, useState, useRef, forwardRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Layout = forwardRef(function Layout({ children, footer }, ref) {
  const scrollY = useMotionValue(0);
  const [docHeight, setDocHeight] = useState(0);
  const cardRef = useRef(null);

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

  const scrollPercent = useTransform(scrollY, [0, docHeight || 1], [0, 1]);
  const scale = useTransform(scrollPercent, [0.85, 0.96], [1, 0.95]);
  const scaleSpring = useSpring(scale, { stiffness: 200, damping: 30 });
  const radius = useTransform(scrollPercent, [0.82, 0.96], [0, 32]);

  const [footerOffset, setFooterOffset] = useState(0);

  useEffect(() => {
    const updateFooterOffset = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const scaleValue = scaleSpring.get();

      setFooterOffset(rect.height * (1 - scaleValue));
    };

    updateFooterOffset();

    const unsubscribe = scaleSpring.on("change", updateFooterOffset);

    window.addEventListener("resize", updateFooterOffset);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", updateFooterOffset);
    };
  }, [scaleSpring]);

  return (
    <div
      ref={ref}
      className="relative"
      style={{ backgroundColor: "var(--accent-color)" }}
    >
      <motion.div
        ref={cardRef}
        style={{
          scale: scaleSpring,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          transformOrigin: "top center",
        }}
        className="relative z-10 bg-grayLight-10 dark:bg-grayDark-10 overflow-hidden"
      >
        {children}
      </motion.div>

      <motion.div
        style={{ marginTop: `-${footerOffset}px` }}
        className="relative z-20"
      >
        {footer}
      </motion.div>
    </div>
  );
});

export default Layout;