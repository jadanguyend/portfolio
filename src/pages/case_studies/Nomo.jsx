// src/pages/case_studies/Nomo.jsx
import CaseStudyLayout from "../../layouts/CaseStudyLayout";
import Hero from "../../components/case_study_blocks/Hero";
import OverviewSection from "../../components/case_study_blocks/OverviewSection";
import ExplainerSection from "../../components/case_study_blocks/explainer/ExplainerSection";
import HighlightSection from "../../components/case_study_blocks/highlight/HighlightSection";
import ProcessSection from "../../components/case_study_blocks/process/ProcessSection";
import QuoteSection from "../../components/case_study_blocks/QuoteSection";

// Images
import project1Img from "../../assets/project1.png";
import researchImg1 from "../../assets/research1.png";
import researchImg2 from "../../assets/research2.png";
import highlightImg1 from "../../assets/highlight1.png";
import highlightImg2 from "../../assets/highlight2.png";
import highlightImg3 from "../../assets/highlight3.png";

// Icons from react-icons
import {
  FiEye,
  FiUsers,
  FiCheckCircle,
  FiUser,
  FiClipboard,
} from "react-icons/fi";

export default function Nomo() {
  const processSteps = [
    {
      icon: FiUser,
      description:
        "We began by identifying real-world food waste behaviors through user interviews and diary studies to understand where breakdowns occurred.",
    },
    {
      icon: FiClipboard,
      description:
        "Insights were synthesized into clear opportunity areas that informed how accountability and ownership could be designed into daily habits.",
    },
    {
      icon: FiCheckCircle,
      description:
        "These insights directly shaped features that made sustainable behaviors visible, lightweight, and socially reinforced.",
    },
  ];

  return (
    <>
      {/* GRID-CONSTRAINED CASE STUDY CONTENT */}
      <CaseStudyLayout>
        {/* HERO */}
        <Hero
          title="NOMO"
          tag="Case Study"
          readTime="6 min read"
          brief="An app that encourages users to take ownership of their food habits while reducing waste through community engagement."
          role="UX Researcher & Designer"
          timeline="October 2024 – May 2025"
          tools="Figma, FigJam"
          contributors="Annie Chang, James Moy, Tony Ngo, Cristina Villavicencio, Ashley Zhang"
          imageSrc={project1Img}
          imageAlt="Nomo product interface"
        />

        {/* OVERVIEW */}
        <OverviewSection
            sectionLabel="Overview"
            sectionId="overview"
            title="Reducing food waste through accountability and visibility"
            bodyPrimary="NOMO is a mobile application designed to help individuals better understand and manage their food habits through social accountability and behavioral nudges."
            bodySecondary="By making food consumption more visible and encouraging shared ownership, NOMO aims to reduce everyday food waste while fostering more sustainable routines."
            buttonLabel="View final design"
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
          items={[highlightImg1, highlightImg2, highlightImg3]}
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
              description:
                "Highlight food items in users' kitchens to encourage mindful consumption.",
            },
            {
              icon: FiUsers,
              title: "Encourage ownership",
              description:
                "Use social accountability to promote consistent behavior change.",
            },
            {
              icon: FiCheckCircle,
              title: "Reduce friction",
              description:
                "Simplify meal planning and tracking to make sustainable habits easy.",
            },
          ]}
        />

        {/* PROCESS */}
        <ProcessSection
          sectionId="process"
          sectionLabel="Process"
          title="How we approached the problem"
          steps={processSteps}
          variant="three"
        />
      </CaseStudyLayout>

      {/* FULL-BLEED QUOTE SECTION */}
      <QuoteSection
        sectionId="quote"
        label="Key Takeaway"
        quote="Reducing food waste isn’t about awareness — it’s about designing habits people can actually sustain."
      />
    </>
  );
}
