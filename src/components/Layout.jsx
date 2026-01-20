import { useEffect, useState, useRef, forwardRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const Layout = forwardRef(function Layout({ children, footer }, ref) {
  const scrollY = useMotionValue(0);
  const [docHeight, setDocHeight] = useState(0);
  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  // Track scroll for card scaling
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

  // Track card DOM height
  useEffect(() => {
    if (!cardRef.current) return;

    const updateCardHeight = () => setCardHeight(cardRef.current.offsetHeight);
    updateCardHeight();

    const observer = new ResizeObserver(updateCardHeight);
    observer.observe(cardRef.current);

    window.addEventListener("resize", updateCardHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCardHeight);
    };
  }, []);

  // Card scale animation based on scroll
  const scrollPercent = useTransform(scrollY, [0, docHeight || 1], [0, 1]);
  const scale = useTransform(scrollPercent, [0.7, 0.9], [1, 0.95]);
  const scaleSpring = useSpring(scale, { stiffness: 200, damping: 30 });
  const radius = useTransform(scrollPercent, [0.7, 0.9], [0, 32]);

  // Track scaled card height for footer offset
  const [footerOffset, setFooterOffset] = useState(0);
  useEffect(() => {
    const updateFooterOffset = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const scaleValue = scaleSpring.get();
      setFooterOffset(rect.height * (1 - scaleValue));
    };

    updateFooterOffset();

    // Update on scale changes
    const unsubscribe = scaleSpring.onChange(() => updateFooterOffset());

    // Update on window resize
    window.addEventListener("resize", updateFooterOffset);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", updateFooterOffset);
    };
  }, [scaleSpring]);

  return (
    <div
      ref={ref}
      className="relative bg-accent-color"
      style={{ backgroundColor: "var(--accent-color)" }}
    >
      {/* Animated Card */}
      <motion.div
        ref={cardRef}
        style={{
          scale: scaleSpring,
          borderBottomLeftRadius: radius,
          borderBottomRightRadius: radius,
          transformOrigin: "top center",
        }}
        className="relative z-10 bg-grayLight-50 dark:bg-grayDark-50"
      >
        <div className="container">{children}</div>
      </motion.div>

      {/* Footer — offset dynamically based on scaled card height */}
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
