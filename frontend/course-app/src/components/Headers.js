import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";

function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="primary" dark expand="md" style={{ padding: "10px 20px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
            <NavbarBrand href="/" style={{ fontWeight: 700, fontSize: "1.8rem" }}>EduTrack Pro</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/" end style={{ fontSize: "1.1rem", marginRight: 15 }}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/add-course" style={{ fontSize: "1.1rem", marginRight: 15 }}>Add Course</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/view-courses" style={{ fontSize: "1.1rem", marginRight: 15 }}>View Courses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/about-me" style={{ fontSize: "1.1rem", marginRight: 15 }}>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/reach-me" style={{ fontSize: "1.1rem" }}>Reach Me</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Headers;

// In React JS a component in nothing but a simple JS function which return the HTML code.
