import React from 'react'
import {Row ,Col ,Button, Form, Card} from 'react-bootstrap'
export const Login =()=>{
    return(
            <div>
                <Card>  
                  <Row>
                    <Col md={4}>
                    <Form.Control type='text' placeholder='User Name'></Form.Control>
                    </Col>
                </Row>
                </Card>

            </div>
    )
}