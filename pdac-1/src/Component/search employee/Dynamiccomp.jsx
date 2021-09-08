import React from 'react'
import { Card, Form } from 'react-bootstrap'
import { candidatedata } from '../../Reducer/Candidatedata'
import "./dynamic.css"

export const Dynamiccomp = () => {
    return (
       <Card className="dynamic" >
            {Object.keys(candidatedata).map((key)=>(
                <p>{key}:
                <Form.Control
                 type={candidatedata[key].type}
                placeholder={candidatedata[key].placeholder}
                value={candidatedata[key].data}></Form.Control>
                </p>
            ))}
            
            </Card>
    )
}
