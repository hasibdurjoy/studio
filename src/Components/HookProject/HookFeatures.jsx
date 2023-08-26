import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const HookFeatures = () => {
  const fakeData = [
    {
      id: 1,
      title: "Smart contracts audited & insured by Sherlock for up to $5m",
      image: "https://hook-protocol.com/icon-03.svg",
    },
    {
      id: 2,
      title: "Option price recommendations and trade feed",
      image: "https://hook-protocol.com/icon-01.svg",
    },
    {
      id: 3,
      title: "Flash Loan your NFTs to collect airdrops",
      image: "https://hook-protocol.com/icon-05.svg",
    },
    {
      id: 4,
      title: "API to automate your trading",
      image: "https://hook-protocol.com/icon-17.svg",
    },
    {
      id: 5,
      title: "Off-chain, real-time option marketplace",
      image: "https://hook-protocol.com/icon-15.svg",
    },
    {
      id: 6,
      title: "Collection-wide orders for immediate liquidity",
      image: "https://hook-protocol.com/icon-10.svg",
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
                    fontSize: "26px",
                    lineHeight: "1.15",
                    fontWeight: 500,
                    textAlign: "center",
                    letterSpacing: 0,
                    padding: "0px 40px",
                  }}
                >
                  {sd.title}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HookFeatures;
