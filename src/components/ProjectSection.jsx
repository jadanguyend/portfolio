import { motion } from "framer-motion";

import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const projects = [
  { title: "Nomo", description: "Helping individuals address food waste by through social accountability and personal ownership", tags: ["Redesign", "UI/UX"], image: project1Img },
  { title: "Beesi", description: "Enabling owners to better promote their business and navigate social media algorithms", tags: ["B2B Design", "Web App"], image: project2Img },
  { title: "VietQ", description: "A website for the Vietnamese queer community in Seattle to improve usability", tags: ["Mobile App", "Redesign"], image: project3Img },
];

export default function ProjectsSection() {
  return (
    <section className="container py-24 grid gap-6 md:gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card group"
          whileHover={{ scale: 1 }}
        >
          <div className="project-card-left">
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="project-card-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-card-right">
            <img src={project.image} alt={project.title} className="project-card-img" />
          </div>
        </motion.div>
      ))}

      <motion.div
        className="project-card-cta group"
        whileHover={{ scale: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 h-72 md:h-96 text-center w-full">
          <p className="text-lg md:text-xl font-body">
            Let’s create something{" "}
            <span
              className="font-heading text-accent"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              great
            </span>{" "}
            together!
          </p>
          <a href="/contact" className="btn-primary">
            Connect
          </a>
        </div>
      </motion.div>

    </section>
  );
}
