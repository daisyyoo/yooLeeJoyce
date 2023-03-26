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
          <Nav className="justify-content-end flex-grow-1 pe-3" >
            <NavLink className="px-3 px-lg-3 menu-link" to="/" onClick={() => setOpen(false)}>ENGLISH</NavLink>
            <NavLink className="px-3 px-lg-3 menu-link" to="/korean" onClick={() => setOpen(false)}>한국어</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
