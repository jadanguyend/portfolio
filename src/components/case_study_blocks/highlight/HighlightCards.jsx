import React from "react";

export default function HighlightCards({ cards = [] }) {
  if (!cards.length) return null;

  const colClassMap = {
    1: "md:col-span-12",
    2: "md:col-span-6",
    3: "md:col-span-4",
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {cards.map((card, index) => {
        const IconComponent = card.icon;

        return (
          <div
            key={index}
            className={`col-span-12 ${colClassMap[cards.length]} p-6 border rounded-lg shadow-sm flex flex-col gap-3`}
          >
            {IconComponent && (
              <div className="text-primary w-6 h-6 mb-2">
                <IconComponent className="w-full h-full" />
              </div>
            )}
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-base text-gray-600">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
