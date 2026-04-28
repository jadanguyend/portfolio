// src/pages/case_studies/Nomo.jsx
import CaseStudyLayout from "../../layouts/CaseStudyLayout";
import Hero from "../../components/case_study_blocks/Hero";
import OverviewSection from "../../components/case_study_blocks/OverviewSection";
import PreviewSection from "../../components/case_study_blocks/PreviewSection";
import ExplainerSection from "../../components/case_study_blocks/explainer/ExplainerSection";
import HighlightSection from "../../components/case_study_blocks/highlight/HighlightSection";
import ProcessSection from "../../components/case_study_blocks/process/ProcessSection";
import QuoteSection from "../../components/case_study_blocks/QuoteSection";
import FeatureSection from "../../components/case_study_blocks/feature/FeatureSection";
import Footer from "../../components/Footer";

// Images
import project1Img from "../../assets/project1.png";
import researchImg1 from "../../assets/research1.png";
import researchImg2 from "../../assets/research2.png";
import highlightImg1 from "../../assets/highlight1.png";
import highlightImg2 from "../../assets/highlight2.png";
import highlightImg3 from "../../assets/highlight3.png";
import featureImg1 from "../../assets/feature1.png";
import featureImg2 from "../../assets/feature2.png";
import featureImg3 from "../../assets/feature3.png";

// Icons
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

  const features = [
    {
      title: "Kitchen visibility",
      description:
        "Users can quickly see what food they have at home, reducing forgotten items and encouraging mindful consumption.",
      imageSrc: featureImg1,
      imageAlt: "Kitchen inventory feature",
    },
    {
      title: "Shared accountability",
      description:
        "Household members can view shared food activity, reinforcing collective ownership over food decisions.",
      imageSrc: featureImg2,
      imageAlt: "Shared accountability feature",
    },
    {
      title: "Low-friction logging",
      description:
        "Lightweight interactions make tracking food use feel natural rather than burdensome.",
      imageSrc: featureImg3,
      imageAlt: "Food logging feature",
    },
  ];

  return (
    <>
      <CaseStudyLayout footer={<Footer />}>
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

        <ExplainerSection
          sectionLabel="Problem"
          sectionId="problem"
          title="People already understand that food waste is bad. Yet waste still happen. Why?"
          body={
            <>
              <p className="mb-4">
                Food waste is often framed as a knowledge or motivation issue. But our research quickly showed something different.
              </p>

              <p className="mb-4">
                Because food decisions happen in moments like:
              </p>

              <ul className="mb-4 list-disc pl-5 space-y-2">
                <li>Rushing to cook after a long day</li>
                <li>Forgetting what’s already in the fridge</li>
                <li>Buying “just in case” groceries</li>
              </ul>

              <p className="mb-4">
                These are not moments of intention—they’re moments of cognitive overload. The problem wasn’t convincing users to care. It was supporting them when they weren’t thinking about it.
              </p>
            </>
          }
          imageVariant="one"
          images={[
            { src: researchImg1, alt: "Interview notes" },
          ]}
        />

        {/* HIGHLIGHT — IMAGES */}
        <HighlightSection
          sectionLabel="Research & Discovery"
          sectionId="research-discovery"
          headline="Good intentions don’t survive busy lives"
          description="Across 13 interviews and 100+ surveys, a clear pattern emerged: The busier someone was, the more food they wasted."
          contentType="images"
          items={[highlightImg1, highlightImg2, highlightImg3]}
        />
      </CaseStudyLayout>
    </>
  );
}
