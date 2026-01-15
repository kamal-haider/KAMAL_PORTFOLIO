'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

// Typing effect hook
function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
}

// Real-time clock component
function LiveClock() {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
      setDate(now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }).toUpperCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-xs">
      <div className="text-neural tabular-nums">{time}</div>
      <div className="text-text-tertiary">{date}</div>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const { play } = useSound();

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const { displayText: nameText, isComplete: nameComplete } = useTypingEffect('KAMAL HAIDER', 80, 800);
  const { displayText: roleText, isComplete: roleComplete } = useTypingEffect('AI MOBILE ENGINEER', 60, 2000);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    play('click');
    const element = document.querySelector('#work');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
    }
  };

  const handleHover = () => {
    play('hover');
  };

  const stats = [
    { label: 'CLEARANCE', value: 'FULL ACCESS', color: 'neural' },
    { label: 'SPECIALIZATION', value: 'MOBILE + AI', color: 'amber' },
    { label: 'FRAMEWORK', value: 'FLUTTER', color: 'neural' },
    { label: 'STATUS', value: 'AVAILABLE', color: 'amber' },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      {/* Accent glow spots */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-neural/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32"
      >
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column - Main content */}
          <div className="lg:col-span-8">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-border bg-surface/50 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neural opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neural" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-neural">
                  NEURAL.LINK ACTIVE
                </span>
              </div>
            </motion.div>

            {/* Main title with typing effect */}
            <div className="mb-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-center gap-3 mb-2"
              >
                <div className="w-12 h-px bg-amber" />
                <span className="font-mono text-xs tracking-[0.3em] text-amber">
                  OPERATOR
                </span>
              </motion.div>
              <h1 className="font-mono text-display font-bold tracking-tight">
                <span className="text-text-primary">
                  {nameText}
                  {!nameComplete && <span className="text-neural animate-blink">_</span>}
                </span>
              </h1>
            </div>

            {/* Role with typing effect */}
            <div className="mb-8">
              <p className="font-mono text-xl md:text-2xl lg:text-3xl text-text-secondary tracking-[0.15em]">
                {roleText}
                {nameComplete && !roleComplete && <span className="text-neural animate-blink">_</span>}
              </p>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mb-12"
            >
              <p className="text-lg text-text-secondary leading-relaxed">
                Building mobile applications that integrate AI capabilities—from
                LLM-powered features and on-device intelligence to cross-platform
                experiences on iOS and Android. Specializing in Flutter + AI integration.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToWork}
                onMouseEnter={handleHover}
                className="group relative px-8 py-4 bg-neural text-void font-mono font-semibold text-sm tracking-wider overflow-hidden transition-all duration-300 hover:shadow-glow-neural"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  VIEW_OPERATIONS
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleHover}
                className="group px-8 py-4 border border-border text-text-secondary font-mono font-medium text-sm tracking-wider transition-all duration-300 hover:border-amber hover:text-amber flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                DOWNLOAD_DOSSIER
              </a>
            </motion.div>
          </div>

          {/* Right column - Status panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={showContent ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="border border-border bg-surface/30 backdrop-blur-sm p-6 corner-accents">
              {/* Panel header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                <span className="font-mono text-xs tracking-[0.2em] text-text-tertiary">
                  OPERATOR PROFILE
                </span>
                <LiveClock />
              </div>

              {/* Stats grid */}
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={showContent ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between py-2 border-b border-border/50"
                  >
                    <span className="font-mono text-xs text-text-tertiary tracking-wider">
                      {stat.label}
                    </span>
                    <span className={`font-mono text-sm tracking-wide ${
                      stat.color === 'neural' ? 'text-neural' : 'text-amber'
                    }`}>
                      {stat.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Location */}
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-text-tertiary">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-mono text-xs tracking-wider">
                    MIAMI, FL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-text-tertiary">
            SCROLL TO EXPLORE
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-neural/50 via-neural/20 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom data line */}
      <div className="absolute bottom-0 left-0 right-0 h-px data-line" />
    </section>
  );
}
