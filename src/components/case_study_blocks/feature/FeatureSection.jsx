import CaseStudySection from "../shared/CaseStudySection";
import FeatureBlock from "./FeatureBlock";

export default function FeatureSection({
  sectionId,
  sectionLabel,
  introTitle,
  introBody,
  introImageSrc,
  introImageAlt,
  features,
}) {
  return (
    <CaseStudySection id={sectionId} dataSection={sectionLabel} className="py-24">
      
      {/* Section Label */}
      <div className="col-span-12 mb-4">
        <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
          {sectionLabel}
        </p>
      </div>

      {/* Intro Section */}
      <div className="col-span-12 grid grid-cols-12 gap-y-8 gap-x-6 mb-24">
        {/* Row 1 — Text */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="leading-tight text-grayLight-900 dark:text-grayDark-900">
            {introTitle}
          </h2>
        </div>

        {/* Gap */}
        <div className="hidden md:block md:col-span-1" />

        {/* Right Paragraph */}
        <div className="col-span-12 md:col-span-6">
          <div className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed space-y-4">
            {introBody}
          </div>
        </div>

        {/* Row 2 — Image */}
        <div className="col-span-12 mt-8">
          <img
            src={introImageSrc}
            alt={introImageAlt}
            className="w-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Feature Blocks */}
      <div className="col-span-12 flex flex-col gap-32 ">
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            caption={feature.caption}
            mediaType={feature.mediaType}
            layout={feature.layout}
          />
        ))}
      </div>
    </CaseStudySection>
  );
}
