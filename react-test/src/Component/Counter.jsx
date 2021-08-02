import React,{useState} from 'react'
import{Button,Col,Row}from 'react-bootstrap'
export const Counter=()=>{
    const[data,setData]=useState(0)
    return(
        <div>
            <Row>
                <Col md="2">
            <Button onClick={()=>data>0 && setData(data-1)}>-</Button>
            </Col>
            <Col md="2">
            <h1>{data}</h1>
            </Col>
            <Col>
            <Button onClick={()=>data<10 && setData(data+1)}>+</Button>
            </Col>
            </Row>
        </div>
    )
}