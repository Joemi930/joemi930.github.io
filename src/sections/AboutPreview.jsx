import { ArrowRight } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data/profile.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function AboutPreview() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <div className="split-band">
          <div>
            <SectionTitle kicker="À propos" title="Un profil clair, curieux et orienté construction." />
            <p>{profile.longBio}</p>
          </div>
          <div className="panel panel--compact">
            <h3>Ce que je construis</h3>
            <ul className="clean-list">
              <li>Applications web</li>
              <li>Interfaces modernes</li>
              <li>Systèmes de gestion</li>
              <li>Prototypes orientés IA</li>
              <li>Outils d'automatisation</li>
            </ul>
            <Button to="/about" variant="secondary" icon={ArrowRight}>
              En savoir plus
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
