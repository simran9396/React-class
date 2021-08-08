import React,{useState} from 'react'
import { Button ,Row,Col } from 'react-bootstrap'
import axios from 'axios'

export const Counter = () => {
    
    const[data,setData]=useState(0)
    const handleApi=()=>{
        axios.get("http://localhost:4000/emp").then(res=>{
            console.log(res.data)
        })

    }
    return (
        <div>
            
               <Row>
                   <Col md="3">
                   

                        <Button varient="primary" onClick={()=>data>0 && setData(data-1)}>-</Button>
                        </Col>
                        <br />
                        <Col md="3">
                        <h1>{data}</h1>
                        </Col>
                        <Col  md="3">
                        <Button varient="primary"onClick={()=>data<10 && setData(data+1)}>+</Button>
                     
                        </Col>
                        <Col md="3" >
                        <Button varient="primary"onClick={handleApi}>Call Api</Button>
                     
                        </Col>

                 </Row>
          
                    
             
        </div>
    )
}
