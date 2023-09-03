import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mx-5 pt-1">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <img
            src="https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"
            alt=""
            height="60px"
          />
        </div>
        <div className="d-flex align-items-center  gap-5">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Join Us</Nav.Link>
            <Nav.Link href="#link">Say Hello</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Mirumark Events
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Creative Showcase
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                MarTech Report
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
