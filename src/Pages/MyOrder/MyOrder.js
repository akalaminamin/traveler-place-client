import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import "./MyOrder.css";
const MyOrder = () => {
  const { currentUser } = useAuth();
  const [myOrderData, setMyOrderData] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    fetch(`https://frozen-ravine-18988.herokuapp.com/myOrder`)
      .then((res) => res.json())
      .then((data) => {
        const matchData = data.filter((dt) => dt.email === currentUser.email);
        setMyOrderData(matchData);
      });
  }, [isDelete]);

  const handleDeleteItem = (id) => {
    const confimMessage = window.confirm("Are your sure delete your Service?");
    if (confimMessage) {
      fetch(`https://frozen-ravine-18988.herokuapp.com/myOrder/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.deletedCount) {
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
    <div className="myOrder">
      <h2 className="text-center py-5">Your All Booking</h2>
      <Container>
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
            {myOrderData.map((order) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.phone}</td>
                <td>{order.email}</td>
                <td>{order.placeName}</td>
                <td>${order.price}</td>
                <td>
                  <span
                    className={`badge ${
                      order.status === "Approved" ? "bg-success" : "bg-warning"
                    } px-3 py-2`}
                  >
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDeleteItem(order._id)}
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
  );
};

export default MyOrder;
