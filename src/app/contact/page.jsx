export default function ContactPage() {
    return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8">
          Feel free to connecty with me, or just drop by a message!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:vlcastroverde794@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Email Me
          </a>
          <a
            href="https://github.com/vlchristian"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
