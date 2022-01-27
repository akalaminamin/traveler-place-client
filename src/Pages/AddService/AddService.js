import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  const {currentUser} = useAuth();
  const onSubmit = (data) => {
    data.status = "Pending"
    data.email = currentUser.email
    fetch("http://localhost:5000/services/addPlace", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("successfully added your tour list");
          reset();
        }
      });
      console.log(data);
  };
  return (
    <div className="form-wrapper d-flex">
      <Container className="d-flex align-items-center justify-content-center flex-column">
        <form onSubmit={handleSubmit(onSubmit)} className="form p-4 w-sm-100 ">
          <div className="bg-primary p-2 text-light text-center text-capitalize mb-2">
            <h5 className="mb-0">Add your own traveling experience place</h5>
          </div>
          <div className="d-flex w-100">
            <input
              className="input-field w-50"
              type="name"
              placeholder="Tour Place name"
              {...register("name", { required: true })}
            />
            <br />
            <input
              className="input-field w-50"
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="d-flex w-100">
            <input
              className="input-field w-50"
              type="text"
              placeholder="tour place image url"
              {...register("image_url", { required: true })}
            />
            <br />
            <input
              className="input-field w-50"
              type="tel"
              placeholder="Phone"
              {...register("phone", { required: true })}
            />
          </div>
          <textarea
            className="w-100 input-field"
            cols="40"
            rows="8"
            placeholder="Write about tour  place"
            {...register("body", { required: true })}
          />

          <br />
          <input
            type="submit"
            value="Add New tour Place"
            className="addBtn btn btn-primary"
          />
        </form>
      </Container>
    </div>
  );
};

export default AddService;
