'use client';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.querySelector('#work');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Kamal Haider
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
          Technical Leader & Product-Focused Builder
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          I design and ship systems end-to-end — from architecture and AI-driven apps to real-world operations — and help teams move from idea to production with clarity and speed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToWork}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            View Selected Work
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <p className="text-sm text-gray-500 italic">
          Currently exploring Staff / Principal / Technical Fellow opportunities.
        </p>

        {/* Pillars */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Systems & Architecture</h3>
            <p className="text-sm text-gray-600">Clean, scalable designs across mobile, web, and backend.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">AI & Product Execution</h3>
            <p className="text-sm text-gray-600">Turn vague ideas into shipped features with real users.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Real-World Ops</h3>
            <p className="text-sm text-gray-600">Built revenue-generating short-term rentals and business systems.</p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-900 mb-2">Teaching & Tools</h3>
            <p className="text-sm text-gray-600">Learning platforms, flashcard engines, and productivity apps.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

