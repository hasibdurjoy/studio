import React from "react";
import { Button, Container } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

const Hook = () => {
  return (
    <div style={{ padding: "40px auto", paddingBottom: "50px" }}>
      <Container
        style={{
          height: "60vh",
          backgroundColor: "#e16900",
          borderRadius: "20px",
          padding: "40px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "space-between",
        }}
      >
        <img
          src="https://hook-protocol.com/hook-logo-svg.svg"
          alt=""
          height="80px"
        />
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center gap-3">
            <AiOutlineTwitter className="fs-3" style={{ color: "#F6D08D" }} />
            <BsDiscord className="fs-3" style={{ color: "#F6D08D" }} />
            <div
              style={{
                display: "block",
                height: "60px",
                width: "2px",
                color: "#F6D08D",
              }}
            ></div>
            <Button
              style={{ border: "2px solid #F6D08D", color: "#F6D08D" }}
              className="bg-transparent rounded-pill px-4 py-2"
            >
              Docs
            </Button>
            <Button
              style={{ border: "2px solid #F6D08D", color: "#F6D08D" }}
              className="bg-transparent rounded-pill px-4 py-2"
            >
              Blog
            </Button>
          </div>
          <div>
            <p style={{ color: "#F6D08D" }}>© 2023 Abstract Labs, Inc.</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hook;
