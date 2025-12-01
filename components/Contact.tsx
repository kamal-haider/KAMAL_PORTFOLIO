export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Let's work together
          </span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 leading-relaxed">
          If you're looking for someone who can own complex systems from architecture to execution — and is comfortable building in ambiguity — I'd love to talk.
        </p>

        <div className="space-y-6">
          <a
            href="mailto:mr.haiderk@gmail.com"
            className="group block glass rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">✉️</span>
              <span className="text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                mr.haiderk@gmail.com
              </span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-haider/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block glass rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">💼</span>
              <span className="text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all">
                LinkedIn Profile
              </span>
            </div>
          </a>
          <a
            href="https://github.com/kamal-haider"
            target="_blank"
            rel="noopener noreferrer"
            className="group block glass rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">💻</span>
              <span className="text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                GitHub Profile
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

