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
          ? "flex flex-col gap-4"
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
            <p className="mt-2 text-sm text-grayLight-500 dark:text-grayDark-500">
              {img.caption}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}