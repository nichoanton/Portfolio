import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Masdr – Calls & Chat Platform",
    description:
      "Real-time communication platform with agent & supervisor dashboards and micro-frontend architecture.",
    tech: ["React", "Redux", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Team Space – Collaboration Tool",
    description:
      "Role-based collaboration system with task management, video meetings, and file sharing.",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Trade View AI",
    description:
      "Financial analytics platform with dynamic charting and real-time market data integration.",
    tech: ["React", "Node", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#6366f1] transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-[#6b7280] text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-[#6366f1]/10 text-[#a5b4fc] px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github}>
                  <Github
                    size={18}
                    className="text-[#9ca3af] hover:text-white"
                  />
                </a>
                <a href={project.live}>
                  <ExternalLink
                    size={18}
                    className="text-[#9ca3af] hover:text-white"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

