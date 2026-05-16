import Layout from "../components/Layout";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectSection";

import HomeHero from "../components/home/HomeHero";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";

export default function Home() {
  return (
    <Layout footer={<Footer />}>
      <HomeHero />

      <div id="work">
        <ProjectsSection />
      </div>

      <HomeAbout />

      <HomeContact />
    </Layout>
  );
}