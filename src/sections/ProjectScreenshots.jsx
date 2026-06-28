import SectionTitle from "../components/SectionTitle.jsx";

export default function ProjectScreenshots({ project }) {
  const hasScreenshots = project.screenshots.length > 0;

  return (
    <section className="project-section">
      <SectionTitle kicker="Captures" title="Aperçu interface" />
      {hasScreenshots ? (
        <div className="screenshots-grid">
          {project.screenshots.map((screenshot) => (
            <figure className="screenshot-card" key={screenshot.src}>
              <img src={screenshot.src} alt={screenshot.alt} />
              <figcaption>{screenshot.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="empty-preview">
          <div className="empty-preview__slots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <h3>Capture bientôt disponible</h3>
          <p>
            Aucune capture exploitable n'a été ajoutée au portfolio : le rendu local complet du projet source n'a pas été
            lancé pendant cette passe.
          </p>
        </div>
      )}
    </section>
  );
}
