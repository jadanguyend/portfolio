// src/components/case_study_blocks/process/ProcessSection.jsx
import SectionHeader from "../shared/SectionHeader";
import ProcessCards from "./ProcessCards";
import CaseStudySection from "../shared/CaseStudySection";

export default function ProcessSection({
  sectionLabel,
  title,
  steps = [],
  variant = "three",
  sectionId,
}) {
  return (
    <CaseStudySection>
      <SectionHeader label={sectionLabel} title={title} id={sectionId} />

      <div className="grid grid-cols-12 gap-x-6 gap-y-4 mt-4">
        {/* LEFT: H2 */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-grayLight-900 dark:text-grayDark-900 leading-tight">
            {title}
          </h2>
        </div>

        {/* GAP */}
        <div className="hidden md:block md:col-span-1" />

        {/* RIGHT: Process Cards */}
        <div className="col-span-12 md:col-span-6">
          <ProcessCards steps={steps} variant={variant} />
        </div>
      </div>
    </CaseStudySection>
  );
}
