export default function QuoteSection({ label, quote, sectionId }) {
  return (
    <section
      id={sectionId}
      className="
        w-full
        bg-grayLight-900
        dark:bg-grayDark-900
      "
    >
      {/* CONTENT WRAPPER — matches CaseStudyLayout */}
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-6
          md:px-20
          lg:px-24
          py-24
        "
      >
        <div className="grid grid-cols-12 gap-y-6">
          {/* LABEL */}
          <div className="col-span-12">
            <p className="text-sm font-mono uppercase tracking-wide text-grayLight-400 dark:text-grayDark-400">
              {label}
            </p>
          </div>

          {/* QUOTE */}
          <div className="col-span-12 md:col-span-10">
            <h2 className="text-2xl md:text-3xl leading-tight text-grayLight-50 dark:text-grayDark-50">
              {quote}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
