import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import footerImg from "../../Assest/image/creditcard-logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={3}>
            <h4>Call Us</h4>
            <p>
              <FaPhoneAlt /> +6-345-3456-233
            </p>
            <h4> Email</h4>
            <p>
              <FaEnvelope /> akalaminamin91@gmail.com
            </p>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4>About Us</h4>
            <Nav className="nav d-flex flex-column">
              <Nav.Link
                className="footer-nav  text-light ps-0 pe-5"
                as={Link}
                to="/"
              >
                Our Story
              </Nav.Link>
              <Nav.Link className="footer-nav text-light ps-0" as={Link} to="/">
                Travel Blog and Tips
              </Nav.Link>
              <Nav.Link className="footer-nav text-light ps-0" as={Link} to="/">
                Working With Us
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4>Support</h4>
            <Nav className="nav d-flex flex-column">
              <Nav.Link className="footer-nav text-light ps-0" as={Link} to="/">
                Customer Support
              </Nav.Link>
              <Nav.Link className="footer-nav text-light ps-0" as={Link} to="/">
                Privacy and Policy
              </Nav.Link>
              <Nav.Link className="footer-nav text-light ps-0" as={Link} to="/">
                Contact Channels
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} sm={6} md={3}>
            <h4 className="pb-2">Pay Safely With Us</h4>
            <p>
              The payment is encrypted and transmitted securely with an SSL
              protocol.
            </p>
            <img src={footerImg} alt="" />
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col sx={12} sm={12} md={6} className="text-center text-md-start">
            © 2021 Travel Tour Site Rights Reserved.
          </Col>
          <Col sx={12} sm={12} md={6} className="text-center text-md-end">
            <span className="ms-3 text-light">
              <FaFacebookF />
            </span>
            <span className="ms-3 text-light">
              <FaLinkedinIn />
            </span>
            <span className="ms-3 text-light">
              <FaTwitter />
            </span>
            <span className="ms-3 text-light">
              <FaPinterest />
            </span>
            <span className="ms-3 text-light">
              <FaInstagram />
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
