import { Button, Form, COl, Row, Card, Col } from "react-bootstrap";
import React, { useState,useMemo,useEffect } from "react";
import "./Emi.css";

export const Memoemi = ({discount}) => {
  const [p, setP] = useState(0);
  const [n, setN] = useState(0);
  const [r, setR] = useState(0);
  
  const handleCalEMI=()=>{
      const si=((p*n*r)/100);
      // const ci=(p*(1+(r/100)**n))
      const repayAmount= Number(p)+Number(si);
      const emiLocal=repayAmount/(n*12);
      return emiLocal-emiLocal* (discount/100)
    }
   
    const emi=useMemo(()=>handleCalEMI(),[p,n,r,discount])

    // we cn reduce unnesserary rerendering using memo
  return (
    <React.Fragment>
      <h1>EMI Calculator</h1>
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
          {/* <Col md={1}>
            <Button variant="primary" onClick={handleCalEMI}>Calculate EMI </Button>
             l
          </Col> */}
          

        </Row>
        <Col md={3}></Col>
        <Col md={6}>
            <h2>EMI:{emi}</h2>
            {/* <h1>CI:{ci}</h1> */}
        </Col>
      </Card>
    </React.Fragment>
  );
};
