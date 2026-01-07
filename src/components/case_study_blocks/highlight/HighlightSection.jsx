import CaseStudySection from "../shared/CaseStudySection";
import HighlightImages from "./HighlightImages";
import HighlightCards from "./HighlightCards";

export default function HighlightSection({
  sectionLabel,
  headline,
  contentType = "images",
  items = [],
  imageHeight = "h-72 md:h-80",
}) {
  return (
    <CaseStudySection>
      {/* Section Label */}
      <div className="mb-4">
        <p className="text-xs font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
          {sectionLabel}
        </p>
      </div>

      {/* Headline */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-grayLight-900 dark:text-grayDark-900">
          {headline}
        </h2>
      </div>

      {/* Content */}
      {contentType === "images" ? (
        <HighlightImages images={items} height={imageHeight} />
      ) : (
        <HighlightCards cards={items} />
      )}
    </CaseStudySection>
  );
}
