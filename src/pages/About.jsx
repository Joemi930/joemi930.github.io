import { ArrowRight } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { profile } from "../data/profile.js";
import { skillGroups } from "../data/skills.js";

const values = ["Clarté", "Documentation", "Tests", "Progression", "Responsabilité"];

export default function About() {
  return (
    <section className="page">
      <Container>
        <SectionTitle
          kicker="À propos"
          title="Je construis des solutions utiles, propres et maintenables."
          description="Mon objectif est de progresser comme développeur en transformant les idées en projets concrets, testables et lisibles."
        />
        <div className="about-layout">
          <article className="about-card">
            <img src={profile.avatar} alt="Portrait de TETE NGITUKA JOEMI" />
            <div>
              <h1>{profile.fullName}</h1>
              <p>{profile.longBio}</p>
              <p>
                Je m'intéresse particulièrement à l'intelligence artificielle, au développement web, aux applications
                mobiles et aux systèmes capables de résoudre des problèmes concrets.
              </p>
            </div>
          </article>
          <aside className="panel">
            <h2>Objectifs</h2>
            <ul className="clean-list">
              <li>Créer des applications web utiles.</li>
              <li>Développer des interfaces modernes.</li>
              <li>Concevoir des systèmes de gestion.</li>
              <li>Explorer l'IA appliquée.</li>
              <li>Automatiser des tâches complexes.</li>
            </ul>
            <Button to="/contact" variant="secondary" icon={ArrowRight}>
              Me contacter
            </Button>
          </aside>
        </div>
        <div className="section">
          <SectionTitle kicker="Valeurs" title="Une méthode simple : comprendre, concevoir, coder, livrer." />
          <div className="value-grid">
            {values.map((value) => (
              <article className="value-card" key={value}>
                <span>{value}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="section section--last">
          <SectionTitle kicker="Compétences" title="Domaines de travail" />
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
        </div>
      </Container>
    </section>
  );
}
