import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shadman Khan Khattak </span>
            from <span className="purple"> Nowshera, Pakistan.</span>
            <br />
            I am currently employed as a <span className="purple">Game Developer</span> at <span className="purple">Terafort Pvt Ltd</span>.
            <br />
            I have completed <span className="purple">Bachelor's Degree </span>in <span className="purple">Computer Science</span> from <span className="purple">Northern University Nowshera</span>            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering new Techs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Imagine, Plan and Do the magic"{" "}
          </p>
          <footer className="blockquote-footer">SHANI KTK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
