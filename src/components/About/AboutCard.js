import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Saleeth </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I hold a Bachelor of Technology in IT, which laid a strong foundation for my technical knowledge. Following my degree, I dove deep into web development through an intensive, certification program in MERN/MEAN stack development.
            <br />
<br />
            As a developer, I am always looking toward the future. I'm currently expanding my skillset by learning about AI and modern cloud networking with platforms like AWS and Azure. My interests also extend to digital marketing, giving me a broader perspective on how technology drives business.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Entrepreneurship: Constantly seeking and evaluating new business ideas
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking on Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saleeth kasim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
