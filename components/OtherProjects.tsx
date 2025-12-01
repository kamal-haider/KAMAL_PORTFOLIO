export default function OtherProjects() {
  const projects = [
    {
      title: "Flux – Live Streaming with Viewer Control",
      description: "Concept for a mobile-first streaming platform where viewers drive the experience (polls, actions, dynamic overlays).",
      tech: ["Mobile", "Streaming", "Real-time"]
    },
    {
      title: "AI Flashcard Engine for Med Students",
      description: "Designed an MVP for a platform that auto-generates and schedules flashcards from PDFs, YouTube lectures, and notes using AI.",
      tech: ["AI", "Flutter", "Firebase"]
    },
    {
      title: "IoT Sensor Experiments for Medical Wearables",
      description: "Prototype work with IMUs, light sensors, and microcontrollers to better understand hardware for future health-related projects.",
      tech: ["IoT", "Hardware", "Prototyping"]
    }
  ];

  const cardGradients = [
    'from-purple-500/10 to-pink-500/10',
    'from-cyan-500/10 to-blue-500/10',
    'from-pink-500/10 to-purple-500/10',
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Other Projects
          </span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative p-6 glass rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[index % cardGradients.length]} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full hover:border-purple-400/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

