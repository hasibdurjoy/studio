import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Star from "./Star";

const Solutions = () => {
  return (
    <div className="mt-5">
      <Container>
        <div className="d-flex align-items-center gap-4">
          <h4 className="text-success">Focused On Productivity & Growth</h4>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "2px",
              backgroundColor: "green",
            }}
          ></div>
        </div>
        <h1>Our Solutions</h1>
        <Row className="mt-5">
          <Col md={6}>
            <div className="d-flex flex-column gap-4">
              <p>
                Innovative and strategic solutions is our focus. Our alignment
                with best-in-Class solution providers such as SAP facilitates
                seamless integration of all your business function in a single
                Enterprise Resource Planning (ERP) application.{" "}
              </p>
              <p>
                This is complemented by our internally developed web and
                analytics solutions. Our web solutions provide a general as well
                as an integrated industry focus for businesses.
              </p>
              <p>
                Our Analytics function again, is tightly integrated with the ERP
                and web solution offerings and is focused on dashboard and
                scorecard solutions to add value to your organization.
              </p>
              <p>
                For your technical needs we provide in-depth technical cloud
                based and on-premise expertise to assist you in the management
                of your SAP and cloud infrastructures.
              </p>
              <div className="d-flex justify-content-end">
                <Button>Learn More</Button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <img
              src="https://istratsolutions.com/wp-content/uploads/2023/01/Solutions-6-768x781.png"
              alt=""
              width="100%"
              height="80%"
            />
          </Col>
        </Row>
        <Star />
      </Container>
    </div>
  );
};

export default Solutions;
