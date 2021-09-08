import React,{useState} from 'react'
import {Card,Col,Row,Form,Button} from 'react-bootstrap'

export const TodoItem = ({item}) => {
    const[check,setCheck]=useState(false)
    return (
        <Card className="todoitem">
            
           <Row>
               <Col md={1}>
               <Form.Check onClick={(e)=>setCheck(!check)}></Form.Check>
               </Col>
               <Col md={8}>
               <Form.Label>
                   {check ?<del>{item}</del>:item}</Form.Label>
                   <Button>delete</Button>
               </Col>
           </Row>
    </Card> 
      )
}
