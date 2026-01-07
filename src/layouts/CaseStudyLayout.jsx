// src/layouts/CaseStudyLayout.jsx
export default function CaseStudyLayout({ children }) {
  return (
    <main className="w-full">
      {/* GRID-CONSTRAINED CONTENT */}
      <div className="          
          mx-auto
          max-w-[1400px]
          px-6
          md:px-20
          lg:px-24
          pt-16
          md:pt-20
          lg:pt-24
          pb-24
      ">
        <div className="grid grid-cols-12 gap-y-24 gap-x-6 md:gap-x-8">
          {children}
        </div>
      </div>
    </main>
  );
}