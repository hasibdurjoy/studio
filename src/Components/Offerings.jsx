import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const Offerings = () => {
  return (
    <div style={{ backgroundColor: "#F6F6F6", padding: "20px 0" }}>
      <Container>
        <h2 className="text-center py-5 fs-1">Our Key Digital Offerings</h2>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.mirumindia.com/hubfs/digital-advertising.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    height: "50px",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  digital-advertising DIGITAL ADVERTISING & COMMUNICATION
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.mirumindia.com/hubfs/iStock-502462262.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    height: "50px",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  MARTECH
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.mirumindia.com/hubfs/iStock-1295918822.jpg"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    height: "50px",
                    fontWeight: 800,
                    textAlign: "center",
                  }}
                >
                  HEALTHCARE MARKETING
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offerings;
