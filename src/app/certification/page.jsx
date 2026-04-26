import Image from "next/image";
const certificates = [
    {
        title: "CCNA: Introduction to Networks",
        image: "/images/ccna.png"
    },
    {
        title: "Base Build",
        image: "/images/base.jpg"
    }
]
export default function CertificationPage(){
    return (
        <section id="certification" className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              {certificates.map((cert) => (
                <div key={cert.title} className="border rounded-lg p-6">
                    <Image 
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={200}
                    className="w-full h-60 object-cover rounded mb-4"
                    />
                  <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}