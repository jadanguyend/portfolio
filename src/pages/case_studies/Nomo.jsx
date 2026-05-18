// src/pages/case_studies/Nomo.jsx
import CaseStudyLayout from "../../layouts/CaseStudyLayout";
import Hero from "../../components/case_study_blocks/Hero";
import TLDRSection from "../../components/case_study_blocks/TLDRSection";
import OverviewSection from "../../components/case_study_blocks/OverviewSection";
import PreviewSection from "../../components/case_study_blocks/PreviewSection";
import ExplainerSection from "../../components/case_study_blocks/explainer/ExplainerSection";
import HighlightSection from "../../components/case_study_blocks/highlight/HighlightSection";
import ProcessSection from "../../components/case_study_blocks/process/ProcessSection";
import QuoteSection from "../../components/case_study_blocks/QuoteSection";
import FeatureSection from "../../components/case_study_blocks/feature/FeatureSection";
import ReflectionSection from "../../components/case_study_blocks/reflection/ReflectionSection";
import ImageCaptionSection from "../../components/case_study_blocks/ImageCaptionSection";
import Footer from "../../components/Footer";
import NextProject from "../../components/case_study_blocks/NextProject";
import Carousel from "../../components/case_study_blocks/Carousel";

// Images
import placeholderImg from "../../assets/placeholderImg.png";
import nomo_thumbnail from "../../assets/nomo_thumbnail.png";
import nomo_problem from "../../assets/nomo_problem.png";
import nomo_preview_1 from "../../assets/nomo_preview_1.png";
import nomo_preview_2 from "../../assets/nomo_preview_2.png";
import nomo_preview_3 from "../../assets/nomo_preview_3.png";
import nomo_discovery from "../../assets/nomo_discovery.png";
import nomo_attempt_manual_input from "../../assets/nomo_attempt_manual_input.png";
import nomo_attempt_granular_tracking from "../../assets/nomo_attempt_granular_tracking.png";
import nomo_initial_feedback from "../../assets/nomo_initial_feedback.png";
import nomo_feature from "../../assets/nomo_feature.png";
import nomo_bottom_sheet from "../../assets/nomo_bottom_sheet.mp4";
import nomo_discard from "../../assets/nomo_discard.mp4";
import nomo_input from "../../assets/nomo_input.mp4";
import nomo_tradeoff_1 from "../../assets/nomo_tradeoff_1.png";
import nomo_pivot from "../../assets/nomo_pivot.png";
import nomo_expo_1 from "../../assets/nomo_expo_1.png";
import nomo_brainstorm_1 from "../../assets/nomo_brainstorm_1.png";
import nomo_brainstorm_2 from "../../assets/nomo_brainstorm_2.png";
import nomo_sketch_1 from "../../assets/nomo_sketch_1.png";
import nomo_sketch_2 from "../../assets/nomo_sketch_2.png";
import event_thumbnail from "../../assets/event_thumbnail.png";


// Icons
import {
  FiEye,
  FiUsers,
  FiCheckCircle,
  FiUser,
  FiClipboard,
  FiTrendingDown,
  FiDatabase,
  FiRefreshCw,
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
    imageSrc: nomo_bottom_sheet,
    imageAlt: "Bottom sheet interaction showing quick food status updates",
    caption: "A bottom sheet keeps updates lightweight and in-context.",
    mediaType: "video",
    layout: "horizontal",
  },

  {
    title: "Balancing automation and intent",
    description: (
      <>
        <p className="mb-3">
          Full automation removes awareness, while full manual input creates friction and can lead to abandonment.
        </p>

        <p className="mb-3">
          Instead, I designed a system where:
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
    imageSrc: nomo_input,
    imageAlt: "Food input interaction",
    caption:
      "Automation reduces repetitive effort while preserving user awareness.",
    mediaType: "video",
    layout: "horizontal",
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
    imageSrc: nomo_discard,
    imageAlt: "Discard reflection interaction",
    caption:
      "Waste events intentionally slow the interaction to encourage reflection.",
    mediaType: "video",
    layout: "horizontal",
  },
];

  const takeaways = [
    {
      icon: FiTrendingDown,
      title: "Effort is the breaking point",
      description:
        "Even valuable systems fail if they demand too much from users.",
    },
    {
      icon: FiDatabase,
      title: "Data isn’t the product",
      description:
        "Better data has no impact if users disengage.",
    },
    {
      icon: FiEye,
      title: "Awareness over control",
      description:
        "People don’t need to be managed. They need timely, contextual reminders.",
    },
    {
      icon: FiRefreshCw,
      title: "Design for real life",
      description:
        "Systems succeed when they fit into existing routines, reduce effort, and provide immediate value.",
    },
  ];

  return (
    <CaseStudyLayout footer={<Footer />}>
      <Hero
        title="NOMO"
        tag="Case Study"
        readTime="Full"
        brief="An app that supports users in reducing waste by making their consumption patterns more visible and actionable."
        role="UX Researcher & Designer"
        timeline="October 2024 – May 2025"
        tools="Figma, FigJam"
        contributors="Annie Chang, James Moy, Tony Ngo, Cristina Villavicencio, Ashley Zhang"

        imageSrc={nomo_thumbnail}
        imageAlt="Nomo product interface"

        learnMoreContent={
          <>
            <p>NOMO is a conceptual UX design project exploring behavior change in everyday food habits. It is not a shipped product and was created as a design exercise focused on system thinking, interaction design, and behavioral research. </p>
          </>
        }
      />

      <OverviewSection
        sectionLabel="Overview"
        sectionId="overview"
        title="Designing for behavior change in everyday food habits"
        bodyPrimary="Busy young adults often care about reducing food waste but struggle to act on that intention in everyday life due to time pressure and cognitive load.
                      NOMO explores how behavioral design can support these moments through lightweight, awareness-driven interactions."
        bodySecondary="I led the design of the “My Kitchen” feature, translating behavioral research into a system that supports visibility, reflection, and everyday decision-making around food."
        buttonLabel="Jump to Final Design"
        buttonHref="#final-design"
      />

      <PreviewSection
        sectionId="preview"
        sectionLabel="Preview"
        images={[nomo_preview_1, nomo_preview_2, nomo_preview_3]}
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
              These are not moments of intention, they’re <strong> moments of cognitive overload</strong>. The problem wasn’t convincing users to care. It was supporting them when they weren’t thinking about it.
            </p>
          </>
        }
        imageVariant="one"
        images={[{ src: nomo_problem, alt: "Interview notes" }]}
      />

      <HighlightSection
        sectionLabel="Discovery"
        sectionId="research-discovery"
        headline="Good intentions don’t survive busy lives"
        description= {
          <>
            <p className="mb-4">
              Across 13 interviews and 100+ survey responses, a clear pattern emerged: <strong> The busier someone was, the more food they wasted. </strong> 
            </p>
            <p className="mb-4">
              When asked what makes reducing food waste most difficult, <strong> 69% of respondents identified forgetfulness as a primary barrier </strong>. To understand this breakdown, I dug deeper into what causes people to forget food they already own.
            </p>
          </>
        }
        contentType="images"
        items={[nomo_discovery]}
      />

      <QuoteSection
        sectionId="quote"
        sectionLabel="Insight"
        quote={
          <>
            Food waste wasn’t a knowledge gap. It was {" "}
            <span
              className="
                px-1
                rounded-[2px]
                bg-[#D9E992]
                text-grayLight-900
              "
            >
              a behavior gap driven by time pressure and convenience.
            </span>
          </>
        }
        description="Users cared about sustainability but that concern rarely translated into daily behavior. This reframed the problem from an education challenge to a behavior and attention design challenge"
      />

      <ExplainerSection
        sectionLabel="Initial Solution"
        sectionId="initial-approach"
        title="I tried to track everything"
        body={
          <>
            <p className="mb-4">
              Because other product features depended on detailed data,
              I initially optimized for completeness.
            </p>

            <p className="mb-4">
              I assumed more data = better product experience
            </p>
          </>
        }
        imageVariant="three"
        imageLayout="vertical"
        images={[
          {
            src: nomo_attempt_manual_input,
            alt: "Tracking flow",
            caption: "The original flow prioritized complete data capture.",
          },
          {
            src: nomo_attempt_granular_tracking,
            alt: "Inventory logging",
            caption: "Users were expected to manually maintain inventory.",
          },
        ]}
      />

      <HighlightSection
        sectionLabel="Testing"
        sectionId="testing"
        headline="Friction showed up instantly. The issue wasn’t confusion but resistance. The system felt like work."
        contentType="images"
        items={[nomo_initial_feedback]}
      />

      <ExplainerSection
        sectionLabel="Pivot"
        sectionId="pivot"
        title="I had been designing for an ideal user"
        body={
          <>
            <p className="mb-4">
              The process required constant input, sustained attention, and perfect compliance.
            </p>
            <p className="mb-4">
              Real life doesn’t work that way. The more we asked from users, the less they engaged.
            </p>
            <p className="mb-4 font-bold">
              Am I designing for data or behavior change?
            </p>
          </>
        }
        imageVariant="one"
        images={[
          { src: nomo_pivot, alt: "Interview notes" },
        ]}
      />

      <HighlightSection
        sectionLabel="Design Principles"
        sectionId="design-principles"
        headline="Designing for real behavior, not ideal behavior"
        contentType="cards"
        iconColor="#A6C853"
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
              "Users avoid effort-heavy systems so input must feel lightweight.",
          },
          {
            icon: FiCheckCircle,
            title: "Support over control",
            description:
              "Users resist micromanagement so the system should guide, not demand.",
          },
        ]}
      />

      <FeatureSection
        sectionId="final-design"
        sectionLabel="Final Design"
        introTitle="Designing My Kitchen as an awareness layer"
        introBody={
          <>
            <p className="mb-4">
              “My Kitchen” became a behavioral interface centered around:
            </p>
            <ul className="mb-4 list-disc pl-5 space-y-2">
              <li>What do I have?</li>
              <li>What’s happening to it?</li>
              <li>What needs my attention?</li>
            </ul>
          </>
        }
        introImageSrc={nomo_feature}
        introImageAlt="Final NOMO design overview"
        features={features}
      />

      <ReflectionSection
        sectionLabel="Tradeoffs"
        sectionId="tradeoffs-reflection"
        headline="Less precision, more sustained engagement"
        description={
          <>
            <p className="mb-4">
              We shifted from optimizing for data accuracy to designing for long-term usability in real-world conditions.
            </p>

            <p className="mb-4">
              This introduced intentional tradeoffs:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Financial insights became more approximate, but still meaningful</li>
              <li>Streaks reflected consistency, not perfection</li>
            </ul>

            <p className="mt-4">
              The goal was no longer precision — it was sustained engagement in real usage contexts.
            </p>
          </>
        }        
        imageVariant="one"
        items={[nomo_tradeoff_1,placeholderImg]}
      />

      <ProcessSection
        sectionId="reflection"
        sectionLabel="Reflection"
        title="What this project taught me"
        steps={takeaways}
        variant="three"
        iconColor="#A6C853"
      />

      {/* <ImageCaptionSection
        sectionId="screens"
        sectionLabel="Final Screens"
        layout="horizontal"
        items={[
          { src: placeholderImg, caption: "Add caption here" },
          { src: placeholderImg, caption: "Add caption here" },
          { src: placeholderImg, caption: "Add caption here" },
        ]}
      /> */}

      <Carousel
        sectionId="bts"
        sectionLabel="Behind the Scenes"
        duration={45}
        caption="Some of the most valuable moments happened away from the screens, through critique sessions, whiteboards, and collaborative problem solving. A lot of this project came from constantly learning from and building alongside my incredible team. #FunBunz"
        images={[
          { src: nomo_expo_1, alt: "Iteration 1" },
          { src: nomo_brainstorm_1, alt: "Iteration 2" },
          { src: nomo_sketch_1, alt: "Iteration 3" },
          { src: nomo_brainstorm_2, alt: "Iteration 4" },
          { src: nomo_sketch_2, alt: "Iteration 5" },
        ]}
      />

      <NextProject
        title="Event Services at UW"
        description="Redesigning information architecture and scalable policy systems for university event planning."
        imageSrc={event_thumbnail}
        imageAlt="Event Services preview"
        projectLink="/case-studies/event"
      />
    </CaseStudyLayout>
  );
}