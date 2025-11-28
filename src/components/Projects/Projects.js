import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// Importer les images de vos projets. Assurez-vous que les fichiers existent dans le dossier Assets/Projects
import digiassistant from "../../Assets/Projects/DigiAssistant.png";
import docuscan from "../../Assets/Projects/Docuscan.png";
import amsadesign from "../../Assets/Projects/Amsadesign.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* PROJECT 1: DigiAssistant */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digiassistant}
              isBlog={false}
              title="DigiAssistant"
              description="A full-stack Conversational Diagnostic Tool. This system transforms complex forms into a dynamic, persistent chat interface. It uses a **Node.js Orchestrator** (Stateful) and a **Python AI Agent** (Stateless) to evaluate user answers, apply adaptive skip logic, and generate a professional, multi-page PDF Digital Maturity Report."
              ghLink="https://github.com/AYMANE-HAJJAM/DigiAssistant" // Replace with your actual GitHub link
              demoLink="https://front-digiassistant.vercel.app/"
            />
          </Col>

          {/* PROJECT 2: Docuscan (Share-In) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={docuscan}
              isBlog={false}
              title="Docuscan (Share-In)"
              description="An AI-powered document extraction system built as a microservice-ready monorepo (**React/TypeScript** Frontend, **Flask/Python** Backend, **Celery/Redis** Async Task Queue). Automates data extraction from official documents (CIN, Driving License) using **OpenAI Vision** and allows user review for 100% accuracy."
              ghLink="https://github.com/AYMANE-HAJJAM/Share-In" // Replace with your actual GitHub link
              demoLink="https://share-in-production.up.railway.app/"
            />
          </Col>

          {/* PROJECT 3: Amsadesign (Kept from original list) */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amsadesign}
              isBlog={false}
              title="Amsadesign"
              description="Development of an e-commerce platform with robust shopping cart management, secure online payment integration, and a dedicated, functional administrator interface for product and order management."
              ghLink="https://github.com/ELAOUAD-ARCHITECTURE-AND-ENGENEERING/amsadesign.git"
              demoLink="https://amsadesign.com"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;