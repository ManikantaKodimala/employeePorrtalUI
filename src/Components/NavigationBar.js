import React from "react";
import Search from "../Pages/Search";
const NavigationBar = () => {
  return (
    <div className="navigation">
      <Search />
      <button onClick={(event) => (window.location.href = "/EmployeeTable")}>
        Get All Employees
      </button>
      <button>create Employee</button>
      <button>update Employee</button>
      <button>Delete Employee</button>
    </div>
  );
};

export default NavigationBar;
