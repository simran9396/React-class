import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
export const AddTodoItem = ({ handleAdd }) => {
  const [newtodo, setNewtodo] = useState("");
  return (
    <Card className="addtodo">
      Add to do item
      <Row>
      <Col>
        <Form.Control
          placeholder="add item"
          onChange={(e) => setNewtodo(e.target.value)}
        />
      </Col>
      <Col>
        <Button
          className="BUtton"
          onClick={() => {
            handleAdd(newtodo);
          }}
          disabled={newtodo === ""}
        >
          Add newmms
        </Button>
      </Col>
      </Row>
    </Card>
  );
};
