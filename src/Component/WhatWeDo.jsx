import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { BiCubeAlt } from "react-icons/bi";
import { SiWebauthn } from "react-icons/si";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { AiOutlineCloud } from "react-icons/ai";
import { MdTouchApp } from "react-icons/md";

const WhatWeDo = () => {
    return (
        <div style={{ backgroundColor: "#F1F1F1" }}>
            <Container style={{ padding: "100px 40px" }}>
                <p style={{ color: "#cc147f" }}>/What We Do</p>
                <h1 style={{ fontSize: "48px", padding: "15px 0px" }}>
                    We have everything you need to launch and grow a successful
                    digital business.
                </h1>
                <Row>
                    <Col sm={12} md={6}>
                        <Card className="border-0 h-100 bg-transparent">
                            <Card.Body>
                                <div
                                    className="fs-1"
                                    style={{ color: "#26BFB5" }}
                                >
                                    <PiTelevisionSimpleBold />
                                </div>
                                <h4 className="mb-0 ">Brand Identity</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="border-0 h-100 bg-transparent">
                            <Card.Body>
                                <div
                                    className="fs-1"
                                    style={{ color: "#26BFB5" }}
                                >
                                    <BiCubeAlt />
                                </div>
                                <h4 className="mb-0 ">Data Analytics</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="border-0 h-100 bg-transparent">
                            <Card.Body>
                                <div
                                    className="fs-1"
                                    style={{ color: "#26BFB5" }}
                                >
                                    <SiWebauthn />
                                </div>
                                <h4 className="mb-0 ">Web Design</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="border-0 h-100 bg-transparent">
                            <Card.Body>
                                <div
                                    className="fs-1"
                                    style={{ color: "#26BFB5" }}
                                >
                                    <MdOutlineProductionQuantityLimits />
                                </div>
                                <h4 className="mb-0 ">Product Strategy</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="border-0 h-100 bg-transparent">
                            <Card.Body>
                                <div
                                    className="fs-1"
                                    style={{ color: "#26BFB5" }}
                                >
                                    <AiOutlineCloud />
                                </div>
                                <h4 className="mb-0 ">Cloud Services</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card className="border-0 h-100 bg-transparent">
                            <Card.Body>
                                <div
                                    className="fs-1"
                                    style={{ color: "#26BFB5" }}
                                >
                                    <MdTouchApp />
                                </div>
                                <h4 className="mb-0 ">
                                    Mobile Apps Developments
                                </h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhatWeDo;
