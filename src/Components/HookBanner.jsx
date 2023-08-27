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
            "url('https://media.sirusgaming.com/wp-content/uploads/2022/04/The-Spirit-and-Mouse-Switch-Announcement-02-1421x798.jpg')", // Replace with the actual path to your image
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
          <h6>Introducing Treasure Hunt Reward</h6>
        </div>
        <div>
          <h1
            className="text-center text-dark"
            style={{ fontSize: "128px", fontWeight: 800 }}
          >
            {text} <br />
            NFTs
          </h1>
        </div>
        <Button className="bg-dark rounded-pill py-3 px-5 border-0">
          Get Started
        </Button>
        <p>Powered by Hook, the NFT-Native Options Protocol.</p>
      </Container>
    </div>
  );
};

export default HookBanner;
