import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PiTelevisionSimpleBold } from "react-icons/pi";

const WhatWeDo = () => {
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
    <div style={{ backgroundColor: "#F1F1F1" }}>
      <Container style={{ padding: "100px 40px" }}>
        <p style={{ color: "#cc147f" }}>/What We Do</p>
        <h1 style={{ fontSize: "48px", padding: "15px 0px" }}>
          We have everything you need to launch and grow a successful digital
          business.
        </h1>
        <p style={{ fontSize: "24px", padding: "15px 0px" }}>
          Whether you are a small company or an established one we create clean
          and intuitive applications for Web,Desktop,iOS & Android Platforms
          with the same principles.
        </p>
        <Row>
          {fakeData.map((s) => (
            <Col sm={12} md={6}>
              <Card className="border-0 h-100 bg-transparent">
                <Card.Body>
                  <div className="fs-1" style={{ color: "#26BFB5" }}>
                    <PiTelevisionSimpleBold />
                  </div>
                  <h4 className="mb-0 ">{s.name}</h4>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default WhatWeDo;
