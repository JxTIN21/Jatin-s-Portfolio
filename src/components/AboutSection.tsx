import React from "react";
import { motion } from "framer-motion";
import ContactButton from "./ContactButton";

const skills = [
  "Java", "JavaScript", "Python", "React.js", "HTML", "CSS",
  "Figma", "Node.js", "Express.js", "FastAPI", "Flask", "REST API",
  "MongoDB", "MySQL", "SQLite", "NumPy", "Pandas", "Git", "GitHub",
  "MS Excel", "MS Word",
];

const AboutSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative bg-[#0A0A0A] overflow-hidden"
      style={{
        // No min-h-screen — let content dictate height on all breakpoints
        padding: "clamp(3.5rem, 8vw, 7rem) clamp(1.25rem, 6vw, 4rem)",
      }}
    >
      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-white/5 blur-[160px] rounded-full pointer-events-none" />

      {/* ── Layout grid ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 items-start"
        style={{ gap: "clamp(2rem, 6vw, 5rem)" }}
      >

        {/* LEFT — big heading */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-zinc-500 text-sm mb-6"
          >
            About Me
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-black leading-[0.85] tracking-[-0.06em]"
            style={{
              // Tighter on mobile/tablet so it doesn't dominate the full screen
              fontSize: "clamp(3.5rem, 9vw, 10rem)",
            }}
          >
            <span className="text-white block">Full Stack</span>
            <span className="text-zinc-700 block">Developer</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(to right, #ffffff, #6B7280)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              & AI Builder
            </span>
          </motion.h2>

          <div className="w-[120px] h-[2px] bg-white/20 mt-8" />
        </div>

        {/* RIGHT — content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-8"
        >
          <p
            className="text-zinc-300 leading-[2]"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.2rem)" }}
          >
            I am a B.Tech Computer Science graduate focused on building
            scalable full-stack applications and AI-powered systems.
            <br /><br />
            I work with modern web technologies to build production-ready
            applications with clean UI, strong backend architecture, and
            data-driven intelligence.
          </p>

          {/* Skills */}
          <div>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-300 text-sm hover:bg-white/10 transition"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2">
            <ContactButton onClick={scrollToContact} />
          </div>
        </motion.div>
      </div>

      {/* Big background "ABOUT" text — clipped, no overflow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white/[0.03] font-black pointer-events-none select-none whitespace-nowrap tracking-[-0.08em] overflow-hidden"
        style={{ fontSize: "clamp(5rem, 18vw, 20rem)", lineHeight: 1 }}
      >
        ABOUT
      </div>
    </section>
  );
};

export default AboutSection;