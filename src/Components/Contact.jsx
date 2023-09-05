import React from "react";
import { Card, Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center">
        <Card style={{ width: "500px" }}>
          <Card.Body>
            <Card.Title className="text-center">Contact Us</Card.Title>
            <h2 className="text-center fw-bold">Request a Quote</h2>
            <h5 className="text-center fw-bold">
              Kindly share the following information with us to reach you
              shortly.
            </h5>
            <Form>
              <div className="d-flex align-items-center gap-4 mt-3">
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </div>
              <div className="d-flex align-items-center gap-4 mt-3">
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </div>

              <Form.Group controlId="formMessage" className="mt-3 mb-2">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                />
              </Form.Group>

              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
