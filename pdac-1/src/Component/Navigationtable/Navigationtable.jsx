import React from 'react'
import { Button ,Row,Col,Card, Container, Form } from 'react-bootstrap'

export const Navigationtable = () => {
    return (
        <div>
        
            <Row>
               <Col md={2}>
               </Col>
               <Col md={4}>
                   <Card>
                   <Row>
                       <Col>
                       <Form>
                           <Form.Group> 
                               <Row>
                                   <Col>  
                                   <Form.Control type="text"
                                   placeholder="First Name"></Form.Control>   
                                   </Col>          
                               </Row>
                            <Row>
                              <Col>  
                                   <Form.Control type="text"
                                   placeholder="Last Name"></Form.Control>   
                             </Col> 
                       
                           </Row>
                   <Row>
                       <Col>
                       <Form.Label>Address:</Form.Label>
                       </Col>
                   </Row>
                           <Row>
                             <Col>  
                                   <Form.Control type="text"
                                   placeholder="Line 1"></Form.Control>   
                                   </Col> 
                            </Row>
                            <Row>
                                <Col>  
                                   <Form.Control type="text"
                                   placeholder="Line2"></Form.Control>   
                                   </Col> 
                             </Row>
                               <Row>
                               <Col>  
                                   <Form.Control type="text"
                                   placeholder="City:"></Form.Control>   
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
                           </Col>
                           </Row>
                           <Row>
                               <Col>
                               <Card>
                                   <Row>
                                       <Col>simran</Col>
                                   </Row>
                                   <Row>
                                       <Col>H.no-22</Col>
                                   </Row>
                                   <Row>
                                       <Col>Nanded</Col>
                                   </Row>
                                   <Row>
                                       <Col>431605</Col>
                                   </Row>
                               </Card>
                               </Col>
                           </Row>
                           {/* </Col> */}
              
              
                         <Col md={2}></Col>
               
            
            {/* </Row>              */}
                       
</div>
    )
}
