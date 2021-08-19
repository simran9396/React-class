import React, { useState } from 'react'
import {Card,Col,Row} from 'react-bootstrap'
import { Todolist } from '../Practice todo list/Todolist'
import { Additem } from './Additem'
import './practicetodo.css'

export const Home = () => {
    const [todoitem,setTodoitem]=useState(['lunch','dinner'])
    const handleAdd=(newtodo)=>{
        setTodoitem([newtodo,...todoitem])
    }
    return (
        <Card>
            <Row>
            <Col>
            <Additem handleAdd={handleAdd}/>
            </Col>
            <Col>
            <Todolist todoitem={todoitem}/>
            </Col>
            </Row>
        </Card>
    )
}
