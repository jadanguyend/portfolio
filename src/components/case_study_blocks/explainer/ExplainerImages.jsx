export default function ExplainerImages({
  images = [],
  variant = "one",
  layout = "horizontal",
}) {
  if (!images.length) return null;

  const horizontalSpans = {
    one: ["col-span-12"],
    two: [
      "col-span-12 md:col-span-6",
      "col-span-12 md:col-span-6",
    ],
    three: [
      "col-span-12 md:col-span-4",
      "col-span-12 md:col-span-4",
      "col-span-12 md:col-span-4",
    ],
  };

  return (
    <div
      className={
        layout === "vertical"
          ? "flex flex-col gap-12"
          : "grid grid-cols-12 gap-4"
      }
    >
      {images.map((img, index) => (
        <div
          key={index}
          className={
            layout === "vertical"
              ? "w-full"
              : horizontalSpans[variant][index]
          }
        >
          <img
            src={img.src}
            alt={img.alt || ""}
            loading="lazy"
            className="
              w-full
              h-auto
              border
              border-dashed
              border-grayLight-200 dark:border-grayDark-200
              rounded-2xl
            "
          />

          {img.caption && (
            <div className="mt-4 flex items-start gap-4 py-2">
              {/* ACCENT BAR */}
              <div className="w-[4px] flex-shrink-0 self-stretch self-stretch -my-1 bg-accent" />

              {/* TEXT */}
              <p className="text-sm font-mono leading-tight text-grayLight-600 dark:text-grayDark-600">
                {img.caption}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}