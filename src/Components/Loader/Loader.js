import React from "react";
import { Spinner, Button } from "react-bootstrap";
const Loader = () => {
  return (
    <div className="w-full">
      <div className="w-full text-center">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            className="me-2"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </Button>
      </div>
    </div>
  );
};

export default Loader;
