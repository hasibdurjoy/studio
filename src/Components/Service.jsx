import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const styleIn = {
  borderRadius: "20px",
};
const styleBtn = {
  borderRadius: "5px",
};

const fakeData = [
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-7.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-9.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-11.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-13.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-15.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-17.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-19.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-21.jpg",
  },
  {
    Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-23.jpg",
  },
];

const Service = () => {
  return (
    <Container>
      <Row>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <h3>
            <strong>SERVICES</strong>
          </h3>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h1>
            WHAT <span className="text-danger">WE DO</span>
          </h1>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p>
            We are composers who appreciate words, motions, audio and graphics
            to come up with a <br />
            reader-friendly masterpiece that is appreciated by the local
            customer you are targeting.
          </p>
        </div>
      </Row>
      <Row xs={1} md={3} className="g-2">
        {fakeData.map((data) => (
          <SingleCard data={data} />
        ))}
      </Row>
      <div>
        <div
          style={styleIn}
          className=" bg-info text-dark align-align-items-center justify-content-center "
        >
          <div className="d-flex align-items-center justify-content-center mt-5">
            <h2 className="mt-5">GET UPDATE REGULARLY</h2>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <p>
              We won't publish your email with 3rd parties. Trust us and get
              regular updates
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center ">
            <input
              className="mb-5"
              type="email"
              name="email"
              placeholder="Your Email Address"
              id=""
            />
            <button
              style={styleBtn}
              className="text-dark bg-warning mb-5 "
              type="button"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service;

const SingleCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Col>
      <Card
        className=" border-0 p-0 "
        style={{
          height: "300px",
          width: "300px",
          backgroundColor: isHovered ? "yellow" : "",
        }}
      >
        <Card.Body
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              nulla reiciendis tenetur assumenda laboriosam, exercitationem
              minima praesentium recusandae in magnam necessitatibus quos rerum
              omnis aspernatur nihil maiores doloremque eius quo!
            </p>
          ) : (
            <img src={data.Image} alt="" width="250px" />
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
