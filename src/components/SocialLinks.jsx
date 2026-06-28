import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import Button from "./Button.jsx";
import { socials } from "../data/socials.js";

const items = [
  { label: "Email", href: `mailto:${socials.email}`, icon: Mail, external: false },
  { label: "GitHub", href: socials.github, icon: Github, external: true },
  { label: "LinkedIn", href: socials.linkedin, icon: Linkedin, external: true },
  { label: "WhatsApp", href: socials.whatsappUrl, icon: MessageCircle, external: true }
];

export default function SocialLinks({ compact = false }) {
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
