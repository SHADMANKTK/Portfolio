import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgTrello } from "react-icons/cg";
import {  
  SiJirasoftware,
  SiClickup,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function CollaborationStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgTrello />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <SiClickup />
      </Col>                              
    </Row>
  );
}

export default CollaborationStack;
