'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSound } from '@/hooks/useSound';

const navItems = [
  { label: 'OPERATIONS', href: '#work' },
  { label: 'PROFILE', href: '#about' },
  { label: 'COMMS', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { play } = useSound();

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
    play('nav');
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleHover = () => {
    play('hover');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Background blur on scroll */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-void/80 backdrop-blur-xl border-b border-border'
              : 'bg-transparent'
          }`}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="group flex items-center gap-3"
            >
              <div className="relative w-10 h-10 border border-neural/50 flex items-center justify-center transition-all duration-300 group-hover:border-neural group-hover:shadow-glow-neural overflow-hidden">
                <span className="font-mono text-sm font-bold text-neural tracking-wider">
                  NL
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neural/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
              <div className="hidden sm:block">
                <div className="font-mono text-xs tracking-[0.2em] text-text-primary">
                  NEURAL
                  <span className="text-neural">.LINK</span>
                </div>
                <div className="font-mono text-[10px] text-text-tertiary tracking-wider">
                  COMMAND CENTER
                </div>
              </div>
            </a>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    onMouseEnter={handleHover}
                    className={`relative px-5 py-2 font-mono text-xs tracking-[0.15em] transition-all duration-300 ${
                      isActive
                        ? 'text-neural'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-neural/10 border border-neural/30"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right side - Status + Time */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neural opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-neural" />
                </span>
                <span className="font-mono text-[10px] text-text-tertiary tracking-wider">
                  ACTIVE
                </span>
              </div>
              <div className="font-mono text-xs text-text-tertiary tabular-nums">
                <CurrentTime />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center border border-border transition-all duration-300 hover:border-neural"
            >
              <div className="flex flex-col items-center justify-center gap-1.5">
                <span
                  className={`w-5 h-px bg-text-secondary transition-all duration-300 ${
                    mobileMenuOpen ? 'rotate-45 translate-y-[3.5px]' : ''
                  }`}
                />
                <span
                  className={`w-5 h-px bg-text-secondary transition-all duration-300 ${
                    mobileMenuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Progress line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border">
          <ProgressBar />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-void/95 backdrop-blur-xl" />
            <div className="relative pt-24 px-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`px-4 py-4 font-mono text-lg tracking-[0.2em] border-b border-border transition-colors ${
                        isActive
                          ? 'text-neural border-neural/30'
                          : 'text-text-secondary'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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

  return <span>{time}</span>;
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
      className="h-full bg-gradient-to-r from-neural via-neural to-amber transition-all duration-150"
      style={{ width: `${progress}%` }}
    />
  );
}
