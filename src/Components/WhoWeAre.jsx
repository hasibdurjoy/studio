import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";

const SocialMediaLinks = () => {
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} className="text-center">
                    <h2>
                        <strong>WHO WE ARE</strong>
                    </h2>
                    <h4>
                        <strong>
                            Creavast…
                            <span className="text-danger">
                                your creative
                            </span>{" "}
                            partner who understands your culture.
                        </strong>
                    </h4>
                    <br />
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col md={4} xs="auto" className="">
                    <img
                        height="300px"
                        src="https://creavast.com/wp-content/uploads/2021/04/1-31.jpg"
                        alt=""
                    />
                </Col>
                <Col md={4} xs="auto" className="">
                    <img
                        height="300px"
                        src="https://creavast.com/wp-content/uploads/2021/04/2-21.jpg"
                        alt=""
                    />
                </Col>
                <Col md={4} xs="auto" className="">
                    <img
                        height="300px"
                        src="https://creavast.com/wp-content/uploads/2021/04/3-18.jpg"
                        alt=""
                    />
                </Col>
            </Row>
            <div className="d-flex align-items-center justify-content-center mt-5 fs-2 ">
                <BsFacebook className="text-warning mx-2"></BsFacebook>
                <FaInstagramSquare className="text-warning mx-2"></FaInstagramSquare>
                <BsLinkedin className="text-warning mx-2"></BsLinkedin>
                <SiTwitter className="text-warning mx-2"></SiTwitter>
            </div>
            <br />
            <br />
        </Container>
    );
};

export default SocialMediaLinks;
