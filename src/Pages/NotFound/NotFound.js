import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column py-5">
        <h1 style={{ fontSize: "300px" }} className="text-danger">
          4 <span className="text-primary">0 </span>4
        </h1>
        <h1 className="text-danger mt-4">Opps!! Page Not Found</h1>

        <Link to="/" className="btn btn-primary mt-4">
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
