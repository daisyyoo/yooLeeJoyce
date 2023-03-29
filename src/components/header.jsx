import React, { useState, useContext } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar sticky="top" >
        <Container fluid>
          <Navbar.Brand to="/" className="px-sm-5">YooLeeJoyce</Navbar.Brand>
          <Nav id="nav-select" className="d-flex flex-row justify-end-content" >
            <NavLink to="/" end>ENGLISH</NavLink>
            <NavLink to="/korean" end>한국어</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
