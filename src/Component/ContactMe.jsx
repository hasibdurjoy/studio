import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={{ width: "500px" }} className="container mt-5 mb-5">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </Form.Group>

        <a href="mailto:haraishudhuharai@outlook.com">
          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
        </a>
      </Form>
    </div>
  );
};

export default ContactUsForm;
