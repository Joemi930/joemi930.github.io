import { ArrowLeft, ExternalLink } from "lucide-react";
import Button from "../components/Button.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import TechBadge from "../components/TechBadge.jsx";

export default function ProjectHero({ project }) {
  return (
    <section className="project-hero">
      <div className="project-hero__copy">
        <nav className="breadcrumb" aria-label="Fil d'Ariane">
          <Button to="/projects" variant="ghost" icon={ArrowLeft} iconPosition="left">
            Retour aux projets
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
              Voir le code
            </Button>
          ) : (
            <Button disabled variant="secondary">
              Code privé
            </Button>
          )}
          {project.demo.available ? (
            <Button href={project.demo.url} variant="secondary" icon={ExternalLink}>
              Voir la démo
            </Button>
          ) : (
            <Button disabled variant="ghost">
              Démo non disponible
            </Button>
          )}
        </div>
      </div>
      <aside className="project-info-panel" aria-label={`Informations sur ${project.title}`}>
        <h2>Informations</h2>
        <dl>
          <div>
            <dt>Catégorie</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Statut</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>Démonstration</dt>
            <dd>{project.demo.available ? "Disponible" : "Non disponible"}</dd>
          </div>
          <div>
            <dt>Dépôt</dt>
            <dd>{project.repository.isPublic ? "Public" : "Privé"}</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}
