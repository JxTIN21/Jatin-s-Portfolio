import React, { useRef, useEffect } from 'react';

const PROJECTS = [
  '/images/project1.png',
  '/images/project2.png',
  '/images/project3.png',
  '/images/project4.png',
  '/images/project5.png',
  '/images/project6.png',
];

const row1Imgs = [...PROJECTS, ...PROJECTS, ...PROJECTS];
const row2Imgs = [
  ...PROJECTS.slice().reverse(),
  ...PROJECTS.slice().reverse(),
  ...PROJECTS.slice().reverse(),
];

const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const sectionTop =
        sectionRef.current.getBoundingClientRect().top + window.scrollY;

      const offset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.25;

      row1Ref.current.style.transform = `translateX(${offset - 300}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 300)}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardStyle: React.CSSProperties = {
    width: 'clamp(200px, 50vw, 420px)',
    height: 'clamp(124px, 31vw, 260px)',
    borderRadius: 'clamp(12px, 2.5vw, 28px)',
    border: '1px solid rgba(255,255,255,0.08)',
    background: '#111',
    flexShrink: 0,
    overflow: 'hidden',
  };

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#0C0C0C',
        overflow: 'hidden',
        // Minimal top gap — the hero already has bottom padding
        paddingTop: 'clamp(1.5rem, 4vw, 4rem)',
        paddingBottom: 'clamp(1rem, 3vw, 3rem)',
      }}
    >
      {/* Top Row */}
      <div
        ref={row1Ref}
        className="flex"
        style={{
          gap: 'clamp(8px, 1.5vw, 20px)',
          marginBottom: 'clamp(8px, 1.5vw, 20px)',
          willChange: 'transform',
        }}
      >
        {row1Imgs.map((src, i) => (
          <div key={i} style={cardStyle}>
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div
        ref={row2Ref}
        className="flex"
        style={{
          gap: 'clamp(8px, 1.5vw, 20px)',
          willChange: 'transform',
        }}
      >
        {row2Imgs.map((src, i) => (
          <div key={i} style={cardStyle}>
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;