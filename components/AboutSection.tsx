'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skills = [
  { category: 'MOBILE', items: ['Flutter', 'Swift', 'Kotlin', 'React Native'] },
  { category: 'AI/ML', items: ['OpenAI', 'LangChain', 'TensorFlow Lite', 'On-Device ML'] },
  { category: 'BACKEND', items: ['Node.js', 'Python', 'Firebase', 'PostgreSQL'] },
  { category: 'TOOLS', items: ['Git', 'CI/CD', 'AWS', 'Docker'] },
];

const timeline = [
  {
    period: '2022 - PRESENT',
    role: 'Senior Mobile Engineer',
    company: 'Freelance / Consulting',
    description: 'Building AI-powered mobile applications for startups and enterprises.',
    highlight: true,
  },
  {
    period: '2020 - 2022',
    role: 'Mobile Developer',
    company: 'Tech Startup',
    description: 'Led Flutter development for production applications with 100K+ users.',
    highlight: false,
  },
  {
    period: '2018 - 2020',
    role: 'Software Engineer',
    company: 'Agency',
    description: 'Full-stack development and mobile app architecture.',
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
                  A mobile engineer specializing in AI-powered applications. My focus is
                  building production-ready Flutter apps that leverage LLMs, on-device ML,
                  and modern AI capabilities.
                </p>
                <p>
                  With experience across the full mobile stack—from UI/UX implementation
                  to backend integration—I help teams ship AI features that actually work
                  in the real world.
                </p>
                <p>
                  Currently available for consulting and contract work on ambitious mobile
                  + AI projects.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                <div>
                  <div className="font-mono text-3xl font-bold text-neural">6+</div>
                  <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1">
                    YEARS EXP
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-amber">30+</div>
                  <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1">
                    PROJECTS
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-neural">500K+</div>
                  <div className="font-mono text-[10px] text-text-tertiary tracking-wider mt-1">
                    APP USERS
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
