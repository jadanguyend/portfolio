import CaseStudyLayout from "../../layouts/CaseStudyLayout";
import Hero from "../../components/case_study_blocks/Hero";
import project1Img from "../../assets/project1.png";

export default function Nomo() {
  return (
    <CaseStudyLayout>
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
    </CaseStudyLayout>
  );
}
