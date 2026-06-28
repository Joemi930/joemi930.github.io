import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { skillGroups } from "../data/skills.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function Skills() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <SectionTitle
          kicker="Compétences"
          title="Une base technique orientée produit."
          description="Des compétences web, backend, data et méthode pour concevoir des projets propres, compréhensibles et évolutifs."
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
