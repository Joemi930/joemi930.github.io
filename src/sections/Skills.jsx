import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { siteContent } from "../data/siteContent.js";
import { skillGroups } from "../data/skills.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function Skills() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <SectionTitle
          kicker={siteContent.skills.kicker}
          title={siteContent.skills.title}
          description={siteContent.skills.description}
        />
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="badge-row">
                {group.skills.map((skill) => (
                  <TechBadge key={skill}>{skill}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
