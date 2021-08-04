import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import './Navigationbars.css'
export const Navigationbar = () => {
  return (
    <div>
     <Navbar bg="dark" expand="lg" className="nav">
  <Container>
    <NavLink to="/login" className="brand">React-Bootstrap</NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="home" className="title">Home</NavLink>
        <NavLink to="course" className="title">Course</NavLink>
        <NavLink to="about us" className="title">About us</NavLink>
        <NavLink to="contact us" className="title">Contact us</NavLink>
        <NavLink to="services" className="title">Services</NavLink>
        <NavLink to="login" className="title">Login</NavLink>

       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};
