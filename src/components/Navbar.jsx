import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

import React from "react";

const Header = styled(AppBar)`
  background-color: #0F52BA;
`;

const Tabs = styled(NavLink)`
  font-size: 18px;
  margin-right: 30px;
  color:inherit;
  text-decoration:none;

`

const Navbar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Home</Tabs>
        <Tabs to="/add">Add Users</Tabs>
        <Tabs to="/all">All Users</Tabs>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
