// src/components/case_study_blocks/shared/CaseStudyProgressNav.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowUp } from "react-icons/fi";
import { createPortal } from "react-dom";

export default function CaseStudyProgressNav() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  // Mount guard for portal
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      const totalScrollable = docHeight - windowHeight;

      let percent =
        totalScrollable > 0 ? (scrollY / totalScrollable) * 100 : 0;

      // clamp (prevents overshoot)
      targetProgress = Math.max(0, Math.min(100, percent));
    };

    const animate = () => {
      const ease = 0.08; // tweak for feel

      currentProgress += (targetProgress - currentProgress) * ease;

      setProgress(currentProgress);

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    updateProgress();
    animate();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <nav className="fixed top-4 left-0 right-0 z-[9999] pointer-events-none">
      <div className="container mx-auto px-6 pointer-events-auto">
        <div
          className="
            relative isolate
            flex items-center justify-between w-full
            bg-grayLight-50/30 dark:bg-grayDark-50/30
            backdrop-blur-md
            border border-grayLight-300/30 dark:border-grayDark-300/30
            rounded-xl
            py-2 px-6
            transition-colors
          "
        >
          {/* LEFT: Home */}
          <div className="shrink-0">
            <Link
              to="/"
              className="
                flex items-center gap-2
                font-mono text-xs uppercase
                text-grayLight-900 dark:text-grayDark-900
                hover:text-accent
                transition-colors
              "
            >
              <FiArrowLeft />
              <span>Home</span>
            </Link>
          </div>

          {/* CENTER: Progress Bar */}
          <div className="flex items-center mx-6 flex-1">
            <div
              className="
                relative w-full h-[3px]
                bg-grayLight-300/50 dark:bg-grayDark-600/50
                rounded-full overflow-hidden
              "
            >
              <div
                className="
                  absolute left-0 top-0 h-full
                  bg-accent
                "
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Optional % label */}
            <span className="ml-3 font-mono text-xs text-accent">
              {Math.round(progress)}%
            </span>
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
                text-grayLight-900 dark:text-grayDark-900
                hover:text-accent
                transition-colors
              "
            >
              <FiArrowUp />
              <span>Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </nav>,
    document.body
  );
}