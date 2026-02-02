import { useEffect, useState } from "react";
import footerLight from "../assets/Footer_Image.png";
import footerDark from "../assets/Footer_Image_Dark.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const html = document.documentElement;
    const checkDark = () => setIsDark(html.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(() => checkDark());
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "Email", href: "mailto:jadanguyend@email.com" },
    { label: "Resume", href: "/resume.pdf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jadanguyend" },
    { label: "Twitter", href: "https://twitter.com/jadanguyend" },
  ];

  return (
    <footer
      className="px-12 md:px-24 pt-10 pb-16 flex flex-col gap-6"
      style={{ color: "var(--accent-color-2)", fontWeight: 500 }}
    >
      {/* Footer Illustration */}
      <div>
        <img
          src={isDark ? footerDark : footerLight}
          alt="Footer illustration"
          className="w-full rounded-md"
        />
      </div>

      {/* Divider */}
      <hr className="border-current opacity-30" />

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-6">
        {/* Left */}
        <span className="text-sm md:text-base">©2025 Jada Nguyen</span>

        {/* Right Links */}
        <div className="flex gap-8">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                position: "relative",
                cursor: "pointer",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
              {/* Up-right arrow */}
              <span style={{ color: "currentColor" }}>↗</span>

              {/* Underline span */}
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  bottom: -2,
                  height: 1,
                  width: "100%",
                  backgroundColor: "currentColor",
                  transform: hoveredIndex === i ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "transform 0.2s ease",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
