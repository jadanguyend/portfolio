export default function Hero({
  title,
  tag,
  readTime,
  brief,
  role,
  timeline,
  tools,
  contributors,
  imageSrc,
  imageAlt,
}) {
  return (
    <section className="col-span-12">
      {/* CONTENT */}
      <div className="grid grid-cols-12 gap-y-16 gap-x-16">
        {/* LEFT COLUMN */}
        <div className="col-span-12 md:col-span-5 space-y-3">
          {/* TAG + READ TIME ON TOP */}
          <p className="text-xs font-mono text-grayLight-500 dark:text-grayDark-500">
            {tag} · {readTime}
          </p>

          {/* TITLE */}
          <h1 className="text-grayLight-900 dark:text-grayDark-900">
            {title}
          </h1>

          {/* BRIEF */}
          {brief && (
            <p className="text-base text-grayLight-500 dark:text-grayDark-500">
              {brief}
            </p>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
          {/* TOP META */}
            <div className="grid grid-cols-3 gap-6">
            <Meta label="ROLE" value={role} labelSize="text-sm" valueSize="text-base" />
            <Meta label="TIMELINE" value={timeline} labelSize="text-sm" valueSize="text-base" />
            <Meta label="TOOLS" value={tools} labelSize="text-sm" valueSize="text-base" />
            </div>

          {/* BOTTOM META */}
          {contributors && (
            <div>
              <p className="text-sm font-mono text-grayLight-500 dark:text-grayDark-500 mb-2">
                CONTRIBUTORS
              </p>
              <p className="text-base text-grayLight-900 dark:text-grayDark-900">
                {contributors}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* IMAGE */}
      {imageSrc && (
        <div className="mt-16">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-2xl object-cover"
          />
        </div>
      )}
    </section>
  );
}

function Meta({ label, value, labelSize = "text-xs", valueSize = "text-sm" }) {
  return (
    <div>
      <p className={`${labelSize} font-mono text-grayLight-500 dark:text-grayDark-500 mb-1`}>
        {label}
      </p>
      <p className={`${valueSize} text-grayLight-900 dark:text-grayDark-900`}>
        {value}
      </p>
    </div>
  );
}
