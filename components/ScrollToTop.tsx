'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { play } = useSound();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    play('nav');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 border border-border bg-surface/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-amber hover:bg-amber/10 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 text-text-tertiary group-hover:text-amber transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>

          {/* Tooltip */}
          <div className="absolute left-full ml-3 px-2 py-1 bg-surface border border-border font-mono text-[10px] text-text-secondary tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            TOP
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
