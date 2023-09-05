import React from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  
  return (
    <div style={{ height: "90vh" }}>
      <div style={{ height: "100%" }}>
        <video
          src="https://istratsolutions.com/wp-content/uploads/2023/05/SAP-Industry-offering.mp4"
          controls
          autoPlay
          muted
          width="100%"
          height="100%"
        ></video>
      </div>
    </div>
  );
};

export default Banner;
