import React from "react";
import { Container } from "react-bootstrap";

const Agency = () => {
  return (
    <Container className="py-5 d-flex flex-column gap-4">
      <h4 style={{ fontWeight: 800 }}>Digital Marketing Agency</h4>
      <h5 style={{ fontWeight: 800, marginTop: "10px" }}>
        Welcome to India’s leading digital solutions agency. We create digital
        experiences which people love, and businesses need!
      </h5>
      <p>
        We are a team of 300+ digital experts, storytellers, technologists,
        creators, and curious minds, providing services in the areas of digital
        communication, advertising, and technology. We have a specialized
        Healthcare vertical catering to the pharma and wellness industry. We
        also have expertise in marketing automation, and e-commerce, with
        clients across India and around the globe.
      </p>
      <p>
        Our Digital Marketing Agency specializes in knowing the latest marketing
        trends and employs a wide variety of different tactics, strategies, and
        online tools to help your business attain its marketing and sales goals.
        Mirumark Digital Marketing Services can be effective in any sector,
        regardless of the products or services your business offers. We help you
        focus on audiences with a global reach and allow your brand to target a
        more niche audience.
      </p>
      <div className="d-flex justify-content-center">
        {/* <iframe
          width="800"
          height="415"
          // src="https://www.youtube.com/embed/3f_FkgXzC1U?si=nAbRRhIDxzTtieLL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
    </Container>
  );
};

export default Agency;
