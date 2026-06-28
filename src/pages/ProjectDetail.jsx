import { Navigate, useParams } from "react-router-dom";
import Container from "../components/Container.jsx";
import { projects } from "../data/projects.js";
import ProjectArchitecture from "../sections/ProjectArchitecture.jsx";
import ProjectFeatures from "../sections/ProjectFeatures.jsx";
import ProjectHero from "../sections/ProjectHero.jsx";
import ProjectScreenshots from "../sections/ProjectScreenshots.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <section className="page page--detail">
      <Container>
        <ProjectHero project={project} />
        <ProjectScreenshots project={project} />
        <ProjectFeatures project={project} />
        <ProjectArchitecture project={project} />
      </Container>
    </section>
  );
}
