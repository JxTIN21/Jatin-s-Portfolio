import React from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const ContactSection: React.FC = () => {
  const socials = [
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/jatin-srivastava-784223253/',
    },
    {
      icon: <FaGithub />,
      link: 'https://github.com/JxTIN21',
    },
    {
      icon: <FaEnvelope />,
      link: 'mailto:jatinsrivastava4104@gmail.com',
    },
    {
      icon: <FaPhoneAlt />,
      link: 'tel:+919919206912',
    },
  ];

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-28 px-6"
      style={{
        background: '#0C0C0C',
      }}
    >
      {/* Heading */}
      <h2
        className="font-black uppercase text-center"
        style={{
          color: '#D7E2EA',
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          lineHeight: 1,
          marginBottom: '3rem',
        }}
      >
        Let&apos;s Connect
      </h2>

      {/* Glass Card */}
      <div
        className="flex items-center gap-5 sm:gap-7"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          padding: '1.2rem 1.5rem',
          borderRadius: '999px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.35)',
        }}
      >
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              color: '#D7E2EA',
              fontSize: '1.3rem',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                'translateY(-6px) scale(1.05)';
              e.currentTarget.style.background =
                'linear-gradient(135deg,#B600A8,#7621B0)';
              e.currentTarget.style.boxShadow =
                '0 10px 25px rgba(182,0,168,0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                'translateY(0px) scale(1)';
              e.currentTarget.style.background =
                'rgba(255,255,255,0.03)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Bottom Text */}
      <p
        className="text-center mt-10"
        style={{
          color: 'rgba(215,226,234,0.6)',
          fontSize: '0.95rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Open for opportunities & collaborations
      </p>
    </section>
  );
};

export default ContactSection;