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
      id: 2,
      name: "Creative Services",
      details:
        "Long & short-form content, videos, blogs, white papers, and case studies, we have you covered.",
      image: "https://www.mirumindia.com/hubfs/creative-service-no-text-.png",
    },
    {
      id: 3,
      name: "Media buying & planning",
      details:
        "Strategy, influencer, programmatic, and placement of advertisements are all part of media planning.",
      image:
        "https://www.mirumindia.com/hubfs/media-planning-and-buying-no-text.png",
    },
    {
      id: 4,
      name: "Social Listening",
      details:
        "Mirumark has built extensive domain expertise in Social Listening over the last 11 years. Our 24*7 practice.",
      image: "https://www.mirumindia.com/hubfs/social-listening-no-text.png",
    },
    {
      id: 5,
      name: "MarTech & Marketing Automation",
      details:
        "Mirumark is a Salesforce Crest Consulting Partner with 10+ years of experience in providing Marketing Automation services.",
      image:
        "https://www.mirumindia.com/hubfs/marketing-automation-no-text.png",
    },
    {
      id: 6,
      name: "Technology Solutions",
      details:
        "Mirumark understands your brand needs and provides all the technology requirements – websites, mobile applications, chatbots, SEO, and Sitecore – under one roof.",
      image: "https://www.mirumindia.com/hubfs/technology-build-no-text.png",
    },
    {
      id: 7,
      name: "Healthcare marketing",
      details:
        "Mirumark Health – is a specialty brand – that we have created to deliver end-to-end, digital-first, healthcare communication services.",
      image: "https://www.mirumindia.com/hubfs/mirum-health-no-text.png",
    },
  ];
  return (
    <Container className="py-5 d-flex flex-column gap-3">
      <h2 className="fs-1 text-center">Our Digital Marketing Services</h2>
      <p>
        Mirumark India is an award-winning vibrant and dynamic full-service
        Digital Marketing Agency that has been in business for about 12 years.
        To provide our digital marketing partner s with top-notch services, we
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
