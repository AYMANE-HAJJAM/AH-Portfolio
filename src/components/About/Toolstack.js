import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJira, DiGithub, DiMongodb, DiGit } from "react-icons/di";
import { SiPostman } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <DiGit />, label: "Git" },
    { icon: <DiGithub />, label: "GitHub" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <DiJira />, label: "Jira" },
    { icon: <SiPostman />, label: "Postman" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, idx) => (
        <Col xs={4} md={2} className="tech-icons text-center" key={idx}>
          {tool.icon}
          <div style={{ fontSize: "0.9rem", marginTop: "5px" }}>{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
