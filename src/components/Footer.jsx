import { useEffect, useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

import footerLight from "../assets/Footer_Image.png";
import footerDark from "../assets/Footer_Image_Dark.png";

export default function Footer() {
  const [isDark, setIsDark] = useState(false);
  const [copied, setCopied] = useState(false);

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
    {
      label: "EMAIL",
      value: "jadanguyend@gmail.com",
      type: "copy",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jadanguyend",
      type: "link",
    },
    {
      label: "X (Twitter)",
      href: "https://twitter.com/jadanguyend",
      type: "link",
    },
  ];

  return (
    <footer className="px-12 md:px-24 py-16 flex flex-col gap-12 uppercase text-accent2">

      {/* ===== ROW 1: META ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm md:text-base leading-tight">

        {/* Column 1 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold text-accent2">JADA NGUYEN</p>

          <div className="font-body font-normal text-sm tracking-tight">
            <div>PRODUCT DESIGNER</div>
            <div>BRAND STRATEGIST</div>
            <div>LEGO BUILDER</div>
            <div>FRAGRANCE ENTHUSIAST</div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold text-accent2">CONTACT</p>

          <div className="font-body font-normal text-sm flex flex-col gap-1 leading-tight">
            {contactLinks.map((link, i) => {
              if (link.type === "copy") {
                return (
                  <button
                    key={i}
                    onClick={() => {
                      navigator.clipboard.writeText(link.value);

                      setCopied(true);

                      setTimeout(() => {
                        setCopied(false);
                      }, 2000);
                    }}
                    className="group relative inline-flex items-center gap-1 text-left"
                  >
                    <span className="relative">
                      {link.label}

                      {/* Underline animation */}
                      <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    {/* Copy icon */}
                    <span className="transition-all duration-300 group-hover:translate-x-0.5">
                      {copied ? (
                        <FiCheck size={12} />
                      ) : (
                        <FiCopy size={12} />
                      )}
                    </span>
                  </button>
                );
              }

              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-1"
                >
                  <span className="relative">
                    {link.label}

                    {/* Underline animation */}
                    <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
                  </span>

                  {/* Arrow animation */}
                  <span className="transition-transform duration-300 transform group-hover:translate-x-1 group-hover:rotate-45">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold text-accent2">SYSTEM</p>

          <div className="font-body font-normal text-sm tracking-tight">
            <div>SF PRO TEXT</div>
            <div>IBM PLEX MONO</div>
            <div>FEATHER ICONS</div>
          </div>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-1.5">
          <p className="font-mono font-semibold text-accent2">BUILD</p>

          <div className="font-body font-normal text-sm tracking-tight">
            <div>REACT + VITE</div>
            <div>TAILWIND + FRAMER MOTION</div>
            <div>CLAUDE + CHATGPT</div>
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