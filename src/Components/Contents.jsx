import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Star from "./Star";

const Contents = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={4}>
            <video
              src="https://istratsolutions.com/wp-content/uploads/2015/01/Third-slider-1.mp4"
              controls
              muted
              height="200px"
              width="100%"
            />
          </Col>
          <Col md={8}>
            <div className="d-flex align-items-center gap-4">
              <h4 className="text-success">
                A Single Solution To Run Your Business
              </h4>
              <div
                style={{
                  display: "block",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "green",
                }}
              ></div>
            </div>
            <h1>Enterprise Resource Planning (ERP)</h1>
            <p>
              iGenious Solutions and SAP Business One offer an affordable way to
              manage your growing business. Trusted by over 70,000 companies in
              over 170 countries, this single solution streamlines your key
              processes. Remarkable business transformation starts on DAY ONE
              with SAP Business One. It’s quick; it’s powerful; it’s affordable.
            </p>
          </Col>
        </Row>
        <Star />
        <Row>
          <Col md={8}>
            <div className="d-flex align-items-center gap-4">
              <h4 className="text-success">
                Timely, Insightfull, Value-Added Information
              </h4>
              <div
                style={{
                  display: "block",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "green",
                }}
              ></div>
            </div>
            <h1>Business Analytics</h1>
            <p>
              Whether you are dealing with “Big Data” or have specific reporting
              and visualization requirements, we have the right tools and
              services for your particular needs. On a single screen, analytic
              dashboards allow you to evaluate a large amount of data
              graphically. It will enable you to track and share KPIs with your
              team for in-depth data analysis and collaboration.
            </p>
          </Col>
          <Col md={4}>
            <video
              src="https://istratsolutions.com/wp-content/uploads/2022/07/analytics-dashboard-video.mp4"
              controls
              muted
              height="200px"
              width="100%"
            />
          </Col>
        </Row>
        <Star />
        <Row>
          <Col md={4}>
            <img
              height="220px"
              src="https://www.lyfemarketing.com/blog/wp-content/uploads/2018/04/website-solutions-used.jpg"
              alt=""
            />
            <img
              height="220px"
              src="https://inwayhosting.com/data/uploads/web-solution.png"
              alt=""
            />
          </Col>
          <Col md={8}>
            <div className="d-flex align-items-center gap-4">
              <h4 className="text-success">
                Zero Footprint Productivity At Your Finger Tips
              </h4>
              <div
                style={{
                  display: "block",
                  width: "100px",
                  height: "2px",
                  backgroundColor: "green",
                }}
              ></div>
            </div>
            <h1>Web Solutions</h1>
            <li className="mt-2">
              iGenious RE is a great solution that covers all aspects of a Real
              Estate Business. The platform enables Property managers, Tenants,
              agents, agencies, owners, sellers, buyers, and builders to perform
              their daily task while automatically integrating information in
              the ERP solution to generate reports, financial statements,
              customer statements etc.
            </li>
            <li className="mt-2">
              iGenious Fintec solution enables the online input of loan
              applicaiton data and allows for seamless integraiton with back-end
              ERP to automatically create reports, statements etc.
            </li>
            <li className="mt-2">
              iGenious e-Forms & Data Integration: Capture, validate, and submit
              data using electronic forms: an easier, faster, and more efficient
              way for collecting data. By using our E-forms solutions, you will
              be decreasing costs and increasing your data protection and
              reliability. E-forms can easily be integrated with the other
              business platforms you are utilizing.
            </li>
            <li className="mt-2">and others..</li>
          </Col>
        </Row>
        <Star />
      </Container>
    </div>
  );
};

export default Contents;
