import React from "react";
import { Button, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div
      style={{ height: "80vh", display: "flex", alignItems: "center" }}
      className="p-4 bg-primary text-light"
    >
      <Container>
        <div className="d-flex align-items-center gap-4">
          <div
            style={{
              width: "100px",
              height: "2px",
              display: "block",
              backgroundColor: "red",
            }}
          ></div>
          <h6>A Wunderman Thompson Company | WPP Agency</h6>
        </div>
        <h1 style={{ fontSize: "80px", fontWeight: 800 }}>Miru Mark</h1>
        <p>Where Creativity Meets Ingenuity!</p>
        <Button variant="contained" className="bg-light rounded-pill text-dark">
          Lets Connect
        </Button>
      </Container>
    </div>
  );
};

export default Banner;
