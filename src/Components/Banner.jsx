import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

const Banner = () => {
  const [view, setView] = useState("one");

  useEffect(() => {
    setTimeout(() => {
      if (view === "one") {
        setView("two");
      } else setView("one");
    }, 2000);
  }, [view]);

  return (
    <div
      style={{
        minHeight: "60vh",
        color: "white",
        backgroundImage:
          "url(https://www.hitsvalue.com/wp-content/uploads/2019/12/header_wave-bg.png)",
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="pb-4"
    >
      <Header />
      <Container className="pt-5">
        <div className="d-flex align-items-center justify-content-between">
          <div style={{ width: "50%" }}>
            <h4>Welcome</h4>
            <h2
              style={{
                color: "#FFF",
                fontSize: "50px",
                fontWeight: 800,
                lineHeight: "63px",
                letterSpacing: "-0.2px",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              Digital Marketing
            </h2>
            <h2
              style={{
                color: "#FFF",
                fontSize: "50px",
                fontWeight: 800,
                lineHeight: "63px",
                letterSpacing: "-0.2px",
                textShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              {view === "one" ? "For Selling Online" : "For your Ideas"}
            </h2>
          </div>
          <div className="d-flex justify-content-end">
            <img
              src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_img.png"
              alt=""
              // height="70%"
              width="99%"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
