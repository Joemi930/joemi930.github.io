import SectionTitle from "../components/SectionTitle.jsx";
import { siteContent } from "../data/siteContent.js";

export default function ProjectFeatures({ project }) {
  return (
    <section className="project-section">
      <SectionTitle kicker={siteContent.projectDetail.analysis.kicker} title={siteContent.projectDetail.analysis.title} />
      <div className="analysis-grid">
        <article className="panel">
          <h3>{siteContent.projectDetail.analysis.problemLabel}</h3>
          <p>{project.problem}</p>
        </article>
        <article className="panel">
          <h3>{siteContent.projectDetail.analysis.solutionLabel}</h3>
          <p>{project.solution}</p>
        </article>
        <article className="panel">
          <h3>{siteContent.projectDetail.analysis.highlightsLabel}</h3>
          <ul className="clean-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
      <div className="panel panel--wide">
        <h3>{siteContent.projectDetail.analysis.featuresLabel}</h3>
        <ul className="feature-list">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
