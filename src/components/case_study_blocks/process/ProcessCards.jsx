import React from "react";

export default function ProcessCards({
  steps = [],
  iconColor = "var(--accent-color)",
}) {
  if (!steps.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, index) => {
        const IconComponent = step.icon;

        return (
          <div
            key={index}
            className="
              flex gap-6 p-6 bg-grayLight-0
              border border-grayLight-200 dark:border-grayDark-200
              rounded-2xl
            "
          >
            {IconComponent && (
              <div
                className="w-6 h-6 flex-shrink-0 opacity-80 mt-[2px]"
                style={{ color: iconColor }}
              >
                <IconComponent className="w-full h-full" />
              </div>
            )}

            <div className="flex flex-col gap-1">
              {step.title && (
                <h3 className="text-lg font-semibold text-grayLight-900 dark:text-grayDark-900">
                  {step.title}
                </h3>
              )}

              <div className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
                {step.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}