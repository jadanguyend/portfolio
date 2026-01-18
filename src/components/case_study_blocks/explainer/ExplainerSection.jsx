import CaseStudySection from "../shared/CaseStudySection";
import ExplainerImages from "./ExplainerImages";

export default function ExplainerSection({
  sectionId,
  sectionLabel,
  title,
  body,
  imageVariant = "one",
  images = [],
}) {
  return (
    <CaseStudySection id={sectionId} dataSection={sectionLabel} className="py-24">
      
      {/* Section Label */}
      <div className="col-span-12 mb-4">
        <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
          {sectionLabel}
        </p>
      </div>

      {/* Top Content */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        {/* Left: H2 */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="text-2xl md:text-3xl font-semibold text-grayLight-900 dark:text-grayDark-900 leading-tight">
            {title}
          </h2>
        </div>

        {/* Gap */}
        <div className="hidden md:block md:col-span-1" />

        {/* Right: Body */}
        <div className="col-span-12 md:col-span-6">
          <p className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
            {body}
          </p>
        </div>
      </div>

      {/* Visuals */}
      {images.length > 0 && (
        <div className="mt-6">
          <ExplainerImages variant={imageVariant} images={images} />
        </div>
      )}
    </CaseStudySection>
  );
}
