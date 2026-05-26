import CaseStudySection from "./shared/CaseStudySection";

export default function ImageCaptionSection({
  sectionId,
  sectionLabel,
  items = [], // [{ src, alt, caption }]
  layout = "horizontal", // "horizontal" | "vertical"
}) {
  if (!items.length) return null;

  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      {/* Label */}
      {sectionLabel && (
        <div className="col-span-12 mb-6">
          <h6>
            {sectionLabel}
          </h6>
        </div>
      )}

      {/* CONTENT */}
      <div className="col-span-12">
        {/* HORIZONTAL */}
        {layout === "horizontal" && (
          <div
            className={`grid gap-6 ${
              items.length === 1
                ? "grid-cols-1 max-w-4xl"
                : items.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {items.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.alt || ""}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {item.caption && (
                  <p className="mt-3 text-sm text-grayLight-600 dark:text-grayDark-400 leading-relaxed">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VERTICAL */}
        {layout === "vertical" && (
          <div className="flex flex-col gap-10 max-w-3xl">
            {items.map((item, index) => (
              <div key={index}>
                <div className="w-full overflow-hidden rounded-2xl">
                  <img
                    src={item.src}
                    alt={item.alt || ""}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {item.caption && (
                  <p className="mt-4 text-base text-grayLight-700 dark:text-grayDark-300 leading-relaxed">
                    {item.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </CaseStudySection>
  );
}