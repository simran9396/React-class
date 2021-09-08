import React, { useState,useEffect } from "react";
import "./todo.css";
import { TodoList } from "./To-do-list";
import { Row, Col, Card } from "react-bootstrap";
import { AddTodoItem } from "./AddTodoItem";

export const Home = () => {
  const [todoitems, setTodoitems] = useState(["Learning React", "lunch"]);
  const handleAdd = (newtodo) => {
    setTodoitems([...todoitems, newtodo]);
    localStorage.setItem(todo,[newtodo,...todoitems])
  };
  useEffect(() => {
    setTodoitems([localStorage.getItem("todo")])  
  }, [])
  return (
    <Card className="home">
      <Row>
        <Col>
          <AddTodoItem handleAdd={handleAdd} />
        </Col>
        <Col>
          <TodoList todoitems={todoitems} />
        </Col>
      </Row>
    </Card>
  );
};
