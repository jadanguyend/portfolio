import CaseStudySection from "../shared/CaseStudySection";
import HighlightImages from "./HighlightImages";
import HighlightCards from "./HighlightCards";

export default function HighlightSection({
  sectionId,
  sectionLabel,
  headline,
  description,
  contentType = "images",
  items = [],
  iconColor = "var(--accent-color)",
}) {
  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      {/* Section Label */}
      <div className="col-span-12 mb-4">
        <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
          {sectionLabel}
        </p>
      </div>

      {/* Headline */}
      <div className="mb-8">
        <h2 className="leading-tight text-grayLight-900 dark:text-grayDark-900">
          {headline}
        </h2>

        {description && (
          <div className="mt-4 text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
            {description}
          </div>
        )}
      </div>

      {/* Content */}
      {contentType === "images" ? (
        <HighlightImages images={items} />
      ) : (
        <HighlightCards
          cards={items}
          iconColor={iconColor}
        />
      )}
    </CaseStudySection>
  );
}