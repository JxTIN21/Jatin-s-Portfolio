import React from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  return (
    <div style={{ background: '#0C0C0C', overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />

      {/* Contact footer */}
      <section
        id="contact"
        style={{ background: '#0C0C0C' }}
        className="flex flex-col items-center justify-center gap-8 py-20 sm:py-28 md:py-36 px-5 text-center"
      >
        <p
          className="font-light uppercase tracking-widest"
          style={{ color: '#D7E2EA', fontSize: 'clamp(0.85rem, 1.8vw, 1.4rem)' }}
        >
          Ready to create something unforgettable?
        </p>
        <ContactSection />
      </section>
    </div>
  );
};

export default App;
