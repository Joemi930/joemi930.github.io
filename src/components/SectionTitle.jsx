export default function SectionTitle({ kicker, title, description, align = "left" }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
