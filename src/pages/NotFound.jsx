import { ArrowLeft } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";
import { siteContent } from "../data/siteContent.js";

export default function NotFound() {
  return (
    <section className="page page--center">
      <Container>
        <div className="panel not-found">
          <p className="kicker">{siteContent.notFound.kicker}</p>
          <h1>{siteContent.notFound.title}</h1>
          <p>{siteContent.notFound.description}</p>
          <Button to="/" icon={ArrowLeft} iconPosition="left">
            {siteContent.notFound.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
