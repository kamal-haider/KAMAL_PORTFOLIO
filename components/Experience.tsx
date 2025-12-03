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
      "Mobile LLM integration (OpenAI, Anthropic in iOS/Android)",
      "On-device AI models & mobile optimization",
      "Mobile AI pipelines (efficient API calls, caching, offline)",
      "Cross-platform AI features (Flutter + AI)",
      "Mobile prompt engineering & optimization",
      "AI-powered mobile UX patterns"
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
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm font-medium text-cyan-300">Experience & Skills</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Technical</span>
            <br />
            <span className="gradient-text-ai">Expertise</span>
          </h2>
        </div>

        {/* AI Skills - Prominently Featured First */}
        <div className="mb-24">
          <div className="glass-strong rounded-2xl p-8 border border-cyan-500/20 glow-cyan">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Mobile AI & Machine Learning</h3>
                <p className="text-sm text-cyan-300">Core Expertise</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills["AI & Machine Learning"].map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 text-sm font-medium hover:bg-cyan-500/15 hover:border-cyan-500/30 transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></span>
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50"></div>
                  <div className="absolute left-[-6px] top-0 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full border-2 border-[#0a0e1a]"></div>
                  <div className="glass-strong rounded-xl p-6 border border-white/5">
                    <h4 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-cyan-300 mb-4 text-sm font-medium">
                      {exp.company}
                    </p>
                    <ul className="space-y-2 text-white/70 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5 text-xs">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skills).filter(([category]) => category !== "AI & Machine Learning").map(([category, items], catIndex) => (
                <div key={category} className="glass-strong rounded-xl p-6 border border-white/5">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 text-white/70 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
