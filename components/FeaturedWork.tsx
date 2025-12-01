export default function FeaturedWork() {
  const projects = [
    {
      title: "AI Flashcard Engine",
      subtitle: "LLM-Driven Learning Platform",
      role: "Founder & Technical Architect",
      problem: "Med students rely heavily on flashcards, but most tools require too much manual effort: manually creating cards, tagging concepts, reorganizing decks, and scheduling reviews.",
      solution: [
        "Auto-generate high-quality flashcards from PDFs, lecture notes, or textbook excerpts",
        "Extract concepts and generate tags & categories automatically",
        "Summarize sessions and create adaptive study plans",
        "Build spaced-repetition schedules using an AI-informed algorithm",
        "Support long-form explanations, comparisons, diagrams, clinical vignettes, and rapid-fire recall questions"
      ],
      roleDetails: [
        "Defined the MVP specification centered on text → flashcard pipelines",
        "Designed the AI processing layer (LLM prompt design, chunking, hallucination controls, and verification logic)",
        "Built the backend card-generation engine using serverless functions",
        "Designed the data model for cards, decks, tags, categories, and review history",
        "Mapped out adaptive SRS logic that dynamically reschedules cards based on AI analysis"
      ],
      impact: [
        "Reduces card creation time from hours → seconds",
        "Produces higher-quality, clinically relevant cards compared to manual writing",
        "Lays the foundation for a broader AI study ecosystem"
      ],
      tech: "LLMs / OpenAI APIs, Python / Node microservices, Chunking/embeddings/retrieval, React or Flutter front-end, Cloud serverless architecture"
    },
    {
      title: "Roomzy",
      subtitle: "AI-Powered Virtual Home Staging",
      role: "Founder & Product Architect",
      problem: "Real estate agents and hosts need high-quality listing photos, but traditional staging is expensive and slow.",
      solution: [
        "Lets users upload empty room photos and generate staged variants in seconds",
        "Targets real estate agents, Airbnb hosts, and photographers",
        "Supports freemium, pay-as-you-go, and subscription pricing"
      ],
      roleDetails: [
        "Defined the full product roadmap and go-to-market strategy",
        "Designed the MVP architecture: frontend app, AI integration layer, and backend APIs",
        "Led branding, landing page copy, and early marketing experiments",
        "Integrated business metrics into the product (conversion points, retention levers)"
      ],
      impact: [
        "Created a scalable digital product that can operate independent of my time",
        "Designed a pipeline toward recurring revenue and a productizable service"
      ],
      tech: "React/Next.js, serverless backend, AI image generation APIs (Stable Diffusion)"
    },
    {
      title: "Marathons",
      subtitle: "Infinite Hierarchy Task Manager",
      role: "Solo Architect & Lead Developer",
      problem: "Most to-do apps collapse once tasks get deeply nested or complex. I wanted a system where projects could have infinite subtasks, real progress tracking, and a clean UX.",
      solution: [
        "Infinite nesting of tasks and subtasks (tree structure)",
        "Linked-list ordering for flexible drag-and-drop reordering",
        "Recursive progress calculation handled locally for performance",
        "Real-time sync and offline-first behavior with Firebase"
      ],
      roleDetails: [
        "Defined the domain model (Task, TaskDTO, progress computation)",
        "Designed Clean Architecture layers (presentation / application / domain / data)",
        "Implemented the core Flutter app (mobile + web)",
        "Wrote the PRD, feature specs, and architecture docs"
      ],
      impact: [
        "Handles arbitrarily deep hierarchies without performance collapse",
        "Enables intuitive drag-and-drop reordering without expensive DB writes",
        "Serves as a foundation for a future collaborative productivity platform"
      ],
      tech: "Flutter, Firebase/Firestore, Clean Architecture, Riverpod, Dart"
    },
    {
      title: "STR Systems",
      subtitle: "Short-Term Rental Tech & Operations",
      role: "Founder / Operator",
      problem: "Beyond software, I built an operational system around two short-term rental properties in South Florida.",
      solution: [
        "STR #1: Beachfront condo in Hollywood, FL",
        "STR #2: Single-family home in Palmetto Bay, FL"
      ],
      roleDetails: [
        "Automated pricing via tools like PriceLabs",
        "Calendar, cleaning, and guest messaging workflows",
        "Check-in/check-out systems (smart locks, access codes, guest instructions)",
        "Compliance workflows (licenses, tax filings, insurance)"
      ],
      impact: [
        "Direct experience running a real business with real constraints",
        "Built systems that blend tech, operations, and customer experience",
        "Reinforces my bias toward measurable outcomes, not 'just code'"
      ],
      tech: "PriceLabs, smart locks, automation tools, compliance systems"
    }
  ];

  return (
    <section id="work" className="relative py-32 px-6 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#00d9ff_1px,transparent_1px),linear-gradient(to_bottom,#00d9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-strong border border-cyan-500/20 mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
            <span className="text-sm font-medium text-cyan-300">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">AI-Powered</span>
            <br />
            <span className="gradient-text-ai">Projects</span>
          </h2>
        </div>
        
        {/* Projects grid - alternating layout */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className={`grid lg:grid-cols-12 gap-8 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Project info - alternating sides */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="sticky top-24">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        {project.role}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-cyan-300 mb-6">{project.subtitle}</p>
                    
                    <div className="glass-strong rounded-xl p-6 border border-white/5 mb-6">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-3 uppercase tracking-wider">Problem</h4>
                      <p className="text-white/70 leading-relaxed">{project.problem}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-blue-300 mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{project.tech}</p>
                    </div>
                  </div>
                </div>

                {/* Details - alternating sides */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="space-y-6">
                    <div className="glass-strong rounded-xl p-6 border border-white/5">
                      <h4 className="text-sm font-semibold text-cyan-300 mb-4 uppercase tracking-wider">Solution</h4>
                      <ul className="space-y-3">
                        {project.solution.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/70">
                            <span className="text-cyan-400 mt-1 text-sm">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-strong rounded-xl p-6 border border-white/5">
                      <h4 className="text-sm font-semibold text-blue-300 mb-4 uppercase tracking-wider">My Role</h4>
                      <ul className="space-y-3">
                        {project.roleDetails.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/70">
                            <span className="text-blue-400 mt-1 text-sm">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="glass-strong rounded-xl p-6 border border-white/5">
                      <h4 className="text-sm font-semibold text-purple-300 mb-4 uppercase tracking-wider">Impact</h4>
                      <ul className="space-y-3">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/70">
                            <span className="text-purple-400 mt-1 text-sm">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
