'use client';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-24 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Minimal gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto w-full z-10">
        {/* Main content - asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - Main text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-500/20">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse-slow"></span>
                <span className="text-sm font-medium text-cyan-300">AI-First Technical Leader</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
                <span className="text-white">Building</span>
                <br />
                <span className="gradient-text-ai">AI Systems</span>
                <br />
                <span className="text-white/80">That Matter</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
                I architect and ship AI-powered products end-to-end — from LLM integration and intelligent automation to scalable platforms that deliver real value.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToWork}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <span className="relative z-10">View AI Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-strong text-white border border-white/10 rounded-lg font-semibold hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right column - AI Skills showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-strong rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="text-lg font-bold text-white">LLM Integration</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                OpenAI, Anthropic APIs, prompt engineering, and production-ready AI pipelines
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-xl">⚡</span>
                </div>
                <h3 className="text-lg font-bold text-white">AI Architecture</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                End-to-end AI systems: chunking, embeddings, retrieval, hallucination controls
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-bold text-white">Product Execution</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                From AI research to shipped features — architecture, implementation, deployment
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section - Quick stats/pillars */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-ai mb-2">AI-First</div>
            <div className="text-sm text-white/50">Core Focus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-ai mb-2">End-to-End</div>
            <div className="text-sm text-white/50">Full Stack</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-ai mb-2">Production</div>
            <div className="text-sm text-white/50">Ready Systems</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text-ai mb-2">Real Impact</div>
            <div className="text-sm text-white/50">Measurable Results</div>
          </div>
        </div>

        <p className="text-center text-sm text-white/40 mt-12 italic">
          Currently exploring Staff / Principal / Technical Fellow opportunities
        </p>
      </div>
    </section>
  );
}
