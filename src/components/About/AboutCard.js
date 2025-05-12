import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Junior Full Stack Developer passionate about web creation. I have experience in development
            using various languages ​​and frameworks such as HTML, CSS, Bootstrap, JavaScript, React JS,
            Material UI, Laravel, PHP, Postman, MySQL. I also have a solid command of project management
            tools like Jira, Git, Github and GitLab.<br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
