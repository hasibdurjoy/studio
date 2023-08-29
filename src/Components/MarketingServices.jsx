import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const MarketingServices = () => {
  const fakeData = [
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
    {
      id: 1,
      name: "Brand Strategy",
      details:
        "We firmly believe in our ‘digital first’ credence; we are not an ‘only digital’ agency.",
      image:
        "https://www.mirumindia.com/hubfs/communication-brand-start-no-text.png",
    },
  ];
  return (
    <Container className="py-5 d-flex flex-column gap-3">
      <h2 className="fs-1 text-center">Our Digital Marketing Services</h2>
      <p>
        Mirum India is an award-winning vibrant and dynamic full-service Digital
        Marketing Agency that has been in business for about 12 years. To
        provide our digital marketing partners with top-notch services, we
        continue to enhance our processes and invest in cutting-edge tools and
        resources as we expand.
      </p>
      <Row xs={1} md={4} className="g-4">
        {fakeData.map((sd) => (
          <Col>
            <Card className="border-0">
              <div className="d-flex justify-content-center">
                <Card.Img
                  variant="top"
                  src={sd.image}
                  style={{ height: "60px", width: "20%" }}
                />
              </div>
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {sd.name}
                </Card.Title>
                <p className="text-center">{sd.details}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MarketingServices;
