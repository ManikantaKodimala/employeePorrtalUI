import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="Topbar">
      <img src="/logo.png" alt="this is logo" />
      <button
        value="Signup"
        onClick={() => {
          window.location.pathname = "/signup";
        }}
      >
        Signup
      </button>
      <button
        value="login"
        onClick={() => {
          window.location.pathname = "/login";
        }}
      >
        login
      </button>
    </div>
  );
};

export default Topbar;
