import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { projects } from "../data/projects.js";

const filters = ["Tous", "IA", "Web", "Automation", "En développement"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tous") return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="page page--projects">
      <Container>
        <SectionTitle
          kicker="Portfolio"
          title="Mes projets"
          description="Deux projets principaux qui montrent mon évolution technique, mon intérêt pour l'IA, l'automatisation et le développement d'applications modernes."
        />
        <div className="filter-row" role="group" aria-label="Filtrer les projets">
          {filters.map((filter) => (
            <button
              className={filter === activeFilter ? "filter-pill is-active" : "filter-pill"}
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
