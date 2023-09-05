import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar expand="lg" style={{ color: "white" }}>
      <Container className=" d-flex align-items-center justify-content-between">
        <div>
          <Navbar.Brand href="#">
            <img
              height="50px"
              src="https://i.ibb.co/ZVmxpN6/logo-transparent.png"
              alt=""
            />
            {/* <a href="https://ibb.co/yXSqcVn"><img src="https://i.ibb.co/ZVmxpN6/logo-transparent.png" alt="logo-transparent" border="0"></a> */}
          </Navbar.Brand>
        </div>
        <div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Service</Nav.Link>
            <Nav.Link href="#action2">Portfolio</Nav.Link>
            <Nav.Link href="#action2">Blogs</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Digital Marketing For Travel Industry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Digital Marketing For Real Estate Industry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Digital Marketing for Healthcare Industry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Digital Marketing For Plumbing Industry
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Digital Marketing For Law Firm
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
