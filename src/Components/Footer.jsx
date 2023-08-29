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
                src="https://www.mirumindia.com/hs-fs/hubfs/raw_assets/public/Mirum_June2022/images/mirum_logo_white-1.png?width=207&name=mirum_logo_white-1.png"
                alt=""
              />
              <p>(Erstwhile Social Wavelength)</p>
            </Col>
            <Col md={3}>
              <h2>Useful Links</h2>
              <p>About Us</p>
              <p>Jobs @ Mirum</p>
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
              <p>Mirum Events</p>
              <p>Creative Showcase</p>
              <p>CSR</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md={4}>
              <p>© 2021 Mirum India, a WPP Company</p>
            </Col>
            <Col md={4}>
              <p>Privacy Policy</p>
            </Col>
            <Col md={4}>
              <p>Follow us</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
