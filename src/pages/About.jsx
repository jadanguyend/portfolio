import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout footer={<Footer />}>
      <section className="relative min-h-screen overflow-hidden">
        {/* Content Layer */}
        <div className="relative z-10 min-h-screen pt-32 px-6">
          <p
            className="
              font-body
              font-semibold
              leading-[1.2]
              text-[clamp(1.875rem,5vw,3rem)]
              tracking-[-0.05em]
            "
          >
            I design experiences like building Legos—methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </p>
        </div>
      </section>
    </Layout>
  );
}
