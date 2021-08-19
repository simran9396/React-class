import React,{useState} from 'react'
import {Card, Form,Col,Button,Row} from 'react-bootstrap'

export const Additem = ({handleAdd}) => {
    const [newtodo,setNewtodo]=useState("")
    return (
        <Card className="addtodo">
            <Row>
            <Col>
            <Form.Control placeholder="add item"
            onChange={(e)=>setNewtodo(e.target.value)}>

            </Form.Control>
            </Col>
            <Col>
            <Button onClick={()=>{handleAdd(newtodo)}}>Add</Button>
            </Col>
            </Row>
            
        </Card>
        
    )
}
