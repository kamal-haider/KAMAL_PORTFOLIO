'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const bootLines = [
    'Initializing NEURAL.LINK...',
    'Loading command interface...',
    'Establishing secure connection...',
    'Syncing operator profile...',
    'System ready.',
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= bootLines.length - 1) {
          clearInterval(lineInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(lineInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-void flex items-center justify-center"
    >
      <div className="w-full max-w-md px-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="w-12 h-12 border border-neural flex items-center justify-center">
            <span className="font-mono text-lg font-bold text-neural">NL</span>
          </div>
          <div>
            <div className="font-mono text-sm tracking-[0.2em] text-text-primary">
              NEURAL<span className="text-neural">.LINK</span>
            </div>
            <div className="font-mono text-[10px] text-text-tertiary tracking-wider">
              COMMAND CENTER v2.0
            </div>
          </div>
        </motion.div>

        {/* Terminal output */}
        <div className="mb-8 font-mono text-xs space-y-2">
          {bootLines.slice(0, currentLine + 1).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-2 ${
                i === bootLines.length - 1 ? 'text-neural' : 'text-text-secondary'
              }`}
            >
              <span className="text-neural">{'>'}</span>
              <span>{line}</span>
              {i === currentLine && i !== bootLines.length - 1 && (
                <span className="animate-blink text-neural">_</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="relative">
          <div className="h-1 bg-border overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neural to-amber"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-mono text-[10px] text-text-tertiary">
              LOADING SYSTEMS
            </span>
            <span className="font-mono text-[10px] text-neural tabular-nums">
              {progress}%
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
