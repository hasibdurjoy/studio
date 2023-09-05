import React from "react";
import { Container } from "react-bootstrap";
import Star from "./Star";

const Introduction = () => {
  return (
    <div className="mt-5">
      <Container>
        <Star />
        <div className="d-flex align-items-center gap-4">
          <h4 className="text-success ms-5">Who We are</h4>
          <div
            style={{
              display: "block",
              width: "100px",
              height: "2px",
              backgroundColor: "green",
            }}
          ></div>
        </div>
        <h1 className="ms-5">Introduction</h1>
        <video
          src="https://istratsolutions.com/wp-content/uploads/2023/01/2023_into-slider.mp4"
          controls
          muted
          height="600px"
          width="100%"
        />
        <Star />
      </Container>
    </div>
  );
};

export default Introduction;
