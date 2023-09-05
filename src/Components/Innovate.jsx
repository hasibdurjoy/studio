import React from "react";
import { Button, Container } from "react-bootstrap";

const Innovate = () => {
  const fakeData = [
    {
      id: 1,
      name: "Innovate",
      des: "At igenious we focus on the various innovative solutions of our partners. Innovation in SAP Business is focused on leveraging current and emerging technologies such as Internet of Things; Machine Learning; Cloud Technologies and Mobile Technologies etc.​",
      image: "https://i.ibb.co/rdCWvr8/Screenshot-1.png",
    },
    {
      id: 2,
      name: "Innovate",
      des: "The process of leveraging business and technological acumen to develop a complete and systematic plan of action geared towards gaining a marked competitive advantage for our clients.​",
      image: "https://i.ibb.co/0p0xndw/Screenshot-2.png",
    },
    {
      id: 3,
      name: "Innovate",
      des: "Effective integration is the hallmark of an efficient, effective and high performing enterprise. SAP Business One, SAP Business by Design and SAP Business Objects are best of breed solutions to help you integrate your operation.​",
      image: "https://i.ibb.co/Hd4vH64/Screenshot-3.png",
    },
    {
      id: 4,
      name: "Innovate",
      des: "Optimization is ensuring the most effective and efficient use of available resources (people, process & technology). Leveraging the best in-class tools and iStrat’s Innovative & Strategic services, we provide the optimal recipe for optimizing our clients technological and business landscapes.​",
      image: "https://i.ibb.co/4VN5Dh5/Screenshot-4.png",
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
