import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="contact-btn">
      Contact Me
    </button>
  );
};

export default ContactButton;