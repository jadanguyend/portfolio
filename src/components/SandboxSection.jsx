// src/components/home/SandboxSection.jsx

import { motion } from "framer-motion";

import placeholderImg from "../assets/placeholderImg.png";
import soma_thumbnail from "../assets/soma_thumbnail.webp";
import songhoa_thumbnail from "../assets/songhoa_thumbnail.webp";
import atlas_thumbnail from "../assets/atlas_thumbnail.webp";

const projects = [
  {
    title: "Designing Interfaces for 'Embarrassing' Superpowers",
    meta: ["SOMA", "SPECULATIVE DESIGN"],
    image: soma_thumbnail,
  },
  {
    title: "Can Tea Ritual and Coffee Culture Coexist?",
    meta: ["SONGHOA", "CAFE BRANDING"],
    image: songhoa_thumbnail,
  },
  {
    title: "Interactive Mapping for Fragrance Discovery",
    meta: ["ATLAS", "CREATIVE CODING PROJECT"],
    image: atlas_thumbnail,
  },
];

export default function SandboxSection() {
  return (
    <section className="container px-16 pb-12">

      <div className="mt-16 mb-4">
        <h6>Sandbox & Side Projects</h6>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className="sandbox-card magnetic-target group"
            
          >
            <div className="sandbox-card-img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="sandbox-card-img"
              />
            </div>

            <h4 className="sandbox-card-title">
              {project.title}
            </h4>

            <h6 className="sandbox-card-meta">
              {project.meta.join("  |  ")}
            </h6>
          </motion.article>
        ))}
      </div>
    </section>
  );
}