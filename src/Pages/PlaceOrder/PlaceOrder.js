import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";
const PlaceOrder = () => {
  const { id } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [findService, setFindService] = useState();
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("https://frozen-ravine-18988.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    if (serviceDetails.length > 0) {
      const matchDetails = serviceDetails.find((service) => service._id == id);
      setFindService(matchDetails);
    }
  }, [serviceDetails]);

  const onSubmit = (data) => {
    fetch("https://frozen-ravine-18988.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          console.log(result);
          alert("Your Order is successfull");
          reset();
        }
      });
  };
  return (
    <Container>
      <Row className="my-4">
        <Col sm={8}>
          <img src={findService?.image_url} className="w-100 img" alt="" />
          <h2 className="py-3">{findService?.name}</h2>
          <p>{findService?.body}</p>
        </Col>
        <Col sm={4}>
          <form onSubmit={handleSubmit(onSubmit)} className="placeOrderForm">
            <label className="formLabel" htmlFor="name">
              Name
            </label>
            <input
              className="my-2 formInput"
              type="name"
              defaultValue={currentUser?.displayName}
              {...register("name", { required: true })}
            />
            <br />
            <label className="formLabel" htmlFor="email">
              Email ID
            </label>
            <input
              className="my-2 formInput"
              type="email"
              defaultValue={currentUser?.email}
              {...register("email", { required: true })}
            />
            <br />
            <label className="formLabel" htmlFor="placename">
              Place Name
            </label>
            <input
              className="my-2 formInput"
              type="text"
              defaultValue={findService?.name}
              {...register("placeName", { required: true })}
            />
            <br />
            <label className="formLabel" htmlFor="phone">
              Phone
            </label>
            <input
              className="my-2 formInput"
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
            <br />
            <label className="formLabel" htmlFor="name">
              Price
            </label>
            <input
              className="my-2 formInput"
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
            />
            <br />
            <label className="formLabel" htmlFor="date">
              Start Date
            </label>
            <input
              className="my-2 formInput"
              type="date"
              {...register("Start date", { required: true })}
            />
            <label className="formLabel" htmlFor="date">
              End Date
            </label>
            <input
              className="my-2 formInput"
              type="date"
              {...register("End date", { required: true })}
            />
            <br />
            <button type="submit" value="Place Order" className="placeOrderBtn">
              Place Order
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
