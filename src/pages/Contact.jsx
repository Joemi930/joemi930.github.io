import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function Contact() {
  const { profile, siteContent, socials } = usePortfolioContent();

  return (
    <section className="page page--contact">
      <Container>
        <SectionTitle
          kicker={siteContent.contactPage.kicker}
          title={siteContent.contactPage.title}
          description={siteContent.contactPage.description}
        />
        <div className="contact-grid">
          <article className="contact-card">
            <h1>{siteContent.contactPage.directTitle}</h1>
            <p>{profile.title}</p>
            <p>{profile.location}</p>
            <div className="contact-actions">
              <Button href={`mailto:${socials.email}`} icon={Mail} iconPosition="left">
                {siteContent.contactPage.actions.email}
              </Button>
              <Button href={socials.github} variant="secondary" icon={Github} iconPosition="left">
                {siteContent.contactPage.actions.github}
              </Button>
              <Button href={socials.linkedin} variant="secondary" icon={Linkedin} iconPosition="left">
                {siteContent.contactPage.actions.linkedin}
              </Button>
              <Button href={socials.whatsappUrl} variant="secondary" icon={MessageCircle} iconPosition="left">
                {siteContent.contactPage.actions.whatsapp}
              </Button>
              <Button disabled variant="ghost">
                {profile.cv.label}
              </Button>
            </div>
          </article>
          <aside className="panel contact-info">
            <h2>{siteContent.contactPage.infoTitle}</h2>
            <dl>
              <div>
                <dt>{siteContent.contactPage.labels.email}</dt>
                <dd>{socials.email}</dd>
              </div>
              <div>
                <dt>{siteContent.contactPage.labels.github}</dt>
                <dd>{socials.githubHandle}</dd>
              </div>
              <div>
                <dt>{siteContent.contactPage.labels.linkedin}</dt>
                <dd>{socials.linkedinHandle}</dd>
              </div>
              <div>
                <dt>{siteContent.contactPage.labels.whatsapp}</dt>
                <dd>{socials.whatsapp}</dd>
              </div>
              <div>
                <dt>{siteContent.contactPage.labels.cv}</dt>
                <dd>{profile.cv.label}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </Container>
    </section>
  );
}
