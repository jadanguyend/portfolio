import Layout from "../components/Layout";
import CaseStudyProgressNav from "../components/navigation/CaseStudyProgressNav";

export default function CaseStudyLayout({ children, footer }) {
  return (
    <Layout footer={footer}>
      {/* Case Study Progress Nav */}
      <CaseStudyProgressNav />

      <main className="w-full pt-16">
        {/* GRID-CONSTRAINED CONTENT */}
        <div
          className="
            mx-auto
            max-w-[1400px]
            px-6
            md:px-36
            lg:px-48
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
