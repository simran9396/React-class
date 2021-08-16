
import React,{useState,useEffect} from 'react'
import {Card,Button,Col,Row, Form} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { getEmpDetails } from '../state/Selector/Empselector'
import { addemp } from '../state/action/EmpdetalsAction'



export const Empdetails = () => {
     const selector=useSelector(getEmpDetails)
     
     const[empdata,setEmpdata]=useState()

     useEffect(() => {
         setEmpdata(selector)
        
     }, [selector])
     const dispatch=useDispatch()
     
     const[mentorName,setMentorName]=useState()
     const[mentorDesc,setMentorDesc]=useState()

    
     const handleDispathch=()=>{
        dispatchEvent(addemp(mentorName.mentorDesc))
     }
  

    return (
        <div>
            <Row>
                <Col lg="6">    
                    {/* <Form.Control
                    placeholder="Add Name"
                    onChange={(e)=>setNewData(e.target.value)}
                        /> 
                        <Form.Control */}
                        <input
                        type="text"
                    placeholder="Add Mentor Name"
                    onChange={(e)=>setMentorName(e.target.value)}
                        /> 
                         <Form.Control
                    placeholder="Add Mntordisc"
                    onChange={(e)=>setMentorDesc(e.target.value)}
                        /> 
                        
                </Col>

                <Col lg="2"> 
                  <Button onClick={handleDispathch}>Dispatch</Button>
                </Col>
              </Row>
         
            {empdata.map((item)=>{
                return(

       
            <Card style={{width:"18rem",display:"inline-flex"}}>
            <Card.Title>
             {item.name}

            </Card.Title>
            <Card.Img   src="Images/1.png" ></Card.Img>
            <Card.Header>
            {item.desc}
            </Card.Header>
            <Card.Body>
            {item.details }
                 <Button>More details</Button>
            </Card.Body>
            </Card>
            )
                 })}

        </div>
    )
}
