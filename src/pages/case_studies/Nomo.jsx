// src/pages/case_studies/Nomo.jsx
import CaseStudyLayout from "../../layouts/CaseStudyLayout";
import Hero from "../../components/case_study_blocks/Hero";
import ExplainerSection from "../../components/case_study_blocks/explainer/ExplainerSection";
import HighlightSection from "../../components/case_study_blocks/highlight/HighlightSection";
import ProcessSection from "../../components/case_study_blocks/process/ProcessSection";

// Images
import project1Img from "../../assets/project1.png";
import researchImg1 from "../../assets/research1.png";
import researchImg2 from "../../assets/research2.png";
import highlightImg1 from "../../assets/highlight1.png";
import highlightImg2 from "../../assets/highlight2.png";
import highlightImg3 from "../../assets/highlight3.png";

// Icons from react-icons
import { FiEye, FiUsers, FiCheckCircle, FiUser, FiClipboard } from "react-icons/fi";

export default function Nomo() {
  const processSteps = [
    { icon: FiUser, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { icon: FiClipboard, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
    { icon: FiCheckCircle, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " },
  ];

  return (
    <CaseStudyLayout>
      {/* HERO */}
      <Hero
        title="NOMO"
        tag="Case Study"
        readTime="6 min read"
        brief="An app that encourages users to take ownership of their food habits while reducing waste through community engagement."
        role="UX Researcher & Designer"
        timeline="October 2024 - May 2025"
        tools="Figma, FigJam"
        contributors="Annie Chang, James Moy, Tony Ngo, Cristina Villavicencio, Ashley Zhang"
        imageSrc={project1Img}
        imageAlt="Nomo product interface"
      />

      {/* EXPLAINER — RESEARCH */}
      <ExplainerSection
        label="Research"
        sectionId="research"
        title="Understanding everyday food waste behaviors"
        body="We conducted interviews and diary studies to understand how people make food decisions at home, where waste occurs most often, and what emotional barriers prevent behavior change."
        imageVariant="two"
        images={[
          { src: researchImg1, alt: "Interview notes" },
          { src: researchImg2, alt: "Affinity mapping" },
        ]}
      />

      {/* HIGHLIGHT — IMAGES */}
      <HighlightSection
        sectionLabel="Key Insights"
        headline="Three patterns in food waste behaviors emerged"
        contentType="images"
        items={[
          highlightImg1,
          highlightImg2,
          highlightImg3,
        ]}
      />

      {/* HIGHLIGHT — TEXT CARDS */}
      <HighlightSection
        sectionLabel="Design Principles"
        headline="How we approached reducing food waste"
        contentType="cards"
        items={[
          {
            icon: FiEye,
            title: "Make it visible",
            description: "Highlight food items in users' kitchens to encourage mindful consumption."
          },
          {
            icon: FiUsers,
            title: "Encourage ownership",
            description: "Use social accountability to promote consistent behavior change."
          },
          {
            icon: FiCheckCircle,
            title: "Reduce friction",
            description: "Simplify meal planning and tracking to make sustainable habits easy."
          },
        ]}
      />

      {/* PROCESS */}
      <ProcessSection
        sectionLabel="Process"
        title="How we approached the problem"
        steps={processSteps}
        variant="three"
        sectionId="process"
      />
    </CaseStudyLayout>
  );
}
