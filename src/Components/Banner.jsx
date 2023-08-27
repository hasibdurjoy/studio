import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <img
                        src="https://creavast.com/wp-content/uploads/2020/08/cropped-cropped-cropped-logo-png-111-2-e1610894408730.png"
                        alt=""
                    />
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#aboutus">About Us</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#contactus">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;
