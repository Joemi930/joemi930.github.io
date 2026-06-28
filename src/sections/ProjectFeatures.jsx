import SectionTitle from "../components/SectionTitle.jsx";

export default function ProjectFeatures({ project }) {
  return (
    <section className="project-section">
      <SectionTitle kicker="Analyse" title="Ce que le projet démontre techniquement" />
      <div className="analysis-grid">
        <article className="panel">
          <h3>Problème</h3>
          <p>{project.problem}</p>
        </article>
        <article className="panel">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </article>
        <article className="panel">
          <h3>Points forts</h3>
          <ul className="clean-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="panel panel--wide">
        <h3>Fonctionnalités confirmées</h3>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
