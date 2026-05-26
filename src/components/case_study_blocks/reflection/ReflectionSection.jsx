import CaseStudySection from "../shared/CaseStudySection";
import ReflectionImages from "./ReflectionImages";

export default function ReflectionSection({
  sectionId,
  sectionLabel,
  headline,
  description,
  items = [],
  imageVariant = "two", // "one" | "two"
}) {
  const visibleItems =
    imageVariant === "one"
      ? items.slice(0, 1)
      : items.slice(0, 2);

  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      <div className="col-span-12 mb-4">
        <h6>
          {sectionLabel}
        </h6>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* LEFT TEXT */}
        <div className="col-span-12 md:col-span-6">
          <div className="flex flex-col justify-start">
            <h2>
              {headline}
            </h2>

            {description && (
              <div className="mt-4 body">
                {description}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="col-span-12 md:col-span-6">
          <ReflectionImages items={visibleItems} />
        </div>
      </div>
    </CaseStudySection>
  );
}