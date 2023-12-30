
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'; 

export default function NavigationBar() {
  return (
    <Navbar >
      <Container>
        <NavLink className="nav-link" to="/">Home</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-between w-100">
          <NavLink className="nav-link" to="/about">More Info</NavLink>
            <NavLink className="nav-link" to="/participation-form">Participation Form</NavLink>
            <NavLink className="nav-link" to="/prize-details">Prize Details Form</NavLink>
            <NavLink className="nav-link" to="/login">Login Form</NavLink>
            <NavLink className="nav-link" to="/register">Register Form</NavLink>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
