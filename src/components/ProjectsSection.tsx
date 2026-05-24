import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const PROJECTS = [
  {
    num: '01',
    cat: 'Major Project',
    name: 'Headliner',
    github: 'https://github.com/JxTIN21/HEADLINER',
    live: '',
    imgs: [
      'https://media.licdn.com/dms/image/v2/D562DAQGe4xJucDxaiw/profile-treasury-image-shrink_800_800/B56ZcxKzAlGoAc-/0/1748876604374?e=1780254000&v=beta&t=xKhmaoAw_Ukahwcr5ZYLNRUCiJym8q-PxzIUTclyjOE',
      'https://media.licdn.com/dms/image/v2/D562DAQGOvdoG7C6_jQ/profile-treasury-image-shrink_800_800/B56ZcxKxTGHoAc-/0/1748876597176?e=1780254000&v=beta&t=5v_ODS0NF4U79i2CwVnFQ1y8AWJIQkAC9dNjEahgkVg',
      'https://media.licdn.com/dms/image/v2/D562DAQE1Vv4VEk_ujw/profile-treasury-image-shrink_800_800/B56ZcxKuw7G0Ac-/0/1748876586879?e=1780254000&v=beta&t=yDOylARzIUaZDgLR91a3_6bFgV5tXc-9SdZyWh26PPg',
    ],
  },
  {
    num: '02',
    cat: 'Full-Stack',
    name: 'DevBoard',
    github: 'https://github.com/JxTIN21/DevBoard',
    live: 'https://devboard-kohl.vercel.app/login',
    imgs: [
      'https://i.ibb.co/99PWzH89/Screenshot-2026-05-24-234150.png',
      'https://i.ibb.co/HpzTJzjJ/Screenshot-2026-05-24-234234.png',
      'https://i.ibb.co/20xHxdJ0/Screenshot-2026-05-24-234200.png',
    ],
  },
  {
    num: '03',
    cat: 'AI Tool',
    name: 'Codebase Search & Explainer',
    github: 'https://github.com/JxTIN21/Codebase',
    live: '',
    imgs: [
      'https://media.licdn.com/dms/image/v2/D562DAQHuy49wL0xAjA/profile-treasury-image-shrink_800_800/B56Zitu2R5G0AY-/0/1755261396713?e=1780254000&v=beta&t=rAdfUbLIJKaSlVabCc2X0kxxZ65d9ABkzybmVQ8nOGE',
      'https://media.licdn.com/dms/image/v2/D562DAQFzVbEI5cCc3A/profile-treasury-image-shrink_480_480/B56Zitu8_WHMAM-/0/1755261424809?e=1780254000&v=beta&t=O73wpYEf3bwBY7N5WmtHiXsM7AThQdKKfrW1lp90',
      'https://media.licdn.com/dms/image/v2/D562DAQGHp35-izSLeA/profile-treasury-image-shrink_800_800/B56ZitvAL3HkAY-/0/1755261437389?e=1780254000&v=beta&t=GHrFOD5kkXyeWMDlSJx0jFbf5qr8IeywZ9FNBC6rSzM',
    ],
  },
];

const TOTAL = PROJECTS.length;

interface Project {
  num: string;
  cat: string;
  name: string;
  github: string;
  live: string;
  imgs: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const linkButtonStyle: React.CSSProperties = {
  borderRadius: '999px',
  border: '2px solid #D7E2EA',
  color: '#D7E2EA',
  fontFamily: "'Kanit', sans-serif",
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  textDecoration: 'none',
  display: 'inline-block',
  transition: 'background 0.2s',
  whiteSpace: 'nowrap',
  // Smaller padding on mobile
  padding: 'clamp(0.45rem, 1vw, 0.75rem) clamp(1rem, 2vw, 2rem)',
  fontSize: 'clamp(0.6rem, 1vw, 0.9rem)',
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, containerRef }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const targetScale = 1 - (TOTAL - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [index / TOTAL, 1], [1, targetScale]);

  const borderRadius = 'clamp(20px, 3vw, 50px)';

  // Sticky top: small fixed offset on mobile, grows on desktop
  const stickyTop = `clamp(${60 + index * 16}px, ${6 + index * 2}vw, ${96 + index * 28}px)`;

  return (
    /*
      No fixed vh height on the slot — that was the gap culprit.
      paddingBottom gives just enough scroll runway for the sticky
      stack effect without leaving a huge void below each card.
    */
    <div style={{ position: 'relative', paddingBottom: 'clamp(0.75rem, 2vw, 2rem)' }}>
      <motion.div
        ref={cardRef}
        style={{
          scale,
          top: stickyTop,
          position: 'sticky',
          transformOrigin: 'top center',
          background: '#0C0C0C',
          border: '2px solid #D7E2EA',
          borderRadius,
          padding: 'clamp(0.85rem, 2vw, 2rem)',
          willChange: 'transform',
        }}
      >
        {/* ── Header ── */}
        <div
          className="flex items-center justify-between flex-wrap gap-2"
          style={{ marginBottom: 'clamp(0.6rem, 1.5vw, 1.5rem)' }}
        >
          {/* Left: number + title */}
          <div className="flex items-baseline gap-2 md:gap-6">
            <span
              className="font-black leading-none"
              style={{
                color: '#D7E2EA',
                // Floor dropped: 1.8rem on mobile instead of 2.5rem
                fontSize: 'clamp(1.8rem, 5.5vw, 8rem)',
              }}
            >
              {project.num}
            </span>

            <div className="flex flex-col gap-0.5">
              <span
                className="font-light uppercase tracking-widest opacity-60"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.6rem, 1.1vw, 1.1rem)',
                }}
              >
                {project.cat}
              </span>
              <span
                className="font-bold uppercase tracking-wide"
                style={{
                  color: '#D7E2EA',
                  fontSize: 'clamp(0.85rem, 1.8vw, 2rem)',
                }}
              >
                {project.name}
              </span>
            </div>
          </div>

          {/* Right: buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={linkButtonStyle}
              onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')}
              onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              GitHub
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                style={linkButtonStyle}
                onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Live Project
              </a>
            )}
          </div>
        </div>

        {/* ── Images ──
            Mobile  : single image (imgs[2], the hero shot) — full width
            Tablet+ : two-column layout restored
        */}

        {/* Mobile: show only the hero image */}
        <div
          className="block sm:hidden"
          style={{
            height: 'clamp(160px, 44vw, 260px)',
            borderRadius,
            overflow: 'hidden',
          }}
        >
          <img
            src={project.imgs[2]}
            alt={project.name}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Tablet+: original two-column grid */}
        <div
          className="hidden sm:flex gap-3"
          style={{ height: 'clamp(200px, 32vw, 560px)' }}
        >
          {/* Left column */}
          <div className="flex flex-col gap-3" style={{ flex: '0 0 40%' }}>
            <img
              src={project.imgs[0]}
              alt={project.name}
              loading="lazy"
              style={{
                flex: 1,
                width: '100%',
                objectFit: 'cover',
                borderRadius,
                minHeight: 0,
              }}
            />
            <img
              src={project.imgs[1]}
              alt={project.name}
              loading="lazy"
              style={{
                flex: 1.4,
                width: '100%',
                objectFit: 'cover',
                borderRadius,
                minHeight: 0,
              }}
            />
          </div>

          {/* Right column */}
          <div style={{ flex: '0 0 60%' }}>
            <img
              src={project.imgs[2]}
              alt={project.name}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius,
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      style={{
        background: '#0C0C0C',
        borderRadius: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px) 0 0',
        marginTop: 'clamp(-2.5rem, -3vw, -3.5rem)',
        position: 'relative',
        zIndex: 10,
        padding: 'clamp(2.5rem, 6vw, 8rem) clamp(1.25rem, 5vw, 2.5rem) 0',
      }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            marginBottom: 'clamp(1.5rem, 4vw, 4rem)',
          }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef}>
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={index}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;