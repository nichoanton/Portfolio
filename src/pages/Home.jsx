import React from "react";

import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import SkillsSection from "../components/home/SkillsSection";
import ExperienceSection from "../components/home/ExperienceSection";
import ContactSection from "../components/home/ContactSection";
import ProjectsSection from "../components/home/ProjectsSection";


export default function Home() {
  return (
    <main className="bg-[#0A0A0A] text-white scroll-smooth">
      {/* Hero */}
      <section id="home">
        <HeroSection />
      </section>

      {/* About */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Skills */}
      <section id="skills">
        <SkillsSection />
      </section>

      {/* Experience */}
      <section id="experience">
        <ExperienceSection />
      </section>

      {/* Projects */}
      <section id="projects">
        <ProjectsSection />
      </section>



      {/* Contact */}
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}
