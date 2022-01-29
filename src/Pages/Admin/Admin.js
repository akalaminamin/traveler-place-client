import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";


import {
  Container,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
const Admin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("https://mighty-cove-64498.herokuapp.com/admin", data).then((res) => {
      if (res.data.acknowledged) {
        // Swal.fire("Add Admin", "Admin Added Successfully", "success");
        alert("Admin added successfully")
        reset();
      }
    });
    // fetch("https://mighty-cove-64498.herokuapp.com/admin", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     if (data.acknowledged) {
    //       alert("Admin successfully added");
    //       reset();
    //     }
    //   });
  };
  return (
    <>
      <div className="manageOrder pt-5">
        <Container>
          <h2 className="text-center py-5">Make Admin</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter Created Admin Email"
                type="email"
                {...register("email", { required: true })}
              />
              <Button
                variant="danger"
                id="button-addon2"
                className="text-light fw-bold"
                type="submit"
              >
                Make Admin
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Admin;
