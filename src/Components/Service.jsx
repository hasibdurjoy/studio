import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

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
                        We are composers who appreciate words, motions, audio
                        and graphics to come up with a <br />
                        reader-friendly masterpiece that is appreciated by the
                        local customer you are targeting.
                    </p>
                </div>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {fakeData.map((data) => (
                    <Col>
                        <Card className=" border-0">
                            <Card.Body>
                                <img src={data.Image} alt="" />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="d-flex align-align-items-center justify-content-center">
                <img
                    height="300px"
                    src="https://creavast.com/wp-content/uploads/2021/01/hero-bg-2.jpg"
                    alt=""
                />
            </div>
            <div className="d-flex align-items-center justify-content-between mt-5 bg-light text-dark ">
                <h4>Privacy Policy</h4>
                <h4>Service</h4>
                <h4>Blog</h4>
            </div>
        </Container>
    );
};

export default Service;
