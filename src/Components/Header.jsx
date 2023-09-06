import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=" d-flex align-items-center justify-content-between">
        <div>
          <Navbar.Brand href="#">
            <img
              height="100px"
              src="https://i.ibb.co/9vzpFg0/Untitled-design-11.png"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Service</Nav.Link>
            <Nav.Link href="#action2">Blog</Nav.Link>
            <Nav.Link href="#action2">Solutions</Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
