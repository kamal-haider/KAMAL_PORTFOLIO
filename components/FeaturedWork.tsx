export default function FeaturedWork() {
  const projects = [
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
      title: "Pop Quiz – Multi-Platform Exam App",
      subtitle: "USMLE-Style Exam Practice App",
      role: "Solo Developer",
      problem: "Existing question banks are powerful but heavy; I wanted a lightweight, focused test experience that works everywhere with clean analytics.",
      solution: [
        "Runs on iOS, Android, Web, Windows, and macOS",
        "Pulls questions and explanations from Firebase",
        "Shows per-question feedback, explanations, and end-of-test analytics",
        "Supports categories and USMLE-style test structures"
      ],
      roleDetails: [
        "Designed the folder structure and Clean Architecture layers",
        "Implemented fake repositories for fast iteration, then Firebase-backed data sources",
        "Designed the test flow, result analytics, and offline caching strategy"
      ],
      impact: [
        "Demonstrates cross-platform execution and a clean architecture pattern",
        "Provides a solid foundation to scale into a full commercial exam platform"
      ],
      tech: "Flutter, Firebase/Firestore, Dart, Clean Architecture"
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

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Featured Work
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="border-t border-gray-200 pt-16">
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>
                <p className="text-sm text-gray-500 font-medium">{project.role}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Problem</h4>
                  <p className="text-gray-700 leading-relaxed mb-6">{project.problem}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                  <ul className="space-y-2 text-gray-700">
                    {project.solution.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-900 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">My Role</h4>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    {project.roleDetails.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-900 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Impact</h4>
                  <ul className="space-y-2 text-gray-700">
                    {project.impact.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-900 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Tech:</span> {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

