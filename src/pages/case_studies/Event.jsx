// src/pages/case_studies/VietQ.jsx
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
import event_thumbnail from "../../assets/event_thumbnail.png";

// Icons
import {
  FiEye,
  FiUsers,
  FiCheckCircle,
  FiUser,
  FiClipboard,
} from "react-icons/fi";

export default function VietQ() {
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
          title="UW Event Services"
          tag="Case Study"
          readTime="6 min read"
          brief="An app that encourages users to take ownership of their food habits while reducing waste through community engagement."
          role="Web Content Designer"
          timeline="June 2025 – June 2026"
          tools="Figma, Figjam, Wordpress"
          contributors="Jada Nguyen, Marie Supanich"
          imageSrc={event_thumbnail}
          imageAlt="VietQ product interface"
        />

      </CaseStudyLayout>
    </>
  );
}
