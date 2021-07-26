import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Grid.css";
export const GridLayout = () => {
  return (
    <div>
      <Row>
        <Col md="6">
          <Row className="row-1">
            <Col lg="3">
              <input type="text" placeholder=" First Name" />
            </Col>
            <Col lg="3">
              <input type="text" placeholder=" Last Name" />
            </Col>
            <Col lg="4 ">
              <input type="text" placeholder="Full Name" />
            </Col>
            <Col lg="2 ">
              <input type="Submit" />
            </Col>
          </Row>
          <Row>
            <Col>
              <input type="number" placeholder=" Mobile No." />
            </Col>
            <Col>
              <input type="email" placeholder="E-mail" />
            </Col>
            <Row className="row-1">
              <input type="text" placeholder="Current Adress" />
            </Row>
            <Row className="row-1">
              <input type="text" placeholder="Permanent Adress" />
            </Row>
            <Col>
              <input type="Submit" />
            </Col>
          </Row>
        </Col>

        <Col md="6">
          <Image src="Images/tea.png" alt="" width="300px" />
        </Col>
      </Row>
    </div>
  );
};
