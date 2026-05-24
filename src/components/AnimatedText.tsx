import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

const AnimatedWord: React.FC<WordProps> = ({ word, progress, index, total }) => {
  const opacity = useTransform(
    progress,
    [index / (total + 5), (index + 5) / (total + 5)],
    [0.2, 1]
  );
  return (
    <motion.span
      style={{ opacity, display: 'inline-block', marginRight: '0.3em' }}
    >
      {word}
    </motion.span>
  );
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={className}
      style={{
        ...style,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
      }}
    >
      {words.map((word, i) => (
        <AnimatedWord
          key={i}
          word={word}
          progress={scrollYProgress}
          index={i}
          total={words.length}
        />
      ))}
    </p>
  );
};

export default AnimatedText;