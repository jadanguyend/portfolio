import Layout from "../components/Layout";
import Footer from "../components/Footer";

import HomeHero from "../components/home/HomeHero";
import HomeBridge from "../components/home/HomeBridge";
import ProjectsSection from "../components/ProjectSection";
import HomeAbout from "../components/home/HomeAbout";
import HomeContact from "../components/home/HomeContact";

export default function Home({ isLoading }) {
  return (
    <Layout footer={<Footer />}>
      <HomeHero isLoading={isLoading} />
      

      <div id="work">
        <ProjectsSection />
      </div>

      <HomeAbout />

      <HomeContact />
    </Layout>
  );
}