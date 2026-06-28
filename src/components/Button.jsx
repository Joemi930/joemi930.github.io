import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  className = "",
  ...props
}) {
  const classes = ["btn", `btn--${variant}`, disabled ? "is-disabled" : "", className].filter(Boolean).join(" ");
  const content = (
    <>
      {Icon && iconPosition === "left" ? <Icon aria-hidden="true" size={18} /> : null}
      <span>{children}</span>
      {Icon && iconPosition === "right" ? <Icon aria-hidden="true" size={18} /> : null}
    </>
  );

  if (disabled) {
    return (
      <button className={classes} disabled type="button" {...props}>
        {content}
      </button>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
