import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "nichoanton05@gmail.com",
      href: "mailto:nichoanton05@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 99623 57352",
      href: "tel:+919962357352",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
    },
  ];

  const socialLinks = [
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
  ];

  return (
    <section id="contact" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#6366f1] text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Let’s Work Together
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            I’m open to product development roles, freelance opportunities, and
            startup collaborations.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href || "#"}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`p-5 rounded-2xl border border-[#1f1f1f] bg-[#111111] text-left flex items-center gap-4 hover:border-[#6366f1] transition ${
                !href && "pointer-events-none"
              }`}
            >
              <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center">
                <Icon size={18} className="text-[#6366f1]" />
              </div>

              <div>
                <p className="text-sm text-[#6b7280]">{label}</p>
                <p className="text-white font-medium">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#2d2d2d] text-[#9ca3af] hover:text-white hover:border-[#6366f1] transition"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}