import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Interview Screening Platform",
    description:
      "Built a responsive recruiter & candidate interface for an AI-powered interview workflow system with customizable questions and automated insights.",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    title: "RTC – Calls & Chat Platform",
    description:
      "Real-time communication platform with agent & supervisor dashboards and micro-frontend architecture.",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    title: "Cloud Kitchen ERP",
    description:
      "Developed high-performance UI for a cloud-kitchen ERP, optimizing rendering and data flow for faster and scalable operations.",
    tech: ["React", "Redux", "Node.js", "Tailwind", "Jest"],
  },
  {
    title: "UpstartHive – Startup Blog & Content Platform (Personal Project)",
    description:
      "Built a high-performance startup content platform using a headless CMS with dynamic blogs, stories, and news, optimized for SEO and scalable content delivery.",
    tech: [
      "Gatsby",
      "React",
      "GraphQL",
      "Apollo Client",
      "Tailwind",
      "Headless CMS",
      "SEO",
    ],
    live: "https://upstarthive.com/",
  },
  {
    title: "BuildTrack – Construction Management Platform",
    description:
      "Client-facing system to monitor construction progress with stage-wise updates, site images, and milestone-based delivery schedules.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    title: "Warehouse Inventory Management System",
    description:
      "Implemented real-time inventory tracking with threshold-based auto notifications to prevent stockouts and streamline warehouse operations.",
    tech: ["React", "Redux", "Tailwind"],
  },
  {
    title: "YTT Enterprise Web Application",
    description:
      "End-to-end full-stack system with API integrations, database design, and scalable architecture for business workflows.",
    tech: ["React", "Redux", "Node.js", "MongoDB", "Bootstrap", "Swagger"],
    live: "https://www.yourtrucktax.com/",
  },
  {
    title: "Team Space – Collaboration Tool",
    description:
      "Role-based collaboration system with task management, video meetings, and file sharing.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "Jasmine Enterprises – Corporate Website",
    description:
      "Developed a responsive static business website with modern UI, optimized performance, and mobile-first layout for better customer reach.",
    tech: ["React", "Tailwind"],
    live: "https://jasmineenterprises.in/",
  },
  {
    title: "Trade View AI",
    description:
      "Financial analytics platform with dynamic charting and real-time market data integration.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    title: "Techage International – Company Website",
    description:
      "Built a fast-loading static corporate site with structured content, clean design, and cross-device compatibility.",
    tech: ["React", "Tailwind"],
    live: "https://www.techageinternational.in/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        {/* Heading */}
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

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#6366f1] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Content */}
              <div>
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
              </div>

              {/* Conditional Links */}
              {(project.github || project.live) && (
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9ca3af] hover:text-white transition"
                    >
                      <Github size={18} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9ca3af] hover:text-white transition"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
