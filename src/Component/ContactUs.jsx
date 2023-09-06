import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import {
//   AiFillFacebook,
//   AiOutlineTwitter,
//   AiOutlineInstagram,
// } from "react-icons/ai";
const ContactUs = () => {
  const fakeData = [
    {
      id: 1,
      name: "Brand Identity",
      icon: "<PiTelevisionSimpleBold />",
    },
    {
      id: 2,
      name: "Data Analytics",
      icon: "<PiTelevisionSimpleBold />",
    },
    {
      id: 3,
      name: "Web Design",
      icon: "<PiTelevisionSimpleBold />",
    },
    {
      id: 4,
      name: "Product Strategy",
      icon: "<PiTelevisionSimpleBold />",
    },
    {
      id: 5,
      name: "Cloud Services",
      icon: "<PiTelevisionSimpleBold />",
    },
    {
      id: 6,
      name: "Mobile Apps Development",
    },
  ];
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        <div>
          <Row>
            <Col md={3}>
              <img
                height="100px"
                // src="https://i.ibb.co/qy3YJwN/Untitled-design-9.png"
                alt=""
              />
              <p className="mt-4">Content By Circle INC</p>
              <p>
                Address : House 235, Road 18, Dhanmondi City/Town Dhaka
                State/Province/Region Dhaka Zip/Postal Code 1209
              </p>
              <p>Contact: +44 7453162635</p>
            </Col>
            <Col md={3}>
              <h2>Useful Links</h2>
              <p>About Us</p>
              <p>Jobs @ Techland Solution</p>
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
              <p>Techland Solution Events</p>
              <p>Creative Showcase</p>
              <p>CSR</p>
            </Col>
          </Row>
          <div>
            <p className="text-center mt-4">
              © 2021 Copyright By Techland Solution
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
