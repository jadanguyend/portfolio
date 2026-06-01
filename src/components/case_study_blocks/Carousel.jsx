// src/components/case_study_blocks/Carousel.jsx
import CaseStudySection from "./shared/CaseStudySection";

export default function Carousel({
  sectionId,
  sectionLabel,
  images = [],
  caption,
  duration = 45,
}) {
  const visibleImages = images.slice(0, 9);

  if (!visibleImages.length) return null;

  return (
    <CaseStudySection
      id={sectionId}
      dataSection={sectionLabel}
      className="py-24"
    >
      {/* LABEL */}
      {sectionLabel && (
        <div className="col-span-12 mb-6">
        <h6>
          {sectionLabel}
        </h6>
        </div>
      )}

      {/* CAROUSEL */}
      <div className="col-span-12 overflow-hidden">
        <div
          className="flex w-max animate-carousel"
          style={{
            animationDuration: `${duration}s`,
          }}
        >
          {[visibleImages, visibleImages].map((set, setIndex) => (
            <div
              key={setIndex}
              className="flex gap-4 pr-4"
            >
              {set.map((image, index) => (
              <div className="shrink-0">
                <div className="h-[320px] md:h-[380px] overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt || ""}
                    className="block h-full w-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              ))}
            </div>
          ))}
        </div>

        {/* COMMENT */}
        {caption && (
        <div className="mt-4 flex items-start gap-4 py-2">
            
            {/* ACCENT BAR */}
            <div className="w-[4px] flex-shrink-0 self-stretch -my-1 bg-accent" />

            {/* TEXT */}
            <p className="text-sm font-mono leading-tight text-grayLight-600 dark:text-grayDark-600">
            {caption}
            </p>

        </div>
        )}
      </div>
    </CaseStudySection>
  );
}