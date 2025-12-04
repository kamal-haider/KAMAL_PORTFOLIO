'use client';

import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    id: 'flux',
    title: 'FLUX',
    subtitle: 'Live Streaming Platform',
    description: 'Mobile-first streaming platform where viewers drive the experience through real-time polls, actions, and dynamic overlays.',
    tech: ['Mobile', 'Streaming', 'Real-time'],
    status: 'CONCEPT',
  },
  {
    id: 'popquiz',
    title: 'POP QUIZ',
    subtitle: 'Exam Simulator',
    description: 'Multi-platform USMLE-style exam simulator with timed modes, instant feedback, and cloud-backed question sets.',
    tech: ['Flutter', 'Firebase', 'Cross-Platform'],
    status: 'SHIPPED',
  },
  {
    id: 'iot',
    title: 'IOT SENSORS',
    subtitle: 'Medical Wearables',
    description: 'Prototype work with IMUs, light sensors, and microcontrollers for future health-related mobile applications.',
    tech: ['IoT', 'Hardware', 'Prototyping'],
    status: 'R&D',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 300);
  };

  const statusColors: Record<string, string> = {
    'CONCEPT': 'text-yellow-400 border-yellow-400/30',
    'SHIPPED': 'text-neural border-neural/30',
    'R&D': 'text-synapse border-synapse/30',
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative border border-border bg-surface/30 p-6 transition-all duration-300 hover:border-neural/30 ${
        glitchActive ? 'animate-glitch' : ''
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Scan line effect on hover */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-b from-neural/5 via-transparent to-transparent animate-scan" />
      </div>

      {/* Corner markers */}
      <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-neural/0 group-hover:border-neural/50 transition-colors" />
      <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-neural/0 group-hover:border-neural/50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-neural/0 group-hover:border-neural/50 transition-colors" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-neural/0 group-hover:border-neural/50 transition-colors" />

      {/* Status badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`font-mono text-[10px] tracking-widest px-2 py-1 border ${statusColors[project.status]}`}>
          {project.status}
        </span>
        <span className="font-mono text-xs text-white/20">
          [{String(index + 1).padStart(2, '0')}]
        </span>
      </div>

      {/* Title */}
      <h3 className={`font-mono text-xl font-bold mb-1 transition-colors duration-300 ${
        isHovered ? 'text-neural' : 'text-white'
      }`}>
        {project.title}
      </h3>
      <p className="font-mono text-xs text-white/40 mb-4">{project.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-white/50 leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 font-mono text-[10px] tracking-wider border border-border text-white/40 group-hover:border-border-light group-hover:text-white/60 transition-all"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover indicator line */}
      <div className={`absolute bottom-0 left-0 h-px bg-neural transition-all duration-500 ${
        isHovered ? 'w-full' : 'w-0'
      }`} />
    </div>
  );
}

export default function OtherProjects() {
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
    <section ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-white/20" />
            <span className="font-mono text-xs tracking-widest text-white/40">
              ADDITIONAL_PROJECTS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            <span className="text-white/60">Other</span>{' '}
            <span className="text-white/30">Work</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className={`grid md:grid-cols-3 gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
