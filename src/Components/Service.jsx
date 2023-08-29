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
        Description: `We offer social media creative content adapter and guided
        by a structured content strategy as well as a social media
        marketingstrategy that is planned to achieve your brand's
        goals.`,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-9.jpg",
        Description: `
        We offer high quality multilingual and meaningful translation services. Our
        team speaks the target languages fluently and can help you deliver the correct
        message with high text value.`,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-11.jpg",
        Description: `With our new innovated IT services Menu, we provide a new concept for IT out-tasking, 
        As Task already defined and priced. By providing the required workforce or specific 
        capability for a running project.`,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-13.jpg",
        Description: `We support our clients in creating a meaning to 
        their brand from idea to execution to deliver products
        that will distinguish the company from its competitors.`,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-15.jpg",
        Description: `Our professional team of writers, editors and content 
        Strategists collaborate to create content tailored to your 
        business needs, from website content to company profile, 
        press releases and catchy captions on social media channels.`,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-17.jpg",
        Description: `
        We work with world leaders in Cloud hosting providers to bring you 
        the fastest, most efficient and flexible platforms available, at highly 
        affordable prices.`,
    },

    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-19.jpg",
        Description: `We deliver catchy and customized solutions designed to suit your business 
        needs. Our web-savvy developers create bespoke websites that drive results 
        with a focus on innovation and simplicity.
        `,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-21.jpg",
        Description: `We examine the complete promotional environment covering every touchpoint the company 
        has with its customers and compare it to the feasibility of your current business vision, 
        and the goals you're trying to achieve.`,
    },
    {
        Image: "https://creavast.com/wp-content/uploads/2021/05/1-36-23.jpg",
        Description: `We offer our consultant experiences to identify the gap between business 
        need and running IT services. To help your organization reduce operating 
        costs with innovative solutions. To guide your organization throw a digital transformation journey.`,
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
                            We won't publish your email with 3rd parties. Trust
                            us and get regular updates
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
                        <p>{data.Description}</p>
                    ) : (
                        <img src={data.Image} alt="" width="250px" />
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
};
