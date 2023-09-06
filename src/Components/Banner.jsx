import React from "react";
import { Button, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div style={{ height: "70vh" }}>
      <div
        style={{
          position: "fixed",
          top: "66px",
          left: 0,
          width: "100%",
          height: "70vh",
          // zIndex: -1,
        }}
      >
        <iframe
          className="elementor-background-video-embed"
          frameBorder="0"
          allowFullScreen="1"
          allow="autoplay"
          title="Adsyndicate Video"
          src="https://www.youtube-nocookie.com/embed/-mKFiOeFTcM?autoplay=1&loop=1&controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fadsyndicate.in&widgetid=1"
          id="widget2"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: "100vw",
            maxHeight: "100vh",
          }}
        ></iframe>
      </div>
      <div
        style={{
          position: "fixed",
          top: "66px",
          left: "50%",
          width: "50%",
          height: "70vh",
          // zIndex: -1,
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "red",
            width: "100%",
            display: "flex",
            // alignItems: "center",
            color: "white",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "60px",
            gap: "10px",
          }}
        >
          <h1>
            Digital Crazy <br />
            Social Sassy
            <br />
            Tech Savvy
          </h1>
          <h2>That’s who we are.</h2>
          <Button
            style={{
              width: "150px",
              backgroundColor: "white",
              color: "black",
              border: "none",
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
