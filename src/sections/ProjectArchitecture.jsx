import SectionTitle from "../components/SectionTitle.jsx";
import { siteContent } from "../data/siteContent.js";

export default function ProjectArchitecture({ project }) {
  return (
    <section className="project-section">
      <SectionTitle kicker={siteContent.projectDetail.architecture.kicker} title={siteContent.projectDetail.architecture.title} />
      <div className="architecture-grid">
        {project.architecture.map((item) => (
          <article className="architecture-card" key={item.label}>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
      <div className="panel panel--wide">
        <h3>{siteContent.projectDetail.architecture.learningsLabel}</h3>
        <ul className="feature-list">
          {project.learnings.map((learning) => (
            <li key={learning}>{learning}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
