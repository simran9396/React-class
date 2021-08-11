import React, {useState,useEffect,useRef} from 'react'
import {Row ,Col ,Button, Form, Card} from 'react-bootstrap'
import "./Login.css"
import { userData } from './config'

export const Login =()=>{
    const [username,setUsername]=useState("")
    const [pass,setPass]=useState("")
    const [valid,setValid]=useState(true)
    const[success,setSuccess]=useState(false)
    const eleusername=useRef()
    const elepass=useRef()

    useEffect(()=>{

        if(username.length>=5 && pass.length>=6){
        setValid(false)
        if(userData.userName===username.trim() &&userData.password===pass.trim( )){
            setSuccess(true)
            localStorage.setItem('token',userData.token)
        }
     } else setPass(true)
    },[username,pass])
    useEffect(()=>{
        if (localStorage.getItem("username")){
            eleusername.current.value=localStorage.getItem("username")  
            elepass.current.focus()
        } else{
            eleusername.current.focus()
        }
    },[])
    return(
        <div>
            {success?(
                <p> you are sucessfully logged in</p>
            ):(
            <div> 
                <Card className="login">  
                  <Row>
                    <Col md={10}>   
                    <Form.Control type='text' placeholder='User Name' ref={eleusername} onChange={(e)=>setUsername(e.target.value)} ></Form.Control>
                    </Col>
                    <Col md={10}>
                    <Form.Control type='password' placeholder='User password' ref={elepass} onChange={(e)=>setPass(e.target.value)}></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Button disabled={valid}>Submit</Button>
                        </Col>
                        <Col md={6}>   
                        <Button>Cancel</Button>
                    </Col>
                </Row>
                {! success && !valid&&(
                    <p>please enter correct user name</p>
                    // ! means not+
                    
                )}
                </Card>

            </div>
            )}
            </div>
    )
}