import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./AddService.css";

const AddService = () => {
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.email = currentUser.email;
    fetch("http://localhost:5000/addservice", {
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
  };
  return (
    <div className="d-flex align-items-center justify-content-center flex-column form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="form p-4">
        <div className="bg-primary p-2 text-light text-center text-uppercase mb-2">
          <h5 className="mb-0">Add Tour List</h5>
        </div>
        <div className="d-flex">
          <input
            className="input-field "
            type="name"
            placeholder="Tour Place name"
            {...register("name", { required: true })}
          />
          <br />
          <input
            className="input-field "
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
        </div>
        <div className="d-flex">
          <input
            className="input-field "
            type="text"
            placeholder="tour place image url"
            {...register("image_url", { required: true })}
          />
          <br />
          <input
            className="input-field "
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
        </div>
        {/* <input className="my-2" type="file" {...register("image")} /> */}
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
    </div>
  );
};

export default AddService;
