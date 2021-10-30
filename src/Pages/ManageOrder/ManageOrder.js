import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [services, setServices] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/bookNow`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isDelete]);
  const handleDelete = (id) => {
    const confirmMessage = window.confirm("Are you sure?");
    if (confirmMessage) {
      fetch(`http://localhost:5000/dashboard/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("Delete Succcess full");
            setIsDelete(true);
          } else {
            setIsDelete(false);
          }
        });
    }
  };
  return (
    <>
      <div className="manageOrder">
      <Container className='bg-success'>
      <Table hover className="mt-3">
        <thead>
          <tr>
            <th>Services</th>
            <th>Description</th>
            <th>Email ID</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {services.map((service) => (
            <tr>
              <td>{service.name}</td>
              <td>{service.body}</td>
              <td>{service.email}</td>
              <td>${service.price}</td>
              <td
                className="text-center"
                onClick={() => handleDelete(service._id)}
              >
                {<AiTwotoneDelete className="text-danger delete-icon" />}
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
