import React from "react";
import { Card, Container } from "react-bootstrap";

const MiddlePart = () => {
  const fakeData = [
    {
      id: 1,
      title: "Earn ETH with your idle NFTs",
      description:
        "Hook’s options let you instantly earn ETH by agreeing to list your NFTs above the floor.",
      image: "https://hook-protocol.com/render-coins-001.png",
    },
    {
      id: 2,
      title: "Rewards from the Treasure Hunt.",
      description:
        "You’ll be eligible to claim [redacted] from the chests you discover during the Treasure Hunt.",
      image: "https://hook-protocol.com/bottle-1.png",
    },
    {
      id: 3,
      title: "Speculate for a fraction of floor.",
      description:
        "Use call options to speculate on NFTs with less capital, capped downside and no liquidations.",
      image: "https://hook-protocol.com/render-top-001.png",
    },
  ];
  return (
    <Container className="py-5">
      {fakeData.map((sd) => (
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
          }}
        >
          <Card.Body>
            <img src={sd.image} alt="" height="300px" />
            <div
              style={{
                height: "100%",
                borderRadius: "10px",
                paddingRight: "5px",
                paddingBottom: "10px",
                paddingLeft: "5px",
                backgroundImage: "linear-gradient(140deg, #e16900, #370d00)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "100px",
                fontWeight: 600,
                padding: "0px 40px",
              }}
            >
              {sd.title}
            </div>
            <p
              style={{
                color: "rgba(100, 83, 67, 0.4)",
                fontSize: "26px",
                lineHeight: "1.15",
                fontWeight: 500,
                textAlign: "center",
                letterSpacing: 0,
                padding: "0px 40px",
              }}
            >
              {sd.description}
            </p>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default MiddlePart;
