import Layout from "../components/Layout";
import Footer from "../components/Footer";

import HomeHero from "../components/home/HomeHero";
import ProjectsSection from "../components/ProjectSection";
import SandboxSection from "../components/SandboxSection";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";

export default function Home({ isLoading }) {
  return (
    <Layout footer={<Footer />}>
      <HomeHero isLoading={isLoading} />

      <div className="container">
        <div id="work" className="mb-24">
          <ProjectsSection />
          <SandboxSection />
        </div>

        <HomeAbout />
      </div>
    </Layout>
  );
}