import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rider3D from "../../Assets/Projects/chatify.png";
import csm from "../../Assets/Projects/suicide.png";
import kungFU from "../../Assets/Projects/suicide.png";
import pradoParking from "../../Assets/Projects/suicide.png";
import rampStunt from "../../Assets/Projects/suicide.png";
import mcr from "../../Assets/Projects/suicide.png";
import motoMax from "../../Assets/Projects/suicide.png";


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
              imgPath={rider3D}
              isBlog={false}
              title="Rider 3D"
              description="Highway Bike Racing - In our Bike racing game, we focus on keeping you engaged & entertained so you can unleash your inner speed demon and race like a pro."              
              demoLink="https://play.google.com/store/apps/details?id=com.ffgames.motoercycle.traffic.racer.bikegames.rider.motobikeracing3d&hl=en"
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motoMax}
              isBlog={false}
              title="Moto Max"
              description="Get ready for an ultimate adrenaline rush with 'Moto Race Max (MRM). Immerse yourself in the exhilarating world of Moto Race Max where high-speed circuits and sharp turns redefine the essence of the bike racing game."              
              demoLink="https://play.google.com/store/apps/details?id=com.offline.racing.motorcyclegame.motomax.bikerace.bike.games&hl=en"
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={csm}
              isBlog={false}
              title="Commando Shooting Stars"
              description="Get ready for an adrenaline-pumping experience with an fps commando shooting game. An action-packed fps shooting game that will test your gun shooting skills and marksmanship. Step into the shoes of a highly trained commando shooter and embark on a series of thrilling counter-terrorism missions to infiltrate hostile buildings and areas in real gun shooting war games."              
              demoLink="https://play.google.com/store/apps/details?id=com.fg.fps.commando.shooting.game.action.games&hl=en"
            />
          </Col>          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kungFU}
              isBlog={false}
              title="Kung Fu Fighting"
              description="Master the art of Kung Fu fighting karate games 3d, pave your path to greatness and become the ultimate kung fu karate champion game.

Gain expertise in the art of fighting games offline 3d with Non-stop action. Step into the top new game arena and prove your worth as a Kung Fu fight boxing game champion in one of the best games of martial arts."              
              demoLink="https://play.google.com/store/apps/details?id=com.gzl.superhero.karatefighting.game&hl=en"
            />
          </Col>          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pradoParking}
              isBlog={false}
              title="Prado Car Parking"
              description="Amazing car parking missions, multiplayer car driving challenges, and new car games with smooth controls will double up the Prado parking simulator passion. HD graphics, racing cars, and daily achievement rewards will amaze you in offline Prado parking car game."              
              demoLink="https://play.google.com/store/apps/details?id=com.ghive.jeep.parking.car.free.game.master.apps&hl=en"
            />
          </Col>          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rampStunt}
              isBlog={false}
              title="GT Car Stunt"
              description="GT car stunt game has very smooth gameplay control that gives you a realistic car driving experience on your mobile. High-quality graphics are used for better car stunts race experiences that every user enjoys a lot playing online on their mobile phone."              
              demoLink="https://play.google.com/store/apps/details?id=com.car.stunt.driving.cargames.offline.ramp.racing&hl=en"
            />
          </Col>          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
