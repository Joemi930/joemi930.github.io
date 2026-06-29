import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null);
  const { navigation, navigationCta } = usePortfolioContent();

  useEffect(() => {
    if (!open) return undefined;

    const firstLink = panelRef.current?.querySelector("a");
    firstLink?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("has-mobile-menu");
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("has-mobile-menu");
    };
  }, [open, onClose]);

  return (
    <div className={open ? "mobile-menu is-open" : "mobile-menu"} aria-hidden={!open}>
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <div className="mobile-menu__panel" ref={panelRef} role="dialog" aria-modal="true" aria-label="Navigation mobile">
        <button className="icon-button mobile-menu__close" type="button" aria-label="Fermer le menu" onClick={onClose}>
          <X aria-hidden="true" size={24} />
        </button>
        <nav className="mobile-menu__nav" aria-label="Navigation principale mobile">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={onClose}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/contact" onClick={onClose}>
          {navigationCta.label}
        </Button>
      </div>
    </div>
  );
}
