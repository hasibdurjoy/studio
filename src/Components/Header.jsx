import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className=" d-flex align-items-center justify-content-between bg-black ">
        <div>
          <Navbar.Brand href="#">
            <img
              height="60px"
              src="https://i.ibb.co/qy3YJwN/Untitled-design-9.png"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <div>
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-danger" href="#action1">
              About
            </Nav.Link>
            <Nav.Link className="text-danger" href="#action2">
              Solution
            </Nav.Link>
            <Nav.Link className="text-danger" href="#action2">
              Blog
            </Nav.Link>
            <Nav.Link className="text-danger" href="#action2">
              Services
            </Nav.Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
