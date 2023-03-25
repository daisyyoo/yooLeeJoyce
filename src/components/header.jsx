import React, { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <Navbar className="color-nav" expanded={isOpen} expand="md" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="/" className="px-sm-5">YooLeeJoyce</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setOpen(isOpen ? false : 'expanded')} />
          <Navbar.Offcanvas id="offcanvasNavbar-expand" aria-labelledby="offcanvasNavbar-expand" placement="end">
            <Offcanvas.Header className="mx-4 border-bot" onClick={() => setOpen(isOpen ? false : 'expanded')} closeButton>
              <Offcanvas.Title className="pt-2" id="offcanvasNavbar-expand">
                MENU
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="px-4">
              <Nav className="justify-content-end flex-grow-1 pe-3" >
                <NavLink className="px-3 px-lg-3 menu-link" to="/" onClick={() => setOpen(false)}>HOME</NavLink>
                <NavLink className="px-3 px-lg-3 menu-link" to="/korean" onClick={() => setOpen(false)}>KOREAN PAGE</NavLink>
                <NavLink className="px-3 px-lg-3 menu-link" to="/gallery" onClick={() => setOpen(false)}>GALLERY</NavLink>
                <NavLink className="px-3 px-lg-3 menu-link" to="/ourStory" onClick={() => setOpen(false)}>OUR STORY</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
