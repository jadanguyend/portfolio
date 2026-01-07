export default function ExplainerImages({ images = [], variant = "one", height = "h-72 md:h-80" }) {
  if (!images.length) return null;

  const spans = {
    one: ["col-span-12"],
    two: ["col-span-12 md:col-span-6", "col-span-12 md:col-span-6"],
    three: ["col-span-12 md:col-span-4", "col-span-12 md:col-span-4", "col-span-12 md:col-span-4"],
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {images.map((img, index) => (
        <div key={index} className={spans[variant][index]}>
          <img
            src={img.src}
            alt={img.alt || ""}
            className={`w-full object-cover rounded-2xl ${height}`} // dynamic height
          />
        </div>
      ))}
    </div>
  );
}
