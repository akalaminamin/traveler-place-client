import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
const PlaceOrder = () => {
  const [orderData, setOrderData] = useState();
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          setOrderData(result);
          console.log(result);
          alert("Your Order is successfull");
          reset();
        }
      });
  };
  return (
    <div>
      <h2>Pleace your order</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="my-2"
          type="name"
          defaultValue={currentUser?.displayName}
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="my-2"
          type="email"
          defaultValue={currentUser?.email}
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="my-2"
          type="tel"
          placeholder="Phone"
          {...register("phone", { required: true })}
        />
        <br />
        <input
          className="my-2"
          type="number"
          placeholder="Number of Rooms"
          {...register("number", { required: true })}
        />
        <br />
        <input
          className="my-2"
          type="date"
          placeholder="description"
          {...register("date", { required: true })}
        />
        <br />
        <input type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default PlaceOrder;
