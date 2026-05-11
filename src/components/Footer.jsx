import { useEffect, useState } from "react";
import footerLight from "../assets/Footer_Image.png";
import footerDark from "../assets/Footer_Image_Dark.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const checkDark = () => setIsDark(html.classList.contains("dark"));
    checkDark();

    const observer = new MutationObserver(() => checkDark());
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactLinks = [
    { label: "Email", href: "mailto:jadanguyend@email.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jadanguyend" },
    { label: "Twitter", href: "https://twitter.com/jadanguyend" },
  ];

  return (
    <footer className="px-12 md:px-24 py-16 flex flex-col gap-12 uppercase text-accent2">

      {/* ===== ROW 1: META ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm md:text-base leading-tight">

        {/* Column 1 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold">JADA NGUYEN</p>
          <div className="font-body font-normal tracking-tight">
            <div>PRODUCT DESIGN</div>
            <div>BRAND STRATEGY</div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold">CONTACT</p>
          <div className="font-body font-normal flex flex-col gap-1 leading-tight">
            {contactLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative inline-flex items-center gap-1"
              >
                <span className="relative">
                  {link.label}
                  {/* Underline animation */}
                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                </span>
                {/* Arrow animation: rotate 45° + move right */}
                <span className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:rotate-45">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold">SYSTEM</p>
          <div className="font-body font-normal tracking-tight">
            <div>SF PRO TEXT</div>
            <div>IBM PLEX MONO</div>
            <div>FEATHER ICONS</div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold">BUILD</p>
          <div className="font-body font-normal tracking-tight">
            <div>REACT + TAILWIND</div>
            <div>VERCEL</div>
          </div>
        </div>

      </div>

      {/* ===== ROW 2: IMAGE ===== */}
      <div>
        <img
          src={isDark ? footerDark : footerLight}
          alt="Footer illustration"
          className="w-full rounded-md"
          loading="lazy"
        />
      </div>

      {/* ===== ROW 3: BOTTOM BAR ===== */}
      <div className="flex justify-between items-center font-medium text-sm md:text-base leading-tight">

        {/* Left */}
        <span>©2026 Jada Nguyen</span>

        {/* Right */}
        <button
          onClick={scrollToTop}
          className="group relative flex items-center gap-1"
        >
          <span className="flex items-center gap-1">
            BACK TO TOP <span>↑</span>
          </span>
          {/* Underline spanning entire button */}
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
        </button>

      </div>
    </footer>
  );
}