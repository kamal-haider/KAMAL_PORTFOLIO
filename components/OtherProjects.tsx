export default function OtherProjects() {
  const projects = [
    {
      title: "Flux",
      subtitle: "Live Streaming with Viewer Control",
      description: "Concept for a mobile-first streaming platform where viewers drive the experience (polls, actions, dynamic overlays).",
      tech: ["Mobile", "Streaming", "Real-time"]
    },
    {
      title: "Pop Quiz",
      subtitle: "Multi-Platform Exam App",
      description: "A lightweight, multi-platform USMLE-style exam simulator built in Flutter. Features timed and untimed exam modes, instant answer feedback with explanations, category-based filtering, end-of-test analytics, and cloud-backed question sets.",
      tech: ["Flutter", "Firebase", "Dart", "Cross-Platform"]
    },
    {
      title: "IoT Sensor Experiments",
      subtitle: "Medical Wearables Prototyping",
      description: "Prototype work with IMUs, light sensors, and microcontrollers to better understand hardware for future health-related projects.",
      tech: ["IoT", "Hardware", "Prototyping"]
    }
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm font-medium text-cyan-300">Additional Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Other</span>
            <br />
            <span className="gradient-text-ai">Projects</span>
          </h2>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group glass-strong rounded-xl p-6 border border-white/5 hover:border-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-cyan-300 font-medium">{project.subtitle}</p>
              </div>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/10 text-white/60 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
