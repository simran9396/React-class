import React from 'react'
import { Todoitem } from './Todoitem'
import {Card} from 'react-bootstrap'

export const Todolist = ({todoitem}) => {
    return (
            <Card>
                     {todoitem.map((item)=>(<Todoitem item={item}/>))} 
  
            </Card>
       
    )
}
