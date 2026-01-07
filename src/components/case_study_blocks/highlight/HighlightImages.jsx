import React from "react";

export default function HighlightImages({ images = [], height = "h-72 md:h-80" }) {
  if (!images.length) return null;

  const colClassMap = {
    1: "md:col-span-12",
    2: "md:col-span-6",
    3: "md:col-span-4",
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {images.map((src, index) => (
        <div key={index} className={`col-span-12 ${colClassMap[images.length]}`}>
          <img
            src={src}
            alt={`Highlight ${index + 1}`}
            className={`w-full object-cover rounded-lg shadow-md ${height}`}
          />
        </div>
      ))}
    </div>
  );
}
