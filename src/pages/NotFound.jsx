import { ArrowLeft } from "lucide-react";
import Button from "../components/Button.jsx";
import Container from "../components/Container.jsx";

export default function NotFound() {
  return (
    <section className="page page--center">
      <Container>
        <div className="panel not-found">
          <p className="kicker">404</p>
          <h1>Page introuvable</h1>
          <p>La page demandée n'existe pas dans ce portfolio.</p>
          <Button to="/" icon={ArrowLeft} iconPosition="left">
            Retour à l'accueil
          </Button>
        </div>
      </Container>
    </section>
  );
}
