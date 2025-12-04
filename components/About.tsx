'use client';

import { useRef, useEffect, useState } from 'react';

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Large decorative text */}
      <div className="absolute top-1/4 -left-20 font-mono text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none leading-none">
        AI
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-neural" />
            <span className="font-mono text-xs tracking-widest text-neural">
              ABOUT_ME
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Building</span>
            <br />
            <span className="text-white/40">The Future</span>
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div className={`grid lg:grid-cols-12 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main statement - large left column */}
          <div className="lg:col-span-7 lg:pr-12">
            <div className="relative">
              {/* Decorative line */}
              <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neural via-neural/20 to-transparent" />

              <p className="text-2xl md:text-3xl leading-relaxed text-white/80 mb-8">
                I build mobile applications that seamlessly integrate AI capabilities—
                <span className="text-neural"> from LLM-powered features</span> and{' '}
                <span className="text-neural">on-device intelligence</span> to cross-platform
                AI experiences.
              </p>

              <p className="text-lg text-white/50 leading-relaxed mb-12">
                I specialize in bringing AI to iOS and Android apps in ways that feel native,
                performant, and genuinely useful. My focus is on the intersection of mobile
                engineering and artificial intelligence—building products that leverage AI
                to solve real problems.
              </p>

              {/* What I do blocks */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-border bg-surface/30 p-6 hover:border-neural/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 border border-neural/30 flex items-center justify-center group-hover:bg-neural/10 transition-colors">
                      <span className="text-neural text-sm">01</span>
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white">
                      AI Integration
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    LLM APIs, on-device models, and intelligent features that feel native to mobile platforms.
                  </p>
                </div>

                <div className="border border-border bg-surface/30 p-6 hover:border-neural/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 border border-neural/30 flex items-center justify-center group-hover:bg-neural/10 transition-colors">
                      <span className="text-neural text-sm">02</span>
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white">
                      Cross-Platform
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Flutter expertise for building AI features that work seamlessly across iOS, Android, and web.
                  </p>
                </div>

                <div className="border border-border bg-surface/30 p-6 hover:border-neural/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 border border-neural/30 flex items-center justify-center group-hover:bg-neural/10 transition-colors">
                      <span className="text-neural text-sm">03</span>
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white">
                      Architecture
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Clean, scalable mobile architectures designed for AI workloads and real-world performance.
                  </p>
                </div>

                <div className="border border-border bg-surface/30 p-6 hover:border-neural/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 border border-neural/30 flex items-center justify-center group-hover:bg-neural/10 transition-colors">
                      <span className="text-neural text-sm">04</span>
                    </div>
                    <h3 className="font-mono text-sm font-semibold text-white">
                      Leadership
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Leading teams to build production AI features, from architecture to deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Personal + Data */}
          <div className="lg:col-span-5">
            {/* Data visualization block */}
            <div className="border border-border bg-surface/30 p-6 mb-6">
              <div className="font-mono text-[10px] text-white/30 tracking-widest mb-6">
                SYSTEM_STATUS
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Mobile Development', value: 95 },
                  { label: 'AI/ML Integration', value: 88 },
                  { label: 'Flutter/Dart', value: 92 },
                  { label: 'Architecture Design', value: 90 },
                  { label: 'Team Leadership', value: 85 },
                ].map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-xs text-white/60">{skill.label}</span>
                      <span className="font-mono text-xs text-neural">{skill.value}%</span>
                    </div>
                    <div className="h-1 bg-border overflow-hidden">
                      <div
                        className="h-full bg-neural transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.value}%` : '0%',
                          transitionDelay: `${i * 100 + 500}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal note */}
            <div className="border border-border bg-surface/30 p-6">
              <div className="font-mono text-[10px] text-white/30 tracking-widest mb-4">
                BEYOND_CODE
              </div>
              <p className="text-sm text-white/50 leading-relaxed italic">
                &quot;Outside of work, I enjoy travel, fitness, and building systems in my own life
                the same way I do in code—intentionally, iteratively, and with serious
                long-term goals.&quot;
              </p>

              {/* Interests */}
              <div className="flex flex-wrap gap-2 mt-6">
                {['Travel', 'Fitness', 'Systems Thinking', 'AI Research'].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 font-mono text-[10px] tracking-wider border border-border text-white/40 hover:border-neural/30 hover:text-neural/60 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Location indicator */}
            <div className="mt-6 flex items-center gap-4 text-white/30">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-neural rounded-full animate-pulse" />
                <span className="font-mono text-xs">Currently exploring AI Mobile Engineer roles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
