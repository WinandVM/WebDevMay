import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaTwitterSquare} from 'react-icons/fa'
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link text-decoration-none">Homepage</Link>
                        <Link to={'/contact'} className="nav-link text-decoration-none">Contact</Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                        <Link to={'/movies/adventure'} className="dropdown-item text-decoration-none">Adventure</Link>

                            {/* <NavDropdown.Divider /> */}
                            <Link to={'/movies/comedy'} className="dropdown-item text-decoration-none">Comedy</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header