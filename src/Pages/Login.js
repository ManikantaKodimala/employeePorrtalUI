import axios from "axios";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

const Login = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [message, setMessage] = useState(false);

  const login = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      email: e.target.elements.username.value,
      password: e.target.elements.password.value,
    });
    var config = {
      method: "post",
      url: `http://${process.env.REACT_APP_BACKEND_IP}:8080/api/employees`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log("loged in dude.");
      })
      .catch(function (error) {
        console.log("user name error", error.response.status);
        if (error.response.status === 404) {
          setShowBanner(true);
          setMessage("Invalid username/password");
        }
      });
  };
  return (
    <div>
      <Alert key={"alert"} variant="danger" show={showBanner}>
        {message}
      </Alert>
      <form onSubmit={login}>
        <label>
          UserName:
          <input type="email" name="username"></input>
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <br></br>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
