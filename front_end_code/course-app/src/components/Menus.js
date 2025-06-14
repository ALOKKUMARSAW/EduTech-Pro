import React from "react";
import { ListGroup } from "reactstrap";
import { NavLink } from "react-router-dom";

const Menus = () => {
  return (
    <div className="sidebar">
      <ListGroup>
        <NavLink className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} to="/" end>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} to="/add-course">
          Add Course
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} to="/view-courses">
          View Courses
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} to="/about-me">
          About Me
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? "menu-link active" : "menu-link"} to="/reach-me">
          Reach Me
        </NavLink>
      </ListGroup>
    </div>
  );
};

export default Menus;
