import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import {logout} from "../actions/authAction"

const ProfileNav = (user) => {
  return (
      
      
   
    <NavDropdown title={`${user.user.displayName}`} className="text-decoration-none text-light ">
      <NavLink to="/cart" className="text-decoration-none text-dark m-3">Cart</NavLink>
      <NavDropdown.Divider />
      <NavLink to="/profile" className="text-decoration-none text-dark m-3">Profile Details</NavLink>
      
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
    </NavDropdown>
  );
      
    
};

export default ProfileNav;
