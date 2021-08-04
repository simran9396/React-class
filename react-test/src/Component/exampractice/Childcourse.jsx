import React from 'react';
import{Card,Button} from 'react-bootstrap'

export const Childcourse = ({itemcurrent}) => {
    return (
        <div style={{display:"inline-block"}}>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={itemcurrent.cardimg} />
  <Card.Body>
    <Card.Title><b>Name:{itemcurrent.cardname}</b></Card.Title>
    <Card.Title>Surname:{itemcurrent.cardlname}</Card.Title>
    <Card.Title>City:{itemcurrent.cardcity}</Card.Title>
    <Card.Title>Designation:{itemcurrent.carddsignation}</Card.Title>
   
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}
