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
          <img
            style={{ height: "30px" }}
            src="https://i.ibb.co/PMLmc6C/TS.png"
            alt=""
          />
          <div className="d-flex align-items-center gap-4">
            <a
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              href="/about-us"
            >
              <h6>About US</h6>
            </a>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href="#contact-us"
            >
              <h6>Contact Us</h6>{" "}
            </a>
          </div>
        </div>
        <div
          className="d-flex align-items-center justify-content-between mx-5 gap-4"
          style={{ paddingTop: "10%" }}
        >
          <div>
            <h1 className="banner-text fw-bold">
              Fastest Way To <br />
              Achieve Success.
            </h1>
            <div className="d-flex align-items-start gap-2">
              <div
                style={{
                  width: "100px",
                  height: "2px",
                  display: "block",
                  backgroundColor: "#22abe3",
                  marginTop: "30px",
                }}
              ></div>
              <div className="fs-2">
                We’re committed to providing customers exceptional service
                offering employees the best training.
              </div>
            </div>
          </div>
          <div>
            {/* <ul>
              <li className="pb-3">
                <span>ABOUT US</span> <br /> <span>Our Every Details</span>
              </li>
              <li className="pb-3">
                <span>SERVICES</span> <br /> <span>what we provide to you</span>
              </li>
              <li className="pb-3">
                <span>CONTACT US</span> <br /> <span>Get in touch with us</span>
              </li>
            </ul> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
