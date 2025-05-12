import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import acadevo from "../../Assets/Projects/Acadevo.png";
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acadevo}
              isBlog={false}
              title="Acadevo"
              description="Development of an innovative platform that facilitates the management and outsourcing of academic, professional, and technical tasks. It connects students, professionals, and businesses with experts in various fields such as mathematics, physics, and architecture."
              ghLink="https://github.com/ELAOUAD-ARCHITECTURE-AND-ENGENEERING/Acadevo-backend.git"
              demoLink="https://acadevo.uk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amsadesign}
              isBlog={false}
              title="Amsadesign"
              description="Development of an e-commerce platform with shopping cart management, online payment, and an administrator interface."
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
