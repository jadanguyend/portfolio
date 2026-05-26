import CaseStudySection from "../shared/CaseStudySection";
import ExplainerImages from "./ExplainerImages";

export default function ExplainerSection({
  sectionId,
  sectionLabel,
  title,
  body,
  imageVariant = "one",
  imageLayout = "horizontal", // NEW
  images = [],
}) {
  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      {/* Section Label */}
      <div className="col-span-12 mb-4">
        <h6>
          {sectionLabel}
        </h6>
      </div>

      {/* Top Content */}
      <div className="grid grid-cols-12 gap-x-6 gap-y-4">
        {/* Left: H2 */}
        <div className="col-span-12 md:col-span-5">
          <h2>
            {title}
          </h2>
        </div>

        {/* Gap */}
        <div className="hidden md:block md:col-span-1" />

        {/* Right: Body */}
        <div className="col-span-12 md:col-span-6">
          <div className="body">
            {body}
          </div>
        </div>
      </div>

      {/* Visuals */}
      {images.length > 0 && (
        <div className="mt-6">
          <ExplainerImages
            variant={imageVariant}
            layout={imageLayout}
            images={images}
          />
        </div>
      )}
    </CaseStudySection>
  );
}