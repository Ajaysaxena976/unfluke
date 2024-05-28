
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import Unfluke from "./unfluke.png";
import coin from "./coinnew.jpeg"
import bell from "./bell.png"
import profile from "./profile.jpg"
import "./CollapseExample.css"

// Then, when using the icon in your component:





import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
  return (
    <Navbar
      bg="grey"
      expand="lg"
      variant="dark"
      className="navbar-custom-bg justify-content-between"
    >
      {/* <Navbar.Brand href="#home">Unfluke</Navbar.Brand> */}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={Unfluke} alt="Unfluke" width="150" height="60" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
            title={<img src={bell} alt="Bell Icon" width="30" height="30" />}
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Something else
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#deets">
            <img src={coin} alt="coin" width="30" height="30" />
          </Nav.Link>
          <NavDropdown
            className="extra-margin"
            title={<img src={profile} alt="profile" width="30" height="30" />}
            id="collapsible-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
