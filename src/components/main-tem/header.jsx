import React from 'react';
import {
    Link
  } from "react-router-dom";
import {Container,Navbar,Nav, NavDropdown} from 'react-bootstrap';
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{marginLeft: "auto"}}>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">How It Works (clicking scrolls down to video section)</Nav.Link>
                    <NavDropdown title="Login" id="navbarScrollingDropdown" style={{boxShadow: "none",right:'0'}}>
                        <Nav.Link as={Link} to="/login" style={{fontSize: "12px"}}>Login with Twitch</Nav.Link>
                        <Nav.Link as={Link} to="/login" style={{fontSize: "12px"}}>Login with Facebook</Nav.Link>
                        <Nav.Link as={Link} to="/login" style={{fontSize: "12px"}}>Login with Youtube</Nav.Link>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;