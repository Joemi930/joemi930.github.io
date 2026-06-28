import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { experience } from "../data/experience.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function Experience() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <SectionTitle
          kicker="Parcours"
          title="Une progression construite par projets."
          description="L'objectif est de consolider la théorie du génie logiciel par des livrables concrets et vérifiables."
        />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline__item" key={item.title}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
