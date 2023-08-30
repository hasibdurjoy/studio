import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <div style={{ backgroundColor: "#F6F6F6", padding: "40px 0" }}>
      <Container>
        <Row>
          <Col md={6}>
            <img
              src="https://www.mirumindia.com/hubfs/why_mirum.png"
              alt=""
              style={{ height: "90%", width: "100%" }}
            />
          </Col>
          <Col>
            <h1 className="pb-2">
              Why Choose Mirumark as Your Digital Marketing Services Agency?
            </h1>
            <p className="pb-2">
              Mirumark India, part of the WPP group, is a leading Digital Marketing
              Agency with a pan-India and global footprint. We are a team of
              300+ professionals with a bouquet of services including digital
              media marketing strategy and creative, tech builds, as well as
              end-to-end marketing automation solutions.
            </p>
            <p className="pb-2">
              Mirumark is a Salesforce Crest Consulting Partner, with over a decade
              of association with Salesforce and 100+ Marketing Automation
              installations across the entire stack of Social Studio, Exact
              Target, and now Datorama, interaction studio, and Customer Data
              Platform (CDP). Mirumark has won several awards including the “IMC
              Digital Technology Award 2019” instituted by the prestigious
              Indian Merchants Chamber.
            </p>
            <p className="pb-2">
              With over a hundred customers served and a stellar team of
              certified professionals, we are the Digital Marketing Agency that
              can help you achieve your Marketing ambitions.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="pb-2">
              Achieving Business Growth Through Digital Marketing Services
            </h1>
            <p className="pb-2">
              Digital marketing services give businesses an unparalleled way to
              track customers as they move through the customer journey, use a
              variety of media, establish thought leadership online, and connect
              with new potential customers all over the globe.
            </p>
            <p className="pb-2">
              Digital marketing services also allow you to make the most of some
              of the most potent marketing tactics simultaneously; you get to
              employ a mixture of content marketing, email marketing, social
              media, and online advertising, together!
            </p>
          </Col>
          <Col md={6}>
            <img
              src="https://www.mirumindia.com/hubfs/achieve.png"
              alt=""
              style={{ height: "80%", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyChooseUs;
