import { ArrowRight } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { usePortfolioContent } from "../hooks/usePortfolioContent.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function AboutPreview() {
  const [ref, visible] = useRevealOnScroll();
  const { profile, siteContent } = usePortfolioContent();

  return (
    <section className={`section reveal ${visible}`} ref={ref}>
      <Container>
        <div className="split-band">
          <div>
            <SectionTitle kicker={siteContent.aboutPreview.kicker} title={siteContent.aboutPreview.title} />
            <p>{profile.longBio}</p>
          </div>
          <div className="panel panel--compact">
            <h3>{siteContent.aboutPreview.buildTitle}</h3>
            <ul className="clean-list">
              {siteContent.aboutPreview.buildItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" icon={ArrowRight}>
              {siteContent.aboutPreview.action}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
