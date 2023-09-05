import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", padding: "40px 0" }}
    >
      <Container>
        <div>
          <Row>
            <Col md={3}>
              <img
                height="100px"
                src="https://i.ibb.co/ZVmxpN6/logo-transparent.png"
                alt=""
              />
              <p className="mt-4">Create by Circle INC</p>
            </Col>
            <Col md={3}>
              <h2>Useful Links</h2>
              <p>About Us</p>
              <p>Jobs @ Social Value</p>
              <p>Insights</p>
              <p>Media Coverage</p>
            </Col>
            <Col md={3}>
              <h2>Our Services</h2>
              <p>Digital Advertising & Communication</p>
              <p>MarTech Services</p>
              <p>Healthcare Marketing</p>
            </Col>
            <Col md={3}>
              <h2>Quick Links</h2>
              <p>Social Value Events</p>
              <p>Creative Showcase</p>
              <p>CSR</p>
            </Col>
          </Row>
          <div>
            <p className="text-center mt-4">© 2023 Copyright by Social Value</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
