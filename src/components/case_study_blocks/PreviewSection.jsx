import CaseStudySection from "./shared/CaseStudySection";

export default function PreviewSection({ sectionId, label, images }) {
  // images: [fullWidthImage, halfWidthImage1, halfWidthImage2]
  const [fullWidth, half1, half2] = images;

  return (
    <CaseStudySection id={sectionId} className="py-24">
      {/* Section Header */}
      <div className="grid grid-cols-12 gap-y-6 mb-4">
        <div className="col-span-12">
          <p className="text-sm font-mono uppercase tracking-wide text-grayLight-400 dark:text-grayDark-400">
            {label}
          </p>
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-12 gap-6">
        {/* Row 1: Full-width image */}
        <div className="col-span-12">
          <img
            src={fullWidth}
            alt="Preview full-width"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Row 2: Two half-width images */}
        <div className="col-span-12 md:col-span-6">
          <img
            src={half1}
            alt="Preview half 1"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="col-span-12 md:col-span-6">
          <img
            src={half2}
            alt="Preview half 2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </CaseStudySection>
  );
}
