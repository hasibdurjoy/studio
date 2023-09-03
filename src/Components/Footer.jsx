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
                src="https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"
                alt=""
              />
              <p className="mt-4">Content</p>
            </Col>
            <Col md={3}>
              <h2>Section -1</h2>
              <p>Links</p>
              <p>Links</p>
              <p>Links</p>
              <p>Links</p>
            </Col>
            <Col md={3}>
              <h2>Section - 2</h2>
              <p>Links</p>
              <p>Links</p>
              <p>Links</p>
              <p>Links</p>
            </Col>
            <Col md={3}>
              <h2>Section - 3</h2>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
              <p>Link</p>
            </Col>
          </Row>
          <div>
            <p className="text-center mt-4">© 2023 Copyright</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
