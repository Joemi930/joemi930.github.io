import { ArrowRight } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { profile } from "../data/profile.js";
import { skillGroups } from "../data/skills.js";
import { siteContent } from "../data/siteContent.js";

export default function About() {
  return (
    <section className="page">
      <Container>
        <SectionTitle
          kicker={siteContent.aboutPage.kicker}
          title={siteContent.aboutPage.title}
          description={siteContent.aboutPage.description}
        />
        <div className="about-layout">
          <article className="about-card">
            <img src={profile.avatar} alt={profile.avatarAlt} />
            <div>
              <h1>{profile.fullName}</h1>
              <p>{profile.longBio}</p>
              <p>{siteContent.aboutPage.interest}</p>
            </div>
          </article>
          <aside className="panel">
            <h2>{siteContent.aboutPage.objectivesTitle}</h2>
            <ul className="clean-list">
              {siteContent.aboutPage.objectives.map((objective) => (
                <li key={objective}>{objective}</li>
              ))}
            </ul>
            <Button to="/contact" variant="secondary" icon={ArrowRight}>
              {siteContent.aboutPage.contactAction}
            </Button>
          </aside>
        </div>
        <div className="section">
          <SectionTitle kicker={siteContent.aboutPage.valuesKicker} title={siteContent.aboutPage.valuesTitle} />
          <div className="value-grid">
            {siteContent.aboutPage.values.map((value) => (
              <article className="value-card" key={value}>
                <span>{value}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="section section--last">
          <SectionTitle kicker={siteContent.aboutPage.skillsKicker} title={siteContent.aboutPage.skillsTitle} />
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
