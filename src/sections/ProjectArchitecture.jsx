import SectionTitle from "../components/SectionTitle.jsx";

export default function ProjectArchitecture({ project }) {
  return (
    <section className="project-section">
      <SectionTitle kicker="Architecture" title="Structure technique détectée" />
      <div className="architecture-grid">
        {project.architecture.map((item) => (
          <article className="architecture-card" key={item.label}>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="panel panel--wide">
        <h3>Apprentissages</h3>
        <ul className="feature-list">
          {project.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
