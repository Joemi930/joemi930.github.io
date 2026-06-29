import Container from "../components/Container.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/projects.js";
import { siteContent } from "../data/siteContent.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function FeaturedProjects() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <SectionTitle
          kicker={siteContent.homeProjects.kicker}
          title={siteContent.homeProjects.title}
          description={siteContent.homeProjects.description}
        />
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </Container>
    </section>
  );
}
