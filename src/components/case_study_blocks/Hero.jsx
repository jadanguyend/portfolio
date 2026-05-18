import { useState } from "react";
import CaseStudySection from "../case_study_blocks/shared/CaseStudySection";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Hero({
  title,
  tag,
  readTime,
  brief,
  role,
  timeline,
  tools,
  contributors,
  imageSrc,
  imageAlt,
  learnMoreContent,
}) {
  const [open, setOpen] = useState(false);

  return (
    <CaseStudySection>
      {/* FULL-BLEED IMAGE */}
      {imageSrc && (
        <div className="col-span-12 mb-12">
          <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[50vh] md:h-[60vh] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-6">
        {/* LEFT COLUMN */}
        <div className="col-span-12 md:col-span-5 space-y-3">
          <p className="text-xs font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
            {tag} · {readTime}
          </p>

          <h1 className="text-3xl md:text-4xl font-semibold text-grayLight-900 dark:text-grayDark-900 leading-tight">
            {title}
          </h1>

          {brief && (
            <p className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
              {brief}
            </p>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-start md:justify-between">
          <div className="grid grid-cols-3 gap-4">
            <Meta label="ROLE" value={role} />
            <Meta label="TIMELINE" value={timeline} />
            <Meta label="TOOLS" value={tools} />
          </div>

          {contributors && (
            <div className="mt-4 md:mt-6">
              <p className="text-sm font-mono text-grayLight-500 dark:text-grayDark-500 mb-1">
                CONTRIBUTORS
              </p>
              <p className="text-base text-grayLight-900 dark:text-grayDark-900">
                {contributors}
              </p>
            </div>
          )}
        </div>

        {/* LEARN MORE ABOUT (FULL WIDTH) */}
        {learnMoreContent && (
          <div className="col-span-12 mt-6">
            <div
              className="
                border
                border-grayLight-200 dark:border-grayDark-200
                rounded-2xl
                overflow-hidden
              "
            >
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
                  <p className="text-xs font-mono uppercase tracking-wide text-grayLight-900 dark:text-grayDark-900">
                    Learn more about the context of this project
                  </p>
                </div>

                <div className="text-grayLight-900 dark:text-grayDark-900">
                  {open ? <FiChevronUp /> : <FiChevronDown />}
                </div>
              </button>

              {open && (
                <div className="px-6 pb-5 text-sm text-grayLight-700 dark:text-grayDark-700 space-y-4">
                  {learnMoreContent}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </CaseStudySection>
  );
}

function Meta({ label, value, labelSize = "text-xs", valueSize = "text-sm" }) {
  return (
    <div>
      <p className={`${labelSize} font-mono text-grayLight-500 dark:text-grayDark-500 mb-1`}>
        {label}
      </p>
      <p className={`${valueSize} text-grayLight-900 dark:text-grayDark-900`}>
        {value}
      </p>
    </div>
  );
}