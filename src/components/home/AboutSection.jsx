import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "3", label: "Companies" },
  { value: "Full", label: "Stack" },
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Leadership",
  "Team Work",
  "Attention to Detail",
  "Adaptability",
];

export default function AboutSection() {
  return (
    <section className="py-28 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
              Building the web,
              <br />
              <span className="text-[#6366f1]">front to back.</span>
            </h2>
            <p className="text-[#6b7280] text-base leading-relaxed mb-6">
              With over 7 years of experience in software development, I possess
              the ability to learn and collaborate in rapidly changing
              environments, bringing an innovative approach to every challenge.
            </p>
            <p className="text-[#6b7280] text-base leading-relaxed mb-8">
              I have a deep understanding of both front-end and back-end aspects
              of web development, and I'm excited to contribute to the creation
              of innovative web applications that make a real impact.
            </p>

            {/* Soft Skills */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563] mb-4">
                Soft Skills
              </p>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm text-[#9ca3af] border border-[#1f1f1f] bg-[#111111]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Stats + Education */}
          <div className="space-y-8">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl border border-[#1f1f1f] bg-[#111111] text-center"
                >
                  <div className="text-3xl font-black text-[#6366f1] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[#6b7280] text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[#1f1f1f] bg-[#111111] space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563]">
                Education
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#6366f1] text-xs font-bold">BE</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      Sathyabama University
                    </h4>
                    <p className="text-[#6b7280] text-sm">
                      Bachelors in Engineering – Civil
                    </p>
                    <p className="text-[#4b5563] text-xs mt-0.5">2012 – 2016</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#8b5cf6] text-xs font-bold">HS</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">
                      St. Mary's A.I.Hr.Sec School
                    </h4>
                    <p className="text-[#6b7280] text-sm">
                      High School – Chennai
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-[#1f1f1f] bg-[#111111]"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4b5563] mb-4">
                Languages
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: "English", level: "Fluent" },
                  { lang: "Tamil", level: "Native" },
                  { lang: "German", level: "A1" },
                ].map(({ lang, level }) => (
                  <div key={lang} className="flex items-center gap-2">
                    <span className="text-white text-sm font-medium">{lang}</span>
                    <span className="text-[#4b5563] text-xs">{level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}