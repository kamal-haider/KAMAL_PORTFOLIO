export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer / Technical Lead",
      company: "[Company Name]",
      years: "[Years]",
      description: [
        "Led design and implementation of multi-platform apps, internal tools, and systems.",
        "Worked across architecture, implementation, and mentoring.",
        "Collaborated with product and operations teams to align tech with business goals."
      ]
    }
    // Add more experiences as needed
  ];

  const skills = {
    "Architecture & Systems": [
      "Clean Architecture",
      "Domain-driven design basics",
      "API design",
      "Distributed-thinking"
    ],
    "Languages & Frameworks": [
      "Dart (Flutter)",
      "JavaScript/TypeScript",
      "React/Next.js",
      "Node.js",
      "Python (for scripting/AI glue)"
    ],
    "Cloud & Data": [
      "Firebase/Firestore",
      "Serverless (Cloud Functions)",
      "REST APIs",
      "Basic SQL/NoSQL modeling"
    ],
    "AI & Tooling": [
      "LLM integration (OpenAI APIs)",
      "Prompt design",
      "Basic image generation pipelines"
    ],
    "Ops & Product": [
      "Product roadmapping",
      "PRDs",
      "MVP definition",
      "Experimentation",
      "KPI thinking"
    ]
  };

  return (
    <section id="experience" className="relative py-24 px-6 bg-gradient-to-b from-slate-800 via-purple-900/20 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Experience & Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>
                  <div className="absolute left-[-5px] top-0 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  <div className="glass rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-slate-300 mb-4">
                      {exp.company} – {exp.years}
                    </p>
                    <ul className="space-y-2 text-slate-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8">Skills</h3>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items], catIndex) => {
                const categoryGradients = [
                  'from-purple-500/20 to-pink-500/20',
                  'from-cyan-500/20 to-blue-500/20',
                  'from-pink-500/20 to-purple-500/20',
                  'from-blue-500/20 to-cyan-500/20',
                  'from-purple-500/20 to-cyan-500/20',
                ];
                return (
                  <div key={category} className="glass rounded-lg p-6 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-3">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full hover:border-purple-400/50 hover:scale-105 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

