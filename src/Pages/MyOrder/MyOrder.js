import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
const MyOrder = () => {
  const { currentUser } = useAuth();
  const [myOrderData, setMyOrderData] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/bookNow/${currentUser?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrderData(data));
  }, [isDelete]);

  const handleDeleteItem = (id) => {
    const confimMessage = window.confirm("Are your sure delete your Service?");
    if (confimMessage) {
      fetch(`http://localhost:5000/bookNow/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            setIsDelete(true);
            alert("deleted successfull");
          } else {
            setIsDelete(false);
          }
          console.log(result);
        });
    }
  };
  return (
    <div>
      <h2 className="text-center py-5">Your All Booking Service</h2>
      <Container>
        <Row>
          {myOrderData.map((singleData) => (
            <Col sm={12} md={6} lg={4} key={singleData._id}>
              <Card className="custom-card mb-4">
                <div>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={singleData.image_url}
                  />
                </div>
                <Card.Body className="px-0">
                  <Card.Title>{singleData.name}</Card.Title>
                  <Card.Text>{singleData.body}</Card.Text>
                  <Button
                    className="w-100"
                    onClick={() => handleDeleteItem(singleData._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyOrder;
