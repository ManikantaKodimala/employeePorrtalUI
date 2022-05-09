import axios from "axios";
import React, { useReducer } from "react";

const Signup = () => {
  const initialState = {
    success: false,
  };

  const signup = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      contact: e.target.elements.contact.value,
    });

    var config = {
      method: "post",
      url: "http://localhost:8080/api/employees/signup/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (response, error) {
        console.log(response.message);

        console.log(error);
      });
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "success":
        const newState = Object.assign({}, state, { success: true });
        return newState;
      case "error":
        return Object.assign({}, state, { success: false });
      default:
        return Object.assign({}, state, { success: false });
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="gnup">
      <form method="post" className="form" onSubmit={signup}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
          ></input>
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" placeholder="Name"></input>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" placeholder="password"></input>
        </label>
        <br />
        <label>
          Contact:
          <input type="text" name="contact" placeholder=""></input>
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {dispatch}
        {initialState.sucsess ? <p>success signup</p> : <p></p>}
      </div>
    </div>
  );
};

export default Signup;
