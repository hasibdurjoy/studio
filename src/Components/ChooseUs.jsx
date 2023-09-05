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
        <h2 className="text-center">Promote your business with Social Value</h2>
        <ul>
          <li>Best team of experts</li>
          <p>
            Our dynamic team of experts with proven skills having more than 10
            years of experience design bespoke solutions that best suit your
            business needs, market, and your industry.
          </p>
        </ul>
        <ul>
          <li>Ubiquitous Availability</li>
          <p>
            Our customer support team will always be there to update about the
            work progress and give prompt response whenever you need us.
          </p>
        </ul>
        <ul>
          <li>Customized Services</li>
          <p>
            We fulfill any type of custom request, which helps you drive high
            website traffic or gain more conversions. We never follow a fixed
            protocol! HitsValue is adaptable to the latest trends and
            technologies.
          </p>
        </ul>
        <ul>
          <li>Affordability</li>
          <p>
            We value your money so we have a conservative pricing structure and
            eye for ROI.
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
