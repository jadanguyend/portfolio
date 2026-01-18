import CaseStudySection from "./shared/CaseStudySection";

export default function QuoteSection({ sectionId, sectionLabel, quote }) {
  return (
    <CaseStudySection id={sectionId} dataSection={sectionLabel} className="py-24">
      <div className="grid grid-cols-12 gap-y-6">
        {/* LABEL */}
        <div className="col-span-12">
          <p className="text-sm font-mono uppercase tracking-wide text-grayLight-400 dark:text-grayDark-400">
            {sectionLabel}
          </p>
        </div>

        {/* QUOTE */}
        <div className="col-span-12 md:col-span-10">
          <h2 className="text-2xl md:text-3xl leading-tight text-grayLight-900 dark:text-grayDark-900">
            {quote}
          </h2>
        </div>
      </div>
    </CaseStudySection>
  );
}
