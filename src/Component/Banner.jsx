import React from "react";
import { Container } from "react-bootstrap";
import "./homepage.style.css";

const Banner = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
        color: "black",
      }}
    >
      <Container>
        <div className="d-flex align-items-center justify-content-between pt-4">
          <h2>SOFTIC STUDIO</h2>
          <h4>Menu</h4>
        </div>
        <div
          className="d-flex align-items-center justify-content-between mx-5 gap-4"
          style={{ paddingTop: "10%" }}
        >
          <div>
            <h1 className="banner-text fw-bold">
              Complex Challenges <br />
              Demand Bold Solutions
            </h1>
            <div className="d-flex align-items-start gap-2">
              <div
                style={{
                  width: "100px",
                  height: "2px",
                  display: "block",
                  backgroundColor: "#cc147f",
                  marginTop: "30px",
                }}
              ></div>
              <div className="fs-2">
                We create stunning Web, Mobile,Custom solutions that will make
                your business stand out.
              </div>
            </div>
          </div>
          <div>
            <ul>
              <li className="pb-3">
                <span>ABOUT</span> <br /> <span>who we are</span>
              </li>
              <li className="pb-3">
                <span>SERVICE</span> <br /> <span>what we do</span>
              </li>
              <li className="pb-3">
                <span>CONTACT</span> <br /> <span>get in touch</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
