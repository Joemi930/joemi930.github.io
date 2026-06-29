import { Menu } from "lucide-react";
import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import MobileMenu from "./MobileMenu.jsx";
import { brand, navigation, navigationCta } from "../data/navigation.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="site-header">
        <div className="nav-shell">
          <NavLink to="/" className="brand" aria-label={brand.ariaLabel}>
            <span aria-hidden="true" />
            {brand.label}
          </NavLink>
          <nav className="desktop-nav" aria-label="Navigation principale">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <Button to={navigationCta.to} className="nav-cta">
            {navigationCta.label}
          </Button>
          <button className="icon-button nav-menu-button" type="button" aria-label="Ouvrir le menu" onClick={() => setOpen(true)}>
            <Menu aria-hidden="true" size={24} />
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={closeMenu} />
    </>
  );
}
