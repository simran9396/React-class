import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { TodoItem } from './To-do-item'

export const TodoList = ({todoitems}) => {
    return (
        <Card className="todolist">
            <h1>To do list</h1>
           {todoitems.map((item)=>(<TodoItem item={item}/>))} 
          
        </Card>
    )
}
