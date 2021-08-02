import React ,{useState} from 'react'
import {Button, Card} from 'react-bootstrap'
import './Bulb.css'

export const ToggleComps = () => {
    const[color,setColor]=useState("orange")
    return (
        <div>
            <Card>
                <Button onClick={()=>
                color=="blue"? setColor("red"): setColor("blue")}>Change Color</Button>

                
                <h1 >PickupBiz</h1>

                <p>This is my content</p>
               <h1> <span style={{color:color}}>pdac course</span></h1>
            <Button onClick={()=>setColor("red")}>Change Me</Button>
            <Button onClick={()=>setColor("pink")}>Change Me</Button>
            <Button onClick={()=>setColor("orange")}>Change Me</Button> 
            <Button onClick={()=>setColor("purple")}>Change Me</Button>
            <Button onClick={()=>setColor("yellow")}>Change Me</Button>
            <Button onClick={()=>setColor("teal")}>Change Me</Button>
            </Card>
            
        </div>
    )
}
