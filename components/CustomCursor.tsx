'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Inner cursor (no delay) - follows mouse exactly
  const innerX = useMotionValue(-100);
  const innerY = useMotionValue(-100);

  // Outer cursor (with spring delay) - chases the inner cursor
  const springConfig = { damping: 20, stiffness: 300 };
  const outerX = useSpring(innerX, springConfig);
  const outerY = useSpring(innerY, springConfig);

  useEffect(() => {
    // Only run on client
    setIsMounted(true);

    // Check if mobile/touch device
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      innerX.set(e.clientX);
      innerY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');

      if (isInteractive) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');

      if (isInteractive) {
        setIsHovering(false);
      }
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [innerX, innerY]);

  // Don't render until mounted (avoids hydration mismatch)
  if (!isMounted) {
    return null;
  }

  // Check if mobile on client
  if (typeof window !== 'undefined') {
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 'ontouchstart' in window;
    if (isMobile) return null;
  }

  return (
    <>
      {/* Inner cursor - follows mouse exactly (no delay) */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: innerX,
          y: innerY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 0 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.15 }}
        >
          <div className="w-2 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>

      {/* Outer cursor - chases with spring delay */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: outerX,
          y: outerY,
        }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className={`w-8 h-8 border-2 rounded-full transition-colors duration-200 ${
            isHovering ? 'border-neural bg-neural/20' : 'border-neural/60'
          }`} />
        </motion.div>
      </motion.div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 769px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
