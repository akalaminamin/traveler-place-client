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
      <div className="manageOrder pt-5">
        <Container>
          <Table striped hover bordered>
            <thead>
              <tr>
                <th>Services</th>
                <th>Description</th>
                <th>Email ID</th>
                <th>Price</th>
                <th>Status</th>
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
                  <td>
                    <span class="badge bg-danger px-3 py-2">Pending</span>
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
