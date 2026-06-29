import SectionTitle from "../components/SectionTitle.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function ProjectScreenshots({ project }) {
  const { siteContent } = usePortfolioContent();
  const hasScreenshots = project.screenshots.length > 0;

  return (
    <section className="project-section">
      <SectionTitle kicker={siteContent.projectDetail.screenshots.kicker} title={siteContent.projectDetail.screenshots.title} />
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
          <h3>{siteContent.projectDetail.screenshots.emptyTitle}</h3>
          <p>{siteContent.projectDetail.screenshots.emptyDescription}</p>
        </div>
      )}
    </section>
  );
}
