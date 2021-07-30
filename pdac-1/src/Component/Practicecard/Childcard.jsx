import React from 'react'
import{Card,Button} from 'react-bootstrap'
import "./Card.css"

export const Childcard = ({itemtodisplay}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={itemtodisplay.Cardimage} />
  <Card.Body>
    <Card.Title >{itemtodisplay.Cardname}</Card.Title>
    <Card.Text>
     {itemtodisplay.Carddesignation}
    </Card.Text>
    <Card.Text>
     {itemtodisplay.Cardaddress}
    </Card.Text>
    <Button variant="primary" className="But">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}
