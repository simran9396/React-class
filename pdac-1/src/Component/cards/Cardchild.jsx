import React from "react";
import { Card, Button,FormControl } from "react-bootstrap";
import "./Card.css";

export const Cardchild = ({ itemCurrent }) => {
  return (
    <div>
       
        
      <Card style={{ width: "20rem" }} className="card
      ">
          
        <Card.Img variant="top" src={itemCurrent.cardImg} />
        <Card.Body className="cardbody">
          <Card.Title>{`${itemCurrent.cardName} ${itemCurrent.cardLname}`}</Card.Title>
          <Card.Text>{itemCurrent.cardDetails}</Card.Text>
          <Card.Text>{itemCurrent.cardAdress}</Card.Text>
          <Card.Text>{itemCurrent.cardContact}</Card.Text>
          <Button variant="primary" className="But">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
