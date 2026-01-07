// src/components/case_study_blocks/shared/ImageGrid.jsx

export default function ImageGrid({
  images = [],
  variant = "one",
}) {
  if (!images.length) return null;

  const variants = {
    one: "grid-cols-12",
    two: "grid-cols-12",
    three: "grid-cols-12",
  };

  const spans = {
    one: ["col-span-12"],
    two: ["col-span-12 md:col-span-6", "col-span-12 md:col-span-6"],
    three: [
      "col-span-12 md:col-span-4",
      "col-span-12 md:col-span-4",
      "col-span-12 md:col-span-4",
    ],
  };

  return (
    <div className={`grid ${variants[variant]} gap-6`}>
      {images.map((img, index) => (
        <div key={index} className={spans[variant][index]}>
          <img
            src={img.src}
            alt={img.alt || ""}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      ))}
    </div>
  );
}
