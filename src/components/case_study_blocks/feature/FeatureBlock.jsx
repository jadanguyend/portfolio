// src/components/case_study_blocks/feature/FeatureBlock.jsx

export default function FeatureBlock({
  title,
  description,
  imageSrc,
  imageAlt,
}) {
  return (
    <>
      {/* Left side: Text (vertically centered) */}
      <div className="col-span-12 md:col-span-4 flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-grayLight-900 dark:text-grayDark-900 mb-4">
          {title}
        </h3>

        {/* ✅ FIXED TYPOGRAPHY WRAPPER */}
<div
  className="
    text-base md:text-lg leading-relaxed
    text-grayLight-700 dark:text-grayDark-400

    [&_p]:text-inherit
    [&_ul]:text-inherit
    [&_li]:text-inherit

    [&_ul]:list-disc
    [&_ul]:pl-5

    [&_li]:leading-relaxed
  "
>
  {description}
</div>
      </div>

      {/* Gap */}
      <div className="hidden md:block md:col-span-1" />

      {/* Right side: Image */}
      <div className="col-span-12 md:col-span-7">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover rounded-xl"
          loading="lazy"
        />
      </div>
    </>
  );
}