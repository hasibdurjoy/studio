import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const HookFeatures = () => {
  const fakeData = [
    {
      id: 1,
      title: "IT Consultation & Planning",
      description:
        "Our dedicated IT consultants formulate, plan and execute strategies to meet your business information technology (IT) needs and ensure success.",
      image: "https://hook-protocol.com/icon-03.svg",
      logo: "https://risingmax.com/assets/img/new-images/it-strategy-consulting-services.svg",
    },
    {
      id: 2,
      title: " IT Assessment ",
      description:
        "Our IT consultation team reviews the existing IT infrastructure, identifies areas of improvement, and provides a written evaluation report.",
      image: "https://hook-protocol.com/icon-01.svg",
      logo: "https://risingmax.com/assets/img/new-images/it-assessment-service.svg",
    },
    {
      id: 3,
      title: "Technology Consultation",
      description:
        "After analyzing business IT infrastructure, we suggest adapting new technologies and softwares to improve business productivity and profitability.",
      image: "https://hook-protocol.com/icon-05.svg",
      logo: "https://risingmax.com/assets/img/new-images/technology-consultation-service.svg",
    },
    {
      id: 4,
      title: "Data Migration Services",
      description:
        "Our team carefully analyzes the business IT environment to identify data migration opportunities for increasing efficiency and reducing cost.",
      image: "https://hook-protocol.com/icon-17.svg",
      logo: "https://risingmax.com/assets/img/new-images/data-migration-service.svg",
    },
    {
      id: 5,
      title: "IT Security Consulting",
      description:
        "Our IT team assesses the security infrastructure to find loopholes and recommend security solutions to safeguard against malicious threats.",
      image: "https://hook-protocol.com/icon-15.svg",
      logo: "https://risingmax.com/assets/img/new-images/it-security-consulting-service.svg",
    },
    {
      id: 6,
      title: "IT Business Consultation",
      description:
        "Businesses can leverage our IT consultation services to identify areas of technology implementation and improve business efficiency.",
      image: "https://hook-protocol.com/icon-10.svg",
      logo: "https://risingmax.com/assets/img/new-images/it-business-consultation-service.svg",
    },
  ];
  return (
    <Container className="py-5">
      <h1
        style={{
          fontSize: "70px",
          color: "#e16900",
          textAlign: "center",
          fontWeight: 600,
          margin: "20px 0px",
        }}
      >
        Features
      </h1>
      <Row>
        {fakeData.map((sd) => (
          <Col md={4}>
            <Card
              className="shadow-lg my-5 rounded-5 border-0"
              style={{
                backgroundColor: "#fff2e0",
                boxShadow: "0 6px 13px 0 rgba(120, 56, 0, .3) ",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "350px",
              }}
            >
              <Card.Body>
                <img src={sd.image} alt="" height="200px" />
                <div
                  style={{
                    color: "rgba(100, 83, 67, 0.4)",
                    fontSize: "18px",
                    lineHeight: "1.15",
                    fontWeight: 500,
                    textAlign: "center",
                    letterSpacing: 0,
                    padding: "0px 40px",
                  }}
                >
                  {sd.title}
                </div>
                <img src={sd.logo} alt="" />
                <div>{sd.description}</div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HookFeatures;
