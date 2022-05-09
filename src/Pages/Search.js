import axios from "axios";
import React, { useState } from "react";
import EmployeeTable from "../Components/EmployeeTable";

const Search = () => {
  const handleSearch = (e) => {
    e.preventDefault();

    let userName = e.target.elements.username.value;
    console.log("value --", userName);
    if (userName.trim() !== "") {
      axios
        .get(
          "http://localhost:8080/api/employees/search?query=" +
            e.target.elements.username.value
        )
        .then(function (response) {
          setEmployees(response.data.data);
          setVisible(true);
        })
        .catch(function (error) {
          console.log("user name error", error);
        });
    } else {
      alert("please Enter proper name");
    }
  };
  const [visible, setVisible] = useState(false);
  const [employees, setEmployees] = useState([]);
  return (
    <div className="search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="username"
          placeholder="enter name to search"
        ></input>
        <button type="submit">Search</button>
      </form>
      {visible ? <EmployeeTable data={employees}></EmployeeTable> : <p></p>}
    </div>
  );
};

export default Search;
