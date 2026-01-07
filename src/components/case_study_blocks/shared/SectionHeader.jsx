// src/components/case_study_blocks/shared/SectionHeader.jsx
export default function SectionHeader({ label, id }) {
  return (
    <div id={id} className="col-span-12 mb-2">
      <p className="text-sm font-mono uppercase tracking-wide text-grayLight-500 dark:text-grayDark-500">
        {label}
      </p>
    </div>
  );
}
