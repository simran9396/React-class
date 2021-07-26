import React from 'react'
import{Card,Button} from 'react-bootstrap'

export const Cardchild = ({itemCurrent}) => {

    return (
          <div>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={itemCurrent.cardImg} />
              <Card.Body>
              <Card.Title>{itemCurrent.cardTitle}</Card.Title>
             <Card.Text>
      {itemCurrent.cardDesc}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            
        </div>
    )
}
