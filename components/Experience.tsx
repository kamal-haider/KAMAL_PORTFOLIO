'use client';

import { useState, useRef, useEffect } from 'react';

const experiences = [
  {
    id: 'generation28',
    title: 'Fullstack AI Engineer',
    company: 'Independent / Generation28',
    description: [
      'Building AI-powered products end-to-end: web apps, backend APIs, and AI agent systems',
      'Architected CIPHER, an AI portfolio agent using Claude tool use API with server-side orchestration',
      'Built NexusAPI, an MCP-native API platform with registry, gateway, and metering',
      'Shipping with Claude API, OpenAI, TypeScript, Next.js, Node.js, and PostgreSQL',
    ],
  },
  {
    id: 'cirrusmd',
    title: 'Application Developer',
    company: 'CirrusMD',
    description: [
      'Building and maintaining telehealth Android applications for secure virtual doctor visits',
      'Integrating HIPAA-compliant APIs and real-time video communication',
      'Delivering healthcare software under strict compliance and security requirements',
    ],
  },
  {
    id: 'ncl',
    title: 'Software Architect / Engineering Lead',
    company: 'Norwegian Cruise Line',
    description: [
      'Led mobile architecture for large-scale travel applications serving millions of users',
      'Managed and mentored a team of 8+ mobile engineers',
      'Designed scalable Flutter architecture enabling 40% faster feature delivery',
      'Established CI/CD pipelines reducing deployment time by 60%',
    ],
  },
  {
    id: 'reatro',
    title: 'Senior Application Developer',
    company: 'Reatro Ventures',
    description: [
      'Developed Flutter-based food ordering apps for iOS and Android',
      'Designed analytics-driven smart menus increasing conversion by 25%',
      'Led real-time payments and order tracking API architecture',
    ],
  },
  {
    id: 'cellantenna',
    title: 'Android & Embedded Systems Developer',
    company: 'CellAntenna',
    description: [
      'Developed Android apps for interfacing with hardware devices via Bluetooth and serial communication',
      'Wrote Bash scripts to program and configure Arduino-based embedded systems',
      'Built the full mobile-to-hardware pipeline — from device protocols to user-facing apps',
    ],
  },
];

const skills = {
  'AI / Agents': [
    'Claude / OpenAI / Gemini',
    'Tool Use & Agentic Workflows',
    'RAG & Vector Databases',
    'Prompt Engineering',
  ],
  'Frontend': [
    'Next.js / React',
    'TypeScript',
    'Flutter / Dart',
    'Tailwind CSS',
  ],
  'Backend': [
    'Node.js / Python',
    'PostgreSQL / Firebase',
    'REST APIs / Fastify',
    'Supabase / Prisma',
  ],
  'Infrastructure': [
    'Vercel / AWS',
    'Docker / CI/CD',
    'GitHub Actions',
    'Team Leadership',
  ],
};

function ExperienceNode({ exp, index, isActive, onClick }: {
  exp: typeof experiences[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative w-full text-left transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
      }`}
    >
      {/* Node connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px">
        <div className={`h-full transition-all duration-500 ${
          isActive ? 'bg-neural' : 'bg-border'
        }`} />
      </div>

      {/* Node dot */}
      <div className="absolute left-0 top-3 -translate-x-1/2 z-10">
        <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
          isActive
            ? 'border-neural bg-neural shadow-[0_0_10px_rgba(0,255,224,0.5)]'
            : 'border-border bg-void group-hover:border-neural/50'
        }`} />
      </div>

      {/* Content */}
      <div className="pl-8 py-3">
        <div className="font-mono text-[10px] text-white/30 tracking-widest mb-1">
          [{String(index + 1).padStart(2, '0')}]
        </div>
        <h4 className={`font-mono text-sm font-semibold transition-colors duration-300 ${
          isActive ? 'text-neural' : 'text-white group-hover:text-white'
        }`}>
          {exp.title}
        </h4>
        <p className="text-xs text-white/50 mt-0.5">{exp.company}</p>
      </div>
    </button>
  );
}

function SkillCategory({ category, skills, delay }: {
  category: string;
  skills: string[];
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h4 className="font-mono text-xs tracking-widest text-neural mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-neural/30 rounded-full" />
        {category}
      </h4>
      <div className="space-y-2">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors"
          >
            <span className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-neural transition-colors" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);
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

  const currentExp = experiences[activeExp];

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-neural" />
            <span className="font-mono text-xs tracking-widest text-neural">
              EXPERIENCE_&_SKILLS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Technical</span>
            <br />
            <span className="text-white/40">Background</span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className={`grid lg:grid-cols-12 gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Experience timeline - left */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h3 className="font-mono text-[10px] text-white/30 tracking-widest mb-6 uppercase">
                Career Path
              </h3>
              <div className="space-y-0">
                {experiences.map((exp, index) => (
                  <ExperienceNode
                    key={exp.id}
                    exp={exp}
                    index={index}
                    isActive={activeExp === index}
                    onClick={() => setActiveExp(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Experience details - center */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="border border-border bg-surface/50 p-6 relative overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 left-0 w-8 h-8">
                  <div className="absolute top-0 left-0 w-full h-px bg-neural" />
                  <div className="absolute top-0 left-0 h-full w-px bg-neural" />
                </div>

                <div className="mb-4">
                  <span className="font-mono text-[10px] text-white/30 tracking-widest">
                    SELECTED_ROLE
                  </span>
                </div>

                <h3 className="font-mono text-xl font-bold text-neural mb-1">
                  {currentExp.title}
                </h3>
                <p className="text-sm text-white/50 mb-6">{currentExp.company}</p>

                <div className="space-y-3">
                  {currentExp.description.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="text-neural mt-0.5">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Navigation dots */}
                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-border">
                  {experiences.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveExp(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeExp === i
                          ? 'bg-neural w-6'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills - right */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] text-white/30 tracking-widest mb-6 uppercase">
              Core Skills
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <SkillCategory
                  key={category}
                  category={category}
                  skills={items}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
