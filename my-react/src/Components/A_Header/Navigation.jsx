import React from 'react'

import './Navigation.css'

import {Navbar,Nav,Container,NavDropdown,Carousel} from 'react-bootstrap';

export const Navigation = () => {
    return (
        <div>

<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="bacground1.png"
      alt="First slide"
      // interval="2000"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="bacground1.png"
      alt="Second slide"
      // interval="2000"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-5        0 h-50"
      src="da5        web_istock.jpg"
      alt="Third slide"
      // interval="2000"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
