import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // --- Icons from Devicons ---
  DiHtml5,
  DiCss3,
  DiPhp,
  DiLaravel,
  DiBootstrap,
  DiReact,
  DiNodejs,
  DiPython,
  DiJavascript1,
} from "react-icons/di";
import {
  SiSpringboot,
  SiTailwindcss, 
  SiTypescript, 
  SiMysql, 
  SiPostgresql, 
  SiMongodb, 
  SiFlask, 
} from "react-icons/si";


function Techstack() {
  const techs = [
    // --- Core Web Technologies ---
    { icon: <DiHtml5 />, label: "HTML" },
    { icon: <DiCss3 />, label: "CSS" },
    { icon: <DiBootstrap />, label: "Bootstrap" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },

    // --- Frontend / Runtime ---
    { icon: <DiReact />, label: "React JS" },
    { icon: <DiNodejs />, label: "Node JS" },

    // --- Backend / Frameworks ---
    { icon: <DiPhp />, label: "PHP" },
    { icon: <DiLaravel />, label: "Laravel" },
    { icon: <SiSpringboot />, label: "Spring Boot" },
    { icon: <DiPython />, label: "Python" },
    { icon: <SiFlask />, label: "Python Flask" },

    // --- Databases ---
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiMongodb />, label: "MongoDB" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons text-center" key={index}>
          <div style={{ fontSize: "3rem" }}>{tech.icon}</div>
          <div style={{ fontSize: "0.9rem", marginTop: "2px" }}>{tech.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;