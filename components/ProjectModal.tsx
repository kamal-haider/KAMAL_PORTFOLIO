'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';
import { type Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { play } = useSound();

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      play('click');
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [project, handleEscape, play]);

  const accentColor = project?.accent === 'neural' ? 'neural' : 'amber';

  const categoryLabels: Record<string, string> = {
    'ai-product': 'AI PRODUCT',
    mobile: 'MOBILE APP',
    web: 'WEB APP',
    backend: 'BACKEND / API',
    devtools: 'DEVELOPER TOOLS',
  };

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-void/80 backdrop-blur-sm"
          />

          {/* Modal panel - slides in from right */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 z-[55] w-full max-w-lg overflow-y-auto border-r border-border bg-void/95 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-void/90 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  project.status === 'LIVE'
                    ? 'bg-neural animate-pulse'
                    : project.status === 'BETA'
                      ? 'bg-amber'
                      : project.status === 'ALPHA'
                        ? 'bg-purple-400'
                        : 'bg-text-tertiary'
                }`} />
                <span className="font-mono text-[10px] text-text-tertiary tracking-wider">
                  {project.status} — {categoryLabels[project.category] || project.category.toUpperCase()}
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center border border-border hover:border-text-tertiary transition-colors"
              >
                <svg
                  className="w-4 h-4 text-text-tertiary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Codename + Title */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-px bg-${accentColor}`} />
                  <span
                    className={`font-mono text-xs tracking-[0.3em] text-${accentColor}`}
                  >
                    {project.codename}
                  </span>
                </div>
                <h2 className="font-mono text-3xl font-bold text-text-primary tracking-tight">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-text-tertiary tracking-[0.2em]">
                    OVERVIEW
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-text-tertiary tracking-[0.2em]">
                    KEY HIGHLIGHTS
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className={`text-${accentColor} mt-1 text-xs`}>
                        {'//'}
                      </span>
                      <span className="font-mono text-sm text-text-secondary">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-text-tertiary tracking-[0.2em]">
                    TECH STACK
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 font-mono text-xs border border-${accentColor}/20 bg-${accentColor}/5 text-${accentColor} tracking-wider`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.link || project.github) && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] text-text-tertiary tracking-[0.2em]">
                      LINKS
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <div className="flex gap-3">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-${accentColor} border border-${accentColor}/30 transition-all duration-300 hover:bg-${accentColor}/10 hover:border-${accentColor}`}
                      >
                        LAUNCH
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-text-secondary border border-border transition-all duration-300 hover:border-text-tertiary hover:text-text-primary"
                      >
                        SOURCE
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Terminal footer */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-3 font-mono text-xs text-text-tertiary">
                  <span className={`text-${accentColor}`}>$</span>
                  <span>cat {project.id}.log | tail -1</span>
                  <span className={`text-${accentColor} animate-blink`}>
                    _
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
