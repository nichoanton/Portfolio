import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Front-End",
    color: "#6366f1",
    skills: ["React", "Redux", "JavaScript", "HTML/CSS", "Tailwind CSS", "Bootstrap", "Apollo Client"],
  },
  {
    category: "Back-End",
    color: "#8b5cf6",
    skills: ["Node.js", "Express", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    color: "#ec4899",
    skills: ["MongoDB", "Firebase"],
  },
  {
    category: "Testing",
    color: "#f59e0b",
    skills: ["Jest", "Mocha", "React Testing Library"],
  },
  {
    category: "Project Management",
    color: "#10b981",
    skills: ["Agile", "Scrum", "Jira"],
  },
  {
    category: "Tools",
    color: "#06b6d4",
    skills: ["Git", "Postman", "Swagger"],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-28 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[#1f1f1f] bg-[#111111] hover:border-[#2a2a2a] transition-colors duration-300"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${group.color}18`, border: `1px solid ${group.color}30` }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: group.color }}
                />
              </div>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium text-[#9ca3af] border border-[#2a2a2a] bg-[#0A0A0A]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}