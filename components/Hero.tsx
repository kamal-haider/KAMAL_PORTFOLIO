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
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Kamal Haider
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-8">
          Technical Leader & Product-Focused Builder
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          I design and ship systems end-to-end — from architecture and AI-driven apps to real-world operations — and help teams move from idea to production with clarity and speed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToWork}
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
          >
            <span className="relative z-10">View Selected Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 glass text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:border-white/50"
          >
            Download Resume
          </a>
        </div>

        <p className="text-sm text-slate-400 italic">
          Currently exploring Staff / Principal / Technical Fellow opportunities.
        </p>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-6 glass rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🏗️
            </div>
            <h3 className="font-semibold text-white mb-2">Systems & Architecture</h3>
            <p className="text-sm text-slate-300">Clean, scalable designs across mobile, web, and backend.</p>
          </div>
          <div className="group p-6 glass rounded-xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🤖
            </div>
            <h3 className="font-semibold text-white mb-2">AI & Product Execution</h3>
            <p className="text-sm text-slate-300">Turn vague ideas into shipped features with real users.</p>
          </div>
          <div className="group p-6 glass rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="font-semibold text-white mb-2">Real-World Ops</h3>
            <p className="text-sm text-slate-300">Built revenue-generating short-term rentals and business systems.</p>
          </div>
          <div className="group p-6 glass rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📚
            </div>
            <h3 className="font-semibold text-white mb-2">Teaching & Tools</h3>
            <p className="text-sm text-slate-300">Learning platforms, flashcard engines, and productivity apps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

