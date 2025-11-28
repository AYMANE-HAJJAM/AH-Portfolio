import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJira, DiGithub, DiDocker, DiGit } from "react-icons/di";
import { SiPostman } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <DiGit />, label: "Git" },
    { icon: <DiGithub />, label: "GitHub" },
    { icon: <DiDocker />, label: "Docker" },
    { icon: <DiJira />, label: "Jira" },
    { icon: <SiPostman />, label: "Postman" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={3} md={2} className="tech-icons text-center" key={idx}>
          <div style={{ fontSize: "3rem" }}>{tool.icon}</div>
          <div style={{ fontSize: "0.9rem", marginTop: "2px" }}>{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
