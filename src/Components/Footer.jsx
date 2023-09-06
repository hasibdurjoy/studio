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
                src="https://i.ibb.co/qy3YJwN/Untitled-design-9.png"
                alt=""
              />
              <p className="mt-4">Content By Circle INC</p>
              <p>
                Address: House 435, Road 18, Dhanmondi City/Town Dhaka
                State/Province/Region Dhaka Zip/Postal Code 1209
              </p>
              <p>Contact: +44 7453162695, +880 1987850999</p>
            </Col>
            <Col md={3}>
              <h2>Useful Links</h2>
              <p>About Us</p>
              <p>Jobs @ I Genious</p>
              <p>Insights</p>
              <p>Media Coverage</p>
            </Col>
            <Col md={3}>
              <h2>Our Services</h2>
              <p>Strategize</p>
              <p>Innovate</p>
              <p>Integrate</p>
              <p>Optimizeg</p>
            </Col>
            <Col md={3}>
              <h2>Quick Links</h2>
              <p>I Genious Events</p>
              <p>Creative Showcase</p>
              <p>CSR</p>
            </Col>
          </Row>
          <div>
            <p className="text-center mt-4">© 2020 Copyright By I Genious</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
