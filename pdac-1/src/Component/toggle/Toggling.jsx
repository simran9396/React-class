import React, { useState } from "react";
import { Button, Row, Col, Form, Image, Card } from "react-bootstrap";
import "./Togling.css";

export const Toggling = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [bulb, setBulb] = useState("on");
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={4} className="col-4">
          <Card className={bulb == "on" ? "info" : "infoAcc"}>
            <Card.Body>
              <Form.Group>
                <Col md={8}>
                  <Row>
                    {""}
                    <Col>
                      <Form.Label>First Name:</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFname(e.target.value)}
                        //   value={fname}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Last Name:</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLname(e.target.value)}
                        //   value={lname}
                      ></Form.Control>
                    </Col>
                  </Row>
                  {/* ----------------Qualification------------- */}
                  <Row>
                    <Col>
                      <Form.Label>Qualifications:</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="Qualifications"
                        onChange={(e) => setQualification(e.target.value)}
                        //   value={lname}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>DOB:</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="date"
                        placeholder="DOB"
                        onChange={(e) => setDob(e.target.value)}
                        //   value={lname}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>House No:</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="H.no"
                        onChange={(e) => setLine1(e.target.value)}
                        //   value={lname}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>City:</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="city"
                        onChange={(e) => setCity(e.target.value)}
                        //   value={line1}
                      ></Form.Control>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>State</Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        onChange={(e) => setLine2(e.target.value)}
                        //   value={line2}
                      ></Form.Control>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Card.Body>
          </Card>
        </Col>

        {/* -----------------------------------Card------------ */}

        <Col md={4}>
          <Row>
            <Card className={bulb == "on" ? "info" : "infoAcc"}>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Image src="Images/card.png" width="120px" />
                  </Col>
                  <Col md={6}>
                    <Row>
                      <Col>
                        <b>Full Name</b>
                        <h3>{`${fname} ${lname},`}</h3>
                      </Col>
                      <Col>{`${dob},`}</Col>
                    </Row>
                    <Row>
                      <Col>{`${qualification},`}</Col>
                    </Row>
                    <Row>
                      <Col>{`${line1},`}</Col>
                    </Row>
                    <Row>
                      <Col>{`${line2},`}</Col>
                    </Row>
                    <Row>
                      <Col>{`${city},`}</Col>
                    </Row>
                    <Button variant="primary">Go Somewhere</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        <Col md={3}>
          <Image
            src={`bulb-${bulb}.png`}
            width="250px"
            onClick={() => (bulb === "off" ? setBulb("on") : setBulb("off"))}
          />
        </Col>
      </Row>
    </div>
  );
};
