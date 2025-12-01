export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-800 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            About
          </span>
        </h2>

        <div className="glass rounded-2xl p-8 md:p-12 border border-white/10 space-y-8">
          <p className="text-lg md:text-xl leading-relaxed text-slate-200">
            I'm a builder who likes to see the whole board — from the code architecture to the product roadmap to how it ties into a real business.
          </p>

          <div>
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
              I've:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start text-slate-300">
                <span className="text-cyan-400 mr-3 mt-1 text-xl">▸</span>
                <span>Designed and shipped cross-platform apps in Flutter</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-pink-400 mr-3 mt-1 text-xl">▸</span>
                <span>Architected AI-driven products like Roomzy and a med-focused flashcard engine</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-purple-400 mr-3 mt-1 text-xl">▸</span>
                <span>Built and operated profitable short-term rentals end-to-end</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-blue-400 mr-3 mt-1 text-xl">▸</span>
                <span>Run multi-year personal "roadmaps" for fitness, income, and learning</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
              I'm happiest when I'm:
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start text-slate-300">
                <span className="text-cyan-400 mr-3 mt-1 text-xl">▸</span>
                <span>Turning fuzzy ideas into clear, executable plans</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-pink-400 mr-3 mt-1 text-xl">▸</span>
                <span>Owning projects from architecture through launch</span>
              </li>
              <li className="flex items-start text-slate-300">
                <span className="text-purple-400 mr-3 mt-1 text-xl">▸</span>
                <span>Working with people who care about impact, craftsmanship, and long-term thinking</span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed mt-8 italic text-slate-400 border-l-4 border-gradient-to-b from-purple-500 to-pink-500 pl-6 bg-gradient-to-r from-purple-500/10 to-transparent py-4 rounded-r-lg">
            Outside of work, I enjoy travel, fitness, and building systems in my own life the same way I do in code — intentionally, iteratively, and with serious long-term goals.
          </p>
        </div>
      </div>
    </section>
  );
}

