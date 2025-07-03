import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiPhp,
  DiLaravel,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiHtml5 />, label: "HTML" },
    { icon: <DiCss3 />, label: "CSS" },
    { icon: <DiBootstrap />, label: "Bootstrap" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiNodejs />, label: "Node js" },
    { icon: <DiReact />, label: "React js" },
    { icon: <DiPhp />, label: "PHP" },
    { icon: <DiLaravel />, label: "Laravel" },
    { icon: <SiSpringboot />, label: "Spring Boot" },
    { icon: <DiPython />, label: "Python" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={3} md={2} className="tech-icons text-center" key={index}>
          <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
          <div style={{ fontSize: "0.9rem", marginTop: "2px" }}>{tech.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
