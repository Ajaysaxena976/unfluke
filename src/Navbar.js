import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="hover-menus">LeaderBoard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="hover-menu">
              Historical Trading
            </Nav.Link>
            <Nav.Link href="#" className="hover-menu">
              Historical Chart
            </Nav.Link>
            <NavDropdown title="Dropdown" id="navbarDropdown" className="hover-menu">
              <NavDropdown.Item href="#">Option 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 3</NavDropdown.Item>
              <NavDropdown.Item href="#">Option 4</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="hover-menu">
              Scanners
            </Nav.Link>
            <Nav.Link href="#" className="hover-menu">
              Alerts
            </Nav.Link>
            <Nav.Link href="#" className="hover-menu">
              Basic Backtest
            </Nav.Link>
            <Nav.Link href="#" className="hover-menu">
              Advanced Backtest
            </Nav.Link>
            <Nav.Link href="#" className="hover-menu">
              Pricing
            </Nav.Link>
            <Nav.Link href="#" className="hover-menu">
              My Earnings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
