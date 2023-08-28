import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Col md={6}>
                        <img
                            src="https://creavast.com/wp-content/uploads/2020/08/cropped-cropped-cropped-logo-png-111-2-e1610894408730.png"
                            alt=""
                        />
                    </Col>

                    <Col md={6}>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#service">Service</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link href="#contactus">Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                </Container>
            </Navbar>
            <div className="banner">
                <Container>
                    <Row>
                        <Col md={6} className="banner-text mt-5">
                            <br />
                            <br />
                            <br />
                            <h4>We are Creative & Fast</h4>
                            <br />
                            <br />
                            <h1>
                                <strong>LEVEL UP</strong>
                            </h1>
                            <h1 className="text-danger ">
                                <strong>YOUR BUSINESS</strong>
                            </h1>
                            <br />
                            <br />
                            <h5>
                                Welcome to our professional, artistic and
                                technical world!
                            </h5>
                            <br />
                            <h5>EXPLORE PORTFOLIO</h5>
                        </Col>
                        <Col md={6} className="banner-image">
                            <img
                                className="h-75"
                                src="https://creavast.com/wp-content/uploads/2021/01/hxZtEnhSdf-1.png"
                                alt="Banner"
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ColorSchemesExample;
