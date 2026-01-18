// src/components/case_study_blocks/shared/CaseStudyProgressNav.jsx
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUp } from "react-icons/fi";

export default function CaseStudyProgressNav() {
  const [sections, setSections] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonsRef = useRef([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const allSections = Array.from(
      document.querySelectorAll("[data-section]")
    ).map((el) => ({
      id: el.id,
      label: el.dataset.section,
      top: el.offsetTop,
    }));

    setSections(allSections);

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 4;
      let currentIndex = 0;
      for (let i = 0; i < allSections.length; i++) {
        if (scrollPos >= allSections[i].top) currentIndex = i;
      }
      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      const updated = Array.from(
        document.querySelectorAll("[data-section]")
      ).map((el) => ({
        id: el.id,
        label: el.dataset.section,
        top: el.offsetTop,
      }));
      setSections(updated);
    });

    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const currentBtn = buttonsRef.current[activeIndex];
    if (currentBtn) {
      setPillStyle({
        left: currentBtn.offsetLeft,
        width: currentBtn.offsetWidth,
      });
    }
  }, [activeIndex, sections]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-6 pointer-events-auto">
        {/* Make this inner div constrained to container */}
        <div className="relative flex items-center justify-between w-full bg-white/30 dark:bg-black/30 backdrop-blur-md border border-grayLight-200/30 dark:border-grayDark-200/30 rounded-xl py-2 px-6">
          
          {/* LEFT: Home */}
          <div className="shrink-0">
            <Link
              to="/"
              className="
                flex items-center gap-2
                font-mono text-xs uppercase
                text-grayLight-600 dark:text-grayDark-600
                hover:text-grayLight-900 dark:hover:text-grayDark-900
                transition-colors
              "
            >
              <FiArrowLeft />
              <span>Home</span>
            </Link>
          </div>

          {/* CENTER: Section Buttons */}
          <div className="relative flex items-center gap-1 mx-auto">
            {sections[activeIndex] && (
              <div
                className="
                  absolute
                  bg-grayLight-900 dark:bg-grayDark-900
                  rounded-[0.5rem]
                  transition-all duration-300
                  z-0 pointer-events-none
                "
                style={{
                  left: pillStyle.left,
                  width: pillStyle.width,
                  top: 0,
                  bottom: 0,
                }}
              />
            )}

            {sections.map((section, idx) => (
              <button
                key={section.id}
                ref={(el) => (buttonsRef.current[idx] = el)}
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative z-10 flex items-center justify-center
                  px-3 py-2 font-mono text-xs uppercase
                  whitespace-nowrap transition-colors
                  ${
                    idx === activeIndex
                      ? "text-grayLight-50 dark:text-grayDark-50"
                      : "text-grayLight-600 dark:text-grayDark-600 hover:text-grayLight-900 dark:hover:text-grayDark-900"
                  }
                `}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* RIGHT: Back to Top */}
          <div className="shrink-0">
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="
                flex items-center gap-2
                font-mono text-xs uppercase
                text-grayLight-600 dark:text-grayDark-600
                hover:text-grayLight-900 dark:hover:text-grayDark-900
                transition-colors
              "
            >
              <FiArrowUp />
              <span>Back to top</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
