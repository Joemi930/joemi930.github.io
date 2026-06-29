import { useMemo, useState } from "react";
import Container from "../components/Container.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function Projects() {
  const { projects, siteContent } = usePortfolioContent();
  const [activeFilter, setActiveFilter] = useState(siteContent.projectsPage.filters[0]);
  const filteredProjects = useMemo(() => {
    if (activeFilter === siteContent.projectsPage.filters[0]) return projects;
    return projects.filter((project) => project.filters.includes(activeFilter));
  }, [activeFilter, projects, siteContent.projectsPage.filters]);

  return (
    <section className="page page--projects">
      <Container>
        <SectionTitle
          kicker={siteContent.projectsPage.kicker}
          title={siteContent.projectsPage.title}
          description={siteContent.projectsPage.description}
        />
        <div className="filter-row" role="group" aria-label={siteContent.projectsPage.filterAriaLabel}>
          {siteContent.projectsPage.filters.map((filter) => (
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
