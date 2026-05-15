export default function ReflectionImages({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="grid gap-4 h-full auto-rows-fr">
      {items.slice(0, 3).map((src, i) => (
        <div
          key={i}
          className="
            relative h-full overflow-hidden
            rounded-2xl
            border border-dashed
            border-grayLight-200 dark:border-grayDark-200
          "
        >
          <img
            src={src}
            alt={`Reflection ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}