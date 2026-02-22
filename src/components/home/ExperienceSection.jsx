import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    company: "CONTUS TECH",
    role: "Senior Software Developer G1",
    period: "Nov 2024 – Mar 2025",
    type: "Full-Time",
    responsibilities: [
      "Architected scalable and high-performance software solutions by designing robust application structures, ensuring maintainability, and adhering to best practices for enterprise-grade applications.",
      "Led cross-functional teams in implementing Agile methodologies, facilitating sprint planning, and driving collaboration to meet project deadlines effectively.",
      "Mentored junior developers by conducting code reviews, providing technical guidance, and fostering skill development to enhance overall team productivity.",
    ],
    projects: [
      {
        name: "Masdr",
        role: "Senior Software Developer",
        tech: ["React.js", "Redux", "Tailwind", "Git"],
        points: [
          "Developed a comprehensive calls and chat platform with real-time messaging and call management features.",
          "Designed and implemented Agent and Supervisor Dashboards to monitor performance and manage interactions.",
          "Led the team in adopting Micro Frontend Architecture for modular and scalable application development.",
        ],
      },
    ],
  },
  {
    company: "NIMBLIANT",
    role: "Full Stack Developer",
    period: "Jul 2024 – Nov 2024",
    type: "Full-Time",
    responsibilities: [
      "Designed and developed end-to-end web applications by building robust front-end interfaces and efficient back-end systems.",
      "Integrated third-party APIs and services to enhance application functionality and scalability.",
      "Optimized application performance by implementing best practices in database design, caching, and server-side optimizations.",
    ],
    projects: [
      {
        name: "Team Space",
        role: "Full Stack Developer",
        tech: ["React", "Redux", "Tailwind CSS", "Node.js", "MongoDB", "Jest", "Git"],
        points: [
          "Designed and developed Team Space software for seamless collaboration, real-time communication, and task management.",
          "Implemented role-based access and dashboards for team members and managers.",
          "Architected scalable Frontend Architecture enabling independent deployments and feature scaling.",
          "Integrated third-party services including file sharing, video conferencing, and calendar synchronization.",
        ],
      },
    ],
  },
  {
    company: "YTT LLC",
    role: "Full Stack Web Developer",
    period: "Aug 2020 – Jun 2024",
    type: "Full-Time",
    responsibilities: [
      "Responsible for planning, developing, and testing web applications to ensure optimal functionality and user experience.",
      "Developed and maintained APIs to seamlessly integrate with third-party services and data sources.",
      "Implemented Scrum methodology and actively participated in sprint planning sessions.",
    ],
    projects: [
      {
        name: "YTT Web Application",
        role: "Full Stack Developer",
        tech: ["React.js", "Redux", "Bootstrap", "Node.js", "Jest", "MongoDB", "Swagger", "Git"],
        points: [
          "Developed front-end and back-end components, ensuring seamless functionality.",
          "Created and maintained server-side logic and database interactions.",
          "Designed and maintained database schemas and data models.",
        ],
      },
      {
        name: "Cloud Kitchen Project",
        role: "Front-End Developer",
        tech: ["React.js", "Node.js", "Redux", "Tailwind", "Git", "Jest"],
        points: [
          "Developed and maintained user interface components using ReactJS for an ERP system tailored for a cloud kitchen application.",
          "Collaborated with cross-functional teams to implement new features and enhancements.",
          "Optimized application performance by identifying and resolving bottlenecks in UI rendering.",
        ],
      },
      {
        name: "Trade View AI",
        role: "Full Stack Developer",
        tech: ["React.js", "Redux", "Node.js", "Tailwind", "MongoDB", "Git"],
        points: [
          "Developed and maintained front-end and back-end components for Trade View AI web app.",
          "Integrated APIs and data sources for real-time market data and analysis.",
          "Integrated financial accounts for interactive customer experience with dynamic charting functionality.",
        ],
      },
      {
        name: "Interview App",
        role: "Front-End Developer",
        tech: ["React.js", "Tailwind", "Git", "Jest", "React Testing Library"],
        points: [
          "Led the development of an interview application integrated with AI technologies for the hiring process.",
          "Designed and implemented intuitive interfaces for both candidates and recruiters.",
          "Conducted extensive testing and validation of AI-driven features ensuring accuracy and bias mitigation.",
        ],
      },
    ],
  },
  {
    company: "Amazon",
    role: "Digital Associate – Testing",
    period: "Aug 2019 – Aug 2020",
    type: "Full-Time",
    responsibilities: [
      "Conducted manual testing, creating and executing comprehensive test cases for Amazon device functionality.",
      "Collaborated with developers to identify and resolve bugs, providing feedback on usability.",
      "Iteratively refined test cases based on feedback and results from testing cycles.",
      "Worked closely with developers, product managers, and QA engineers to troubleshoot and resolve identified issues.",
    ],
    projects: [],
  },
];

function ExperienceCard({ exp, index }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#6366f1] to-transparent" />
      {/* Timeline dot */}
      <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-[#6366f1] border-2 border-[#0A0A0A]" />

      <div
        className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 hover:border-[#2a2a2a] transition-all duration-300 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1 flex-wrap">
              <h3 className="text-white font-bold text-lg">{exp.company}</h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#6366f1]/10 text-[#a5b4fc] border border-[#6366f1]/20">
                {exp.type}
              </span>
            </div>
            <p className="text-[#9ca3af] font-medium">{exp.role}</p>
            <p className="text-[#4b5563] text-sm mt-1">{exp.period}</p>
          </div>
          <button className="text-[#4b5563] hover:text-white transition-colors flex-shrink-0 mt-1">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-5 border-t border-[#1f1f1f] space-y-3">
                {exp.responsibilities.map((r, i) => (
                  <div key={i} className="flex gap-3 text-sm text-[#6b7280] leading-relaxed">
                    <span className="text-[#6366f1] mt-1 flex-shrink-0">▸</span>
                    {r}
                  </div>
                ))}
              </div>

              {exp.projects.length > 0 && (
                <div className="mt-6 space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563]">
                    Projects
                  </p>
                  {exp.projects.map((proj) => (
                    <div
                      key={proj.name}
                      className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1a1a1a]"
                    >
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <h4 className="text-white font-semibold">{proj.name}</h4>
                        <span className="text-xs text-[#6b7280]">{proj.role}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-xs bg-[#6366f1]/10 text-[#a5b4fc]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-1.5">
                        {proj.points.map((p, i) => (
                          <div key={i} className="flex gap-2 text-xs text-[#6b7280] leading-relaxed">
                            <span className="text-[#6366f1] flex-shrink-0">•</span>
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="py-28 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
            Career
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Work Experience
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}