import { ArrowRight, Mail, MapPin } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import TechBadge from "../components/TechBadge.jsx";
import { profile } from "../data/profile.js";
import { siteContent } from "../data/siteContent.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function Hero() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`hero reveal ${visible}`} ref={ref}>
      <Container className="hero__inner">
        <div className="hero__copy">
          <p className="kicker">{siteContent.hero.kicker}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="hero__lead">{siteContent.hero.subtitle}</p>
          <div className="hero__actions">
            <Button to="/projects" icon={ArrowRight}>
              {siteContent.hero.primaryAction}
            </Button>
            <Button to="/contact" variant="secondary" icon={Mail} iconPosition="left">
              {siteContent.hero.secondaryAction}
            </Button>
          </div>
          <div className="hero__facts" aria-label={siteContent.hero.facts.ariaLabel}>
            <span>
              <MapPin aria-hidden="true" size={18} />
              {profile.location}
            </span>
            <span>{siteContent.hero.facts.projects}</span>
            <span>{profile.title}</span>
          </div>
        </div>
        <div className="hero__visual" aria-label={siteContent.hero.visualAriaLabel}>
          <div className="code-card">
            <div className="code-card__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <pre>{siteContent.hero.codePreview}</pre>
          </div>
          <div className="profile-card">
            <img src={profile.avatar} alt={profile.avatarAlt} />
            <div>
              <h2>{profile.displayName}</h2>
              <p>{profile.title}</p>
              <div className="badge-row">
                {siteContent.hero.tags.map((tag) => (
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
