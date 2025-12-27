export default function CaseStudyLayout({ children }) {
  return (
    <main className="w-full">
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-6
          md:px-20
          lg:px-24
          pt-24
          md:pt-32 
          lg:pt-40 
          pb-24
        "
      >
        <div className="grid grid-cols-12 gap-x-6 gap-y-24">
          {children}
        </div>
      </div>
    </main>
  );
}
