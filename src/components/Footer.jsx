import { useEffect, useState } from "react";
import footerLight from "../assets/Footer_Image.png";
import footerDark from "../assets/Footer_Image_Dark.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  // detect dark mode class on <html>
  useEffect(() => {
    const html = document.documentElement;

    const checkDark = () => setIsDark(html.classList.contains("dark"));
    checkDark(); // initial check

    const observer = new MutationObserver(() => checkDark());
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const lastCommit = import.meta.env.VITE_LAST_COMMIT
    ? new Date(import.meta.env.VITE_LAST_COMMIT).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <footer
      className="px-12 md:px-24 pt-10 pb-16 flex flex-col gap-6 text-accent2"
      style={{ fontWeight: 500 }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-accent2">
        <span className="text-sm md:text-base">©2025 Jada Nguyen</span>
        {lastCommit && (
          <span className="text-sm md:text-base mt-2 md:mt-0">
            Last Commit: {lastCommit}
          </span>
        )}
      </div>

      {/* Divider */}
      <hr className="border-current opacity-30" />

      {/* Bottom Section */}
      <div>
        <img
          src={isDark ? footerDark : footerLight}
          alt="Footer illustration"
          className="w-full rounded-md"
        />
      </div>
    </footer>
  );
}
