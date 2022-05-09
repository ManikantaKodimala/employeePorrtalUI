import "./App.css";
import React from "react";
import Topbar from "./Components/Topbar";
import Sidebar from "./Components/Sidebar";
import { useRoutes } from "hookrouter";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { EmployeeForm } from "./Pages/EmployeeForm";
import { EditEmployee } from "./Pages/EditEmployee";

const routes = {
  "/": () => <Home />,
  "/home": () => <Home />,
  "/search": () => <Search />,
  "/signup": () => <Signup />,
  "/login": () => <Login />,
  "/employeeForm": () => <EmployeeForm />,
  "/searchId": () => <EditEmployee />,
};

function App() {
  const match = useRoutes(routes);

  return (
    <div className="App">
      <Topbar></Topbar>
      <div className="Maincontainer">
        <Sidebar></Sidebar>
        {match}
      </div>
    </div>
  );
}

export default App;
