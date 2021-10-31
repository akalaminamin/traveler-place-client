import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [services, setServices] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`https://frozen-ravine-18988.herokuapp.com/myOrder`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isDelete]);
  const handleDelete = (id) => {
    const confirmMessage = window.confirm("Are you sure?");
    if (confirmMessage) {
      fetch(`https://frozen-ravine-18988.herokuapp.com/myOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount) {
            alert("Delete Succcess full");
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    const confirmMessage = window.confirm("Do you want to update your Status?");
    if (confirmMessage) {
      fetch(`https://frozen-ravine-18988.herokuapp.com/myOrder/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(services),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.matchedCount) {
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        });
    }
  };
  return (
    <>
      <div className="manageOrder pt-5">
        <Container>
          <h2 className="text-center py-5">All Booking</h2>
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email ID</th>
                <th>Destination</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-start">
              {services.map((service) => (
                <tr key={service._id}>
                  <td>{service.name}</td>
                  <td>{service.phone}</td>
                  <td>{service.email}</td>
                  <td>{service.placeName}</td>
                  <td>${service.price}</td>
                  <td>
                    <Button
                      size="sm"
                      variant={
                        service.status === "Approved" ? "success" : "warning"
                      }
                      className="text-light"
                      onClick={() => handleUpdate(service._id)}
                    >
                      {service.status}
                    </Button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
};

export default ManageOrder;
