import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Experiences = () => {
  const fakeData = [
    {
      id: "1",
      title: "Marketing for Amazon",
      des: "Social Value with its team of extensively-trained and dedicated marketing experts provides comprehensive strategies to help you gain incredible business results on Amazon platform.",
      image:
        "https://www.hitsvalue.com/wp-content/uploads/2019/12/figure_icon1_hover.png",
    },
    {
      id: "2",
      title: "Search Engine Optimization",
      des: "Social Value specializes in designing and implementing customized SEO campaigns to help start-ups, SMEs, and MNCs increase brand visibility, drive profitability, & improve brand reputation.",
      image:
        "https://www.hitsvalue.com/wp-content/uploads/2019/12/figure_icon2_hover.png",
    },
    {
      id: "3",
      title: "Social Media Marketing",
      des: "We carry out a full audit across all of your social media channels. We deeply analyze competitors’ activity, social media performance and make recommendations for your social channels.",
      image:
        "https://www.hitsvalue.com/wp-content/uploads/2019/12/figure_icon3_hover.png",
    },
  ];
  return (
    <Container className="mt-5">
      <h3 className="text-center">Our Experiences</h3>
      <h2 className="text-center " style={{ fontWeight: 800 }}>
        Provide Awesome Service <br />
        With Our Experience
      </h2>
      <Row xs={1} md={3} className="g-4 mt-5">
        {fakeData.map((data) => (
          <Col key={data.id}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={data.image}
                // style={{ height: "200px" }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontWeight: 800,
                    fontSize: "25px",
                  }}
                >
                  {" "}
                  {data.title}
                </Card.Title>
                <Card.Text className="text-center fs-5">{data.des}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Experiences;
