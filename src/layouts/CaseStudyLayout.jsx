import Layout from "../components/Layout";

export default function CaseStudyLayout({ children, footer }) {
  return (
    <Layout footer={footer}>
      <main className="w-full">
        {/* GRID-CONSTRAINED CONTENT */}
        <div
          className="
            mx-auto
            max-w-[1400px]
            px-6
            md:px-20
            lg:px-24
            pb-24
          "
        >
          <div className="grid grid-cols-12 gap-y-16 gap-x-6 md:gap-x-8">
            {children}
          </div>
        </div>
      </main>
    </Layout>
  );
}
