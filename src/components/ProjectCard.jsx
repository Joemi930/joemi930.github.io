import { ArrowUpRight, Code2 } from "lucide-react";
import Button from "./Button.jsx";
import StatusBadge from "./StatusBadge.jsx";
import TechBadge from "./TechBadge.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function ProjectCard({ project, featured = false }) {
  const { siteContent } = usePortfolioContent();
  return (
    <article className={featured ? "project-card project-card--featured" : "project-card"}>
      <div className="project-card__visual" aria-hidden="true">
        <Code2 size={42} />
        <span>{siteContent.projectCard.caseStudy}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <StatusBadge>{project.status}</StatusBadge>
          <span>{project.category}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="badge-row" aria-label={`Technologies de ${project.title}`}>
          {project.technologies.slice(0, 5).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <Button to={`/projects/${project.slug}`} variant="secondary" icon={ArrowUpRight}>
          {siteContent.projectCard.action}
        </Button>
      </div>
    </article>
  );
}
