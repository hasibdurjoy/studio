import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Hook = () => {
  return (
    <div style={{ padding: "40px auto", paddingBottom: "50px" }}>
      <Container
        style={{
          height: "60vh",
          backgroundColor: "#e16900",
          borderRadius: "20px",
          padding: "40px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://hook-protocol.com/hook-logo-svg.svg"
          alt=""
          height="80px"
        />
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center gap-3">
            <AiOutlineTwitter className="fs-3" style={{ color: "#F6D08D" }} />
            <BsDiscord className="fs-3" style={{ color: "#F6D08D" }} />
            <div
              style={{
                display: "block",
                height: "60px",
                width: "2px",
                color: "#F6D08D",
              }}
            ></div>
            <Button
              style={{ border: "2px solid #F6D08D", color: "#F6D08D" }}
              className="bg-transparent rounded-pill px-4 py-2"
            >
              Docs
            </Button>
            <Button
              style={{ border: "2px solid #F6D08D", color: "#F6D08D" }}
              className="bg-transparent rounded-pill px-4 py-2"
            >
              Blog
            </Button>
          </div>
          <div>
            <p style={{ color: "#F6D08D" }}>© 2023 Abstract Labs, Inc.</p>
          </div>
        </div>
        <Container>
          <div>
            <Row>
              <Col md={3}>
                <img
                  height="100px"
                  src="https://i.ibb.co/gwNyczJ/logo-transparent.png"
                  alt=""
                />
                <p>(Erstwhile Social Wavelength)</p>
              </Col>
              <Col md={3}>
                <h2>Useful Links</h2>
                <p>About Us</p>
                <p>Jobs @ Hook Media</p>
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
                <p>Hook Media Events</p>
                <p>Creative Showcase</p>
                <p>CSR</p>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={4}>
                <p>© 2023 Hook Media India, a WPP Company</p>
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
      </Container>
    </div>
  );
};

export default Hook;
