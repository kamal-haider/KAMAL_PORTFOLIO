'use client';

import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    id: 'apex-iq',
    title: 'APEX IQ',
    subtitle: 'F1 Strategy Intelligence Platform',
    description: 'Cross-platform app that explains why F1 races unfold the way they do. Data-driven strategy analysis, tire stint visualization, and driver comparisons powered by real race data.',
    tech: ['Flutter', 'Firebase', 'TypeScript', 'OpenF1 API'],
    highlights: [
      'Strategy-first analysis with undercut/overcut detection',
      'Cross-platform: iOS, Android & Web from single codebase',
      'Backend proxy architecture with Cloud Functions',
    ],
    accent: 'synapse',
    size: 'large',
  },
  {
    id: 'moro',
    title: 'MORO',
    subtitle: 'LLM-Driven Learning Platform',
    description: 'AI-powered flashcard system that auto-generates study materials from any source. Built for med students who need smarter, faster learning.',
    tech: ['Flutter', 'OpenAI', 'Python', 'Serverless'],
    highlights: [
      'Auto-generate cards from PDFs in seconds',
      'AI-driven spaced repetition scheduling',
      'On-device + cloud AI hybrid architecture',
    ],
    accent: 'neural',
    size: 'large',
  },
  {
    id: 'roomzy',
    title: 'ROOMZY',
    subtitle: 'AI Virtual Staging',
    description: 'Transform empty rooms into beautifully staged spaces using AI image generation. Built for real estate agents and hosts.',
    tech: ['Next.js', 'Stable Diffusion', 'Serverless'],
    highlights: [
      'Upload → Generate → Download in seconds',
      'Multiple style presets',
      'Pay-as-you-go pricing model',
    ],
    accent: 'synapse',
    size: 'medium',
  },
  {
    id: 'marathons',
    title: 'MARATHONS',
    subtitle: 'Infinite Task Hierarchy',
    description: 'Task manager with infinite nesting, real-time sync, and intelligent progress tracking. Built for complex project management.',
    tech: ['Flutter', 'Firebase', 'Riverpod'],
    highlights: [
      'Infinite subtask nesting',
      'Recursive progress calculation',
      'Offline-first architecture',
    ],
    accent: 'neural',
    size: 'medium',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColor = project.accent === 'synapse' ? '#FF00AA' : '#00FFE0';

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden transition-all duration-500 ${
        project.size === 'large'
          ? 'md:col-span-2 md:row-span-2'
          : 'md:col-span-1 md:row-span-1'
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Glow effect following mouse */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${accentColor}10, transparent 40%)`,
        }}
      />

      {/* Card content */}
      <div className="relative h-full min-h-[300px] md:min-h-[400px] border border-border bg-surface/50 p-6 md:p-8 flex flex-col transition-all duration-300 group-hover:border-neutral-700">
        {/* Corner accent */}
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-20 transition-opacity duration-300 group-hover:opacity-40"
          style={{
            background: `linear-gradient(135deg, transparent 50%, ${accentColor} 50%)`,
          }}
        />

        {/* Project number */}
        <div className="absolute top-6 right-6 font-mono text-xs text-white/20">
          [{String(index + 1).padStart(2, '0')}]
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="font-mono text-[10px] tracking-widest text-white/40">
              FEATURED PROJECT
            </span>
          </div>
          <h3
            className="font-mono text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300"
            style={{ color: isHovered ? accentColor : 'white' }}
          >
            {project.title}
          </h3>
          <p className="font-mono text-sm text-white/50 mt-1">{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-white/60 leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6 space-y-2">
          {project.highlights.map((highlight, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-sm text-white/50"
            >
              <span
                className="mt-1.5 text-xs"
                style={{ color: accentColor }}
              >
                →
              </span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 font-mono text-[10px] tracking-wider border border-border text-white/40 transition-all duration-300 group-hover:border-neutral-600 group-hover:text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Hover line */}
        <div
          className="absolute bottom-0 left-0 h-px transition-all duration-500"
          style={{
            width: isHovered ? '100%' : '0%',
            backgroundColor: accentColor,
          }}
        />
      </div>
    </div>
  );
}

export default function FeaturedWork() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-neural" />
            <span className="font-mono text-xs tracking-widest text-neural">
              FEATURED_WORK
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">AI-Powered</span>
            <br />
            <span className="text-white/40">Projects</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-border" />
          <span className="font-mono text-[10px] text-white/20 tracking-widest">
            MORE_BELOW
          </span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
}
