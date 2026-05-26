import CaseStudySection from "./shared/CaseStudySection";

export default function QuoteSection({
  sectionId,
  sectionLabel,
  quote,
  description,
}) {
  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      <div className="grid grid-cols-12 gap-y-6">
        
        {/* LABEL */}
        <div className="col-span-12">
          <h6>
            {sectionLabel}
          </h6>
        </div>

        {/* QUOTE */}
        <div className="col-span-12">
          <h2 className="leading-tight text-grayLight-900 dark:text-grayDark-900">
            {quote}
          </h2>

          {description && (
            <div className="mt-4 text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
              {description}
            </div>
          )}
        </div>
      </div>
    </CaseStudySection>
  );
}