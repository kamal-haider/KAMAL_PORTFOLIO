export default function Experience() {
  const experiences = [
    {
      title: "Mobile Architect Owner",
      company: "Norwegian Cruise Line (NCL)",
      description: [
        "Lead mobile architecture and development for customer-facing travel applications",
        "Manage and mentor a team of 8 developers across iOS and Android platforms",
        "Design scalable architecture using Flutter for cross-platform support",
        "Coordinate across backend, product, and design teams to drive feature implementation",
        "Oversee CI/CD pipelines and automation tools, integrating Git and Ruby scripts"
      ]
    },
    {
      title: "Application Developer",
      company: "CirrusMD",
      description: [
        "Built and maintained a telehealth Android app for appointment management and video chat",
        "Integrated APIs to sync medical records and insurance coverage"
      ]
    },
    {
      title: "Senior Application Developer",
      company: "Reatro Ventures",
      description: [
        "Developed several Flutter-based food ordering apps for iOS and Android",
        "Designed smart menu system with user analytics and behavior tracking",
        "Created cross-platform messaging and live performance payment apps",
        "Led the design and delivery of REST-based API systems"
      ]
    },
    {
      title: "Android Developer",
      company: "Cell Antenna",
      description: [
        "Built and reverse-engineered Android software for mobile surveillance and security",
        "Developed IMSI-catcher tools for national security applications",
        "Built Bash/Linux scripts for automated device testing",
        "Managed SQL databases optimized for mobile hardware environments"
      ]
    }
  ];

  const skills = {
    "AI & Machine Learning": [
      "LLM integration (OpenAI APIs, Anthropic)",
      "Prompt engineering & optimization",
      "AI processing pipelines (chunking, embeddings, retrieval)",
      "Image generation APIs (Stable Diffusion)",
      "Hallucination controls & verification logic",
      "Adaptive AI algorithms"
    ],
    "Languages": [
      "Dart (Flutter)",
      "Kotlin",
      "Java",
      "Python",
      "JavaScript/TypeScript",
      "C#",
      "Go",
      "Ruby",
      "SQL"
    ],
    "Frameworks & Platforms": [
      "Flutter (iOS, Android, Web, macOS, Windows)",
      "Android SDK",
      "React/Next.js",
      "Node.js",
      "Express",
      "Unity (C#)",
      "Web3"
    ],
    "Architecture & Systems": [
      "Clean Architecture",
      "Domain-driven design",
      "REST API design",
      "Mobile architecture",
      "Cross-platform development",
      "CI/CD pipelines"
    ],
    "Cloud & Data": [
      "Firebase/Firestore",
      "Serverless (Cloud Functions)",
      "MongoDB",
      "SQL/NoSQL modeling",
      "Vector databases & embeddings"
    ],
    "Tools & Practices": [
      "Git",
      "TDD",
      "OAuth",
      "Automation & scripting",
      "Team leadership & mentoring"
    ]
  };

  return (
    <section id="experience" className="relative py-24 px-6 bg-gradient-to-b from-slate-800 via-purple-900/20 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            AI Expertise & Technical Skills
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
                      {exp.company}
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

