import React, { useRef, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useRef(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const threshold = rect.width / 2 + padding;

      if (dist < threshold) {
        if (!isActive.current) {
          ref.current.style.transition = activeTransition;
          isActive.current = true;
        }
        ref.current.style.transform = `translate3d(${dx / strength}px, ${dy / strength}px, 0)`;
      } else if (isActive.current) {
        ref.current.style.transition = inactiveTransition;
        ref.current.style.transform = 'translate3d(0, 0, 0)';
        isActive.current = false;
      }
    },
    [padding, strength, activeTransition, inactiveTransition]
  );

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', display: 'inline-block' }}
    >
      {children}
    </div>
  );
};

export default Magnet;