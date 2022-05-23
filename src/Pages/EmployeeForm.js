import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export const EmployeeForm = (props) => {
  var employee;
  const handleSubmit = (e) => {
    e.preventDefault();
    var config;
    employee = getEmployeeDetails(e);
    if (props.data === null) {
      config = {
        method: "post",
        url: `http://${process.env.REACT_APP_BACKEND_IP}:8080/api/employees`,
        headers: {
          "Content-Type": "application/json",
        },
        data: employee,
      };
    } else {
      config = {
        method: "put",
        url: "http://localhost:8080/api/employees/" + employee.id,
        headers: {
          "Content-Type": "application/json",
        },
        data: employee,
      };
    }

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  if (props.fillForm) {
    employee = props.data[0];
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          defaultValue={props.fillForm ? employee.firstName : " "}
          placeholder="Enter First name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Enter Last name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="everestEmailId"
          placeholder="Enter everest email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

EmployeeForm.defaultProps = {
  data: null,
  fillForm: false,
};

function getEmployeeDetails(e) {
  return {
    firstName: e.target.elements.firstName.value,
    lastName: e.target.elements.lastName.value,
    everestEmailId: e.target.elements.everestEmailId.value,
    password: e.target.elements.password.value,
    personalEmailId: "mani@gmail.com",
    dob: "1971-02-02",
    doj: "2022-02-16",
    designation: "Project Manager",
    experienceInYears: 23,
    bio: "Good at killing",
    presentAddress: {
      addressLine1: "ParkAvenue",
      addressLine2: null,
      city: "LA",
      state: "LA",
      zipcode: "66666",
      country: "USA",
    },
    permanentAddress: {
      addressLine1: "Hollywood",
      addressLine2: null,
      city: "Chicago",
      state: "CH",
      zipcode: "67567",
      country: "USA",
    },
  };
}
