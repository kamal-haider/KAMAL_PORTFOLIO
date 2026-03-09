'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  { category: 'AI / AGENTS', items: ['Claude', 'OpenAI / ChatGPT', 'Gemini', 'LangChain', 'Tool Use', 'RAG', 'AI Agents', 'Vector DBs'] },
  { category: 'FRONTEND', items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Flutter'] },
  { category: 'BACKEND', items: ['Node.js', 'Python', 'Fastify', 'PostgreSQL', 'Firebase', 'Supabase'] },
  { category: 'INFRA', items: ['Vercel', 'AWS', 'Docker', 'CI/CD', 'GitHub Actions'] },
  { category: 'HARDWARE', items: ['Arduino', 'Bluetooth/BLE', 'Embedded Systems', 'Serial Comm'] },
];

const timeline = [
  {
    period: '2025 - PRESENT',
    role: 'Fullstack AI Engineer',
    company: 'Independent / Generation28',
    description: 'Building AI-powered products and developer tools — agentic systems, LLM orchestration platforms, and fullstack applications using Claude, Next.js, and Node.js.',
    highlight: true,
  },
  {
    period: '2021 - PRESENT',
    role: 'Application Developer',
    company: 'CirrusMD',
    description: 'Building and maintaining telehealth Android applications supporting secure virtual doctor visits. Integrating HIPAA-compliant APIs and real-time video communication.',
    highlight: false,
  },
  {
    period: '2022 - 2025',
    role: 'Software Architect / Engineering Lead',
    company: 'Norwegian Cruise Line',
    description: 'Architected systems serving millions of users. Led a team of 8+ engineers. Designed scalable architecture enabling 40% faster feature delivery and CI/CD pipelines reducing deployment time by 60%.',
    highlight: false,
  },
  {
    period: '2019 - 2021',
    role: 'Senior Application Developer',
    company: 'Reatro Ventures',
    description: 'Developed cross-platform apps for iOS and Android. Led real-time payments and order tracking API architecture. Designed analytics-driven features increasing conversion by 25%.',
    highlight: false,
  },
  {
    period: '2016 - 2019',
    role: 'Android & Embedded Systems Developer',
    company: 'CellAntenna',
    description: 'Developed Android apps for hardware device communication. Wrote Bash scripts to program Arduino-based embedded systems. Built the full mobile-to-hardware pipeline.',
    highlight: false,
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-3"
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-mono text-xs text-text-secondary tracking-wider">{name}</span>
        <span className="font-mono text-[10px] text-text-tertiary">{level}%</span>
      </div>
      <div className="h-1 bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-gradient-to-r from-neural to-neural/50"
        />
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber/3 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-12 h-px bg-amber" />
          <span className="font-mono text-xs tracking-[0.3em] text-amber uppercase">
            Profile
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left column - Bio */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-title font-bold mb-8">
                <span className="text-text-primary">Mission</span>
                <br />
                <span className="text-text-tertiary">Brief</span>
              </h2>

              <div className="space-y-6 text-text-secondary leading-relaxed">
                <p>
                  A fullstack engineer who builds AI-powered products from the ground up.
                  I work across the entire stack — frontend (Next.js, React, Flutter),
                  backend (Node.js, Python, PostgreSQL), and AI (Claude API, agentic
                  systems, tool orchestration).
                </p>
                <p>
                  I don&apos;t just integrate AI — I architect systems around it. From prompt
                  engineering and RAG pipelines to autonomous agents that use tools and
                  make decisions, I build the full infrastructure that makes AI products work
                  in production.
                </p>
                <p>
                  Currently available for senior engineering roles, AI architecture
                  consulting, and high-impact fullstack projects.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="font-mono text-3xl font-bold text-neural">10+</div>
                  <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1">
                    YEARS EXP
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-amber">25+</div>
                  <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1">
                    PROJECTS
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-neural">3</div>
                  <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1">
                    AI PRODUCTS LIVE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills & Timeline */}
          <div className="lg:col-span-7">
            {/* Skills Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs tracking-[0.2em] text-text-tertiary">
                  TECH MATRIX
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="border border-border bg-surface/30 p-4"
                  >
                    <div className="font-mono text-[10px] tracking-[0.2em] text-neural mb-4">
                      {skill.category}
                    </div>
                    <div className="space-y-2">
                      {skill.items.map((item) => (
                        <div
                          key={item}
                          className="font-mono text-xs text-text-secondary"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs tracking-[0.2em] text-text-tertiary">
                  MISSION LOG
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.period}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative pl-6 border-l-2 ${
                      item.highlight
                        ? 'border-neural'
                        : 'border-border'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${
                      item.highlight
                        ? 'bg-neural shadow-glow-neural'
                        : 'bg-border'
                    }`} />

                    <div className="font-mono text-[10px] text-text-tertiary tracking-wider mb-2">
                      {item.period}
                    </div>
                    <div className="font-mono text-lg text-text-primary mb-1">
                      {item.role}
                    </div>
                    <div className={`font-mono text-xs mb-2 ${
                      item.highlight ? 'text-neural' : 'text-amber'
                    }`}>
                      {item.company}
                    </div>
                    <p className="text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
