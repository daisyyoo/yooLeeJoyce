import React, { useState, useContext } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AppContext from '../pages/app-context'

const Header = () => {
  const context = useContext(AppContext);
  const { currentView, setCurrentView } = context;

  return (
    <header>
      <Navbar sticky="top" >
        <Container fluid>
          <Navbar.Brand to="/" className="px-sm-5">YooLeeJoyce</Navbar.Brand>
          <Nav className="d-flex flex-row justify-end-content" >
            <NavLink
              className={currentView === 'english' ? "menu-link-view" : "menu-link"}
              to="/"
              onClick={setCurrentView('english')}
              >
              ENGLISH</NavLink>
            <NavLink
              className={currentView === 'korean' ? "menu-link2-view" : "menu-link2"}
              to="/korean"
              onClick={setCurrentView('korean')}
            >
            한국어</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
