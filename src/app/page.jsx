import ProjectsPage from "./projects/page";
import ResumePage from "./resume/page";
import CertificationPage from "./certification/page";
import ContactPage from "./contact/page";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div>
        <ProjectsPage />
        <ResumePage />
        <CertificationPage />
        <ContactPage />
      </div>
    </>
  );
}
