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

export default function Radar() {
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
          title="RADAR"
          tag="Case Study"
          readTime="6 min read"
          brief="Streamlining enterprise compliance by turning complex regulations into actionable tasks"
          role="UX Researcher & Designer"
          timeline="Jan 2026 - Present"
          tools="Micrsoft Copilot Studio, Azure DevOps, Power BI, Visio"
          contributors="Bright Hoang, Lucy Lin, Nathan Salman Joshua Taylor"
          imageSrc={project1Img}
          imageAlt="Nomo product interface"
        />
        {/* TEMP PROJECT INFO */}
        <section className="col-span-12">

        {/* GOALS */}
        <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Goals</h2>
            <p> Our goal for this project is to integrate AI into existing tools to support real-world enterprise adoption 
                by transforming complex regulations into actionable engineering workflows, 
                ultimately reducing manual effort and improving compliance efficiency and traceability.</p>
            <p className="italic mt-4 text-gray-600">
            I want to design intuitive interfaces that make compliance data understandable and actionable, and ensure dashboards support decision-making for different user roles.
            </p>
        </div>

        {/* PROCESS */}
        <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Process</h2>
            <p>
                We conducted stakeholder interviews to understand key pain points and synthesized our findings into clear opportunity areas. In collaboration with our partner team (TASAH), we defined the end-to-end system flow to ensure alignment between AI outputs and engineering workflows. We then iterated on workflow structures within Azure DevOps and validated our concepts through user feedback to ensure clarity, usability, and real-world applicability.
            </p>
            <p className="italic mt-4 text-gray-600">
            I designed dashboard wireframes and high-fidelity prototypes, translated complex compliance data into clear, user-friendly visualizations, and iterated on designs based on feedback to improve usability and clarity.
            </p>
        </div>

        {/* TAKEAWAYS */}
        <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Takeaways</h2>
            <p>
                Clear, actionable outputs are critical for adoption in compliance workflows, as users need to immediately understand what steps to take. Simplicity and seamless integration into existing tools are key drivers of real-world usage, ensuring the system fits naturally into established processes. Additionally, building trust in AI requires transparency in how outputs are generated, along with meaningful human oversight to validate decisions in regulated environments.
            </p>
            <p className="italic mt-4 text-gray-600">
            I learned to design within ambiguity, especially when requirements and systems were still evolving, and recognized the importance of documentation for aligning cross-functional teams and ensuring continuity.
            </p>
        </div>

        {/* NEXT STEPS */}
        <div className="py-6">
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <ul className="list-disc pl-5 space-y-2">
            <li>Integrate systems into a unified platform</li>
            <li>Refine workflows and expand dashboard capabilities</li>
            <li>Pilot with real users to measure impact</li>
            </ul>
            <p className="italic mt-4 text-gray-600">
            I will further refine dashboard designs based on real usage and feedback, improve documentation and design systems for scalability, and continue developing skills in enterprise UX and AI-integrated products.
            </p>
        </div>

        </section>
      </CaseStudyLayout>
    </>
  );
}
