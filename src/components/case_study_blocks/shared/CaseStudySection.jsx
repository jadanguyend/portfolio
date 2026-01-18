export default function CaseStudySection({ children, py = "py-24", id, dataSection }) {
  return (
    <section
      id={id}
      data-section={dataSection}
      className={`col-span-12 w-full max-w-[1400px] mx-auto ${py}`}
    >
      {children}
    </section>
  );
}
