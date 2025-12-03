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
            <span className="text-white">AI Mobile</span>
            <br />
            <span className="gradient-text-ai">Engineer</span>
          </h2>
        </div>

        {/* Main content - split layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Main statement */}
          <div className="space-y-8">
            <div className="glass-strong rounded-2xl p-8 border border-white/5">
              <p className="text-xl leading-relaxed text-white/80 mb-6">
                I build mobile applications that seamlessly integrate AI capabilities — from LLM-powered features and on-device intelligence to cross-platform AI experiences. I specialize in bringing AI to iOS and Android apps in ways that feel native, performant, and genuinely useful.
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
                What I&apos;ve Built
              </h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Built AI-powered mobile apps integrating LLM APIs, on-device AI models, and intelligent features for iOS and Android</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Architected mobile AI systems: prompt engineering for mobile, efficient API integration, offline AI capabilities, and adaptive mobile algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Designed and shipped cross-platform Flutter apps with AI features, clean architecture, and mobile-optimized AI pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1.5 text-lg">→</span>
                  <span>Led mobile teams building production AI features, from architecture to deployment across iOS, Android, and web platforms</span>
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
                  <span>Building mobile AI features that feel native and performant — from on-device models to cloud LLM integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1.5 text-lg">→</span>
                  <span>Owning mobile AI products end-to-end: architecture, LLM integration in mobile apps, efficient data pipelines, and polished UX</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1.5 text-lg">→</span>
                  <span>Working with teams building AI-powered mobile experiences that combine technical excellence with real user value</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
