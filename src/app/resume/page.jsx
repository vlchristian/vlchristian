export default function ResumePage() {
  return (
    <section id="resume" className="py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Resume</h2>
        <p className="text-center text-muted-foreground mb-12">
          A clean, skimmable overview of my skills, experience, and education.
        </p>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <li className="border rounded px-3 py-2">JavaScript</li>
            <li className="border rounded px-3 py-2">Next.js</li>
            <li className="border rounded px-3 py-2">React</li>
            <li className="border rounded px-3 py-2">Flutter</li>
            <li className="border rounded px-3 py-2">Supabase</li>
            <li className="border rounded px-3 py-2">Figma</li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>

          <div className="border-l pl-4 space-y-6">
            <div>
              <h4 className="font-semibold">Asuza Construction Services</h4>
              <p className="text-sm text-muted-foreground">
                Developer • 2025-2026
              </p>
              <p className="mt-2 text-sm">
                Built an information system using Next.js and Supabase to manage company data and workflows.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="font-semibold">Course Mobile App</span> - Designed a course management app UI in Figma.
            </li>
            <li>
              <span className="font-semibold">Library System</span> - Built a basic system using Flutter and Dart.
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>

          <div>
            <h4 className="font-semibold">Bachelor of Science in Information Technology</h4>
            <p className="text-sm text-muted-foreground">
              Central Philippine University
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}