import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import project0Img from "../assets/project0.png";
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const projects = [
  {
    type: "Microsoft | Embedded Enterprise Tool",
    title: "AI-Driven Compliance Workflows for Enterprise Teams",
    description:
      "Streamlining enterprise compliance by turning complex regulations into actionable tasks within Teams, Azure DevOps, and Power BI.",
    tags: ["B2B", "Workflow Automation", "AI Integration", "Dashboard Design"],
    image: project0Img,
    href: "/case-studies/radar",
  },
  {
    type: "NOMO | Mobile App",
    title: "Reducing Food Waste Through Social Accountability",
    description:
      "Helping individuals tackle food waste by fostering personal ownership and social accountability.",
    tags: ["Branding", "Design System", "Social Impact"],
    image: project1Img,
    href: "/case-studies/nomo",
  },
  {
    type: "BEESI | Mobile App",
    title: "Social Media Made Simple for Businesses",
    description:
      "Enables business owners to promote their brand effectively while navigating social media algorithms.",
    tags: ["B2B Tools", "Multi-sided platform"],
    image: project2Img,
  },
  {
    type: "VietQ | Website",
    title: "Digital Space for Seattle’s Vietnamese LGBTQ+ Community",
    description:
      "A platform to improve usability and engagement for Seattle’s Vietnamese queer community.",
    tags: ["Community Platform", "Branding"],
    image: project3Img,
  },
];

export default function ProjectsSection() {
  return (
    <section className="container px-16 py-24 grid gap-6 md:gap-10">
      {projects.map((project, index) => {
        const Card = (
          <motion.div
            key={index}
            className="project-card group cursor-pointer"
            whileHover={{ scale: 1 }}
          >
            {/* Left side */}
            <div className="project-card-left flex flex-col justify-between h-full">
              <div className="card-left-top flex flex-col gap-2">
                <p className="project-card-type uppercase">{project.type}</p>
                <h2 className="project-card-title">{project.title}</h2>
              </div>

              <div className="card-left-bottom flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-card-tag uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side */}
            <div className="project-card-right">
              <img
                src={project.image}
                alt={project.title}
                className="project-card-img"
              />
            </div>
          </motion.div>
        );

        return project.href ? (
          <Link key={index} to={project.href} className="block">
            {Card}
          </Link>
        ) : (
          Card
        );
      })}


    </section>
  );
}
