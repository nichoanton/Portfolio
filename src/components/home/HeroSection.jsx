import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, BookOpen } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 text-[#a5b4fc] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#6366f1] animate-pulse" />
          Available for new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-none"
        >
          Nicho
          <br />
          <span className="text-[#6366f1]">Antony</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-[#9ca3af] font-light tracking-widest uppercase mb-6"
        >
          Full Stack Software Developer
        </motion.p>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#6b7280] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12"
        >
          7+ years crafting scalable web applications. Deep expertise in React,
          Node.js, and modern full-stack architecture — from pixel-perfect UIs
          to robust APIs.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="mailto:nichoanton05@gmail.com"
            className="px-8 py-4 bg-[#6366f1] hover:bg-[#5254cc] text-white rounded-lg font-semibold text-base transition-all duration-200 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border border-[#2d2d2d] hover:border-[#6366f1] text-[#9ca3af] hover:text-white rounded-lg font-semibold text-base transition-all duration-200"
          >
            View Projects
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/nichoanton",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/nicho-antony-664218209",
              label: "LinkedIn",
            },
            {
              icon: BookOpen,
              href: "https://medium.com/@nichoanton05",
              label: "Medium",
            },
            {
              icon: Mail,
              href: "mailto:nichoanton05@gmail.com",
              label: "Email",
            },
            { icon: Phone, href: "tel:+919962357352", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2d2d2d] hover:border-[#6366f1] text-[#6b7280] hover:text-[#a5b4fc] transition-all duration-200"
            >
              <Icon size={17} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4b5563]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
