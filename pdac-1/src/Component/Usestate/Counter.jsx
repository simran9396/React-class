import React,{useState} from 'react'
import { Button ,Row,Col } from 'react-bootstrap'

export const Counter = () => {
    
    const[data,setData]=useState(0)
    return (
        <div>
            
               <Row>
                   <Col md="1">
                   
                        <Button varient="primary" onClick={()=>data>0 && setData(data-1)}>-</Button>
                        </Col>
                        <Col md="1">
                        <h1>{data}</h1>
                        </Col>
                        <Col >
                        <Button varient="primary"onClick={()=>data<10 && setData(data+1)}>+</Button>
                     
                        </Col>

                 </Row>
          
                    
             
        </div>
    )
}
