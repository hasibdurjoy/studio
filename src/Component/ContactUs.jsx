import React from "react";
import { Container } from "react-bootstrap";
import {
    AiFillFacebook,
    AiOutlineTwitter,
    AiOutlineInstagram,
} from "react-icons/ai";
const ContactUs = () => {
    const fakeData = [
        {
            id: 1,
            name: "Brand Identity",
            icon: "<PiTelevisionSimpleBold />",
        },
        {
            id: 2,
            name: "Data Analytics",
            icon: "<PiTelevisionSimpleBold />",
        },
        {
            id: 3,
            name: "Web Design",
            icon: "<PiTelevisionSimpleBold />",
        },
        {
            id: 4,
            name: "Product Strategy",
            icon: "<PiTelevisionSimpleBold />",
        },
        {
            id: 5,
            name: "Cloud Services",
            icon: "<PiTelevisionSimpleBold />",
        },
        {
            id: 6,
            name: "Mobile Apps Development",
        },
    ];
    return (
      <div style={{ backgroundColor: "black", color: "white" }}>
        <Container style={{ padding: "100px 40px" }}>
          <p style={{ color: "#cc147f" }}>/CONTACT US</p>
          <h1 style={{ fontSize: "48px", padding: "30px 40px 30px 0px" }}>
            Get in touch and let's build something great together.
          </h1>
          <div
            style={{
              width: "100px",
              height: "2px",
              display: "block",
              backgroundColor: "#cc147f",
              margin: "40px 0px",
            }}
          />
          <a
            href="mailto:hello@250studio.com"
            className="fs-1 py-5 text-decoration-none text-light"
          >
            info@softicstudio.com
          </a>
          <h3 className="py-4 text-secondary">+44 7453162634</h3>
          <p style={{ color: "#cc147f" }}>/FOLLOW US</p>
          <div style={{ marginTop: "20px" }}>
            <AiFillFacebook className="me-4 fs-3 text-primary" />
            <AiOutlineTwitter className="me-4 fs-3 text-primary" />
            <AiOutlineInstagram className="me-4 fs-3 text-danger" />
          </div>
          <p className="py-5 text-secondary">
            Copyright ©2023 All rights reserved | SOFTIC STUDIO | template made
            by <span className="text-light">Circle Inc</span>
          </p>
        </Container>
      </div>
    );
};

export default ContactUs;
