import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const projects = [
  {
    type: "Mobile App",
    title: "Nomo",
    description:
      "Helping individuals address food waste through social accountability and personal ownership",
    tags: ["Redesign", "UI/UX"],
    image: project1Img,
    href: "/case-studies/nomo",
  },
  {
    type: "Mobile App",
    title: "Beesi",
    description:
      "Enabling owners to better promote their business and navigate social media algorithms",
    tags: ["B2B Design", "Web App"],
    image: project2Img,
  },
  {
    type: "Website Redesign",
    title: "VietQ",
    description:
      "A website for the Vietnamese queer community in Seattle to improve usability",
    tags: ["Mobile App", "Redesign"],
    image: project3Img,
  },
];

export default function ProjectsSection() {
  return (
    <section className="container py-12 grid gap-6 md:gap-10">
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
                <p className="project-card-type">{project.type}</p>
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-card-desc">{project.description}</p>
              </div>

              <div className="card-left-bottom flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-card-tag">
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

      {/* CTA card */}
      <motion.div
        className="project-card-cta group transition-colors duration-300"
        whileHover={{ scale: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 h-72 md:h-96 text-center w-full">
          <p className="text-lg md:text-xl transition-colors duration-300">
            Let’s create something great together!
          </p>
          <a
            href="/contact"
            className="btn-primary font-ibm transition-all duration-300 hover:scale-105"
          >
            Connect
          </a>
        </div>
      </motion.div>
    </section>
  );
}
