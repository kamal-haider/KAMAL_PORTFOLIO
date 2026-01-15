'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@kamalhaider',
    href: 'https://github.com/kamalhaider',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: '/in/kamalhaider',
    href: 'https://linkedin.com/in/kamalhaider',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'hello@kamalhaider.ai',
    href: 'mailto:hello@kamalhaider.ai',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function TerminalLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start gap-3 font-mono text-sm"
    >
      <span className="text-neural shrink-0">$</span>
      <span className="text-text-secondary">{children}</span>
    </motion.div>
  );
}

export default function ContactSection() {
  const [currentTime, setCurrentTime] = useState('');
  const { play } = useSound();

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toISOString().slice(0, 19).replace('T', ' '));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleHover = () => {
    play('hover');
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-neural/3 rounded-full blur-[200px]" />
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
          <div className="w-12 h-px bg-neural" />
          <span className="font-mono text-xs tracking-[0.3em] text-neural uppercase">
            Communications
          </span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left column - Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-title font-bold mb-8">
              <span className="text-text-primary">Open</span>
              <br />
              <span className="text-text-tertiary">Channel</span>
            </h2>

            {/* Terminal window */}
            <div className="border border-border bg-void/80 backdrop-blur-sm overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-signal/50" />
                  <div className="w-3 h-3 rounded-full bg-amber/50" />
                  <div className="w-3 h-3 rounded-full bg-neural/50" />
                </div>
                <span className="flex-1 text-center font-mono text-[10px] text-text-tertiary tracking-wider">
                  neural.link — bash
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 space-y-4">
                <TerminalLine delay={0.1}>
                  whoami
                </TerminalLine>
                <div className="pl-6 text-text-primary font-mono text-sm">
                  Kamal Haider — AI Mobile Engineer
                </div>

                <TerminalLine delay={0.2}>
                  cat availability.txt
                </TerminalLine>
                <div className="pl-6 text-neural font-mono text-sm">
                  STATUS: Available for new projects
                </div>
                <div className="pl-6 text-amber font-mono text-sm">
                  TIMEZONE: EST (Miami, FL)
                </div>
                <div className="pl-6 text-text-secondary font-mono text-sm">
                  RESPONSE: Usually within 24 hours
                </div>

                <TerminalLine delay={0.3}>
                  echo &quot;Build something amazing&quot;
                </TerminalLine>
                <div className="pl-6 text-text-primary font-mono text-sm">
                  Build something amazing
                </div>

                <TerminalLine delay={0.4}>
                  <span className="animate-blink text-neural">_</span>
                </TerminalLine>
              </div>

              {/* Terminal footer */}
              <div className="px-4 py-2 border-t border-border bg-surface/30">
                <div className="flex items-center justify-between font-mono text-[10px] text-text-tertiary">
                  <span>Last login: {currentTime}</span>
                  <span>neural.link:~</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Contact links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs tracking-[0.2em] text-text-tertiary">
                  DIRECT LINKS
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <div className="space-y-4">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={handleHover}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="group flex items-center gap-4 p-4 border border-border bg-surface/30 transition-all duration-300 hover:border-neural hover:bg-neural/5"
                  >
                    <div className="text-text-tertiary group-hover:text-neural transition-colors">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs text-text-tertiary tracking-wider mb-1">
                        {link.label.toUpperCase()}
                      </div>
                      <div className="font-mono text-sm text-text-primary group-hover:text-neural transition-colors">
                        {link.handle}
                      </div>
                    </div>
                    <svg
                      className="w-4 h-4 text-text-tertiary group-hover:text-neural group-hover:translate-x-1 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-neural/30 bg-neural/5 p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neural opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neural" />
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-neural">
                  CURRENTLY AVAILABLE
                </span>
              </div>
              <h3 className="font-mono text-xl text-text-primary mb-3">
                Got a project in mind?
              </h3>
              <p className="text-text-secondary mb-6">
                Open to discussing freelance opportunities, consulting work,
                or full-time positions in mobile + AI.
              </p>
              <a
                href="mailto:hello@kamalhaider.ai"
                onMouseEnter={handleHover}
                className="inline-flex items-center gap-2 px-6 py-3 bg-neural text-void font-mono text-sm tracking-wider transition-all duration-300 hover:shadow-glow-neural"
              >
                <span>INITIATE CONTACT</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-neural/50 flex items-center justify-center">
                <span className="font-mono text-xs font-bold text-neural">NL</span>
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.2em] text-text-primary">
                  NEURAL<span className="text-neural">.LINK</span>
                </div>
                <div className="font-mono text-[10px] text-text-tertiary">
                  © {new Date().getFullYear()} Kamal Haider
                </div>
              </div>
            </div>

            <div className="font-mono text-[10px] text-text-tertiary tracking-wider">
              DESIGNED & BUILT WITH{' '}
              <span className="text-signal">♥</span>
              {' '}IN MIAMI
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
