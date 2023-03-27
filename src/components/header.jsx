import React, { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <Navbar className="color-nav" expanded={isOpen} expand="md" sticky="top" >
        <Container fluid>
          <Navbar.Brand to="/" className="px-sm-5">YooLeeJoyce</Navbar.Brand>
          <Nav className="d-flex flex-row justify-end-content" >
            <NavLink className="menu-link" to="/" onClick={() => setOpen(false)}>ENGLISH</NavLink>
            <NavLink className="menu-link2" to="/korean" onClick={() => setOpen(false)}>한국어</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
