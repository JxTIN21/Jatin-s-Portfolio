import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
}

const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href = '#' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base"
      style={{
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
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(215,226,234,0.1)')}
      onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      Live Project
    </a>
  );
};

export default LiveProjectButton;