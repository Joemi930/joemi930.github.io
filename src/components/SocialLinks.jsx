import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "./Button.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function SocialLinks({ compact = false }) {
  const { siteContent, socials } = usePortfolioContent();
  const items = [
    { label: siteContent.contactCta.actions.email, href: `mailto:${socials.email}`, icon: Mail },
    { label: siteContent.contactCta.actions.github, href: socials.github, icon: Github },
    { label: siteContent.contactCta.actions.linkedin, href: socials.linkedin, icon: Linkedin },
    { label: siteContent.contactCta.actions.whatsapp, href: socials.whatsappUrl, icon: MessageCircle }
  ];
  return (
    <div className={compact ? "social-links social-links--compact" : "social-links"}>
      {items.map((item) => (
        <Button key={item.label} href={item.href} variant="secondary" icon={item.icon} iconPosition="left">
          {item.label}
        </Button>
      ))}
    </div>
  );
}
