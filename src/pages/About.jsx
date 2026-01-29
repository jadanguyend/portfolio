import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About() {

  return (
    <Layout footer={<Footer />}>
      <section className="relative min-h-screen overflow-hidden">
        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-12 min-h-screen px-6 pt-28 pb-12 ">
          <p>This is the About Page.</p>

        </div>
      </section>
    </Layout>
  );
}