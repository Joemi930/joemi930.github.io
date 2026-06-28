import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data/profile.js";
import { socials } from "../data/socials.js";

export default function Contact() {
  return (
    <section className="page page--contact">
      <Container>
        <SectionTitle
          kicker="Contact"
          title="Travaillons ensemble"
          description="Une opportunité, un stage, une collaboration ou un échange technique ? Les liens essentiels sont ici."
        />
        <div className="contact-grid">
          <article className="contact-card">
            <h1>Contact direct</h1>
            <p>{profile.title}</p>
            <p>{profile.location}</p>
            <div className="contact-actions">
              <Button href={`mailto:${socials.email}`} icon={Mail} iconPosition="left">
                M'écrire par email
              </Button>
              <Button href={socials.github} variant="secondary" icon={Github} iconPosition="left">
                Voir GitHub
              </Button>
              <Button href={socials.linkedin} variant="secondary" icon={Linkedin} iconPosition="left">
                Voir LinkedIn
              </Button>
              <Button href={socials.whatsappUrl} variant="secondary" icon={MessageCircle} iconPosition="left">
                Écrire sur WhatsApp
              </Button>
              <Button disabled variant="ghost">
                {profile.cv.label}
              </Button>
            </div>
          </article>
          <aside className="panel contact-info">
            <h2>Informations</h2>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>{socials.email}</dd>
              </div>
              <div>
                <dt>GitHub</dt>
                <dd>Joemi930</dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>joemi-tete</dd>
              </div>
              <div>
                <dt>WhatsApp</dt>
                <dd>{socials.whatsapp}</dd>
              </div>
              <div>
                <dt>CV</dt>
                <dd>{profile.cv.label}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
