import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="mt-5">
      <h4 className="text-center">Our Services</h4>
      <h2 className="text-center">How We Can Help?</h2>
      <Row className="mt-5">
        <Col md={4}>
          <div className="d-flex align-items-start mb-2">
            <div>
              <h2 className="text-end">Search Engine Optimization</h2>
              <p className="text-end">
                Helping the business to steal the spotlight with higher
                conversions and traffic
              </p>
            </div>
            <div>
              <img
                src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_icon2-168x168.png"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <div>
              <h2 className="text-end">Paid Campaign Strategy</h2>
              <p className="text-end">
                Time to broaden your business reach with the right paid campaign
                Strategy
              </p>
            </div>
            <div>
              <img
                src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_icon3-168x168.png"
                alt=""
              />
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <div>
              <h2 className="text-end">Social Media Strategy</h2>
              <p className="text-end">
                Creating your social media marketing strategy to promote your
                business.
              </p>
            </div>
            <div>
              <img
                src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_icon1-168x168.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex justify-content-center">
            <img
              src="https://www.hitsvalue.com/wp-content/uploads/2019/12/man_with_laptop.png"
              alt=""
            />
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex align-items-start mb-2">
            <div>
              <img
                src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_icon4-168x168.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-start">Promotion For Amazon Marketplace</h2>
              <p className="text-start">
                Our marketing promotions for Amazon can help your products stand
                out from the competition and improve sales.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <div>
              <img
                src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_icon5-168x168.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-start">Ecommerce Marketing</h2>
              <p className="text-start">
                Our ecommerce marketing services helps in driving top-of-funnel
                traffic to convert into sales and customers.
              </p>
            </div>
          </div>
          <div className="d-flex align-items-start mb-2">
            <div>
              <img
                src="https://www.hitsvalue.com/wp-content/uploads/2019/12/home4_icon6-168x168.png"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-start">Website Development</h2>
              <p className="text-start">
                We helps in building, creating, and maintaining of websites.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
