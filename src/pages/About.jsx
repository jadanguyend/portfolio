import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout footer={<Footer />}>
      <section className="relative min-h-screen overflow-hidden">
        {/* Content Layer */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <h1 className="max-w-5xl text-center text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight">
            I design experiences like building Legos—methodical in structure,
            creative in execution, and thoughtfully connected to build something
            greater.
          </h1>
        </div>
      </section>
    </Layout>
  );
}
