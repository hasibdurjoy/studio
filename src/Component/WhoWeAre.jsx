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
        "As soon as you enter our premises, we initiate a discussion to precisely outline your goals. We utilize various tools to quickly grasp the core of your desired outcomes. Within minutes, you gain a better understanding of your current position and future objectives.",
    },
    {
      id: 3,
      name: "Design",
      description:
        "After establishing a precise vision of your desires, we proceed by crafting a minimum viable product (MVP), meticulously designing the journey from conceptualization to the end-user's device.",
    },
    {
      id: 2,
      name: "Build",
      description:
        "By actively collaborating with you, we cultivate an experience that will captivate and delight your users. Drawing upon our decade of expertise in design thinking, we endeavor to craft a distinctive, highly efficient, and standout world-class product.",
    },
    {
      id: 4,
      name: "Launch",
      description:
        "Certainly, we also appreciate a delightful lunch party! We kick off and closely monitor how your users interact with the app, making continuous adjustments along the journey to ensure optimal performance.",
    },
  ];
  return (
    <Container style={{ padding: "100px 40px" }}>
      <p style={{ color: "#22abe3" }}>/Who we are</p>
      <h1 style={{ fontSize: "48px", padding: "15px 0px" }}>
        "An agile development studio, we are. We deliver technology solutions to
        ambitious companies, addressing their challenges."
      </h1>
      <p style={{ fontSize: "24px", padding: "15px 0px", color: "#555555" }}>
        "We create clean and intuitive applications for Web, Desktop, iOS &
        Android Platforms with the same principles, whether you are a small
        company or an established one."
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
