import React from "react";
import { motion } from "framer-motion";

const CERTIFICATIONS = [
  {
    num: "01",
    title: "Android App Development",
    issuer: "Internshala Training",
    year: "2023",
    desc: "Advanced training in Android app development using Kotlin and Java.",
  },
  {
    num: "02",
    title: "MERN Stack Development",
    issuer: "ShapeMySkill by DUCAT",
    year: "2024",
    desc: "Built scalable MERN applications with authentication, APIs, dashboards, and production-ready architecture.",
  },
  {
    num: "03",
    title: "JPMorganChase - Software Engineering Job Simulation",
    issuer: "Forage",
    year: "2026",
    desc: "Participated in JPMorgan Chase’s Software Engineering Job Simulation, solving real-world engineering tasks involving backend development, financial data visualization, debugging, and API workflows while following industry-standard software engineering practices.",
  },
];

const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="
        relative
        px-5 sm:px-8 md:px-10
        py-20 sm:py-24 md:py-32
        overflow-hidden
      "
      style={{
        background: "#FFFFFF",
        borderRadius:
          "clamp(40px,5vw,60px) clamp(40px,5vw,60px) 0 0",
        marginTop: "clamp(-2.5rem, -3vw, -3.5rem)",
        position: "relative",
        zIndex: 20,
      }}
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-black blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-28"
        >
          <p className="uppercase tracking-[0.35em] text-zinc-500 text-sm mb-5 text-center">
            Achievements
          </p>

          <h2
            className="
              font-black
              uppercase
              text-center
              leading-none
              tracking-tight
            "
            style={{
              color: "#0C0C0C",
              fontSize: "clamp(3rem,12vw,10rem)",
            }}
          >
            Certifications
          </h2>
        </motion.div>

        {/* Certifications List */}
        <div>
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              className="
                flex
                items-start
                gap-4 md:gap-8
                py-8 sm:py-10 md:py-12
              "
              style={{
                borderTop:
                  i === 0
                    ? "1px solid rgba(12,12,12,0.15)"
                    : undefined,
                borderBottom:
                  "1px solid rgba(12,12,12,0.15)",
              }}
            >
              {/* Number */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  color: "#0C0C0C",
                  opacity: 0.12,
                  fontSize: "clamp(3rem,10vw,9rem)",
                  minWidth: "clamp(3rem,9vw,10rem)",
                }}
              >
                {cert.num}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3
                    className="font-medium uppercase"
                    style={{
                      color: "#0C0C0C",
                      fontSize:
                        "clamp(1rem,2.2vw,2rem)",
                    }}
                  >
                    {cert.title}
                  </h3>

                  <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs">
                    {cert.issuer}
                  </span>

                  <span className="w-1 h-1 rounded-full bg-zinc-400" />

                  <span className="text-zinc-400 text-sm">
                    {cert.year}
                  </span>
                </div>

                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: "#0C0C0C",
                    opacity: 0.6,
                    fontSize:
                      "clamp(0.85rem,1.5vw,1.1rem)",
                  }}
                >
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Huge Background Text */}
      <div
        className="
          absolute
          bottom-[-45px]
          left-1/2
          -translate-x-1/2
          text-black/[0.03]
          font-black
          pointer-events-none
          select-none
          whitespace-nowrap
          tracking-[-0.08em]
        "
        style={{
          fontSize: "clamp(8rem,22vw,20rem)",
        }}
      >
        CERTS
      </div>
    </section>
  );
};

export default CertificationsSection;