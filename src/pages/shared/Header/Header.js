import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img className="w-50" src="https://i.ibb.co/BcKx7wz/Euro-Logo-F3.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link href="#features">What We do</Nav.Link>
                            <Nav.Link href="#pricing">Our Products</Nav.Link>
                            <Nav.Link href="#pricing">Why Us?</Nav.Link>
                            <NavDropdown title="About Us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Supply Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Careers</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Get in Touch</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;