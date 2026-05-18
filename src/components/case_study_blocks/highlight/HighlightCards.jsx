import React from "react";

export default function HighlightCards({
  cards = [],
  iconColor = "var(--accent-color)",
}) {
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
            className={`
              col-span-12
              ${colClassMap[cards.length]}
              p-6 bg-grayLight-0
              border border-grayLight-200 dark:border-grayDark-200
              rounded-2xl
              flex flex-col gap-3
            `}
          >
            {IconComponent && (
              <div
                className="w-6 h-6 mb-2 opacity-80"
                style={{ color: iconColor }}
              >
                <IconComponent className="w-full h-full" />
              </div>
            )}

            <h3 className="text-lg font-semibold text-grayLight-900 dark:text-grayDark-900">
              {card.title}
            </h3>

            <p className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}