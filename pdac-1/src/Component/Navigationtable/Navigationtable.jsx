import React, { useState } from "react";
import { Button, Row, Col, Card, Container, Form } from "react-bootstrap";
import { DetailsReducer } from "../../Reducer/DetailsReducer";

export const Navigationtable = () => {
  const { firstname, lastname, line01, line02, cityname } =
    DetailsReducer.Data[0];
  const [fname, setFname] = useState(firstname);
  const [lname, setLname] = useState(lastname);
  const [line1, setLine1] = useState(line01);
  const [line2, setLine2] = useState(line02);
  const [city, setCity] = useState(cityname);
  return (
    <div>
      <Row>
        <Col md={2}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          onChange={(e) => setFname(e.target.value)}
                          value={fname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Address:</Form.Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Line 1"
                          onChange={(e) => setLine1(e.target.value)}
                          value={line1}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Line 2"
                          onChange={(e) => setLine2(e.target.value)}
                          value={line2}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="City:"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                        ></Form.Control>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col md={4}>
          <Button>Submit</Button>

          <Row>
            <Col>
              <Card>
                <Row>
                  <Col>
                    <h3>{`${fname} ${lname},`}</h3>
                  </Col>
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
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
