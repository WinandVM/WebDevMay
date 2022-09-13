import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavLinks() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" className="header-image">
      <Container>
        <Navbar.Brand href="#home">Scylla v0.1</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://google.com">Home</Nav.Link>
            <Nav.Link href="#pricing">Free Games</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavLinks