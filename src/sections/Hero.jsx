import { ArrowRight, Mail, MapPin } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { profile } from "../data/profile.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

const heroTags = ["IA", "Web", "Mobile", "React", "PHP", "MySQL"];

export default function Hero() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`hero reveal ${visible}`} ref={ref}>
      <Container className="hero__inner">
        <div className="hero__copy">
          <p className="kicker">SOFTWARE ENGINEERING STUDENT</p>
          <h1>Je conçois des applications web, des solutions IA et des expériences numériques modernes.</h1>
          <p className="hero__lead">
            Étudiant en Master Génie logiciel, je développe des projets concrets autour du web, de l'intelligence
            artificielle, de l'automatisation et des systèmes de gestion.
          </p>
          <div className="hero__actions">
            <Button to="/projects" icon={ArrowRight}>
              Voir mes projets
            </Button>
            <Button to="/contact" variant="secondary" icon={Mail} iconPosition="left">
              Me contacter
            </Button>
          </div>
          <div className="hero__facts" aria-label="Informations rapides">
            <span>
              <MapPin aria-hidden="true" size={18} />
              {profile.location}
            </span>
            <span>02 projets principaux</span>
            <span>{profile.title}</span>
          </div>
        </div>
        <div className="hero__visual" aria-label="Présentation visuelle de Joemi">
          <div className="code-card">
            <div className="code-card__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <pre>{`const developer = {
  name: "Joemi Tete",
  role: "Software Engineer",
  focus: ["IA", "Web", "Mobile"],
  location: "Kinshasa, RDC"
};`}</pre>
          </div>
          <div className="profile-card">
            <img src={profile.avatar} alt="Portrait de TETE NGITUKA JOEMI" />
            <div>
              <h2>{profile.displayName}</h2>
              <p>{profile.title}</p>
              <div className="badge-row">
                {heroTags.map((tag) => (
                  <TechBadge key={tag}>{tag}</TechBadge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
