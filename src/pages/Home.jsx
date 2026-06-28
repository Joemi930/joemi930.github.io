import AboutPreview from "../sections/AboutPreview.jsx";
import ContactCTA from "../sections/ContactCTA.jsx";
import Experience from "../sections/Experience.jsx";
import FeaturedProjects from "../sections/FeaturedProjects.jsx";
import Hero from "../sections/Hero.jsx";
import Skills from "../sections/Skills.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <AboutPreview />
      <Experience />
      <ContactCTA />
    </>
  );
}
