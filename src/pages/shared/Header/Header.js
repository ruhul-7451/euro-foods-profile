import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{ width: "215px" }} src="https://i.ibb.co/BcKx7wz/Euro-Logo-F3.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link as={Link} to="services">What We do</Nav.Link>
                            <Nav.Link as={Link} to="products">Our Products</Nav.Link>
                            <Nav.Link as={Link} to="details">Why Us?</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;