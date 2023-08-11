import React, { Fragment } from "react";

import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                className="navigation-list"
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(226, 30, 81)" : undefined,
                  };
                }}
                to="/"
              >
                Read
              </NavLink>
              <NavLink
                className="navigation-list"
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(226, 30, 81)" : undefined,
                  };
                }}
                to="/create"
              >
                Create
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
