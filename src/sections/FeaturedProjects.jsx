import Container from "../components/Container.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/projects.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function FeaturedProjects() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <SectionTitle
          kicker="Projets sélectionnés"
          title="Deux projets concrets, présentés avec contexte."
          description="Chaque page détail explique le problème, la solution, l'architecture et l'état réel du code."
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
