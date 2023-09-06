import React from "react";
import { Button, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div style={{ height: "70vh" }}>
      <div
        style={{
          position: "sticky",
          top: "66px",
          left: 0,
          width: "50%",
          height: "70vh",
          // zIndex: -1,
        }}
      >
        <video
          src="https://istratsolutions.com/wp-content/uploads/2023/05/SAP-Industry-offering.mp4"
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "70vh" }}
        ></video>
      </div>
      <div
        style={{
          position: "sticky",
          marginTop: "-70vh",
          left: "50%",
          width: "50%",
          height: "70vh",
          // zIndex: -1,
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "red",
            width: "100%",
            display: "flex",
            // alignItems: "center",
            color: "white",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "60px",
            gap: "10px",
          }}
        >
          <h1>
            Digital Crazy <br />
            Social Sassy
            <br />
            Tech Savvy
          </h1>
          <h2>That’s who we are.</h2>
          <Button
            style={{
              width: "150px",
              backgroundColor: "white",
              color: "black",
              border: "none",
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
