import React, { useState } from "react";
import { Button, Row, Col, Card, Container, Form ,Image} from "react-bootstrap";
import { DetailsReducer } from "../../Reducer/DetailsReducer";
import './Navtable.css'

export const Navigationtable = () => {
  const { firstname, lastname, line01, line02, cityname } =
    DetailsReducer.Data[0];
  const [fname, setFname] = useState(firstname);
  const [lname, setLname] = useState(lastname);

  const [line1, setLine1] = useState(line01);
  const [line2, setLine2] = useState(line02);
  
  const [city, setCity] = useState(cityname);
  const [bulbstate,setBulbstate]=useState("off")
  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={4}>
          <Card>
            <Row>
              <Col className="form">
                <Form >
                  <Form.Group>
                    <Row>
                    
                    <Form.Label>First Name:</Form.Label>
                   
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
                    <Form.Label>Last Name:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    {/* ----------------Qualification------------- */}
                    <Row>
                    <Form.Label>Qualifications:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="Qualifications"
                          onChange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                    <Form.Label>DOB:</Form.Label>
                      <Col>
                        <Form.Control
                          type="date"
                          placeholder="DOB"
                          onChange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>House No:</Form.Label>
                        <Col>
                        <Form.Control
                          type="text"
                          placeholder="H.no"
                          onChange={(e) => setLname(e.target.value)}
                          value={lname}
                        ></Form.Control>
                      </Col>
                      </Col>
                    </Row>
                    <Row>
                    <Form.Label>City:</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="city"
                          onChange={(e) => setLine1(e.target.value)}
                          value={line1}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                    <Form.Label>State</Form.Label>
                      <Col>
                        <Form.Control
                          type="text"
                          placeholder="State"
                          onChange={(e) => setLine2(e.target.value)}
                          value={line2}
                        ></Form.Control>
                      </Col>
                    </Row>
                   
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* -----------------------------------Card------------ */}
        
        <Col md={4} >
        <div className="card">
        <Image src="Images/card.png" rounded width="100px" />
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
                <Button variant="primary">Go Somewhere</Button>
              </Card>
            </Col>
          </Row>
          </div>
        </Col>
        
        <Col md={3}>
        <Image src={`Images/bulb${bulbstate }.png`} width="250px"
         onclick={()=> bulbstate==="off"? setBulbstate("on"):setBulbstate("off") }/>
        </Col>
      </Row>
    </div>
  );
};
