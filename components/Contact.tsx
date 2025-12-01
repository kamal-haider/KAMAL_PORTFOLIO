export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm font-medium text-cyan-300">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build</span>
            <br />
            <span className="gradient-text-ai">Together</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            If you're looking for someone who can architect AI-powered systems, integrate LLMs into production products, and turn complex AI capabilities into practical features — I'd love to talk.
          </p>
        </div>

        {/* Contact links */}
        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="mailto:mr.haiderk@gmail.com"
            className="group glass-strong rounded-xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl">✉️</span>
            </div>
            <div className="text-sm font-semibold text-white mb-1">Email</div>
            <div className="text-xs text-white/50">mr.haiderk@gmail.com</div>
          </a>
          
          <a
            href="https://www.linkedin.com/in/kamal-haider/"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-strong rounded-xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl">💼</span>
            </div>
            <div className="text-sm font-semibold text-white mb-1">LinkedIn</div>
            <div className="text-xs text-white/50">Connect with me</div>
          </a>
          
          <a
            href="https://github.com/kamal-haider"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-strong rounded-xl p-6 border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-xl">💻</span>
            </div>
            <div className="text-sm font-semibold text-white mb-1">GitHub</div>
            <div className="text-xs text-white/50">View my code</div>
          </a>
        </div>
      </div>
    </section>
  );
}
