// src/components/case_study_blocks/TLDRSection.jsx
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function TLDRSection({
  sectionLabel = "TL;DR",
  summary,
  children,
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="col-span-12">
      <div
        className="
          border
          border-grayLight-100 dark:border-grayDark-100
          rounded-2xl
          bg-transparent
        "
      >
        {/* Header (clickable) */}
        <button
          onClick={() => setOpen(!open)}
          className="
            w-full
            flex items-center justify-between
            px-6 py-4
            text-left
          "
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
              {sectionLabel}
            </p>

            {summary && (
              <p className="mt-1 text-sm text-grayLight-800 dark:text-grayDark-200">
                {summary}
              </p>
            )}
          </div>

          <div className="text-grayLight-500 dark:text-grayDark-400">
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </div>
        </button>

        {/* Expandable content */}
        {open && children && (
          <div className="px-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}