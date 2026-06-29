import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function ContactCTA() {
  const [ref, visible] = useRevealOnScroll();
  const { siteContent, socials } = usePortfolioContent();

  return (
    <section className={`section section--last reveal ${visible}`} ref={ref}>
      <Container>
        <div className="cta-panel">
          <SectionTitle
            kicker={siteContent.contactCta.kicker}
            title={siteContent.contactCta.title}
            description={siteContent.contactCta.description}
            align="center"
          />
          <div className="cta-panel__actions">
            <Button href={`mailto:${socials.email}`} icon={Mail} iconPosition="left">
              {siteContent.contactCta.actions.email}
            </Button>
            <Button href={socials.linkedin} variant="secondary" icon={Linkedin} iconPosition="left">
              {siteContent.contactCta.actions.linkedin}
            </Button>
            <Button href={socials.whatsappUrl} variant="secondary" icon={MessageCircle} iconPosition="left">
              {siteContent.contactCta.actions.whatsapp}
            </Button>
            <Button href={socials.github} variant="ghost" icon={Github} iconPosition="left">
              {siteContent.contactCta.actions.github}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
