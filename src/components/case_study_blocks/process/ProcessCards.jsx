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
            className="flex gap-6 p-6 border rounded-lg shadow-sm"
          >
            {/* ICON */}
            {IconComponent && (
              <div className="w-6 h-6 flex-shrink-0 text-accent opacity-80 mt-[2px]">
                <IconComponent className="w-full h-full" />
              </div>
            )}

            {/* TEXT */}
            <div className="flex flex-col gap-1">
              
              {/* TITLE + ICON ALIGNMENT TARGET */}
              {step.title && (
                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>
              )}

              {/* DESCRIPTION */}
              <div className="text-base text-grayLight-700 dark:text-grayDark-400 leading-relaxed">
                {step.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}