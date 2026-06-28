import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { socials } from "../data/socials.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function ContactCTA() {
  const [ref, visible] = useRevealOnScroll();

  return (
    <section className={`section section--last reveal ${visible}`} ref={ref}>
      <Container>
        <div className="cta-panel">
          <SectionTitle
            kicker="Contact"
            title="Une idée, une opportunité ou une collaboration ?"
            description="Contactez-moi directement par email, LinkedIn ou WhatsApp."
            align="center"
          />
          <div className="cta-panel__actions">
            <Button href={`mailto:${socials.email}`} icon={Mail} iconPosition="left">
              Email
            </Button>
            <Button href={socials.linkedin} variant="secondary" icon={Linkedin} iconPosition="left">
              LinkedIn
            </Button>
            <Button href={socials.whatsappUrl} variant="secondary" icon={MessageCircle} iconPosition="left">
              WhatsApp
            </Button>
            <Button href={socials.github} variant="ghost" icon={Github} iconPosition="left">
              GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
