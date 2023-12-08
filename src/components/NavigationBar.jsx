
// import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import './NavigationBar.css'; 

// export default function NavigationBar() {
//   return (
//     <Navbar className="custom-navbar" expand="lg">
//       <Container>
//         <Navbar.Brand href="/">Home</Navbar.Brand>
        
//         <Nav className="me-auto">
//           <Nav.Link href="/participation-form" active>Participation Form</Nav.Link>
//           <Nav.Link href="/prize-details" active>Prize Details Form</Nav.Link>
//           <Nav.Link href="/login" active>Login Form</Nav.Link>
//           <Nav.Link href="/register" active>Register Form</Nav.Link>

//           <Nav.Link href="https://github.com/yourusername" target="_blank">GitHub</Nav.Link>
          
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css'; // Import your CSS file

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto justify-content-between w-100">
          <Nav.Link href="/about">More Info</Nav.Link>
            <Nav.Link href="/participation-form">Participation Form</Nav.Link>
            <Nav.Link href="/prize-details">Prize Details Form</Nav.Link>
            <Nav.Link href="/login">Login Form</Nav.Link>
            <Nav.Link href="/register">Register Form</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
