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
                src="https://i.ibb.co/9vzpFg0/Untitled-design-11.png"
                alt=""
              />
              <p className="mt-4">Content</p>
              <p>
                ddress : House 92, Road 11, Dhanmondi City/Town Dhaka
                State/Province/Region Dhaka Zip/Postal Code 1209 Phone : +44
                7453162995
              </p>
            </Col>
            <Col md={3}>
              <h2>Useful Links</h2>
              <p>About Us</p>
              <p>Jobs @ AdsStriking</p>
              <p>Insights</p>
              <p>Media Coverage</p>
            </Col>
            <Col md={3}>
              <h2>Our Services</h2>
              <p>Digital Advertising & Communication</p>
              <p>AdsStriking Services</p>
              <p>Healthcare Marketing</p>
            </Col>
            <Col md={3}>
              <h2>Quick Links</h2>
              <p>AdsStriking Events</p>
              <p>Creative Showcase</p>
              <p>CSR</p>
            </Col>
          </Row>
          <div>
            <p className="text-center mt-4">© 2021 Copyright By AdsStrikinge</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
