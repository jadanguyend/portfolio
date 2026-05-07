import CaseStudySection from "../shared/CaseStudySection";
import ReflectionImages from "./ReflectionImages";

export default function ReflectionSection({
  sectionId,
  sectionLabel,
  headline,
  description,
  items = [],
}) {
  return (
    <CaseStudySection id={sectionId} dataSection={sectionLabel} className="py-24">

      <div className="col-span-12 mb-4">
        <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
          {sectionLabel}
        </p>
      </div>

      {/* KEY: shared height container */}
      <div className="grid grid-cols-12 gap-10">
        
        {/* LEFT TEXT */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col justify-start">
            <h2 className="leading-tight text-grayLight-900 dark:text-grayDark-900">
              {headline}
            </h2>

            {description && (
              <div className="mt-4 text-base text-grayLight-700 dark:text-grayDark-300">
                {description}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="col-span-12 md:col-span-6">
          <ReflectionImages items={items} />
        </div>

      </div>
    </CaseStudySection>
  );
}