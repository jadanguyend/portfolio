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
import placeholderImg from "../../assets/placeholderImg.png";

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
    title: "Actions without context switching",
    description: (
      <>
        <p className="mb-3">
          I prioritize in-context actions over full flows because users often interact in short bursts while multitasking, 
          so the system needed to support immediate action without breaking context.   
        </p>
        <p>
          The bottom sheet enables users to make updates instantly where the decision happens, without navigating away or losing momentum.
        </p>
      </>
    ),
    imageSrc: placeholderImg,
    imageAlt: "Kitchen inventory feature",
  },
  {
    title: "Balancing automation and intent",
    description: (
      <>
        <p className="mb-3">
          Full automation removes awareness, while full manual input creates friction and can lead to abandonment.
        </p>
        <p className="mb-3">
          Instead, I designed an system where: 
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-3">
          <li>Repetitive or low-value actions are automated,</li>
          <li>Meaningful updates require lightweight user confirmation</li>
        </ul>
        <p className="mb-3">
          This keeps interaction effort aligned with cognitive value.
        </p>
      </>
    ),
    imageSrc: placeholderImg,
    imageAlt: "Shared accountability feature",
  },
  {
    title: "Reflection-based feedback loop",
    description: (
      <>
        <p className="mb-3">
          Instead of treating all food interactions as equal logs, I reframed outputs into two modes: action and reflection.
        </p>
        <p className="mb-3">
          Food consumption is designed to be quick and low-friction. Food waste or expiry introduces a slightly longer interaction that prompts reflection.
        </p>
        <p className="mb-3">
          This turns waste events into moments of awareness, helping users recognize patterns without requiring constant attention.
        </p>
      </>
    ),
    imageSrc: placeholderImg,
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
          imageSrc={placeholderImg}
          imageAlt="Nomo product interface"
        />

        {/* OVERVIEW */}
        <OverviewSection
          sectionLabel="Overview"
          sectionId="overview"
          title="Insert heading here"
          bodyPrimary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
          bodySecondary="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          buttonLabel="View final design"
        />

        {/* PREVIEW */}
        <PreviewSection
          sectionId="preview"
          sectionLabel="Preview"
          images={[placeholderImg, placeholderImg, placeholderImg]}
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
            { src: placeholderImg, alt: "Interview notes" },
          ]}
        />

        {/* HIGHLIGHT — IMAGES */}
        <HighlightSection
          sectionLabel="Discovery"
          sectionId="research-discovery"
          headline="Good intentions don’t survive busy lives"
          description="Across 13 interviews and 100+ survey responses, a clear pattern emerged: The busier someone was, the more food they wasted."
          contentType="images"
          items={[placeholderImg, placeholderImg, placeholderImg]}
        />

        {/* QUOTE */}
        <QuoteSection
          sectionId="quote"
          sectionLabel="Insight"
          quote="Food waste wasn’t a knowledge gap. It was a behavior gap driven by time pressure and convenience."
          description="Users cared about sustainability but that concern rarely translated into daily behavior. This reframed the problem from an education challenge to a behavior and attention design challenge"
        />

        {/* HIGHLIGHT — TEXT CARDS */}
        <HighlightSection
          sectionLabel="Design Principles"
          sectionId="design-principles"
          headline="Designing for real behavior, not ideal behavior"
          contentType="cards"
          items={[
            {
              icon: FiEye,
              title: "Visibility over memory",
              description:
                "Users forget what they own so information must be visible without effort.",
            },
            {
              icon: FiUsers,
              title: "Low friction over completeness",
              description:
                "Users avoid effort-heavy systems so input must feel lightweight and optional.",
            },
            {
              icon: FiCheckCircle,
              title: "Support over control",
              description:
                "Users resist micromanagement so the system should guide, not demand.",
            },
          ]}
        />

        <ExplainerSection
          sectionLabel="Initial Solution"
          sectionId="Our Initial Approach"
          title="I tried to track everything"
          body={
            <>
              <p className="mb-4">
                Because other product features (financial insights, streaks, community comparisons) depended on detailed data, I initially optimized for completeness.
              </p>

              <p className="mb-4">
                I assumed more data = better product experience
              </p>
            </>
          }
          imageVariant="three"
          images={[
            { src: placeholderImg, alt: "Interview notes" },
            { src: placeholderImg, alt: "Interview notes" },
            { src: placeholderImg, alt: "Interview notes" },
          ]}
        />

        {/* HIGHLIGHT — IMAGES */}
        <HighlightSection
          sectionLabel="Testing"
          sectionId="Testing"
          headline="Friction showed up instantly. The issue wasn’t confusion but resistance. The system felt like work."
          contentType="images"
          items={[placeholderImg]}
        />


        <ExplainerSection
          sectionLabel="Pivot"
          sectionId="Pivot"
          title="I had been designing for an ideal user"
          body={
            <>
              <p className="mb-4">
                The process I designed constant input, sustained attention, and perfect compliance.
              </p>

              <p className="mb-4">
                 Real life doesn’t work that way. The more we asked from users, the less they engaged.
              </p>

              <p className="mb-4 font-bold">
                 Am I designing for data or behavior change?
              </p>
            </>
          }
          imageVariant="two"
          images={[
            { src: placeholderImg, alt: "Interview notes" },
            { src: placeholderImg, alt: "Interview notes" },
          ]}
        />

        {/* HIGHLIGHT — TEXT CARDS */}
        <HighlightSection
          sectionLabel="Design Principles"
          sectionId="design-principles"
          headline="I should be designing for real behavior, not ideal behavior"
          contentType="cards"
          items={[
            {
              icon: FiEye,
              title: "Visibility over memory",
              description:
                "Users forget what they own so information must be visible without effort.",
            },
            {
              icon: FiUsers,
              title: "Low friction over completeness",
              description:
                "Users avoid effort-heavy systems so input must feel lightweight and optional.",
            },
            {
              icon: FiCheckCircle,
              title: "Support over control",
              description:
                "Users resist micromanagement so the system should guide, not demand.",
            },
          ]}
        />

        {/* FEATURE SECTION — FINAL DESIGN */}
        <FeatureSection
          sectionId="final-design"
          sectionLabel="Final Design"
          introTitle="Designing My Kitchen as an awareness layer"
          introBody={
            <>
              <p className="mb-4">
                “My Kitchen” became a behavioral interface centered around three simple questions:
              </p>
              <ul className="mb-4 list-disc pl-5 space-y-2">
                <li>What do I have?</li>
                <li>What’s happening to it?</li>
                <li>What needs my attention?</li>
              </ul>

              <p className="mb-4">
                Instead of acting as a control dashboard, it became a lightweight awareness layer.              
              </p>
            </>
          }
          introImageSrc={placeholderImg}
          introImageAlt="Final NOMO design overview"
          features={features}
        />
      </CaseStudyLayout>
    </>
  );
}
