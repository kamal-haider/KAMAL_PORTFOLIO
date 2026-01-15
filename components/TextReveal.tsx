'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}

export default function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  stagger = 0.02,
  once = true,
  as: Component = 'div',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const words = children.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Component ref={ref as any} className={className}>
      <motion.span
        variants={container}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="inline"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
}

// Character-by-character reveal for titles
interface CharRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function CharReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.03,
  once = true,
}: CharRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const chars = children.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30,
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {chars.map((char, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Line-by-line reveal for paragraphs
interface LineRevealProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function LineReveal({
  children,
  className = '',
  delay = 0,
  stagger = 0.1,
  once = true,
}: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const lines = children.split('\n');

  return (
    <div ref={ref} className={className}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + index * stagger,
            }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
