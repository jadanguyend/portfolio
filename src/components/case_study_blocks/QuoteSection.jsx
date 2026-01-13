import CaseStudySection from "../case_study_blocks/shared/CaseStudySection";

export default function QuoteSection({ label, quote, sectionId }) {
  return (
    <CaseStudySection id={sectionId} className="py-24">
      <div className="grid grid-cols-12 gap-y-6">
        {/* LABEL */}
        <div className="col-span-12">
          <p className="text-sm font-mono uppercase tracking-wide text-grayLight-400 dark:text-grayDark-400">
            {label}
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
