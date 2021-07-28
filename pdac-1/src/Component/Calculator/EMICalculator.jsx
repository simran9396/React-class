import { Button, Form, COl, Row, Card, Col } from "react-bootstrap";
import React, { useState } from "react";
import "./Emi.css";

export const EMICalculator = () => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  const [emi,setEmi]=useState(0);
  const handleCalEMI=()=>{
//   const si=((p*n*r)/100);
  const ci=(p*(1+(r/100)**n))
  const repayAmount= Number(p)+Number(ci);
  const emiLocal=repayAmount/(n*12);
  setEmi(emiLocal)
  }

  return (
    <div>
      <Card className="Calc">
        <Row>
          <Col md={1}> </Col>
          <Col md={3}>
            {/* e=synthetic event */}
            <Form.Control
              type="number"
              placeholder="Principle"
              onChange={(e) => setP(e.target.value)}
            />
          </Col>{" "}
          <br />
          <Col md={3}>
            <Form.Control type="number" placeholder="no. of years" onChange={(e)=> setN(e.target.value)}/>
          </Col>
          <Col md={3}>
            <Form.Control type="number" placeholder="Rate of intrest" onChange={(e)=> setR(e.target.value)} />
          </Col>
          <Col md={1}>
            <Button variant="primary" onClick={handleCalEMI}>Calculate EMI </Button>
          </Col>
          

        </Row>
        <Col md={3}></Col>
        <Col md={6}>
            <h1>EMI:{emi}</h1>
            {/* <h1>CI:{ci}</h1> */}
        </Col>
      </Card>
    </div>
  );
};
