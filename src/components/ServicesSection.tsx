import React from 'react';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Full-Stack Development',
    desc: 'Building end-to-end web applications using React.js, Node.js, Express.js, and MongoDB with JWT authentication and role-based access control.',
  },
  {
    num: '02',
    name: 'AI Integration',
    desc: 'Integrating machine learning models and LLMs into functional web applications using Hugging Face Transformers, GROQ, and vector search with ChromaDB.',
  },
  {
    num: '03',
    name: 'Backend Development',
    desc: 'Designing and building scalable REST APIs and server-side systems using Node.js, Express.js, FastAPI, and Flask with SQL and NoSQL databases.',
  },
  {
    num: '04',
    name: 'NLP & ML Pipelines',
    desc: 'Building natural language processing pipelines using T5, BERT, and semantic search systems for real-world summarization and code intelligence use cases.',
  },
  {
    num: '05',
    name: 'UI/UX Development',
    desc: 'Crafting clean, responsive, and user-focused interfaces using React.js, Tailwind CSS, and Figma with attention to performance and user experience.',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      style={{
        background: '#FFFFFF',
        borderRadius: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px) 0 0',
        // Vertical padding scales down on mobile
        padding: 'clamp(3rem, 7vw, 8rem) clamp(1.25rem, 5vw, 2.5rem)',
      }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight"
          style={{
            color: '#0C0C0C',
            fontSize: 'clamp(3rem, 12vw, 10rem)',
            marginBottom: 'clamp(2rem, 6vw, 7rem)',
          }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1} y={20}>
            <div
              style={{
                borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                borderBottom: '1px solid rgba(12,12,12,0.15)',
                // Row padding scales with viewport
                padding: 'clamp(1.25rem, 3.5vw, 3rem) 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(0.75rem, 3vw, 2rem)',
              }}
            >
              {/* Number — scales from a subtle label on mobile to a big display on desktop */}
              <span
                className="font-black leading-none flex-shrink-0"
                style={{
                  color: '#0C0C0C',
                  // Floor dropped from 3rem → 1.8rem so it doesn't eat the row on mobile
                  fontSize: 'clamp(1.8rem, 7vw, 9rem)',
                  // Width tracks the font so text column always has room
                  minWidth: 'clamp(2.2rem, 7vw, 10rem)',
                  // Nudge baseline to align with service name
                  paddingTop: 'clamp(0.1rem, 0.4vw, 0.5rem)',
                }}
              >
                {service.num}
              </span>

              {/* Text column */}
              <div className="flex flex-col gap-1.5" style={{ paddingTop: 'clamp(0.1rem, 0.3vw, 0.4rem)' }}>
                <span
                  className="font-medium uppercase"
                  style={{
                    color: '#0C0C0C',
                    fontSize: 'clamp(0.95rem, 2.2vw, 2.1rem)',
                    lineHeight: 1.1,
                  }}
                >
                  {service.name}
                </span>
                <span
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: '#0C0C0C',
                    opacity: 0.6,
                    fontSize: 'clamp(0.8rem, 1.4vw, 1.2rem)',
                    marginTop: 'clamp(0.2rem, 0.5vw, 0.5rem)',
                  }}
                >
                  {service.desc}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;