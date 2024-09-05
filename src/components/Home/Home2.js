import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C#, C++ and JAVA. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Software Technologies and Products like Games and Applications</b> and
                also in areas related to{" "}
                <span className="purple">
                  Video Games Development
              </span> and   <b className="purple">
                  Web Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>

        

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Professional <span className="purple"> Experience </span>
            </h1>
            <p className="home-about-body">
              Currently Working as <span className="purple">Game Developer</span> with <span className="purple">Terafort</span> for <span className="purple"> 3+ Years</span>
              <br />
              <br />
              - Develop scalable prototypes and 
mechanics. <br />
 - Resolving critical issues related to 
crashes and ANRs resulting in ANR 
rates below 0.45% and crash rates below 
1%. <br />
 
 -Proficiently designing game mechanics 
aligned with project manager's plans, 
encompassing various genres such as 
FPS, TPS, and Simulation. 
<br />
<br />
<span className="purple"> SDK </span> Tools I have Used<br />
- Google Admob [Mediation as well] <br />
- Applovin [Mediation as well] <br />
- UnityAds [Mediation as well] <br />
- Chartboost. <br />
- Firebase[Database/Analytics/Authentication] <br />
- Backend APIs hosted on AWS and accessed through Laravel <br />
              
              <br />
              <br />
              Worked as <span className="purple">System Engineer</span> with <span className="purple">ZMectr SMC Pvt Ltd.</span> for <span className="purple"> 1 Year</span>
              <br />
              <br />
              -Proficiently designing IoT hardware systems aligned with project manager's 
plans, encompassing various 
applications such as home automation, 
wearable devices, and environmental 
monitoring
              
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/shaniktk77"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shadman-khan-khattak-b6b834163/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
