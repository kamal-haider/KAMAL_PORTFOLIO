'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { label: 'WORK', href: '#work' },
  { label: 'EXP', href: '#experience' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="group flex items-center gap-2"
          >
            <div className="w-8 h-8 border border-neural flex items-center justify-center transition-all duration-300 group-hover:bg-neural group-hover:shadow-[0_0_20px_rgba(0,255,224,0.3)]">
              <span className="font-mono text-xs font-bold text-neural group-hover:text-void transition-colors">
                KH
              </span>
            </div>
          </a>

          {/* Navigation Items - Floating pill on scroll */}
          <div
            className={`hidden md:flex items-center transition-all duration-500 ${
              isScrolled
                ? 'bg-surface/80 backdrop-blur-xl border border-border px-2 py-1 rounded-full'
                : ''
            }`}
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`relative px-4 py-2 font-mono text-xs tracking-widest transition-all duration-300 ${
                    isActive
                      ? 'text-neural'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-neural rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Current time - decorative */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="font-mono text-[10px] text-white/30 tracking-wider">
              <CurrentTime />
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 group">
            <span className="w-5 h-px bg-white/50 group-hover:bg-neural transition-colors" />
            <span className="w-3 h-px bg-white/50 group-hover:bg-neural transition-colors" />
          </button>
        </div>
      </div>

      {/* Progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border">
        <ProgressBar />
      </div>
    </nav>
  );
}

function CurrentTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span>{time} UTC</span>;
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="h-full bg-neural/50 transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}
