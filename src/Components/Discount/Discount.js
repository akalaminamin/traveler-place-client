import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Discount.css";

const Discount = () => {
  return (
    <div className="discount-wrapper mb-5 d-flex align-items-center">
      <Container>
        <h5>1000 $ for person - 6 nights</h5>
        <h1 className="display-4 fw-bold my-2">
          Discount <span className="text-primary"> 10-30%</span> Off
        </h1>
        <p className="description">
          If you’re looking for a truly memorable family break here you find the
          <br />
          lowest price on the right hotel for you. It's indescribable. Stay up
          <br />
          to date and check out the deals for these trending destinations.
        </p>
        <Button className="px-5 rounded-pill mt-2">Book Now</Button>
      </Container>
    </div>
  );
};

export default Discount;
