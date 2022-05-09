import "../App.css";
import React from "react";

const EmployeeTable = (props) => {
  return (
    <div className="employeeTable">
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Experience</th>
        </tr>
        {props.data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.experienceInYears}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeTable;
