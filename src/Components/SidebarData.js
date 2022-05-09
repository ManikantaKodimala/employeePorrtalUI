import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@mui/icons-material/Add";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import UpdateIcon from "@mui/icons-material/Update";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Search",
    icon: <SearchIcon />,
    link: "/search",
  },
  {
    title: "Create Employee",
    icon: <AddIcon />,
    link: "/employeeForm",
  },
  {
    title: "Remove Employee",
    icon: <PersonRemoveIcon />,
    link: "/",
  },
  {
    title: "Update Employee",
    icon: <UpdateIcon />,
    link: "/searchId",
  },
];
