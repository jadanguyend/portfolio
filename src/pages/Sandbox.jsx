// src/pages/Sandbox.jsx
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import miniBuilder from "../assets/miniBuilder.png";

export default function Sandbox() {
  return (
    <Layout footer={<Footer />}>
      <section className="relative min-h-screen overflow-hidden">
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
          <img
            src={miniBuilder}
            alt=""
            draggable={false}
            className="mb-2 w-40 select-none md:w-48"
          />

          <p className="mt-2 max-w-xl text-grayLight-700 dark:text-grayDark-700">
            This corner of the site is still in progress — a place for
            experiments, side quests, and things I’m still figuring out.
          </p>
        </div>
      </section>
    </Layout>
  );
}