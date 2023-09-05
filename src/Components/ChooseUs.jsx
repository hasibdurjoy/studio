import React from "react";
import { Container } from "react-bootstrap";

const ChooseUs = () => {
  return (
    <div
      style={{
        width: "100%", // Set the width to match the container's size
        height: "100%", // Set the height to match the container's size
        backgroundImage:
          "url(https://www.hitsvalue.com/wp-content/uploads/2019/12/content_wave-bg1.png)",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Container style={{ paddingTop: "100px", paddingBottom: "20px" }}>
        <p className="text-center">Why Choose Us</p>
        <h2 className="text-center">Promote your business with HitsValue</h2>
        <ul>
          <li>Best team of experts</li>
          <p>
            Our dynamic team of experts with proven skills having more than 10
            years of experience design bespoke solutions that best suit your
            business needs, market, and your industry.
          </p>
        </ul>
        <ul>
          <li>Best team of experts</li>
          <p>
            Our dynamic team of experts with proven skills having more than 10
            years of experience design bespoke solutions that best suit your
            business needs, market, and your industry.
          </p>
        </ul>
        <ul>
          <li>Best team of experts</li>
          <p>
            Our dynamic team of experts with proven skills having more than 10
            years of experience design bespoke solutions that best suit your
            business needs, market, and your industry.
          </p>
        </ul>
        <ul>
          <li>Best team of experts</li>
          <p>
            Our dynamic team of experts with proven skills having more than 10
            years of experience design bespoke solutions that best suit your
            business needs, market, and your industry.
          </p>
        </ul>
        <div className="d-flex justify-content-center">
          <button className="bg-warning px-4 py-3 rounded border-0 text-light fw-bold">
            Contact Today
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;
