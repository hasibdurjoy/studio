import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

const HookBanner = () => {
  const [text, setText] = useState("Earn With");

  useEffect(() => {
    setTimeout(() => {
      if (text === "Earn With") {
        setText("Speculate on");
      } else {
        setText("Earn With");
      }
    }, 2500);
  }, [text]);

  return (
    <div
      style={{ height: "100vh", padding: "30px 0px", backgroundColor: "white" }}
    >
      <Container
        style={{
          height: "100%",
          borderRadius: "10px",
          backgroundImage:
            "url('https://risingmax.com/assets/img/new-images/banner-bg.webp')", // Replace with the actual path to your image
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          color: "white",
          flexDirection: "column",
          paddingTop: "100px",
        }}
      >
        <div
          style={{
            border: "2px solid white",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "5px 20px",
          }}
        >
          <h6 className="bg-dark rounded-5 p-2">NEW</h6>
          <h6>IT Consulting Company NYC</h6>
        </div>
        <div>
          <p className="text-center text-light">
            {text} <br />
            Hook Tech Inc., Top IT Consulting Firm NYC - USA, is a digital
            transformation catalyst for startups and FORTUNE-500 companies.
            Leverage our IT consulting services with advanced technologies and
            smart solutions to streamline business operations, solve current
            challenges & explore new opportunities.
          </p>
        </div>
        <Button className="bg-dark rounded-pill py-3 px-5 border-0">
          Get Started
        </Button>
        <p>Powered by Hook Tech</p>
      </Container>
    </div>
  );
};

export default HookBanner;
