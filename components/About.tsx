export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm font-medium text-cyan-300">About</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">AI-First</span>
            <br />
            <span className="gradient-text-ai">Builder</span>
          </h2>
        </div>

        {/* Main content - split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Main statement */}
          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8 border border-white/5">
              <p className="text-xl leading-relaxed text-white/80 mb-6">
                I architect intelligent systems from the ground up — designing LLM integration layers, building AI processing pipelines, and turning complex AI capabilities into production-ready products that deliver real value.
              </p>

              <div className="pt-6 border-t border-white/5">
                <p className="text-base leading-relaxed text-white/60 italic">
                  Outside of work, I enjoy travel, fitness, and building systems in my own life the same way I do in code — intentionally, iteratively, and with serious long-term goals.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Key points */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
                What I've Built
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Architected AI-powered products like Roomzy (image generation) and an AI flashcard engine (LLM-driven learning)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Built end-to-end AI systems: prompt engineering, chunking pipelines, hallucination controls, and adaptive algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Designed and shipped cross-platform apps with clean architecture and scalable backend systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Operated real businesses end-to-end, blending AI tech with practical operations and measurable outcomes</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5">
              <h3 className="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
                What Drives Me
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1.5 text-lg">→</span>
                  <span>Designing AI systems that solve real problems — from prompt engineering to production deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1.5 text-lg">→</span>
                  <span>Owning AI products end-to-end: architecture, LLM integration, data pipelines, and user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1.5 text-lg">→</span>
                  <span>Working with teams who care about AI impact, technical craftsmanship, and building the future</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
