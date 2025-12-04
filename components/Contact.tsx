'use client';

import { useState, useRef, useEffect } from 'react';

const terminalLines = [
  { type: 'input', text: '> system.connect("kamal")' },
  { type: 'output', text: 'Establishing connection...' },
  { type: 'output', text: 'Connection established.' },
  { type: 'output', text: '' },
  { type: 'output', text: 'Available endpoints:' },
];

const contacts = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'mr.haiderk@gmail.com',
    href: 'mailto:mr.haiderk@gmail.com',
    command: 'contact.email()',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: '/in/kamal-haider',
    href: 'https://www.linkedin.com/in/kamal-haider/',
    command: 'contact.linkedin()',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: '/kamal-haider',
    href: 'https://github.com/kamal-haider',
    command: 'contact.github()',
  },
];

function TerminalLine({ line, index }: { line: typeof terminalLines[0]; index: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  if (!show) return null;

  return (
    <div className={`font-mono text-sm ${line.type === 'input' ? 'text-neural' : 'text-white/50'}`}>
      {line.text}
    </div>
  );
}

export default function Contact() {
  const [hoveredContact, setHoveredContact] = useState<string | null>(null);
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
    <section id="contact" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neural/5 rounded-full blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-synapse/5 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-neural" />
            <span className="font-mono text-xs tracking-widest text-neural">
              INIT_CONNECTION
            </span>
            <div className="w-12 h-px bg-neural" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Let&apos;s</span>{' '}
            <span className="text-white/40">Connect</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Looking for someone to build AI-powered mobile apps? Let&apos;s talk about
            how I can help bring your ideas to life.
          </p>
        </div>

        {/* Terminal window */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="border border-border bg-surface/50 overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-void/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="font-mono text-xs text-white/30 ml-4">
                terminal — kamal@portfolio
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-6 space-y-2">
              {/* Animated terminal lines */}
              {isVisible && terminalLines.map((line, i) => (
                <TerminalLine key={i} line={line} index={i} />
              ))}

              {/* Contact links as terminal commands */}
              <div className="pt-4 space-y-3">
                {contacts.map((contact, i) => (
                  <a
                    key={contact.id}
                    href={contact.href}
                    target={contact.id !== 'email' ? '_blank' : undefined}
                    rel={contact.id !== 'email' ? 'noopener noreferrer' : undefined}
                    onMouseEnter={() => setHoveredContact(contact.id)}
                    onMouseLeave={() => setHoveredContact(null)}
                    className="group flex items-center gap-4 py-2 transition-all duration-300"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                      transitionDelay: `${(terminalLines.length + i) * 150}ms`,
                    }}
                  >
                    <span className="text-neural font-mono text-sm">{'>'}</span>
                    <span className={`font-mono text-sm transition-colors duration-300 ${
                      hoveredContact === contact.id ? 'text-neural' : 'text-white/70'
                    }`}>
                      {contact.command}
                    </span>
                    <span className="font-mono text-xs text-white/30 ml-auto hidden sm:block">
                      // {contact.value}
                    </span>
                    <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      hoveredContact === contact.id
                        ? 'bg-neural shadow-[0_0_10px_rgba(0,255,224,0.5)]'
                        : 'bg-white/20'
                    }`} />
                  </a>
                ))}
              </div>

              {/* Cursor */}
              <div className="pt-4 flex items-center gap-2">
                <span className="text-neural font-mono text-sm">{'>'}</span>
                <span className="w-2 h-4 bg-neural animate-blink" />
              </div>
            </div>
          </div>
        </div>

        {/* Alternative contact grid */}
        <div className={`grid md:grid-cols-3 gap-4 mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.href}
              target={contact.id !== 'email' ? '_blank' : undefined}
              rel={contact.id !== 'email' ? 'noopener noreferrer' : undefined}
              className="group border border-border bg-surface/30 p-6 hover:border-neural/30 transition-all duration-300"
            >
              <div className="font-mono text-[10px] text-white/30 tracking-widest mb-2">
                {contact.label}
              </div>
              <div className="font-mono text-sm text-white/70 group-hover:text-neural transition-colors">
                {contact.value}
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/30">
            <div className="font-mono text-xs">
              <span className="text-neural">KAMAL.HAIDER</span> // AI Mobile Engineer
            </div>
            <div className="font-mono text-[10px] tracking-wider">
              DESIGNED & BUILT WITH PURPOSE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
