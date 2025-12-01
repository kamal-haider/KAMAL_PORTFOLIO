export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Let's work together
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          If you're looking for someone who can own complex systems from architecture to execution — and is comfortable building in ambiguity — I'd love to talk.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:youremail@domain.com"
            className="block text-lg text-gray-900 hover:text-gray-700 transition-colors"
          >
            Email: youremail@domain.com
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-gray-900 hover:text-gray-700 transition-colors"
          >
            LinkedIn: [link]
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg text-gray-900 hover:text-gray-700 transition-colors"
          >
            GitHub: [link]
          </a>
        </div>
      </div>
    </section>
  );
}

