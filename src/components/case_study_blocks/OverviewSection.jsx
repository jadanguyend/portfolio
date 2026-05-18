import CaseStudySection from "./shared/CaseStudySection";

export default function OverviewSection({
  sectionLabel,
  sectionId,
  title,
  bodyPrimary,
  bodySecondary,
  buttonLabel = "View final design",
  onButtonClick,
  buttonHref,
}) {
  return (
    <CaseStudySection id={sectionId} dataSection={sectionLabel}>
      <div className="grid grid-cols-12 gap-y-4 gap-x-6 md:gap-x-8">

        {/* SECTION LABEL — 12 COLS */}
        <div className="col-span-12">
          <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
            {sectionLabel}
          </p>
        </div>

        {/* CONTENT */}
        <div className="col-span-12 grid grid-cols-12 gap-x-6 md:gap-x-8">

          {/* LEFT — TITLE */}
          <div className="col-span-12 md:col-span-5">
            <h2 className="leading-tight text-grayLight-900 dark:text-grayDark-900">
              {title}
            </h2>
          </div>

          {/* GAP */}
          <div className="hidden md:block md:col-span-1" />

          {/* RIGHT — BODY + BUTTON */}
          <div className="col-span-12 md:col-span-6 space-y-4">
            <p className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
              {bodyPrimary}
            </p>

            <p className="text-base text-grayLight-700 dark:text-grayDark-700 leading-relaxed">
              {bodySecondary}
            </p>

            <button
              onClick={() => {
                if (onButtonClick) {
                  onButtonClick();
                  return;
                }

                if (buttonHref) {
                  const element = document.querySelector(buttonHref);

                  if (element) {
                    const yOffset = -120;
                    const y =
                      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({
                      top: y,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="
                inline-flex
                items-center
                rounded-lg
                border
                border-grayLight-300
                dark:border-grayDark-700
                px-4
                py-2
                text-sm
                font-medium
                text-grayLight-900
                dark:text-grayDark-900
                transition
                hover:bg-grayLight-100
                dark:hover:bg-grayDark-800
              "
            >
              {buttonLabel}
            </button>
          </div>

        </div>
      </div>
    </CaseStudySection>
  );
}
