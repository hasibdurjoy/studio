import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="d-flex align-items-center justify-content-center">
              About Us
            </h2>
            <p>
              Techland Solution is your comprehensive technology solutions
              provider. We excel in Web development, Desktop applications, iOS
              and Android app development, and a wide array of IT-related
              services. Our mission is to empower businesses with innovative and
              customized digital solutions to achieve their goals.
            </p>
            <p>
              Our clients represent a wide spectrum, from startups to large
              enterprises, spanning diverse industries. We serve businesses
              seeking expertise in Web, Desktop, iOS, Android, and IT-related
              work. Our customized solutions are designed to meet the digital
              requirements of clients across various sectors at our website
            </p>
            <p>
              We provide a diverse array of digital services, encompassing Web
              development, Desktop applications, iOS and Android app
              development, and various IT-related solutions. Our goal is to
              equip our clients with the latest technology and customized
              digital solutions to help them achieve their specific objectives
              at techland solution
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
