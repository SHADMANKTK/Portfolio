import React from "react";
import { Col, Row } from "react-bootstrap";
import {  
  SiGoogleadmob,
  SiFirebase,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function SDKsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogleadmob />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase/>
      </Col>                 
    </Row>
  );
}

export default SDKsStack;
