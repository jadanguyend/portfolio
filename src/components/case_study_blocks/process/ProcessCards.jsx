import React from "react";

export default function ProcessCards({ steps = [] }) {
  if (!steps.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => {
        const IconComponent = step.icon;

        return (
          <div
            key={index}
            className="flex gap-6 p-6 border rounded-lg shadow-sm items-start"
          >
            {IconComponent && (
              <div className="w-6 h-6 flex-shrink-0 text-primary">
                <IconComponent className="w-full h-full" />
              </div>
            )}

            <p className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
