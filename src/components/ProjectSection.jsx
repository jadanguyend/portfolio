// src/components/ProjectsSection.jsx
import { motion } from "framer-motion";

import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const projects = [
  {
    title: "Nomo",
    description: "Helping individuals address food waste by through social accountability and personal ownership",
    tags: ["Redesign", "UI/UX"],
    image: project1Img,
  },
  {
    title: "Beesi",
    description: "Enabling owners to better promote their business and navigate social media algorithms",
    tags: ["B2B Design", "Web App"],
    image: project2Img,
  },
  {
    title: "VietQ",
    description: "A website for the Vietnamese queer community in Seattle to improve usability",
    tags: ["Mobile App", "Redesign"],
    image: project3Img,
  },
];


export default function ProjectsSection() {
  return (
    <section className="px-12 md:px-24 py-12 grid gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="group grid grid-cols-12 gap-x-10 bg-white rounded-[16px] border border-black p-4 md:p-5 transition-colors duration-300 hover:bg-black"
          whileHover={{ scale: 1.00 }}
        >
          {/* Left side: Text */}
          <div className="col-span-12 md:col-span-4 flex flex-col gap-2">
            <h2 className="text-2xl font-heading font-medium italic transition-colors duration-300 group-hover:text-white">
              {project.title}
            </h2>
            <p className="text-gray-800 text-sm transition-colors duration-300 group-hover:text-white">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-black rounded-full text-sm transition-colors duration-300 group-hover:border-white group-hover:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right side: Image */}
          <div className="col-span-12 md:col-span-8 mt-2 md:mt-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-96 object-cover rounded-[12px]"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
