import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'; 
export default function NavigationBar() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/participation-form" active>Participation Form</Nav.Link>
           
            
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/prize-details" active>Prize Details Form</Nav.Link>
           
            
          </Nav>
          <Navbar.Collapse className="justify-content-end">
           
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
