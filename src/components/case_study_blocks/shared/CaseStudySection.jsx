// src/components/case_study_blocks/shared/CaseStudySection.jsx
export default function CaseStudySection({ children, py = "py-12" }) {
  return (
    <section className={`col-span-12 w-full max-w-[1400px] mx-auto ${py}`}>
      {children}
    </section>
  );
}
