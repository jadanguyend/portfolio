// src/components/case_study_blocks/feature/FeatureBlock.jsx

export default function FeatureBlock({
  title,
  description,
  imageSrc,
  imageAlt,
  caption,
  mediaType = "image", // "image" | "video"
  layout = "horizontal", // "horizontal" | "vertical"
}) {
  const isVideo = mediaType === "video";
  const isVertical = layout === "vertical";

  return (
    <div
      className={
        isVertical
          ? "col-span-12 grid grid-cols-12 gap-y-8"
          : "col-span-12 grid grid-cols-12 gap-y-8 gap-x-6"
      }
    >
      {/* Text */}
      <div
        className={
          isVertical
            ? "col-span-12 md:col-span-8"
            : "col-span-12 md:col-span-4 flex flex-col justify-center"
        }
      >
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-grayLight-900 dark:text-grayDark-900 mb-4">
          {title}
        </h3>

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

      {/* Gap for horizontal only */}
      {!isVertical && <div className="hidden md:block md:col-span-1" />}

      {/* Media */}
      <figure
        className={
          isVertical
            ? "col-span-12"
            : "col-span-12 md:col-span-7"
        }
      >
        {isVideo ? (
          <video
            src={imageSrc}
            aria-label={imageAlt}
            className="w-full object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-xl"
            loading="lazy"
          />
        )}

        {caption && (
          <figcaption className="mt-3 text-sm leading-relaxed text-grayLight-500 dark:text-grayDark-500">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}