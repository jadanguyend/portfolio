import { motion } from "framer-motion";

import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const projects = [
  {
    title: "Nomo",
    description:
      "Helping individuals address food waste by through social accountability and personal ownership",
    tags: ["Redesign", "UI/UX"],
    image: project1Img,
  },
  {
    title: "Beesi",
    description:
      "Enabling owners to better promote their business and navigate social media algorithms",
    tags: ["B2B Design", "Web App"],
    image: project2Img,
  },
  {
    title: "VietQ",
    description:
      "A website for the Vietnamese queer community in Seattle to improve usability",
    tags: ["Mobile App", "Redesign"],
    image: project3Img,
  },
];

export default function ProjectsSection() {
  return (
    <section className="container py-24 grid gap-6 md:gap-10">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 p-5 bg-white dark:bg-neutral-900 rounded-[16px] border border-[#AAAAAA] dark:border-gray-700 transition-colors duration-300 hover:bg-black dark:hover:bg-gray-800"
          whileHover={{ scale: 1 }}
        >
          {/* Left */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-2 w-full">
            <h2 className="text-2xl md:text-3xl font-heading font-medium italic text-black dark:text-white group-hover:text-white">
              {project.title}
            </h2>
            <p className="text-gray-800 dark:text-gray-300 text-sm md:text-base group-hover:text-white">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 border border-black dark:border-gray-400 rounded-full text-sm md:text-base text-black dark:text-gray-300 group-hover:text-white group-hover:border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="col-span-1 md:col-span-8 mt-4 md:mt-0 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto md:h-96 object-cover rounded-[12px]"
            />
          </div>
        </motion.div>
      ))}

      {/* Empty / CTA Project Card */}
      <motion.div
        className="group grid grid-cols-1 p-6 md:p-8 bg-white dark:bg-neutral-900 rounded-[16px] border-2 border-dashed border-gray-300 dark:border-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-neutral-800"
        whileHover={{ scale: 1 }}
      >
        <div className="flex flex-col items-center justify-center gap-4 h-72 md:h-96 text-center w-full">
          <p className="text-lg md:text-xl font-satoshi text-black dark:text-white transition-colors duration-300">
            Let’s create something{" "}
            <span className="font-heading text-[#183ED8]" style={{ fontStyle: "italic", fontWeight: 500 }}>
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
