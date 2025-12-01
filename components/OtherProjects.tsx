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

  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Other Projects
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
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

