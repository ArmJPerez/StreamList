import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Optional CSS for styling

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h2>StreamList</h2>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={({ isActive }) => (isActive ? "active" : "")}>Movies</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>Cart</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;