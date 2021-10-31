import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiMap } from "react-icons/bi";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="contactInfo py-5 px-4">
              <h3>Quick Contact</h3>
              <p>
                If you have any questions simply use the following contact
                details.
              </p>
              <div className="info d-flex align-items-start mb-2">
                <div className="icon p-2 me-3 border d-flex align-items-center justify-content-center">
                  <BiMap className="text-primary" />
                </div>
                <div>
                  <h4 className="text-uppercase">Address</h4>
                  <p>123 West Street, Melbourne Victoria 3000 Australia</p>
                </div>
              </div>
              <div className="info d-flex align-items-start mb-2">
                <div className="icon p-2 me-3 border d-flex align-items-center justify-content-center">
                  <BsEnvelope className="text-primary" />
                </div>
                <div>
                  <h4 className="text-uppercase">Email</h4>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="info d-flex align-items-start mb-2">
                <div className="icon p-2 me-3 border d-flex align-items-center justify-content-center">
                  <BsPhone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-uppercase">Phone</h4>
                  <p>+61 3 8376 6284</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <form className="contacForm py-5 px-4">
              <h3>Send Message Us</h3>
              <input
                type="text"
                placeholder="Your Name"
                className="contact-input w-100 my-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="contact-input w-100 my-2"
              />
              <textarea
                cols="30"
                rows="5"
                placeholder="Your Message..."
                className="contact-input w-100 my-2"
              ></textarea>
              <button type="submit" value="Place Order" className="placeOrderBtn">
              SEND
            </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
