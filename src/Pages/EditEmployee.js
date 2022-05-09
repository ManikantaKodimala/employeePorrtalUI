import EmployeeTable from "../Components/EmployeeTable";
import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { EmployeeForm } from "./EmployeeForm";
export const EditEmployee = () => {
  const [visible, setVisible] = useState(false);
  const [employee, setEmployees] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [message, setMessage] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();

    let employeeId = e.target.elements.employeeId.value;
    if (employeeId.trim() !== "") {
      axios
        .get("http://localhost:8080/api/employees/" + employeeId)
        .then(function (response) {
          if (response.status === 200) {
            console.log(response.data);
            setEmployees([response.data]);
            setVisible(true);
          }
        })
        .catch(function (error) {
          if (error.response.status === 404) {
            setShowBanner(true);
            alert("employeeId " + employeeId + " not found");
          }
        });
    } else {
      alert("please Enter proper empId");
    }
  };

  return (
    <div className="searchId">
      <form onSubmit={handleSearch}>
        <input
          type="number"
          name="employeeId"
          placeholder="enter Id to search"
        ></input>
        <button type="submit">Search</button>
      </form>
      {showBanner ? <Alert value={message}></Alert> : <p />}
      {visible ? <EmployeeForm data={employee} fillForm={true} /> : <p></p>}
    </div>
  );
};
