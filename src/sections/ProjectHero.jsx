import { ArrowLeft, ExternalLink } from "lucide-react";
import Button from "../components/Button.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function ProjectHero({ project }) {
  const { siteContent } = usePortfolioContent();

  return (
    <section className="project-hero">
      <div className="project-hero__copy">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Button to="/projects" variant="ghost" icon={ArrowLeft} iconPosition="left">
            {siteContent.projectDetail.back}
          </Button>
        </nav>
        <StatusBadge>{project.status}</StatusBadge>
        <h1>{project.title}</h1>
        <p>{project.longDescription}</p>
        <div className="badge-row">
          {project.technologies.map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>
        <div className="project-hero__actions">
          {project.repository.isPublic ? (
            <Button href={project.repository.url} icon={ExternalLink}>
              {siteContent.projectDetail.repositoryPublic}
            </Button>
          ) : (
            <Button disabled variant="secondary">
              {siteContent.projectDetail.repositoryUnavailable}
            </Button>
          )}
          {project.demo.available ? (
            <Button href={project.demo.url} variant="secondary" icon={ExternalLink}>
              {siteContent.projectDetail.demoAvailable}
            </Button>
          ) : (
            <Button disabled variant="ghost">
              {siteContent.projectDetail.demoUnavailable}
            </Button>
          )}
        </div>
      </div>
      <aside className="project-info-panel" aria-label={`${siteContent.projectDetail.infoTitle} sur ${project.title}`}>
        <h2>{siteContent.projectDetail.infoTitle}</h2>
        <dl>
          <div>
            <dt>{siteContent.projectDetail.labels.category}</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>{siteContent.projectDetail.labels.status}</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>{siteContent.projectDetail.labels.demo}</dt>
            <dd>{project.demo.available ? siteContent.projectDetail.labels.available : siteContent.projectDetail.labels.unavailable}</dd>
          </div>
          <div>
            <dt>{siteContent.projectDetail.labels.repository}</dt>
            <dd>{project.repository.isPublic ? siteContent.projectDetail.labels.public : siteContent.projectDetail.labels.private}</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
