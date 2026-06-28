import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Container from "./Container.jsx";
import { profile } from "../data/profile.js";
import { socials } from "../data/socials.js";

const links = [
  { label: "Email", href: `mailto:${socials.email}`, icon: Mail },
  { label: "GitHub", href: socials.github, icon: Github },
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: socials.whatsappUrl, icon: MessageCircle }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <strong>JOEMI.T</strong>
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
