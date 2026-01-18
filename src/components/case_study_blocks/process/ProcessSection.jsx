import CaseStudySection from "../shared/CaseStudySection";
import ProcessCards from "./ProcessCards";

export default function ProcessSection({
  sectionId,
  sectionLabel,
  title,
  steps = [],
  variant = "three",
}) {
  return (
    <CaseStudySection id={sectionId} dataSection={sectionLabel} className="py-24">
      
      {/* Section Label */}
      <div className="col-span-12 mb-4">
        <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
          {sectionLabel}
        </p>
      </div>

      {/* Title + Process Cards */}
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
