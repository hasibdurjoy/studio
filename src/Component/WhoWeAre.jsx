import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhoWeAre = () => {
  const fakeData = [
    {
      id: 1,
      name: "Define",
      description:
        "From the moment you walk through our doors, we begin with a sit-down and define what exactly you want to be accomplished we deploy an array of tools to cut to the heart of your desired output, in minutes you have a clearer picture of where you are and where you want to go.",
    },
    {
      id: 2,
      name: "Design",
      description:
        "Once a clear picture of what you want is defined we move ahead with a minimum viable product designing the flow from idea to the users device.",
    },
    {
      id: 3,
      name: "Build",
      description:
        "Working actively with you we build an experience your users will love. Deploying our 10 years of design thinking to create a world-class product that is unique, efficient and stands out.",
    },
    {
      id: 4,
      name: "Launch",
      description:
        "Yes, we also love a good Lunch party!, we lunch off and monitor how your users use the app tweaking it along the way for optimum performance.",
    },
  ];
  return (
    <Container style={{ padding: "100px 40px" }}>
      <p style={{ color: "#cc147f" }}>/Who we are</p>
      <h1 style={{ fontSize: "48px", padding: "15px 0px" }}>
        We are an agile development studio.We deliver technology solutions to
        ambitious companies to address their challenges.
      </h1>
      <p style={{ fontSize: "24px", padding: "15px 0px", color: "#555555" }}>
        Whether you are a small company or an established one we create clean
        and intuitive applications for Web,Desktop,iOS & Android Platforms with
        the same principles.
      </p>
      <Row>
        {fakeData.map((s) => (
          <Col sm={12} md={6}>
            <Card className="border-0 h-100">
              <Card.Body>
                <div className="d-flex align-items-center bg-transparent border-0">
                  <div
                    className=" rounded-circle text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#26bfb5",
                    }}
                  >
                    {s.id}
                  </div>
                  <h4 className="mb-0 ms-2">{s.name}</h4>
                </div>
                <div className="d-flex mt-2 " style={{ height: "100%" }}>
                  <div
                    style={{
                      width: "2px",
                      height: "100%",
                      display: "block",
                      backgroundColor: "#cc147f",
                      marginLeft: "20px",
                    }}
                  />
                  <div className="ms-4" style={{ color: "#555555" }}>
                    {s.description}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhoWeAre;
