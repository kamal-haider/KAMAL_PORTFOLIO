export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            I'm a builder who likes to see the whole board — from the code architecture to the product roadmap to how it ties into a real business.
          </p>

          <p className="text-lg leading-relaxed">
            I've:
          </p>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Designed and shipped cross-platform apps in Flutter</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Architected AI-driven products like Roomzy and a med-focused flashcard engine</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Built and operated profitable short-term rentals end-to-end</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Run multi-year personal "roadmaps" for fitness, income, and learning</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed">
            I'm happiest when I'm:
          </p>
          <ul className="space-y-2 text-lg">
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Turning fuzzy ideas into clear, executable plans</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Owning projects from architecture through launch</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-900 mr-2">•</span>
              <span>Working with people who care about impact, craftsmanship, and long-term thinking</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed mt-8 italic text-gray-600">
            Outside of work, I enjoy travel, fitness, and building systems in my own life the same way I do in code — intentionally, iteratively, and with serious long-term goals.
          </p>
        </div>
      </div>
    </section>
  );
}

