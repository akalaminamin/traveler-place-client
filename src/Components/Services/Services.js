import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ServicePagination from "../Pagination/Pagination";
import "./Services.css";
import axios from "axios";
import Loader from "../Loader/Loader";
const Services = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPerPage, setShowPerPage] = useState(3);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start, end });
  };
  const history = useHistory();

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      "https://mighty-cove-64498.herokuapp.com/services"
    );
    const approvedPost = res.data.filter(singleData => singleData.status === "Approved");
    setService(approvedPost);
    setLoading(false);
  }, []);
  const handleBookNow = (id) => {
    history.push(`/placeorder/${id}`);
  };
  return (
    <Container>
      <h2 className="text-center">TOP PLACES</h2>
      <p className="text-center mb-5">BEST TRAVEL PACKAGES AVAILABLE</p>
      <Row className="mb-5">
        {loading ? (
          <Loader />
        ) : (
          service
            .slice(pagination.start, pagination.end)
            .map((singleService) => (
              <Col sm={12} md={6} lg={4} key={singleService._id}>
                <Card className="custom-card mb-4">
                  <div>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={singleService.image_url}
                    />
                  </div>
                  <Card.Body className="px-0">
                    <Card.Title>{singleService.name}</Card.Title>
                    <Card.Text>{singleService.body.slice(0, 100)}</Card.Text>
                  </Card.Body>
                  <Button onClick={() => handleBookNow(singleService._id)}>
                    Book Now
                  </Button>
                </Card>
              </Col>
            ))
        )}
      </Row>
      <ServicePagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={service.length}
      />
    </Container>
  );
};

export default Services;
