export default function FeaturedWork() {
  const projects = [
    {
      title: "AI Flashcard Engine for Med Students",
      subtitle: "AI-Powered Learning Platform",
      role: "Founder & Technical Architect",
      problem: "Med students rely heavily on flashcards, but most tools require too much manual effort: manually creating cards, tagging concepts, reorganizing decks, and scheduling reviews. This turns study tools into work instead of acceleration.",
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
        "Mapped out adaptive SRS logic that dynamically reschedules cards based on AI analysis",
        "Created the product roadmap, UX flows, and future expansion plan (e.g., extraction from YouTube lectures, medical diagrams, and board-style questions)"
      ],
      impact: [
        "Reduces card creation time from hours → seconds",
        "Produces higher-quality, clinically relevant cards compared to manual writing",
        "Lays the foundation for a broader AI study ecosystem (vignette generator, study session analytics, auto-deck builder)",
        "Provides a scalable tool that can expand beyond medicine into any field that relies on mastery learning"
      ],
      tech: "LLMs / OpenAI APIs, Python / Node microservices, Chunking/embeddings/retrieval, React or Flutter front-end, Cloud serverless architecture (Firebase/Firestore or Supabase)"
    },
    {
      title: "Roomzy – AI-Powered Virtual Home Staging",
      subtitle: "AI Virtual Home Staging SaaS",
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
      title: "Marathons – Infinite Hierarchy Task Manager",
      subtitle: "Deep Hierarchy Task & Progress Platform",
      role: "Solo Architect & Lead Developer",
      problem: "Most to-do apps collapse once tasks get deeply nested or complex. I wanted a system where projects could have infinite subtasks, real progress tracking, and a clean UX, all while staying fast and sync-friendly.",
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
      title: "STR Systems – Short-Term Rental Tech & Operations",
      subtitle: "Short-Term Rental Tech & Operations Stack",
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

  const gradientColors = [
    'from-purple-500/20 to-pink-500/20',
    'from-cyan-500/20 to-blue-500/20',
    'from-pink-500/20 to-purple-500/20',
    'from-blue-500/20 to-cyan-500/20',
  ];

  return (
    <section id="work" className="relative py-24 px-6 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="gradient-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            AI-Powered Projects
          </span>
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative glass rounded-2xl p-8 md:p-12 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]">
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xl text-slate-300 mb-4">{project.subtitle}</p>
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-medium">
                    {project.role}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">Problem</h4>
                    <p className="text-slate-300 leading-relaxed mb-6">{project.problem}</p>
                    
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-3">Solution</h4>
                    <ul className="space-y-2 text-slate-300">
                      {project.solution.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-3">My Role</h4>
                    <ul className="space-y-2 text-slate-300 mb-6">
                      {project.roleDetails.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-pink-400 mr-3 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">Impact</h4>
                    <ul className="space-y-2 text-slate-300">
                      {project.impact.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-3 mt-1">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-400">
                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Tech:</span> <span className="text-slate-300">{project.tech}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

