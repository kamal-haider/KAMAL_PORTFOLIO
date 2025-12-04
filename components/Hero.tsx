'use client';

import { useEffect, useRef, useState } from 'react';

// Particle system for neural network background
function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = Math.min(80, Math.floor(window.innerWidth / 20));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Mouse influence
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150 * 0.02;
          particle.vx += dx * force * 0.01;
          particle.vy += dy * force * 0.01;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundary wrap
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 224, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist2 < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(0, 255, 224, ${0.15 * (1 - dist2 / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

// Typing effect hook
function useTypingEffect(text: string, speed: number = 50, delay: number = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
}

export default function Hero() {
  const { displayText: nameText, isComplete: nameComplete } = useTypingEffect('KAMAL HAIDER', 80, 500);
  const { displayText: roleText } = useTypingEffect('AI MOBILE ENGINEER', 60, 1800);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3200);
    return () => clearTimeout(timer);
  }, []);

  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <NeuralBackground />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-void/50 to-void" />

      {/* Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neural/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        {/* Status indicator */}
        <div className="animate-fade-in-up opacity-0 mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-border rounded-full">
            <span className="status-online font-mono text-xs text-neural tracking-wider">
              SYSTEM ONLINE
            </span>
          </div>
        </div>

        {/* Main title with typing effect */}
        <div className="mb-6">
          <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-neural glow-text">
              {nameText}
              {!nameComplete && <span className="animate-blink">|</span>}
            </span>
          </h1>
        </div>

        {/* Role with typing effect */}
        <div className="mb-12">
          <p className="font-mono text-xl md:text-2xl lg:text-3xl text-white/60 tracking-widest">
            {roleText}
            {nameComplete && roleText.length < 18 && <span className="animate-blink text-neural">|</span>}
          </p>
        </div>

        {/* Description - fades in after typing */}
        <div className={`max-w-2xl transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-lg md:text-xl text-white/50 leading-relaxed mb-12">
            I build mobile applications that seamlessly integrate AI capabilities—from
            LLM-powered features and on-device intelligence to cross-platform AI
            experiences on iOS and Android.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToWork}
              className="group relative px-8 py-4 bg-neural text-void font-mono font-semibold text-sm tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,224,0.3)]"
            >
              <span className="relative z-10">VIEW_PROJECTS</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border border-border text-white/70 font-mono font-medium text-sm tracking-wider transition-all duration-300 hover:border-neural hover:text-neural corner-accents"
            >
              DOWNLOAD_CV
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {[
            { label: 'PLATFORM', value: 'iOS & Android' },
            { label: 'FOCUS', value: 'AI Integration' },
            { label: 'FRAMEWORK', value: 'Flutter' },
            { label: 'STATUS', value: 'Available' },
          ].map((stat, i) => (
            <div key={i} className="border-l border-border pl-4">
              <div className="font-mono text-[10px] text-white/40 tracking-widest mb-1">
                {stat.label}
              </div>
              <div className="font-mono text-sm text-neural tracking-wide">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center gap-2 text-white/30">
            <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-neural/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
