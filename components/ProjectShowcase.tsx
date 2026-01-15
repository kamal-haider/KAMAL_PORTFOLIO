'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

interface Project {
  id: string;
  codename: string;
  title: string;
  description: string;
  tech: string[];
  status: 'LIVE' | 'BETA' | 'ALPHA' | 'IN_DEV';
  accent: 'neural' | 'amber';
  link?: string;
}

const projects: Project[] = [
  {
    id: 'apex-iq',
    codename: 'VELOCITY',
    title: 'ApexIQ',
    description: 'Strategy-first Formula 1 intelligence companion. Explains why races unfold the way they do through real-time strategy analysis, tire decisions, and pace breakdowns.',
    tech: ['Flutter', 'Firebase', 'OpenF1 API', 'Riverpod'],
    status: 'LIVE',
    accent: 'neural',
    link: 'https://apex-iq.web.app',
  },
  {
    id: 'roomzy',
    codename: 'VISION',
    title: 'Roomzy AI',
    description: 'AI-powered virtual staging for real estate. Transforms empty rooms into beautifully furnished spaces using generative AI, helping agents and hosts market listings faster.',
    tech: ['Flutter', 'Firebase', 'Generative AI', 'Cloud Functions'],
    status: 'BETA',
    accent: 'amber',
  },
  {
    id: 'moro',
    codename: 'SYNAPTIC',
    title: 'Moro',
    description: 'Intelligent flashcard platform with AI-generated content and adaptive spaced repetition. Automatically creates study materials from uploads and optimizes retention.',
    tech: ['Flutter', 'Google AI', 'Firebase', 'FSRS Algorithm'],
    status: 'ALPHA',
    accent: 'neural',
  },
  {
    id: 'gigledger',
    codename: 'LEDGER',
    title: 'GigLedger',
    description: 'All-in-one business manager for freelancers. Handles invoicing, expense tracking, client management, and time logging in a single streamlined workflow.',
    tech: ['Flutter', 'Firebase', 'Riverpod', 'Clean Architecture'],
    status: 'IN_DEV',
    accent: 'amber',
  },
  {
    id: 'leaklens',
    codename: 'SENTINEL',
    title: 'LeakLens',
    description: 'Revenue intelligence platform that detects and explains hidden revenue leakage across billing systems. Surfaces discrepancies and recovery opportunities.',
    tech: ['Flutter', 'Firebase', 'Riverpod', 'Analytics'],
    status: 'IN_DEV',
    accent: 'neural',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { play } = useSound();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const accentColor = project.accent === 'neural' ? 'neural' : 'amber';

  const handleCardHover = () => {
    setIsHovered(true);
    play('hover');
  };

  const handleButtonHover = () => {
    play('hover');
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={handleCardHover}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative border border-border bg-surface/30 backdrop-blur-sm overflow-hidden transition-all duration-500 ${
        isHovered ? `shadow-glow-${accentColor}` : ''
      }`}
    >
      {/* Corner decorations */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-l border-t border-${accentColor}/30 transition-all duration-500 ${
        isHovered ? `border-${accentColor} w-12 h-12` : ''
      }`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-r border-b border-${accentColor}/30 transition-all duration-500 ${
        isHovered ? `border-${accentColor} w-12 h-12` : ''
      }`} />

      {/* Status indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className={`relative flex h-2 w-2 ${project.status === 'LIVE' ? 'animate-pulse' : ''}`}>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${
            project.status === 'LIVE' ? 'bg-neural' :
            project.status === 'BETA' ? 'bg-amber' :
            project.status === 'ALPHA' ? 'bg-purple-400' : 'bg-text-tertiary'
          }`} />
        </span>
        <span className="font-mono text-[10px] text-text-tertiary tracking-wider">
          {project.status === 'IN_DEV' ? 'IN DEV' : project.status}
        </span>
      </div>

      <div className="p-8">
        {/* Codename */}
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-px bg-${accentColor}`} />
          <span className={`font-mono text-xs tracking-[0.3em] text-${accentColor}`}>
            {project.codename}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-mono text-2xl md:text-3xl font-bold text-text-primary mb-4 tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 font-mono text-xs text-text-tertiary border border-border bg-void/50 tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        {project.link && (
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleButtonHover}
              className={`group/btn flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-wider text-${accentColor} border border-${accentColor}/30 transition-all duration-300 hover:bg-${accentColor}/10 hover:border-${accentColor}`}
            >
              <span>LAUNCH</span>
              <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>

      {/* Hover gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className={`absolute inset-0 pointer-events-none bg-gradient-to-t from-${accentColor}/5 via-transparent to-transparent`}
      />
    </motion.div>
  );
}

export default function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="work" className="relative py-32 px-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-neural" />
          <span className="font-mono text-xs tracking-[0.3em] text-neural uppercase">
            Operations
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-title font-bold mb-4">
              <span className="text-text-primary">Mission</span>
              <br />
              <span className="text-text-tertiary">Archive</span>
            </h2>
            <p className="text-text-secondary max-w-xl">
              Mobile applications and AI integrations across various stages of development—from
              live products to active experiments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-6 font-mono text-xs"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neural animate-pulse" />
              <span className="text-text-tertiary">LIVE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-text-tertiary">BETA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-text-tertiary">ALPHA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-text-tertiary" />
              <span className="text-text-tertiary">IN DEV</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Terminal-style footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border"
      >
        <div className="flex items-center gap-4 font-mono text-xs text-text-tertiary">
          <span className="text-neural">$</span>
          <span>cat operations.log | tail -1</span>
          <span className="text-text-secondary">→ More missions available upon request</span>
          <span className="animate-blink text-neural">_</span>
        </div>
      </motion.div>
    </section>
  );
}
