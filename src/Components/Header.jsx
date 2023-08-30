import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <div className="mx-5 pt-1">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <img
            src="https://i.ibb.co/smdhcQm/1.png"
            alt=""
            height="60px"
          />
        </div>
        <div className="d-flex align-items-center  gap-5">
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Join Us</Nav.Link>
            <NavDropdown title="Who We Are" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Clients
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Awards</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                CRS
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Brand Strategy </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Creative Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Social Listening & ORM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
              Media Planning & Buying
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Marketing Automation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Technology Builds
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
              Healthcare Marketing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Say Hello</Nav.Link>
            <NavDropdown title="News and Insights" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                            Insights
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Thought Leadership
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Media Coverage</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mirumark Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Creative Showcase
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MarTech Report</NavDropdown.Item>
              <NavDropdown.Divider />
              
            </NavDropdown>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Header;






