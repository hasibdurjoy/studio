import React from "react";
import { Container } from "react-bootstrap";

const WhyChooseUs = () => {
    return (
        <div>
            <div className="banner ">
                <h1 className="d-flex align-items-center justify-content-center text-danger ">
                    <strong>WHY CHOOSE US</strong>
                </h1>
                <Container>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src="https://creavast.com/wp-content/uploads/2021/04/Untitled-1-1.jpg"
                                    className="img-fluid rounded-start"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h4>
                                        <strong>
                                            Creavast{" "}
                                            <span className="text-danger">
                                                is what
                                            </span>{" "}
                                            you are looking for ....
                                        </strong>
                                    </h4>
                                    <br />
                                    <p>
                                        Our team entails specialists in digital
                                        marketing, native Arabic speakers,
                                        bloggers, bilingual writers, novelists,
                                        creative artists and social media gurus
                                        who have created content and executed
                                        campaigns for international brands in
                                        government entities and local brands
                                        across various sectors like IT,
                                        education, banking, hospitality, food &
                                        beverage, healthcare, homecare,
                                        skincare, beauty & fashion,
                                        entertainment and politics in MENA
                                        region.
                                    </p>
                                    <p>
                                        Creavast is where experienced
                                        professionals team up to guarantee
                                        high-quality products that are delivered
                                        on time and in line with the best
                                        business practices, ensuring the highest
                                        degree of confidentiality and clear
                                        communication.{" "}
                                    </p>
                                    <p>
                                        If you are looking for professionals who
                                        can materialize your requests and turn
                                        them into tangible results, then you
                                        have just reached your destination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WhyChooseUs;
