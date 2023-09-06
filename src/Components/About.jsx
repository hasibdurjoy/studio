import React from "react";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Row className="mx-1">
        <Col md={6}>
          <div
            style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
          >
            <div
              style={{
                height: "2px",
                width: "100px",
                display: "block",
                backgroundColor: "red",
                marginTop: "28px",
              }}
            ></div>
            <div
              style={{
                width: "90%",
                paddingRight: "80px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h2>About Us</h2>
              <p>
                Rooted in the rich legacy of 25+ years and aiming at the future
                – we provide creative & digital communication solutions. We
                cover 360° marketing and branding, with integrated advertising
                solutions. We function collectively from 10 branches across 8
                major cities around the country. Our objectives are established
                in delivering unique, futuristic digital experiences that
                enhance the essence of brands.
              </p>
              <p>Chalo India World is our latest intellectual property.</p>
              <img
                src="https://mlxc1vwi9aaj.i.optimole.com/cb:_9cy.1d4aa/w:300/h:50/q:mauto/f:avif/https://adsyndicate.in/wp-content/uploads/2022/10/CHALOLOGO.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
            alt=""
            width="100%"
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
