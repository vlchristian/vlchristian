import Image from "next/image";
const projects = [
  {
    title: "Course Mobile App",
    description: "A course management mobile app for students.",
    tech: "Figma",
    image: "/images/figma-design.png"
  },
  {
    title: "Asuza Information System",
    description: "A information system for Asuza Constructions Services",
    tech: "Next.js, Supabase",
    image: "/images/asuza-is.png"
  }
];

export default function ProjectsPage() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
          {projects.map((proj) => (
            <div key={proj.title} className="border rounded-lg p-6">
                <Image 
                src={proj.image}
                alt={proj.title}
                width={400}
                height={200}
                className="w-full h-60 object-cover rounded mb-4"
                />
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="mb-2">{proj.description}</p>
              <p className="text-sm mb-4 font-mono">{proj.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
