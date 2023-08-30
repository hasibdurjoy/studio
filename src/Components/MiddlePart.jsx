import React from "react";
import { Card, Container } from "react-bootstrap";

const MiddlePart = () => {
  const fakeData = [
    {
      id: 1,
      title: "The Time Is Now",
      description: `
        We celebrate the project's success by planting 100+ trees each time. By rewarding or compensating the planting cost, we encourage our clients to plant at least 50 trees. Let's pledge to foster growth and progress by minimizing environmental loss. We develop an IT ecosystem that consumes less energy and empowering businesses worldwide to achieve Net-Zero carbon emissions. The Time Is Now to make a sustainable future and combat climate change.`,
      image: "https://risingmax.com/assets/img/new-images/risingmax-tree.webp",
    },
    {
      id: 2,
      title: "Our Top Clients From All Over The World ",
      description:
        "We bring a wealth of knowledge and hands-on experience to cater to our client's information technology (IT) requirements and needs. Our IT team crafts business solutions to tackle today’s market challenges and capture growth opportunities. ",
      image: "https://hook-protocol.com/bottle-1.png",
    },
    {
      id: 3,
      title: "NYCs Top IT Consultants: Making Technology Work For You",
      description:
        "Use call options to speculate on NFTs with less capital, capped downside and no liquidations.",
      image:
        "https://risingmax.com/assets/img/new-images/new-york-mobile-app-development.webp",
    },
  ];
  return (
    <Container className="py-5">
      {fakeData.map((sd, index) => (
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
            <div style={{ display: index === 1 ? "block" : "none" }}>
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-nbc-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-universal-logo.webp"
                alt=""
              />
              <img
                src=" https://risingmax.com/assets/img/new-images/mobile-app-development-bmw-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-valley-bank.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-dominos-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-deloitte-logo-new.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-philips-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-nestle-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-verizon-logo-new.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-l&t-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-toyota-logo.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-expedia-logo-new.webp"
                alt=""
              />
              <img
                src="https://risingmax.com/assets/img/new-images/mobile-app-development-pfizer-logo.webp"
                alt=""
              />
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default MiddlePart;
