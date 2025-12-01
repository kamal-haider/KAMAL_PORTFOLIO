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
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
          Experience & Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">
                    {exp.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {exp.company} – {exp.years}
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-gray-900 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Skills</h3>
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
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

