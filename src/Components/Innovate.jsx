import React from "react";
import { Button, Container } from "react-bootstrap";

const Innovate = () => {
  const fakeData = [
    {
      id: 1,
      name: "Innovate",
      des: "At iStrat we focus on the various innovative solutions of our partners. Innovation in SAP Business is focused on leveraging current and emerging technologies such as Internet of Things; Machine Learning; Cloud Technologies and Mobile Technologies etc.​",
      image:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png",
    },
    {
      id: 1,
      name: "Innovate",
      des: "At iStrat we focus on the various innovative solutions of our partners. Innovation in SAP Business is focused on leveraging current and emerging technologies such as Internet of Things; Machine Learning; Cloud Technologies and Mobile Technologies etc.​",
      image:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png",
    },
    {
      id: 1,
      name: "Innovate",
      des: "At iStrat we focus on the various innovative solutions of our partners. Innovation in SAP Business is focused on leveraging current and emerging technologies such as Internet of Things; Machine Learning; Cloud Technologies and Mobile Technologies etc.​",
      image:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png",
    },
    {
      id: 1,
      name: "Innovate",
      des: "At iStrat we focus on the various innovative solutions of our partners. Innovation in SAP Business is focused on leveraging current and emerging technologies such as Internet of Things; Machine Learning; Cloud Technologies and Mobile Technologies etc.​",
      image:
        "https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png",
    },
  ];
  return (
    <div className="mt-5">
      <Container className="d-flex gap-3">
        {fakeData.map((si) => (
          <div>
            <div className="d-flex justify-content-center">
              <img src={si.image} alt="" height="150px" />
            </div>
            <h2 className="text-center">{si.name}</h2>
            <p className="text-center">{si.des}</p>
          </div>
        ))}
      </Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#11285D",
          padding: "40px",
        }}
      >
        <Button variant="outlined" className="text-light border-light">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Innovate;
