// src/pages/case_studies/Radar.jsx
import { useNavigate } from "react-router-dom";
import CaseStudySection from "../../components/case_study_blocks/shared/CaseStudySection";

import CaseStudyLayout from "../../layouts/CaseStudyLayout";
import Hero from "../../components/case_study_blocks/Hero";
import OverviewSection from "../../components/case_study_blocks/OverviewSection";
import Carousel from "../../components/case_study_blocks/Carousel";
import Footer from "../../components/Footer";

import radar_thumbnail from "../../assets/radar_thumbnail.webp";
import radar_poster from "../../assets/radar_poster.webp";
import radar_showcase from "../../assets/radar_showcase.webp";
import radar_stair from "../../assets/radar_stair.webp";
import radar_logo from "../../assets/radar_logo.webp";


export default function Radar() {
  const navigate = useNavigate();

    const goToContact = () => {
    navigate("/");

    setTimeout(() => {
        const element = document.getElementById("contact");
        if (!element) return;

        const yOffset = -120;
        const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
        top: y,
        behavior: "smooth",
        });
    }, 250);
    };

  return (
    <CaseStudyLayout footer={<Footer />}>
      <Hero
        title="RADAR"
        tag="Case Study"
        readTime="Restricted"
        brief="Streamlining enterprise compliance by turning complex regulations into actionable tasks"
        role="UX Researcher & Designer"
        timeline="Jan 2026 - Present"
        tools="Microsoft Copilot Studio, Azure DevOps, Power BI, Visio"
        contributors="Bright Hoang, Lucy Lin, Nathan Salman, Joshua Taylor"
        imageSrc={radar_thumbnail}
        imageAlt="RADAR compliance dashboard interface"
        learnMoreContent={
          <>
            <p>
              This was a Microsoft-sponsored capstone project. While I can’t
              share the full details publicly due to confidentiality agreements,
              I’d be happy to provide more context about the work through email.
            </p>
          </>
        }
      />

      <OverviewSection
        sectionLabel="Overview"
        sectionId="overview"
        title="Designing clarity within complex compliance workflows"
        bodyPrimary="Compliance teams often struggle to interpret evolving regulatory requirements, identify gaps, and coordinate delivery across fragmented systems and processes. RADAR explores how AI-assisted workflows and structured visibility can simplify compliance planning and make regulatory work more actionable."
        bodySecondary="I designed compliance readiness and progress dashboards that brought clarity to complex compliance workflows by surfacing gaps, tracking progress, and connecting regulatory requirements to delivery outcomes."
        buttonLabel="Learn More"
        onButtonClick={goToContact}
      />

      <CaseStudySection>
        <div className="col-span-12">
          <img
            src={radar_poster}
            alt="RADAR project poster"
            className="w-full h-auto rounded-2xl border border-grayLight-200 dark:border-grayDark-200"
            loading="lazy"
          />
        </div>
      </CaseStudySection>

      <Carousel
        sectionId="bts"
        sectionLabel="Behind the Scenes"
        duration={45}
        caption="This project brought together two capstone teams into one team of ten, making it the largest team I've worked on to date. It was my first time collaborating so closely with so many developers, and I learned a tremendous amount from the talented people around me. I'm especially grateful for our PM, whose leadership helped keep the team aligned and moving forward throughout the project."
        images={[
          { src: radar_showcase, alt: "Iteration 1" },
          { src: radar_logo, alt: "Iteration 2" },
          { src: radar_stair, alt: "Iteration 3" },
        ]}
      />
    </CaseStudyLayout>
  );
}