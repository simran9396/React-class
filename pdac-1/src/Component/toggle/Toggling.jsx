import React,{useState} from 'react'
import { Button,Row,Col,Form,Image,Card } from 'react-bootstrap'


export const Toggling = () => {
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [line1,setLine1]=useState("");
    const [line2,setLine2]=useState("");
    const [city,setCity]=useState("");
    const [dob,setDob]=useState("");
    const [qualification,setQualification]=useState("");
    const [bulb,setBulb]=useState("on");
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
                        //   value={fname}
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
                        //   value={lname}
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
                          onChange={(e) => setQualification(e.target.value)}
                        //   value={lname}
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                    <Form.Label>DOB:</Form.Label>
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
                        <Col>
                        <Form.Control
                          type="text"
                          placeholder="H.no"
                          onChange={(e) => setLine1(e.target.value)}
                        //   value={lname}
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
                          onChange={(e) => setCity(e.target.value)}
                        //   value={line1}
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
                        //   value={line2}
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
       

        
          <Row>
           
              <Card
              id={bulb=="on" ? "info" :"dark1"}>
                <Card.Body>
                <Row>
                  <Col md={6}>
                  <Image src="holder.js/171x180" rounded />
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
              </Card>
           
          </Row>
        
        </Col>
        
        <Col md={3}>
        <Image src={`Images/bulb${bulb }.png`} width="250px"
         onclick={()=> bulb==="off"? setBulb("on"):setBulb("off") }/>
        </Col>
      </Row>
    </div>
  );
};

       
            


