import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import CaseStudySection from "./shared/CaseStudySection";

export default function NextProject({
  sectionId = "next-project",
  sectionLabel = "Next Project",
  projectLink = "/",
}) {
  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      <Link
        to={projectLink}
        className="
          col-span-12
          group

          flex items-start justify-center
          gap-3

          py-32
        "
      >
        {/* TEXT */}
        <div className="relative">
          <h2
            className="
              font-mono
              uppercase
              leading-none

              tracking-[0.01em]
              [word-spacing:-0.1em]

              text-[clamp(1.5rem,4.5vw,3.5rem)]

              text-accent
            "
          >
            VIEW NEXT PROJECT
          </h2>

          {/* UNDERLINE */}
          <div
            className="
              absolute
              left-0
              bottom-[-2px]

              h-[3px]
              w-full

              origin-left
              scale-x-0

              bg-accent

              transition-transform
              duration-300
              ease-out

              group-hover:scale-x-100
            "
          />
        </div>

        {/* ARROW */}
        <div
          className="
            pt-[0.05em]

            text-accent
            text-[clamp(1.5rem,4.5vw,3.5rem)]

            leading-none

            transition-transform
            duration-300

            group-hover:rotate-45
          "
        >
          <FiArrowUpRight className="w-[1em] h-[1em]" />
        </div>
      </Link>
    </CaseStudySection>
  );
}