'use client';

import { motion } from 'framer-motion';
import { useSoundEnabled, useSound } from '@/hooks/useSound';

export default function SoundToggle() {
  const { enabled, toggle } = useSoundEnabled();
  const { play } = useSound();

  const handleClick = () => {
    if (enabled) {
      play('click');
    }
    toggle();
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 border border-border bg-surface/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-neural hover:bg-neural/10 group"
      aria-label={enabled ? 'Mute sounds' : 'Enable sounds'}
    >
      {enabled ? (
        <svg
          className="w-5 h-5 text-neural"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-text-tertiary group-hover:text-neural transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      )}

      {/* Tooltip */}
      <div className="absolute right-full mr-3 px-2 py-1 bg-surface border border-border font-mono text-[10px] text-text-secondary tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {enabled ? 'MUTE' : 'SOUND'}
      </div>
    </motion.button>
  );
}
