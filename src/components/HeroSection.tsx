import React from 'react';
import { motion } from 'framer-motion';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

const fade = (y = 30, x = 0, delay = 0) => ({
  initial: { opacity: 0, y, x },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
});

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <section
      id="hero"
      style={{ background: '#0C0C0C', overflowX: 'clip' }}
      // Only lock to full viewport on large desktop; smaller screens = auto height
      className="flex flex-col lg:min-h-screen lg:h-screen relative"
    >
      {/* ── Navbar ── */}
      <motion.nav
        {...fade(-20, 0, 0)}
        className="z-20 flex flex-wrap justify-center sm:justify-between items-center gap-x-4 gap-y-2"
        style={{
          padding: 'clamp(1rem, 2.5vw, 2rem) clamp(1.2rem, 4vw, 2.5rem)',
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.7rem, 1.4vw, 1.4rem)',
              textDecoration: 'none',
            }}
          >
            {item.label}
          </a>
        ))}
      </motion.nav>

      {/* ══════════════════════════════════════════
          MOBILE  (< 640px)  — tight stacked column
          ══════════════════════════════════════════ */}
      <div className="flex sm:hidden flex-col items-center pb-8"
        style={{ padding: '0 1.25rem 2rem' }}
      >
        <motion.h1
          {...fade(40, 0, 0.15)}
          className="font-black uppercase tracking-tight leading-none text-center w-full"
          style={{ color: '#D7E2EA', fontSize: '18vw', marginBottom: '0.5rem' }}
        >
          Hi, i&apos;m Jatin
        </motion.h1>

        <motion.div
          {...fade(30, 0, 0.45)}
          className="flex items-end justify-center w-full"
          style={{ marginBottom: '1rem' }}
        >
          <img
            src="/images/MyIcon.png"
            alt="Jatin portrait"
            className="block pointer-events-none select-none"
            style={{ width: 'clamp(180px, 58vw, 280px)' }}
          />
        </motion.div>

        <motion.p
          {...fade(20, 0, 0.35)}
          className="font-light uppercase tracking-wide leading-snug text-center"
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(0.7rem, 3.5vw, 0.95rem)',
            maxWidth: '28ch',
            marginBottom: '1.25rem',
          }}
        >
          a full-stack developer driven by building scalable and AI-powered web applications
        </motion.p>

        <motion.div
          {...fade(20, 0, 0.5)}
          className="flex items-center justify-center gap-3 w-full"
        >
          <a
            href="/resume/Srivastava_Jatin_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Resume
          </a>
          <ContactButton onClick={scrollToContact} />
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════
          TABLET  (640px – 1023px)  — side-by-side
          Portrait left, text+buttons right
          ══════════════════════════════════════════ */}
      <div
        className="hidden sm:flex lg:hidden flex-col pb-10"
        style={{ padding: '0 clamp(1.5rem, 5vw, 3rem) clamp(2rem, 5vw, 3.5rem)' }}
      >
        {/* Big heading */}
        <motion.h1
          {...fade(40, 0, 0.15)}
          className="font-black uppercase tracking-tight leading-none w-full"
          style={{
            color: '#D7E2EA',
            fontSize: 'clamp(9vw, 13vw, 15vw)',
            marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
          }}
        >
          Hi, i&apos;m Jatin
        </motion.h1>

        {/* Portrait + tagline/buttons row */}
        <div className="flex items-end gap-8">
          {/* Portrait */}
          <motion.div {...fade(30, 0, 0.45)} className="flex-shrink-0">
            <img
              src="/images/MyIcon.png"
              alt="Jatin portrait"
              className="block pointer-events-none select-none"
              style={{ width: 'clamp(180px, 30vw, 320px)' }}
            />
          </motion.div>

          {/* Right: tagline + buttons */}
          <div className="flex flex-col gap-6 pb-2">
            <motion.p
              {...fade(20, 0, 0.35)}
              className="font-light uppercase tracking-wide leading-snug"
              style={{
                color: '#D7E2EA',
                fontSize: 'clamp(0.8rem, 1.8vw, 1.2rem)',
                maxWidth: '26ch',
              }}
            >
              a full-stack developer driven by building scalable and AI-powered web applications
            </motion.p>

            <motion.div {...fade(20, 0, 0.5)} className="flex items-center gap-3">
              <a
                href="/resume/Srivastava_Jatin_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Resume
              </a>
              <ContactButton onClick={scrollToContact} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP  (≥ 1024px)  — original layered look
          ══════════════════════════════════════════ */}
      <div
        className="hidden lg:flex flex-1 flex-col justify-between overflow-hidden"
        style={{ padding: '0 clamp(0.5rem, 1vw, 1rem)' }}
      >
        <motion.h1
          {...fade(40, 0, 0.15)}
          className="font-black uppercase tracking-tight leading-none whitespace-nowrap w-full"
          style={{ color: '#D7E2EA', fontSize: 'clamp(10vw, 17.5vw, 19vw)' }}
        >
          Hi, i&apos;m Jatin
        </motion.h1>

        {/* Portrait — absolute, centred */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 0,
            transform: 'translateX(-50%)',
            zIndex: 10,
          }}
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <motion.img
              src="/images/MyIcon.png"
              alt="Jatin portrait"
              {...fade(30, 0, 0.6)}
              className="block pointer-events-none select-none"
              style={{ width: 'clamp(280px, 36vw, 520px)' }}
            />
          </Magnet>
        </div>

        {/* Bottom bar */}
        <div
          className="flex justify-between items-end"
          style={{ paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}
        >
          <motion.p
            {...fade(20, 0, 0.35)}
            className="font-light uppercase tracking-wide leading-snug"
            style={{
              color: '#D7E2EA',
              fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)',
              maxWidth: 'clamp(160px, 20vw, 280px)',
            }}
          >
            a full-stack developer driven by building scalable and AI-powered web applications
          </motion.p>

          <motion.div {...fade(20, 0, 0.5)} className="flex items-center gap-3 z-20">
            <a
              href="/resume/Srivastava_Jatin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              Resume
            </a>
            <ContactButton onClick={scrollToContact} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;