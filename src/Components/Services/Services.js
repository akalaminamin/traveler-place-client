import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Services.css";
const Services = () => {
  const [service, setService] = useState([]);
  const { currentUser } = useAuth();
  const history = useHistory()

  useEffect(() => {
    fetch("https://frozen-ravine-18988.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const handleBookNow = (id) => {
    // const BookNowData = service[index];
    // BookNowData.email = currentUser.email;
    // fetch("https://frozen-ravine-18988.herokuapp.com/bookNow", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(BookNowData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    history.push(`/placeorder/${id}`)
  };
  return (
    <Container>
      <h2 className="text-center">TOP PLACES</h2>
      <p className="text-center mb-5">BEST TRAVEL PACKAGES AVAILABLE</p>
      <Row className="mb-5">
        {service.map((singleService, index) => (
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
              <Button
                onClick={() => handleBookNow(singleService._id)}
                >
                Book Now
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
