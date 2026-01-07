import CaseStudySection from "../shared/CaseStudySection";
import SectionHeader from "../shared/SectionHeader";
import ExplainerImages from "./ExplainerImages";

export default function ExplainerSection({
  label,
  title,
  body,
  sectionId,
  imageVariant = "one",
  images = [],
}) {
  return (
    <CaseStudySection>
      {/* Label */}
      <SectionHeader label={label} id={sectionId} />

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
