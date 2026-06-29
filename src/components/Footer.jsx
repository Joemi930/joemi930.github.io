import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Container from "./Container.jsx";
import { brand } from "../data/navigation.js";
import { profile } from "../data/profile.js";
import { siteContent } from "../data/siteContent.js";
import { socials } from "../data/socials.js";

const links = [
  { label: siteContent.contactCta.actions.email, href: `mailto:${socials.email}`, icon: Mail },
  { label: siteContent.contactCta.actions.github, href: socials.github, icon: Github },
  { label: siteContent.contactCta.actions.linkedin, href: socials.linkedin, icon: Linkedin },
  { label: siteContent.contactCta.actions.whatsapp, href: socials.whatsappUrl, icon: MessageCircle }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <strong>{brand.label}</strong>
          <p>{profile.title} - {profile.location}</p>
        </div>
        <div className="footer-links">
          {links.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon aria-hidden="true" size={18} />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
